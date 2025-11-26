/*jslint node:true*/
"use strict";

var BigDecimal = require("js-big-decimal");
if (typeof BigDecimal !== "function") {
    BigDecimal = BigDecimal.default;
}

// const BigDecimal[]
var TAB1 = [new BigDecimal("0"),
new BigDecimal("0.4"),
new BigDecimal("0.384"),
new BigDecimal("0.368"),
new BigDecimal("0.352"),
new BigDecimal("0.336"),
new BigDecimal("0.32"),
new BigDecimal("0.304"),
new BigDecimal("0.288"),
new BigDecimal("0.272"),
new BigDecimal("0.256"),
new BigDecimal("0.24"),
new BigDecimal("0.224"),
new BigDecimal("0.208"),
new BigDecimal("0.192"),
new BigDecimal("0.176"),
new BigDecimal("0.16"),
new BigDecimal("0.152"),
new BigDecimal("0.144"),
new BigDecimal("0.14"),
new BigDecimal("0.136"),
new BigDecimal("0.132"),
new BigDecimal("0.128"),
new BigDecimal("0.124"),
new BigDecimal("0.12"),
new BigDecimal("0.116"),
new BigDecimal("0.112"),
new BigDecimal("0.108"),
new BigDecimal("0.104"),
new BigDecimal("0.1"),
new BigDecimal("0.096"),
new BigDecimal("0.092"),
new BigDecimal("0.088"),
new BigDecimal("0.084"),
new BigDecimal("0.08"),
new BigDecimal("0.076"),
new BigDecimal("0.072"),
new BigDecimal("0.068"),
new BigDecimal("0.064"),
new BigDecimal("0.06"),
new BigDecimal("0.056"),
new BigDecimal("0.052"),
new BigDecimal("0.048"),
new BigDecimal("0.044"),
new BigDecimal("0.04"),
new BigDecimal("0.036"),
new BigDecimal("0.032"),
new BigDecimal("0.028"),
new BigDecimal("0.024"),
new BigDecimal("0.02"),
new BigDecimal("0.016"),
new BigDecimal("0.012"),
new BigDecimal("0.008"),
new BigDecimal("0.004"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB2 = [new BigDecimal("0"),
new BigDecimal("3000"),
new BigDecimal("2880"),
new BigDecimal("2760"),
new BigDecimal("2640"),
new BigDecimal("2520"),
new BigDecimal("2400"),
new BigDecimal("2280"),
new BigDecimal("2160"),
new BigDecimal("2040"),
new BigDecimal("1920"),
new BigDecimal("1800"),
new BigDecimal("1680"),
new BigDecimal("1560"),
new BigDecimal("1440"),
new BigDecimal("1320"),
new BigDecimal("1200"),
new BigDecimal("1140"),
new BigDecimal("1080"),
new BigDecimal("1050"),
new BigDecimal("1020"),
new BigDecimal("990"),
new BigDecimal("960"),
new BigDecimal("930"),
new BigDecimal("900"),
new BigDecimal("870"),
new BigDecimal("840"),
new BigDecimal("810"),
new BigDecimal("780"),
new BigDecimal("750"),
new BigDecimal("720"),
new BigDecimal("690"),
new BigDecimal("660"),
new BigDecimal("630"),
new BigDecimal("600"),
new BigDecimal("570"),
new BigDecimal("540"),
new BigDecimal("510"),
new BigDecimal("480"),
new BigDecimal("450"),
new BigDecimal("420"),
new BigDecimal("390"),
new BigDecimal("360"),
new BigDecimal("330"),
new BigDecimal("300"),
new BigDecimal("270"),
new BigDecimal("240"),
new BigDecimal("210"),
new BigDecimal("180"),
new BigDecimal("150"),
new BigDecimal("120"),
new BigDecimal("90"),
new BigDecimal("60"),
new BigDecimal("30"),
new BigDecimal("0") ];
// const BigDecimal[]
var TAB3 = [new BigDecimal("0"),
new BigDecimal("900"),
new BigDecimal("864"),
new BigDecimal("828"),
new BigDecimal("792"),
new BigDecimal("756"),
new BigDecimal("720"),
new BigDecimal("684"),
new BigDecimal("648"),
new BigDecimal("612"),
new BigDecimal("576"),
new BigDecimal("540"),
new BigDecimal("504"),
new BigDecimal("468"),
new BigDecimal("432"),
new BigDecimal("396"),
new BigDecimal("360"),
new BigDecimal("342"),
new BigDecimal("324"),
new BigDecimal("315"),
new BigDecimal("306"),
new BigDecimal("297"),
new BigDecimal("288"),
new BigDecimal("279"),
new BigDecimal("270"),
new BigDecimal("261"),
new BigDecimal("252"),
new BigDecimal("243"),
new BigDecimal("234"),
new BigDecimal("225"),
new BigDecimal("216"),
new BigDecimal("207"),
new BigDecimal("198"),
new BigDecimal("189"),
new BigDecimal("180"),
new BigDecimal("171"),
new BigDecimal("162"),
new BigDecimal("153"),
new BigDecimal("144"),
new BigDecimal("135"),
new BigDecimal("126"),
new BigDecimal("117"),
new BigDecimal("108"),
new BigDecimal("99"),
new BigDecimal("90"),
new BigDecimal("81"),
new BigDecimal("72"),
new BigDecimal("63"),
new BigDecimal("54"),
new BigDecimal("45"),
new BigDecimal("36"),
new BigDecimal("27"),
new BigDecimal("18"),
new BigDecimal("9"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB4 = [new BigDecimal("0"),
new BigDecimal("0.4"),
new BigDecimal("0.384"),
new BigDecimal("0.368"),
new BigDecimal("0.352"),
new BigDecimal("0.336"),
new BigDecimal("0.32"),
new BigDecimal("0.304"),
new BigDecimal("0.288"),
new BigDecimal("0.272"),
new BigDecimal("0.256"),
new BigDecimal("0.24"),
new BigDecimal("0.224"),
new BigDecimal("0.208"),
new BigDecimal("0.192"),
new BigDecimal("0.176"),
new BigDecimal("0.16"),
new BigDecimal("0.152"),
new BigDecimal("0.144"),
new BigDecimal("0.14"),
new BigDecimal("0.136"),
new BigDecimal("0.132"),
new BigDecimal("0.128"),
new BigDecimal("0.124"),
new BigDecimal("0.12"),
new BigDecimal("0.116"),
new BigDecimal("0.112"),
new BigDecimal("0.108"),
new BigDecimal("0.104"),
new BigDecimal("0.1"),
new BigDecimal("0.096"),
new BigDecimal("0.092"),
new BigDecimal("0.088"),
new BigDecimal("0.084"),
new BigDecimal("0.08"),
new BigDecimal("0.076"),
new BigDecimal("0.072"),
new BigDecimal("0.068"),
new BigDecimal("0.064"),
new BigDecimal("0.06"),
new BigDecimal("0.056"),
new BigDecimal("0.052"),
new BigDecimal("0.048"),
new BigDecimal("0.044"),
new BigDecimal("0.04"),
new BigDecimal("0.036"),
new BigDecimal("0.032"),
new BigDecimal("0.028"),
new BigDecimal("0.024"),
new BigDecimal("0.02"),
new BigDecimal("0.016"),
new BigDecimal("0.012"),
new BigDecimal("0.008"),
new BigDecimal("0.004"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB5 = [new BigDecimal("0"),
new BigDecimal("1900"),
new BigDecimal("1824"),
new BigDecimal("1748"),
new BigDecimal("1672"),
new BigDecimal("1596"),
new BigDecimal("1520"),
new BigDecimal("1444"),
new BigDecimal("1368"),
new BigDecimal("1292"),
new BigDecimal("1216"),
new BigDecimal("1140"),
new BigDecimal("1064"),
new BigDecimal("988"),
new BigDecimal("912"),
new BigDecimal("836"),
new BigDecimal("760"),
new BigDecimal("722"),
new BigDecimal("684"),
new BigDecimal("665"),
new BigDecimal("646"),
new BigDecimal("627"),
new BigDecimal("608"),
new BigDecimal("589"),
new BigDecimal("570"),
new BigDecimal("551"),
new BigDecimal("532"),
new BigDecimal("513"),
new BigDecimal("494"),
new BigDecimal("475"),
new BigDecimal("456"),
new BigDecimal("437"),
new BigDecimal("418"),
new BigDecimal("399"),
new BigDecimal("380"),
new BigDecimal("361"),
new BigDecimal("342"),
new BigDecimal("323"),
new BigDecimal("304"),
new BigDecimal("285"),
new BigDecimal("266"),
new BigDecimal("247"),
new BigDecimal("228"),
new BigDecimal("209"),
new BigDecimal("190"),
new BigDecimal("171"),
new BigDecimal("152"),
new BigDecimal("133"),
new BigDecimal("114"),
new BigDecimal("95"),
new BigDecimal("76"),
new BigDecimal("57"),
new BigDecimal("38"),
new BigDecimal("19"),
new BigDecimal("0")];
// const BigDecimal
var ZAHL1 = new BigDecimal("1");
// const BigDecimal
var ZAHL2 = new BigDecimal("2");
// const BigDecimal
var ZAHL5 = new BigDecimal("5");
// const BigDecimal
var ZAHL7 = new BigDecimal("7");
// const BigDecimal
var ZAHL12 = new BigDecimal("12");
// const BigDecimal
var ZAHL100 = new BigDecimal("100");
// const BigDecimal
var ZAHL360 = new BigDecimal("360");
// const BigDecimal
var ZAHL500 = new BigDecimal("500");
// const BigDecimal
var ZAHL700 = new BigDecimal("700");
// const BigDecimal
var ZAHL1000 = new BigDecimal("1000");
// const BigDecimal
var ZAHL10000 = new BigDecimal("10000");
module.exports = function Lohnsteuer2026(args) {
    //  Stand: 2025-10-23 12:40
    //  ITZBund Berlin
    //   EINGABEPARAMETER
    //  1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV)
    // int
    var af = (args.af !== undefined) ? args.af : 1;

    //  Auf die Vollendung des 64. Lebensjahres folgende
    //                  Kalenderjahr (erforderlich, wenn ALTER1=1)
    // int
    var AJAHR = (args.AJAHR !== undefined) ? args.AJAHR : 0;

    //  1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
    //                  der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
    // int
    var ALTER1 = (args.ALTER1 !== undefined) ? args.ALTER1 : 0;

    //  Merker für die Vorsorgepauschale
    //                  0 = der Arbeitnehmer ist in der Arbeitslosenversicherung pflichtversichert; es gilt die allgemeine Beitragsbemessungsgrenze
    //                  1 = wenn nicht 0
    // int
    var ALV = (args.ALV !== undefined) ? args.ALV : 0;

    //  eingetragener Faktor mit drei Nachkommastellen
    // double
    var f = (args.f !== undefined) ? args.f : 1.0;

    //  Jahresfreibetrag für die Ermittlung der Lohnsteuer für die sonstigen Bezüge
    //                  sowie für Vermögensbeteiligungen nach § 19a Absatz 1 und 4 EStG nach Maßgabe der
    //                  elektronischen Lohnsteuerabzugsmerkmale nach § 39e EStG oder der Eintragung
    //                  auf der Bescheinigung für den Lohnsteuerabzug 2026 in Cent (ggf. 0)
    // BigDecimal
    var JFREIB = (args.JFREIB !== undefined) ? new BigDecimal(String(args.JFREIB)) : new BigDecimal("0");

    //  Jahreshinzurechnungsbetrag für die Ermittlung der Lohnsteuer für die sonstigen Bezüge
    //                  sowie für Vermögensbeteiligungen nach § 19a Absatz 1 und 4 EStG nach Maßgabe der
    //                  elektronischen Lohnsteuerabzugsmerkmale nach § 39e EStG oder der Eintragung auf der
    //                  Bescheinigung für den Lohnsteuerabzug 2026 in Cent (ggf. 0)
    // BigDecimal
    var JHINZU = (args.JHINZU !== undefined) ? new BigDecimal(String(args.JHINZU)) : new BigDecimal("0");

    //  Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge (d.h. auch ohne
    //                  die zu besteuernden Vorteile bei Vermögensbeteiligungen,
    //                  § 19a Absatz 4 EStG) in Cent.
    //                  Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingaben zu sonstigen
    //                  Bezügen (Feld SONSTB).
    //                  Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden,
    //                  so sind sie dem voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Gleiches gilt für zu
    //                  besteuernde Vorteile bei Vermögensbeteiligungen (§ 19a Absatz 4 EStG).
    // BigDecimal
    var JRE4 = (args.JRE4 !== undefined) ? new BigDecimal(String(args.JRE4)) : new BigDecimal("0");

    //  In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG und zu besteuernde
    //                  Vorteile bei Vermögensbeteiligungen (§ 19a Absatz 4 EStG) in Cent
    // BigDecimal
    var JRE4ENT = (args.JRE4ENT !== undefined) ? new BigDecimal(String(args.JRE4ENT)) : new BigDecimal("0");

    //  In JRE4 enthaltene Versorgungsbezüge in Cent (ggf. 0)
    // BigDecimal
    var JVBEZ = (args.JVBEZ !== undefined) ? new BigDecimal(String(args.JVBEZ)) : new BigDecimal("0");

    // Merker für die Vorsorgepauschale
    //                 0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung oder einer
    //                 berufsständischen Versorgungseinrichtung pflichtversichert oder bei Befreiung von der
    //                 Versicherungspflicht freiwillig versichert; es gilt die allgemeine Beitragsbemessungsgrenze
    //
    //                 1 = wenn nicht 0
    //
    // int
    var KRV = (args.KRV !== undefined) ? args.KRV : 0;

    //  Kassenindividueller Zusatzbeitragssatz bei einem gesetzlich krankenversicherten Arbeitnehmer
    //              in Prozent (bspw. 2,50 für 2,50 %) mit 2 Dezimalstellen.
    //              Es ist der volle Zusatzbeitragssatz anzugeben. Die Aufteilung in Arbeitnehmer- und Arbeitgeber-
    //              anteil erfolgt im Programmablauf.
    // BigDecimal
    var KVZ = (args.KVZ !== undefined) ? new BigDecimal(String(args.KVZ)) : new BigDecimal("0");

    //  Lohnzahlungszeitraum:
    //                  1 = Jahr
    //                  2 = Monat
    //                  3 = Woche
    //                  4 = Tag
    // int
    var LZZ = (args.LZZ !== undefined) ? args.LZZ : 1;

    //  Der als elektronisches Lohnsteuerabzugsmerkmal für den Arbeitgeber nach § 39e EStG festgestellte
    //                  oder in der Bescheinigung für den Lohnsteuerabzug 2026 eingetragene Freibetrag für den
    //                  Lohnzahlungszeitraum in Cent
    // BigDecimal
    var LZZFREIB = (args.LZZFREIB !== undefined) ? new BigDecimal(String(args.LZZFREIB)) : new BigDecimal("0");

    //  Der als elektronisches Lohnsteuerabzugsmerkmal für den Arbeitgeber nach § 39e EStG festgestellte
    //                  oder in der Bescheinigung für den Lohnsteuerabzug 2026 eingetragene Hinzurechnungsbetrag für den
    //                  Lohnzahlungszeitraum in Cent
    // BigDecimal
    var LZZHINZU = (args.LZZHINZU !== undefined) ? new BigDecimal(String(args.LZZHINZU)) : new BigDecimal("0");

    //  Nicht zu besteuernde Vorteile bei Vermögensbeteiligungen
    //                  (§ 19a Absatz 1 Satz 4 EStG) in Cent
    // BigDecimal
    var MBV = (args.MBV !== undefined) ? new BigDecimal(String(args.MBV)) : new BigDecimal("0");

    //  Dem Arbeitgeber mitgeteilte Beiträge des Arbeitnehmers für eine private
    //                  Basiskranken- bzw. Pflege-Pflichtversicherung im Sinne des
    //                  § 10 Absatz 1 Nummer 3 EStG in Cent; der Wert ist unabhängig vom Lohnzahlungszeitraum
    //                  immer als Monatsbetrag anzugeben
    // BigDecimal
    var PKPV = (args.PKPV !== undefined) ? new BigDecimal(String(args.PKPV)) : new BigDecimal("0");

    //  Arbeitgeberzuschuss für eine private Basiskranken- bzw. Pflege-Pflichtversicherung im
    //                  Sinne des § 10 Absatz 1 Nummer 3 EStG in Cent; der Wert ist unabhängig vom
    //                  Lohnzahlungszeitraum immer als Monatsbetrag anzugeben
    // BigDecimal
    var PKPVAGZ = (args.PKPVAGZ !== undefined) ? new BigDecimal(String(args.PKPVAGZ)) : new BigDecimal("0");

    //  Krankenversicherung:
    //                  0 = gesetzlich krankenversicherte Arbeitnehmer
    //                  1 = ausschließlich privat krankenversicherte Arbeitnehmer
    // int
    var PKV = (args.PKV !== undefined) ? args.PKV : 0;

    //  Zahl der beim Arbeitnehmer zu berücksichtigenden Beitragsabschläge in der sozialen Pflegeversicherung
    //                  bei mehr als einem Kind
    //                  0 = kein Abschlag
    //                  1 = Beitragsabschlag für das 2. Kind
    //                  2 = Beitragsabschläge für das 2. und 3. Kind
    //                  3 = Beitragsabschläge für 2. bis 4. Kinder
    //                  4 = Beitragsabschläge für 2. bis 5. oder mehr Kinder
    // BigDecimal
    var PVA = (args.PVA !== undefined) ? new BigDecimal(String(args.PVA)) : new BigDecimal("0");

    //  1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
    //                      zu berücksichtigen wären
    // int
    var PVS = (args.PVS !== undefined) ? args.PVS : 0;

    //  1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
    //                      zu zahlen hat
    // int
    var PVZ = (args.PVZ !== undefined) ? args.PVZ : 0;

    //  Religionsgemeinschaft des Arbeitnehmers lt. elektronischer Lohnsteuerabzugsmerkmale oder der
    //                  Bescheinigung für den Lohnsteuerabzug 2026 (bei keiner Religionszugehörigkeit = 0)
    // int - Implicit Default
    var R = (args.R !== undefined) ? args.R : 0;

    //  Steuerpflichtiger Arbeitslohn für den Lohnzahlungszeitraum vor Berücksichtigung des
    //                  Versorgungsfreibetrags und des Zuschlags zum Versorgungsfreibetrag, des Altersentlastungsbetrags
    //                  und des als elektronisches Lohnsteuerabzugsmerkmal festgestellten oder in der Bescheinigung für
    //                  den Lohnsteuerabzug 2026 für den Lohnzahlungszeitraum eingetragenen Freibetrags bzw.
    //                  Hinzurechnungsbetrags in Cent
    // BigDecimal
    var RE4 = (args.RE4 !== undefined) ? new BigDecimal(String(args.RE4)) : new BigDecimal("0");

    //  Sonstige Bezüge einschließlich zu besteuernde Vorteile bei Vermögensbeteiligungen und Sterbegeld bei Versorgungsbezügen sowie
    //                  Kapitalauszahlungen/Abfindungen, in Cent (ggf. 0)
    // BigDecimal
    var SONSTB = (args.SONSTB !== undefined) ? new BigDecimal(String(args.SONSTB)) : new BigDecimal("0");

    //  In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG sowie zu besteuernde Vorteile bei Vermögensbeteiligungen (§ 19a
    //                  Absatz 4 EStG), in Cent
    // BigDecimal
    var SONSTENT = (args.SONSTENT !== undefined) ? new BigDecimal(String(args.SONSTENT)) : new BigDecimal("0");

    //  Sterbegeld bei Versorgungsbezügen sowie Kapitalauszahlungen/Abfindungen
    //                   (in SONSTB enthalten), in Cent
    // BigDecimal
    var STERBE = (args.STERBE !== undefined) ? new BigDecimal(String(args.STERBE)) : new BigDecimal("0");

    //  Steuerklasse:
    //                  1 = I
    //                  2 = II
    //                  3 = III
    //                  4 = IV
    //                  5 = V
    //                  6 = VI
    // int
    var STKL = (args.STKL !== undefined) ? args.STKL : 1;

    //  In RE4 enthaltene Versorgungsbezüge in Cent (ggf. 0) ggf. unter Berücksichtigung
    //                  einer geänderten Bemessungsgrundlage nach  § 19 Absatz 2 Satz 10 und 11 EStG
    // BigDecimal
    var VBEZ = (args.VBEZ !== undefined) ? new BigDecimal(String(args.VBEZ)) : new BigDecimal("0");

    //  Versorgungsbezug im Januar 2005 bzw. für den ersten vollen Monat, wenn der
    //                  Versorgungsbezug erstmalig nach Januar 2005 gewährt  wurde, in Cent
    // BigDecimal
    var VBEZM = (args.VBEZM !== undefined) ? new BigDecimal(String(args.VBEZM)) : new BigDecimal("0");

    //  Voraussichtliche Sonderzahlungen von Versorgungsbezügen im
    //                  Kalenderjahr des Versorgungsbeginns bei Versorgungsempfängern
    //                  ohne Sterbegeld, Kapitalauszahlungen/Abfindungen in Cent
    //
    // BigDecimal
    var VBEZS = (args.VBEZS !== undefined) ? new BigDecimal(String(args.VBEZS)) : new BigDecimal("0");

    //  In SONSTB enthaltene Versorgungsbezüge einschließlich Sterbegeld in Cent (ggf. 0)
    // BigDecimal
    var VBS = (args.VBS !== undefined) ? new BigDecimal(String(args.VBS)) : new BigDecimal("0");

    //  Jahr, in dem der Versorgungsbezug erstmalig gewährt wurde;
    //                  werden mehrere Versorgungsbezüge gezahlt, wird aus
    //                  Vereinfachungsgründen für die Berechnung das Jahr des ältesten
    //                  erstmaligen Bezugs herangezogen; auf die Möglichkeit der
    //                  getrennten Abrechnung verschiedenartiger Bezüge (§ 39e Absatz 5a
    //                  EStG) wird im Übrigen verwiesen
    // int - Implicit Default
    var VJAHR = (args.VJAHR !== undefined) ? args.VJAHR : 0;

    //  Zahl der Freibeträge für Kinder (eine Dezimalstelle, nur bei Steuerklassen
    //                  I, II, III und IV)
    // BigDecimal
    var ZKF = (args.ZKF !== undefined) ? new BigDecimal(String(args.ZKF)) : new BigDecimal("0");

    //  Zahl der Monate, für die Versorgungsbezüge gezahlt werden [nur
    //                  erforderlich bei Jahresberechnung (LZZ = 1)]
    // int
    var ZMVB = (args.ZMVB !== undefined) ? args.ZMVB : 0;

    //   AUSGABEPARAMETER
    //  Bemessungsgrundlage für die Kirchenlohnsteuer in Cent
    var BK = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage der sonstigen Bezüge  für die Kirchenlohnsteuer in Cent.
    //                  Hinweis: Negativbeträge, die aus nicht zu besteuernden Vorteilen bei
    //                  Vermögensbeteiligungen (§ 19a Absatz 1 Satz 4 EStG) resultieren, mindern BK
    //                  (maximal bis 0). Der Sonderausgabenabzug für tatsächlich erbrachte Vorsorgeaufwendungen
    //                  im Rahmen der Veranlagung zur Einkommensteuer bleibt unberührt.
    var BKS = new BigDecimal("0"); // BigDecimal

    //  Für den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cent
    var LSTLZZ = new BigDecimal("0"); // BigDecimal

    //  Für den Lohnzahlungszeitraum einzubehaltender Solidaritätszuschlag
    //                  in Cent
    var SOLZLZZ = new BigDecimal("0"); // BigDecimal

    //  Solidaritätszuschlag für sonstige Bezüge in Cent.
    //                  Hinweis: Negativbeträge, die aus nicht zu besteuernden Vorteilen bei
    //                  Vermögensbeteiligungen (§ 19a Absatz 1 Satz 4 EStG) resultieren,
    //                  mindern SOLZLZZ (maximal bis 0). Der Sonderausgabenabzug für
    //                  tatsächlich erbrachte Vorsorgeaufwendungen im Rahmen der
    //                  Veranlagung zur Einkommensteuer bleibt unberührt.
    var SOLZS = new BigDecimal("0"); // BigDecimal

    //  Lohnsteuer für sonstige Bezüge in Cent
    //                  Hinweis: Negativbeträge, die aus nicht zu besteuernden Vorteilen bei Vermögensbeteiligungen
    //                  (§ 19a Absatz 1 Satz 4 EStG) resultieren, mindern LSTLZZ (maximal bis 0). Der
    //                  Sonderausgabenabzug für tatsächlich erbrachte Vorsorgeaufwendungen im Rahmen der
    //                  Veranlagung zur Einkommensteuer bleibt unberührt.
    var STS = new BigDecimal("0"); // BigDecimal

    //   AUSGABEPARAMETER DBA
    //  Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns, in Cent
    var VFRB = new BigDecimal("0"); // BigDecimal

    //  Verbrauchter Freibetrag bei Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent
    var VFRBS1 = new BigDecimal("0"); // BigDecimal

    //  Verbrauchter Freibetrag bei Berechnung der sonstigen Bezüge, in Cent
    var VFRBS2 = new BigDecimal("0"); // BigDecimal

    //  Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über
    //                 dem Grundfreibetrag bei der Berechnung des laufenden Arbeitslohns, in Cent
    var WVFRB = new BigDecimal("0"); // BigDecimal

    //  Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag
    //                 bei der Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent
    var WVFRBO = new BigDecimal("0"); // BigDecimal

    //  Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE
    //                 über dem Grundfreibetrag bei der Berechnung der sonstigen Bezüge, in Cent
    var WVFRBM = new BigDecimal("0"); // BigDecimal

    //   INTERNE FELDER
    //  Altersentlastungsbetrag in Euro, Cent (2 Dezimalstellen)
    var ALTE = new BigDecimal("0"); // BigDecimal

    //  Arbeitnehmer-Pauschbetrag/Werbungskosten-Pauschbetrag in Euro
    var ANP = new BigDecimal("0"); // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //                      auf ganze Cent abgerundet
    var ANTEIL1 = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Arbeitslosenversicherung (4 Dezimalstellen)
    var AVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Beitragsbemessungsgrenze in der gesetzlichen Krankenversicherung
    //                      und der sozialen Pflegeversicherung in Euro
    var BBGKVPV = new BigDecimal("0"); // BigDecimal

    //  Allgemeine Beitragsbemessungsgrenze in der allgemeinen Rentenversicherung und Arbeitslosenversicherung in Euro
    var BBGRVALV = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage für Altersentlastungsbetrag in Euro, Cent
    //                      (2 Dezimalstellen)
    var BMG = new BigDecimal("0"); // BigDecimal

    //  Differenz zwischen ST1 und ST2 in Euro
    var DIFF = new BigDecimal("0"); // BigDecimal

    //  Entlastungsbetrag für Alleinerziehende in Euro
    var EFA = new BigDecimal("0"); // BigDecimal

    //  Versorgungsfreibetrag in Euro, Cent (2 Dezimalstellen)
    var FVB = new BigDecimal("0"); // BigDecimal

    //  Versorgungsfreibetrag in Euro, Cent (2 Dezimalstellen) für die Berechnung
    //                      der Lohnsteuer beim sonstigen Bezug
    var FVBSO = new BigDecimal("0"); // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in Euro
    var FVBZ = new BigDecimal("0"); // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in Euro für die Berechnung
    //                      der Lohnsteuer beim sonstigen Bezug
    var FVBZSO = new BigDecimal("0"); // BigDecimal

    //  Grundfreibetrag in Euro
    var GFB = new BigDecimal("0"); // BigDecimal

    //  Maximaler Altersentlastungsbetrag in Euro
    var HBALTE = new BigDecimal("0"); // BigDecimal

    //  Maßgeblicher maximaler Versorgungsfreibetrag in Euro, Cent (2 Dezimalstellen)
    var HFVB = new BigDecimal("0"); // BigDecimal

    //  Maßgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in Euro, Cent
    //                      (2 Dezimalstellen)
    var HFVBZ = new BigDecimal("0"); // BigDecimal

    //  Maßgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in Euro, Cent (2 Dezimalstellen)
    //                      für die Berechnung der Lohnsteuer für den sonstigen Bezug
    var HFVBZSO = new BigDecimal("0"); // BigDecimal

    //  Zwischenfeld zu X für die Berechnung der Steuer nach § 39b
    //                      Absatz 2 Satz 7 EStG in Euro
    var HOCH = new BigDecimal("0"); // BigDecimal

    //  Nummer der Tabellenwerte für Versorgungsparameter
    var J = 0; // int

    //  Jahressteuer nach § 51a EStG, aus der Solidaritätszuschlag und
    //                      Bemessungsgrundlage für die Kirchenlohnsteuer ermittelt werden in Euro
    var JBMG = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechneter LZZFREIB in Euro, Cent
    //                      (2 Dezimalstellen)
    var JLFREIB = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnete LZZHINZU in Euro, Cent
    //                      (2 Dezimalstellen)
    var JLHINZU = new BigDecimal("0"); // BigDecimal

    //  Jahreswert, dessen Anteil für einen Lohnzahlungszeitraum in
    //                      UPANTEIL errechnet werden soll in Cent
    var JW = new BigDecimal("0"); // BigDecimal

    //  Nummer der Tabellenwerte für Parameter bei Altersentlastungsbetrag
    var K = 0; // int

    //  Summe der Freibeträge für Kinder in Euro
    var KFB = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Krankenversicherung
    //                      (5 Dezimalstellen)
    var KVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Kennzahl für die Einkommensteuer-Tabellenart:
    //                      1 = Grundtarif
    //                      2 = Splittingverfahren
    var KZTAB = 0; // int

    //  Jahreslohnsteuer in Euro
    var LSTJAHR = new BigDecimal("0"); // BigDecimal

    //  Zwischenfelder der Jahreslohnsteuer in Cent
    var LSTOSO = new BigDecimal("0"); // BigDecimal

    var LSTSO = new BigDecimal("0"); // BigDecimal

    //  Mindeststeuer für die Steuerklassen V und VI in Euro
    var MIST = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreswert hochgerechneter Arbeitgeberzuschuss für eine private Basiskranken-
    //                      bzw. Pflege-Pflichtversicherung im Sinne des § 10 Absatz 1 Nummer 3 EStG in Euro, Cent (2 Dezimalstellen)
    var PKPVAGZJ = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Pflegeversicherung (6 Dezimalstellen)
    var PVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers in der allgemeinen gesetzlichen Rentenversicherung (4 Dezimalstellen)
    var RVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Rechenwert in Gleitkommadarstellung
    var RW = new BigDecimal("0"); // BigDecimal

    //  Sonderausgaben-Pauschbetrag in Euro
    var SAP = new BigDecimal("0"); // BigDecimal

    //  Freigrenze für den Solidaritätszuschlag in Euro
    var SOLZFREI = new BigDecimal("0"); // BigDecimal

    //  Solidaritätszuschlag auf die Jahreslohnsteuer in Euro, Cent (2 Dezimalstellen)
    var SOLZJ = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert für den Solidaritätszuschlag auf die Jahreslohnsteuer
    //                      in Euro, Cent (2 Dezimalstellen)
    var SOLZMIN = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage des Solidaritätszuschlags zur Prüfung der Freigrenze beim Solidaritätszuschlag für sonstige Bezüge in Euro
    var SOLZSBMG = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen für die Ermittlung der
    //                      Bemessungsgrundlage des Solidaritätszuschlags zur Prüfung der
    //                      Freigrenze beim Solidaritätszuschlag für sonstige Bezüge in Euro,
    //                      Cent (2 Dezimalstellen)
    var SOLZSZVE = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer in Euro
    var ST = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer auf das 1,25-fache ZX in Euro
    var ST1 = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer auf das 0,75-fache ZX in Euro
    var ST2 = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage für den Versorgungsfreibetrag in Cent
    var VBEZB = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
    //                      den sonstigen Bezug
    var VBEZBSO = new BigDecimal("0"); // BigDecimal

    //  Zwischenfeld zu X für die Berechnung der Steuer nach § 39b
    //                      Absatz 2 Satz 7 EStG in Euro
    var VERGL = new BigDecimal("0"); // BigDecimal

    //  Auf den Höchstbetrag begrenzte Beiträge zur Arbeitslosenversicherung
    //                      einschließlich Kranken- und Pflegeversicherung in Euro, Cent (2 Dezimalstellen)
    var VSPHB = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale mit Teilbeträgen für die Rentenversicherung
    //                      sowie die gesetzliche Kranken- und soziale Pflegeversicherung nach
    //                      fiktiven Beträgen oder ggf. für die private Basiskrankenversicherung
    //                      und private Pflege-Pflichtversicherung in Euro, Cent (2 Dezimalstellen)
    var VSP = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale mit Teilbeträgen für die Rentenversicherung sowie auf den Höchstbetrag
    //                      begrenzten Teilbeträgen für die Arbeitslosen-, Kranken- und Pflegeversicherung in
    //                      Euro, Cent (2 Dezimalstellen)
    var VSPN = new BigDecimal("0"); // BigDecimal

    //  Teilbetrag für die Arbeitslosenversicherung bei der Berechnung der
    //                      Vorsorgepauschale in Euro, Cent (2 Dezimalstellen)
    var VSPALV = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und soziale Pflegeversicherung
    //                      nach fiktiven Beträgen oder ggf. für die private Basiskrankenversicherung und private
    //                      Pflege-Pflichtversicherung in Euro, Cent (2 Dezimalstellen)
    var VSPKVPV = new BigDecimal("0"); // BigDecimal

    //  Teilbetrag für die Rentenversicherung bei der Berechnung der Vorsorgepauschale
    //                      in Euro, Cent (2 Dezimalstellen)
    var VSPR = new BigDecimal("0"); // BigDecimal

    //  Erster Grenzwert in Steuerklasse V/VI in Euro
    var W1STKL5 = new BigDecimal("0"); // BigDecimal

    //  Zweiter Grenzwert in Steuerklasse V/VI in Euro
    var W2STKL5 = new BigDecimal("0"); // BigDecimal

    //  Dritter Grenzwert in Steuerklasse V/VI in Euro
    var W3STKL5 = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen gem. § 32a Absatz 1 und 5 EStG in Euro, Cent
    //                      (2 Dezimalstellen)
    var X = new BigDecimal("0"); // BigDecimal

    //  Gem. § 32a Absatz 1 EStG (6 Dezimalstellen)
    var Y = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in Euro, Cent (2 Dezimalstellen)
    //                      nach Abzug der Freibeträge nach § 39 b Absatz 2 Satz 3 und 4 EStG
    var ZRE4 = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in Euro, Cent (2 Dezimalstellen)
    var ZRE4J = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4, ggf. nach Abzug der
    //                      Entschädigungen i.S.d. § 24 Nummer 1 EStG in Euro, Cent
    //                      (2 Dezimalstellen)
    var ZRE4VP = new BigDecimal("0"); // BigDecimal

    //  Zwischenfeld zu ZRE4VP für die Begrenzung auf die jeweilige
    //                      Beitragsbemessungsgrenze in Euro, Cent (2 Dezimalstellen)"
    var ZRE4VPR = new BigDecimal("0"); // BigDecimal

    //  Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in Euro, Cent
    //                      (2 Dezimalstellen)
    var ZTABFB = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes VBEZ abzüglich FVB in
    //                      Euro, Cent (2 Dezimalstellen)
    var ZVBEZ = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes VBEZ in Euro, Cent (2 Dezimalstellen)
    var ZVBEZJ = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen in Euro, Cent (2 Dezimalstellen)
    var ZVE = new BigDecimal("0"); // BigDecimal

    //  Zwischenfeld zu X für die Berechnung der Steuer nach § 39b
    //                      Absatz 2 Satz 7 EStG in Euro
    var ZX = new BigDecimal("0"); // BigDecimal

    //  Zwischenfeld zu X für die Berechnung der Steuer nach § 39b
    //                      Absatz 2 Satz 7 EStG in Euro
    var ZZX = new BigDecimal("0"); // BigDecimal

    //  Tabelle für die Prozentsätze des Versorgungsfreibetrags

    //  Tabelle für die Höchstbeträge des Versorgungsfreibetrags

    //  Tabelle für die Zuschläge zum Versorgungsfreibetrag

    //  Tabelle für die Höchstbeträge des Altersentlastungsbetrags

    //  Tabelle fuer die Hächstbeträge des Altersentlastungsbetrags

    //  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte











    //  PROGRAMMABLAUFPLAN 2026
    //        Steueruung, PAP Seite 13
    function main() {
        MPARA();
        MRE4JL();
        VBEZBSO = new BigDecimal("0");
        MRE4();
        MRE4ABZ();
        MBERECH();
        MSONST();
    }

    //  Zuweisung von Werten für bestimmte Steuer- und Sozialversicherungsparameter  PAP Seite 14
    function MPARA() {
        BBGRVALV = new BigDecimal("101400");
        AVSATZAN = new BigDecimal("0.013");
        RVSATZAN = new BigDecimal("0.093");
        BBGKVPV = new BigDecimal("69750");
        KVSATZAN = (KVZ.divide(ZAHL2).divide(ZAHL100)).add(new BigDecimal("0.07"));
        if (PVS === 1) {
            PVSATZAN = new BigDecimal("0.023");
        } else {
            PVSATZAN = new BigDecimal("0.018");
        }
        if (PVZ === 1) {
            PVSATZAN = PVSATZAN.add(new BigDecimal("0.006"));
        } else {
            PVSATZAN = PVSATZAN.subtract(PVA.multiply(new BigDecimal("0.0025")));
        }
        W1STKL5 = new BigDecimal("14071");
        W2STKL5 = new BigDecimal("34939");
        W3STKL5 = new BigDecimal("222260");
        GFB = new BigDecimal("12348");
        SOLZFREI = new BigDecimal("20350");
    }

    //  Ermittlung des Jahresarbeitslohns nach § 39 b Absatz 2 Satz 2 EStG, PAP Seite 15
    function MRE4JL() {
        if (LZZ === 1) {
            ZRE4J = RE4.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            ZVBEZJ = VBEZ.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            JLFREIB = LZZFREIB.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            JLHINZU = LZZHINZU.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        } else {
            if (LZZ === 2) {
                ZRE4J = (RE4.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                ZVBEZJ = (VBEZ.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                JLFREIB = (LZZFREIB.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                JLHINZU = (LZZHINZU.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            } else {
                if (LZZ === 3) {
                    ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                    ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                    JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                    JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                } else {
                    ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                    ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                    JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                    JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                }
            }
        }
        if (af === 0) {
            f = 1;
        }
    }

    //  Freibeträge für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Absatz 2 Satz 3 EStG), PAP Seite 16
    function MRE4() {
        if (ZVBEZJ.compareTo(new BigDecimal("0")) === 0) {
            FVBZ = new BigDecimal("0");
            FVB = new BigDecimal("0");
            FVBZSO = new BigDecimal("0");
            FVBSO = new BigDecimal("0");
        } else {
            if (VJAHR < 2006) {
                J = 1;
            } else {
                if (VJAHR < 2058) {
                    J = VJAHR - 2004;
                } else {
                    J = 54;
                }
            }
            if (LZZ === 1) {
                VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                HFVB = TAB2[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).round(0, BigDecimal.RoundingModes.UP);
                FVBZ = TAB3[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).round(0, BigDecimal.RoundingModes.UP);
            } else {
                VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).round(2, BigDecimal.RoundingModes.DOWN);
                HFVB = TAB2[J];
                FVBZ = TAB3[J];
            }
            FVB = ((VBEZB.multiply(TAB1[J]))).divide(ZAHL100).round(2, BigDecimal.RoundingModes.UP);
            if (FVB.compareTo(HFVB) === 1) {
                FVB = HFVB;
            }
            if (FVB.compareTo(ZVBEZJ) === 1) {
                FVB = ZVBEZJ;
            }
            FVBSO = (FVB.add((VBEZBSO.multiply(TAB1[J])).divide(ZAHL100))).round(2, BigDecimal.RoundingModes.UP);
            if (FVBSO.compareTo(TAB2[J]) === 1) {
                FVBSO = TAB2[J];
            }
            HFVBZSO = (((VBEZB.add(VBEZBSO)).divide(ZAHL100)).subtract(FVBSO)).round(2, BigDecimal.RoundingModes.DOWN);
            FVBZSO = (FVBZ.add((VBEZBSO).divide(ZAHL100))).round(0, BigDecimal.RoundingModes.UP);
            if (FVBZSO.compareTo(HFVBZSO) === 1) {
                FVBZSO = HFVBZSO.round(0, BigDecimal.RoundingModes.UP);
            }
            if (FVBZSO.compareTo(TAB3[J]) === 1) {
                FVBZSO = TAB3[J];
            }
            HFVBZ = ((VBEZB.divide(ZAHL100)).subtract(FVB)).round(2, BigDecimal.RoundingModes.DOWN);
            if (FVBZ.compareTo(HFVBZ) === 1) {
                FVBZ = HFVBZ.round(0, BigDecimal.RoundingModes.UP);
            }
        }
        MRE4ALTE();
    }

    //  Altersentlastungsbetrag (§ 39b Absatz 2 Satz 3 EStG), PAP Seite 17
    function MRE4ALTE() {
        if (ALTER1 === 0) {
            ALTE = new BigDecimal("0");
        } else {
            if (AJAHR < 2006) {
                K = 1;
            } else {
                if (AJAHR < 2058) {
                    K = AJAHR - 2004;
                } else {
                    K = 54;
                }
            }
            BMG = ZRE4J.subtract(ZVBEZJ);
            ALTE = (BMG.multiply(TAB4[K])).round(0, BigDecimal.RoundingModes.UP);
            HBALTE = TAB5[K];
            if (ALTE.compareTo(HBALTE) === 1) {
                ALTE = HBALTE;
            }
        }
    }

    //  Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Absatz 2 Satz 3 und 4 EStG, PAP Seite 20
    function MRE4ABZ() {
        ZRE4 = (ZRE4J.subtract(FVB).subtract(ALTE).subtract(JLFREIB).add(JLHINZU)).round(2, BigDecimal.RoundingModes.DOWN);
        if (ZRE4.compareTo(new BigDecimal("0")) === -1) {
            ZRE4 = new BigDecimal("0");
        }
        ZRE4VP = ZRE4J;
        ZVBEZ = ZVBEZJ.subtract(FVB).round(2, BigDecimal.RoundingModes.DOWN);
        if (ZVBEZ.compareTo(new BigDecimal("0")) === -1) {
            ZVBEZ = new BigDecimal("0");
        }
    }

    //  Berechnung fuer laufende Lohnzahlungszeitraueme Seite 21
    function MBERECH() {
        MZTABFB();
        VFRB = ((ANP.add(FVB.add(FVBZ))).multiply(ZAHL100)).round(0, BigDecimal.RoundingModes.DOWN);
        MLSTJAHR();
        WVFRB = ((ZVE.subtract(GFB)).multiply(ZAHL100)).round(0, BigDecimal.RoundingModes.DOWN);
        if (WVFRB.compareTo(new BigDecimal("0")) === -1) {
            WVFRB = new BigDecimal("0");
        }
        LSTJAHR = (ST.multiply(new BigDecimal(String(f)))).round(0, BigDecimal.RoundingModes.DOWN);
        UPLSTLZZ();
        if (ZKF.compareTo(new BigDecimal("0")) === 1) {
            ZTABFB = ZTABFB.add(KFB);
            MRE4ABZ();
            MLSTJAHR();
            JBMG = (ST.multiply(new BigDecimal(String(f)))).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            JBMG = LSTJAHR;
        }
        MSOLZ();
    }

    //  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 22
    function MZTABFB() {
        ANP = new BigDecimal("0");
        if (ZVBEZ.compareTo(new BigDecimal("0")) >= 0 && ZVBEZ.compareTo(FVBZ) === -1) {
            FVBZ = new BigDecimal(String(ZVBEZ.floor()));
        }
        if (STKL < 6) {
            if (ZVBEZ.compareTo(new BigDecimal("0")) === 1) {
                if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal("102")) === -1) {
                    ANP = (ZVBEZ.subtract(FVBZ)).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANP = new BigDecimal("102");
                }
            }
        } else {
            FVBZ = new BigDecimal("0");
            FVBZSO = new BigDecimal("0");
        }
        if (STKL < 6) {
            if (ZRE4.compareTo(ZVBEZ) === 1) {
                if (ZRE4.subtract(ZVBEZ).compareTo(new BigDecimal("1230")) === -1) {
                    ANP = ANP.add(ZRE4).subtract(ZVBEZ).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANP = ANP.add(new BigDecimal("1230"));
                }
            }
        }
        KZTAB = 1;
        if (STKL === 1) {
            SAP = new BigDecimal("36");
            KFB = (ZKF.multiply(new BigDecimal("9756"))).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            if (STKL === 2) {
                EFA = new BigDecimal("4260");
                SAP = new BigDecimal("36");
                KFB = (ZKF.multiply(new BigDecimal("9756"))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (STKL === 3) {
                    KZTAB = 2;
                    SAP = new BigDecimal("36");
                    KFB = (ZKF.multiply(new BigDecimal("9756"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (STKL === 4) {
                        SAP = new BigDecimal("36");
                        KFB = (ZKF.multiply(new BigDecimal("4878"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        if (STKL === 5) {
                            SAP = new BigDecimal("36");
                            KFB = new BigDecimal("0");
                        } else {
                            KFB = new BigDecimal("0");
                        }
                    }
                }
            }
        }
        ZTABFB = (EFA.add(ANP).add(SAP).add(FVBZ)).round(2, BigDecimal.RoundingModes.DOWN);
    }

    //  Ermittlung Jahreslohnsteuer, PAP Seite 23
    function MLSTJAHR() {
        UPEVP();
        ZVE = ZRE4.subtract(ZTABFB).subtract(VSP);
        UPMLST();
    }

    //  PAP Seite 24
    function UPLSTLZZ() {
        JW = LSTJAHR.multiply(ZAHL100);
        UPANTEIL();
        LSTLZZ = ANTEIL1;
    }

    //  PAP Seite 25
    function UPMLST() {
        if (ZVE.compareTo(ZAHL1) === -1) {
            ZVE = new BigDecimal("0");
            X = new BigDecimal("0");
        } else {
            X = (ZVE.divide(new BigDecimal(String(KZTAB)))).round(0, BigDecimal.RoundingModes.DOWN);
        }
        if (STKL < 5) {
            UPTAB26();
        } else {
            MST5_6();
        }
    }

    //      Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 EStG) PAP Seite 26
    function UPEVP() {
        if (KRV === 1) {
            VSPR = new BigDecimal("0");
        } else {
            if (ZRE4VP.compareTo(BBGRVALV) === 1) {
                ZRE4VPR = BBGRVALV;
            } else {
                ZRE4VPR = ZRE4VP;
            }
            VSPR = (ZRE4VPR.multiply(RVSATZAN)).round(2, BigDecimal.RoundingModes.DOWN);
        }
        MVSPKVPV();
        if (ALV === 1) {
            //  NOP
        } else {
            if (STKL === 6) {
                //  NOP
            } else {
                MVSPHB();
            }
        }
    }

    //  Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 Buchstaben b bis d EStG), PAP Seite 27
    function MVSPKVPV() {
        if (ZRE4VP.compareTo(BBGKVPV) === 1) {
            ZRE4VPR = BBGKVPV;
        } else {
            ZRE4VPR = ZRE4VP;
        }
        if (PKV > 0) {
            if (STKL === 6) {
                VSPKVPV = new BigDecimal("0");
            } else {
                PKPVAGZJ = PKPVAGZ.multiply(ZAHL12).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                VSPKVPV = PKPV.multiply(ZAHL12).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                VSPKVPV = VSPKVPV.subtract(PKPVAGZJ);
                if (VSPKVPV.compareTo(new BigDecimal("0")) === -1) {
                    VSPKVPV = new BigDecimal("0");
                }
            }
        } else {
            VSPKVPV = ZRE4VPR.multiply(KVSATZAN.add(PVSATZAN)).round(2, BigDecimal.RoundingModes.DOWN);
        }
        VSP = VSPKVPV.add(VSPR).round(0, BigDecimal.RoundingModes.UP);
    }

    //  Höchstbetragsberechnung zur Arbeitslosenversicherung (§ 39b Absatz 2 Satz 5 Nummer 3 Buchstabe e EStG), PAP Seite 28
    function MVSPHB() {
        if (ZRE4VP.compareTo(BBGRVALV) === 1) {
            ZRE4VPR = BBGRVALV;
        } else {
            ZRE4VPR = ZRE4VP;
        }
        VSPALV = AVSATZAN.multiply(ZRE4VPR).round(2, BigDecimal.RoundingModes.DOWN);
        VSPHB = VSPALV.add(VSPKVPV).round(2, BigDecimal.RoundingModes.DOWN);
        if (VSPHB.compareTo(new BigDecimal("1900")) === 1) {
            VSPHB = new BigDecimal("1900");
        }
        VSPN = VSPR.add(VSPHB).round(0, BigDecimal.RoundingModes.UP);
        if (VSPN.compareTo(VSP) === 1) {
            VSP = VSPN;
        }
    }

    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Absatz 2 Satz 7 EStG), PAP Seite 29
    function MST5_6() {
        ZZX = X;
        if (ZZX.compareTo(W2STKL5) === 1) {
            ZX = W2STKL5;
            UP5_6();
            if (ZZX.compareTo(W3STKL5) === 1) {
                ST = (ST.add((W3STKL5.subtract(W2STKL5)).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
                ST = (ST.add((ZZX.subtract(W3STKL5)).multiply(new BigDecimal("0.45")))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                ST = (ST.add((ZZX.subtract(W2STKL5)).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
            }
        } else {
            ZX = ZZX;
            UP5_6();
            if (ZZX.compareTo(W1STKL5) === 1) {
                VERGL = ST;
                ZX = W1STKL5;
                UP5_6();
                HOCH = (ST.add((ZZX.subtract(W1STKL5)).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
                if (HOCH.compareTo(VERGL) === -1) {
                    ST = HOCH;
                } else {
                    ST = VERGL;
                }
            }
        }
    }

    //  Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Absatz 2 Satz 7 EStG), PAP Seite 30
    function UP5_6() {
        X = (ZX.multiply(new BigDecimal("1.25"))).round(0, BigDecimal.RoundingModes.DOWN);
        UPTAB26();
        ST1 = ST;
        X = (ZX.multiply(new BigDecimal("0.75"))).round(0, BigDecimal.RoundingModes.DOWN);
        UPTAB26();
        ST2 = ST;
        DIFF = (ST1.subtract(ST2)).multiply(ZAHL2);
        MIST = (ZX.multiply(new BigDecimal("0.14"))).round(0, BigDecimal.RoundingModes.DOWN);
        if (MIST.compareTo(DIFF) === 1) {
            ST = MIST;
        } else {
            ST = DIFF;
        }
    }

    //  Solidaritätszuschlag, PAP Seite 31
    function MSOLZ() {
        SOLZFREI = (SOLZFREI.multiply(new BigDecimal(String(KZTAB))));
        if (JBMG.compareTo(SOLZFREI) === 1) {
            SOLZJ = (JBMG.multiply(new BigDecimal("5.5"))).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal("11.9")).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            if (SOLZMIN.compareTo(SOLZJ) === -1) {
                SOLZJ = SOLZMIN;
            }
            JW = SOLZJ.multiply(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN);
            UPANTEIL();
            SOLZLZZ = ANTEIL1;
        } else {
            SOLZLZZ = new BigDecimal("0");
        }
        if (R > 0) {
            JW = JBMG.multiply(ZAHL100);
            UPANTEIL();
            BK = ANTEIL1;
        } else {
            BK = new BigDecimal("0");
        }
    }

    //  Anteil von Jahresbeträgen fuer einen LZZ (§ 39b Absatz 2 Satz 9 EStG), PAP Seite 32
    function UPANTEIL() {
        if (LZZ === 1) {
            ANTEIL1 = JW;
        } else {
            if (LZZ === 2) {
                ANTEIL1 = JW.divide(ZAHL12).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (LZZ === 3) {
                    ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    ANTEIL1 = JW.divide(ZAHL360).round(0, BigDecimal.RoundingModes.DOWN);
                }
            }
        }
    }

    //  Berechnung sonstiger Bezüge nach § 39b Absatz 3 Sätze 1 bis 8 EStG, PAP Seite 33
    function MSONST() {
        LZZ = 1;
        if (ZMVB === 0) {
            ZMVB = 12;
        }
        if (SONSTB.compareTo(new BigDecimal("0")) === 0 && MBV.compareTo(new BigDecimal("0")) === 0) {
            LSTSO = new BigDecimal("0");
            STS = new BigDecimal("0");
            SOLZS = new BigDecimal("0");
            BKS = new BigDecimal("0");
        } else {
            MOSONST();
            ZRE4J = ((JRE4.add(SONSTB)).divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
            ZVBEZJ = ((JVBEZ.add(VBS)).divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
            VBEZBSO = STERBE;
            MRE4SONST();
            MLSTJAHR();
            WVFRBM = (ZVE.subtract(GFB)).multiply(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            if (WVFRBM.compareTo(new BigDecimal("0")) === -1)             //  WVFRBM < 0
{
                WVFRBM = new BigDecimal("0");
            }
            LSTSO = ST.multiply(ZAHL100);
            //  lt. PAP:  "Hinweis: negative Zahlen werden nach ihrem Betrag gerundet!"
            //  Fallunterscheidung bzgl. negativer Zahlen nicht nötig, da die Java-Klasse BigDecimal.ROUND_DOWN
            //  die Ziffer und nicht die Zahl abrundet, also aus -4.5 wird -4 und aus 4.5 wird 4
            STS = LSTSO.subtract(LSTOSO).multiply(new BigDecimal(String(f))).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN).multiply(ZAHL100);
            STSMIN();
        }
    }

    //  PAP Seite 34
    function STSMIN() {
        if (STS.compareTo(new BigDecimal("0")) === -1) {
            if (MBV.compareTo(new BigDecimal("0")) === 0) {
                //  NOP
            } else {
                LSTLZZ = LSTLZZ.add(STS);
                if (LSTLZZ.compareTo(new BigDecimal("0")) === -1) {
                    LSTLZZ = new BigDecimal("0");
                }
                SOLZLZZ = SOLZLZZ.add(STS.multiply(new BigDecimal("5.5").divide(ZAHL100))).round(0, BigDecimal.RoundingModes.DOWN);
                if (SOLZLZZ.compareTo(new BigDecimal("0")) === -1) {
                    SOLZLZZ = new BigDecimal("0");
                }
                BK = BK.add(STS);
                if (BK.compareTo(new BigDecimal("0")) === -1) {
                    BK = new BigDecimal("0");
                }
            }
            STS = new BigDecimal("0");
            SOLZS = new BigDecimal("0");
        } else {
            MSOLZSTS();
        }
        if (R > 0) {
            BKS = STS;
        } else {
            BKS = new BigDecimal("0");
        }
    }

    //  Berechnung des SolZ auf sonstige Bezüge, PAP Seite 35
    function MSOLZSTS() {
        if (ZKF.compareTo(new BigDecimal("0")) === 1) {
            SOLZSZVE = ZVE.subtract(KFB);
        } else {
            SOLZSZVE = ZVE;
        }
        if (SOLZSZVE.compareTo(new BigDecimal("1")) === -1) {
            SOLZSZVE = new BigDecimal("0");
            X = new BigDecimal("0");
        } else {
            X = SOLZSZVE.divide(new BigDecimal(String(KZTAB)), 0, BigDecimal.ROUND_DOWN);
        }
        if (STKL < 5) {
            UPTAB26();
        } else {
            MST5_6();
        }
        SOLZSBMG = ST.multiply(new BigDecimal(String(f))).round(0, BigDecimal.RoundingModes.DOWN);
        if (SOLZSBMG.compareTo(SOLZFREI) === 1) {
            SOLZS = STS.multiply(new BigDecimal("5.5")).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            SOLZS = new BigDecimal("0");
        }
    }

    //  Sonderberechnung ohne sonstige Bezüge für Berechnung bei sonstigen Bezügen, PAP Seite 36
    function MOSONST() {
        ZRE4J = (JRE4.divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        ZVBEZJ = (JVBEZ.divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        JLFREIB = JFREIB.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        JLHINZU = JHINZU.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        MRE4();
        MRE4ABZ();
        ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100));
        MZTABFB();
        VFRBS1 = ((ANP.add(FVB.add(FVBZ))).multiply(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        MLSTJAHR();
        WVFRBO = ((ZVE.subtract(GFB)).multiply(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        if (WVFRBO.compareTo(new BigDecimal("0")) === -1) {
            WVFRBO = new BigDecimal("0");
        }
        LSTOSO = ST.multiply(ZAHL100);
    }

    //  Sonderberechnung mit sonstigen Bezüge für Berechnung bei sonstigen Bezügen, PAP Seite 37
    function MRE4SONST() {
        MRE4();
        FVB = FVBSO;
        MRE4ABZ();
        ZRE4VP = ZRE4VP.add(MBV.divide(ZAHL100)).subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100));
        FVBZ = FVBZSO;
        MZTABFB();
        VFRBS2 = ((((ANP.add(FVB).add(FVBZ))).multiply(ZAHL100))).subtract(VFRBS1);
    }

    //  Tarifliche Einkommensteuer §32a EStG, PAP Seite 38
    function UPTAB26() {
        if (X.compareTo(GFB.add(ZAHL1)) === -1) {
            ST = new BigDecimal("0");
        } else {
            if (X.compareTo(new BigDecimal("17800")) === -1) {
                Y = (X.subtract(GFB)).divide(ZAHL10000).round(6, BigDecimal.RoundingModes.DOWN);
                RW = Y.multiply(new BigDecimal("914.51"));
                RW = RW.add(new BigDecimal("1400"));
                ST = (RW.multiply(Y)).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (X.compareTo(new BigDecimal("69879")) === -1) {
                    Y = (X.subtract(new BigDecimal("17799"))).divide(ZAHL10000).round(6, BigDecimal.RoundingModes.DOWN);
                    RW = Y.multiply(new BigDecimal("173.1"));
                    RW = RW.add(new BigDecimal("2397"));
                    RW = RW.multiply(Y);
                    ST = (RW.add(new BigDecimal("1034.87"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (X.compareTo(new BigDecimal("277826")) === -1) {
                        ST = ((X.multiply(new BigDecimal("0.42"))).subtract(new BigDecimal("11135.63"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        ST = ((X.multiply(new BigDecimal("0.45"))).subtract(new BigDecimal("19470.38"))).round(0, BigDecimal.RoundingModes.DOWN);
                    }
                }
            }
        }
        ST = ST.multiply(new BigDecimal(String(KZTAB)));
    }

    main();

    return {
        BK: BK,
        BKS: BKS,
        LSTLZZ: LSTLZZ,
        SOLZLZZ: SOLZLZZ,
        SOLZS: SOLZS,
        STS: STS,
        VFRB: VFRB,
        VFRBS1: VFRBS1,
        VFRBS2: VFRBS2,
        WVFRB: WVFRB,
        WVFRBO: WVFRBO,
        WVFRBM: WVFRBM
    };
};
