/*jslint node: true*/
"use strict";

var fs = require("fs");
var sax = require("sax");
var strict = true; // set to false for html-mode

var header = "/*jslint node:true*/\n" +
        "\"use strict\";\n" +
        "\nvar BigDecimal = require(\"js-big-decimal\");\n" +
        "if (typeof BigDecimal !== \"function\") {\n" +
        "    BigDecimal = BigDecimal.default;\n" +
        "}\n\n";

var result = "";

var indentLevel = 0;

var className;

function cleanupCode(codeLine) {
    var classPrefix = new RegExp(className + ".", "g");

    // add extra space for =, remove spaces if function is invoked
    return codeLine
        .replace(/\s*\(\s*/g, "(") // remove whitespace around (
        .replace(/\s*\)/g, ")") // remove whitespace before )
        .replace(/\=\=/g, "===") // avoid type coersion
        .replace(/!=/g, "!==") // avoid type coersion
        .replace(/,([^\s])/g, ", $1")
        .replace(/([a-zA-Z0-9])\s*=\s*([^=])/, "$1 = $2")
        .replace(/new\sBigDecimal\(((?:\d+)(?:\.\d*)?)\)/g, "new BigDecimal(\"$1\")")
        .replace(/BigDecimal\.valueOf\(((?:\d+)(?:\.\d*)?)[LD]?\)/g, "new BigDecimal(\"$1\")")
        .replace(/BigDecimal\.valueOf\((.*?)\)/g, "new BigDecimal(String($1))")
        .replace(classPrefix, "") // remove the class prefix, all is local
        .replace(/new\sBigDecimal\("0(?:\.0*)?"\)/g, "new BigDecimal(\"0\")")
        .replace(/BigDecimal\.ZERO/g, "new BigDecimal(\"0\")")
        .replace(/BigDecimal\.ONE/g, "new BigDecimal(\"1\")")
        .replace(/\.longValue\(\)/g, ".floor()")
        .replace(/\.setScale\((\d+),\s*BigDecimal\.ROUND_(\w+)\)/g, ".round($1, BigDecimal.RoundingModes.$2)") // replace Java BigDecimal.setScale method with .round equivalent
        .replace(/\.divide\((\w+),\s*(\d+),\s*BigDecimal\.ROUND_(\w+)\)/g, ".divide($1).round($2, BigDecimal.RoundingModes.$3)") // replace Java BigDecimal.divide method with .divide and .round equivalents
        .trim();
}

function incIndent() {
    indentLevel += 1;
}

function decIndent() {
    indentLevel -= 1;
}

function appendLine(line) {
    var arr = [];
    arr.length = indentLevel * 4 + 1;
    result += arr.join(" ");
    result += line;
}

function appendString(str) {
    result += str;
}

function removeAppendedChar() {
    result = result.slice(0, result.length - 1);
}

function appendInputVariableDeclaration(data) {
    appendLine(
        "// " + data.type +
        (data.default === undefined
            ? " - Implicit Default"
            : "") +
        "\n"
    );
    var wrappedInputArg = (data.type === "BigDecimal")
        ? "new BigDecimal(String(args." + data.name + "))"
        : "args." + data.name;
    appendLine(
        "var " + data.name + " = " + (
            data.default === undefined
                ? "(args." + data.name + " !== undefined) ? " + wrappedInputArg + " : " + (
                    data.type === "BigDecimal"
                        ? "new BigDecimal(\"0\")"
                        : "0"
                )
                : "(args." + data.name + " !== undefined) ? " + wrappedInputArg + " : " + cleanupCode(data.default)
        ) + ";\n"
    );
}

function appendVariableDeclaration(data) {
    appendLine("var " + data.name + (
        data.default !== undefined
            ? " = " + cleanupCode(data.default)
            : ""
    ) + "; // " + data.type + "\n");
}

var constants = "";

function appendConstant(data) {
    // transform array (replace {} with [] and remove extra spaces)
    var cleanedValueLines = cleanupCode(
        data.value
            .replace(/\{/g, "[")
            .replace(/\}/g, "]")
            .replace(/(\w)\s*\(/g, "$1(")
    )
        .replace(/\n/g, "") // remove linebreaks
        .replace(/,\s*/g, ",") // remove whitespace after comma
        .replace(/,/g, ",\n") // add newline after each comma
        .split("\n");

    constants += "// const " + data.type + "\n";

    if (cleanedValueLines.length === 1) {
        constants += "var " + data.name + " = " + cleanedValueLines[0].trim() + ";\n";
        return;
    }

    constants += "var " + data.name + " = " + cleanedValueLines[0].trim() + "\n";
    incIndent();
    cleanedValueLines.slice(1, cleanedValueLines.length - 1).map(function (line) {
        constants += line.trim() + "\n";
    });
    constants += cleanedValueLines.slice(-1)[0].trim() + ";\n";
    decIndent();
}

var outputVariables = [];

function rememberOutputVariable(name) {
    outputVariables.push(name);
}

var saxStream = sax.createStream(strict);

saxStream.on("error", function (e) {
    throw new Error("Error while parsing" + e);
});

saxStream.on("opentag", function (node) {
    // opened a tag.  node has "name" and "attributes"
    var attributes = node.attributes;

    switch (node.name) {
    case "INPUT":
        appendInputVariableDeclaration(attributes);
        appendString("\n");
        return;
    case "OUTPUT":
        rememberOutputVariable(attributes.name);
        appendVariableDeclaration(attributes);
        appendString("\n");
        return;
    case "INTERNAL":
        appendVariableDeclaration(attributes);
        appendString("\n");
        return;
    case "CONSTANT":
        appendConstant(attributes);
        appendString("\n");
        return;
    case "IF":
        appendLine("");
        appendString("if (" + cleanupCode(attributes.expr) + ") ");
        return;
    case "THEN":
        appendString("{\n");
        incIndent();
        return;
    case "ELSE":
        removeAppendedChar();
        appendString(" else {\n");
        incIndent();
        return;
    case "METHOD":
        appendLine("function " + attributes.name + "() {\n");
        incIndent();
        return;
    case "EVAL":
        appendLine(cleanupCode(attributes.exec) + ";\n");
        return;
    case "EXECUTE":
        appendLine(attributes.method + "();\n");
        return;
    case "PAP":
        className = attributes.name;
        appendLine("module.exports = function " + attributes.name + "(args) {\n");
        incIndent();
        return;
    case "MAIN":
        appendLine("function main() {\n");
        incIndent();
        return;
    default:
        // appendLine("// ", node.name);
        return;
    }
});

saxStream.on("closetag", function (nodeName) {
    switch (nodeName) {
    case "THEN":
        decIndent();
        appendLine("}\n");
        return;
    case "ELSE":
        decIndent();
        appendLine("}\n");
        return;
    case "MAIN":
        decIndent();
        appendLine("}\n\n");
        return;
    case "PAP":
        appendLine("main();\n\n");
        appendLine("return {\n");
        incIndent();
        outputVariables.forEach(function (n, i) {
            appendLine(n + ": " + n + (
                (i + 1) >= outputVariables.length
                    ? ""
                    : ","
            ) + "\n");
        });
        decIndent();
        appendLine("};\n");
        decIndent();
        appendLine("};\n");
        return;
    case "METHOD":
        decIndent();
        appendLine("}\n\n");
        return;
    }
});

saxStream.on("comment", function (commentText) {
    commentText.split("\n").map(function (commentLine) {
        var comment = ("// " + commentLine.replace(/\t/g, "    "));
        appendLine(comment.trim() + "\n");
    });
});

saxStream.on("end", function () {
    // parser stream is done, and ready to have more stuff written to it.
    process.stdout.write(header + constants + result);
});

if (!process.argv[2]) {
    throw new Error("Error Lohnsteuer.xml argument missing");
}

fs.createReadStream(process.argv[2])
    .pipe(saxStream);
