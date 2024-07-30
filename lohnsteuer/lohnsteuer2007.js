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
new BigDecimal("0.136"),
new BigDecimal("0.128"),
new BigDecimal("0.12"),
new BigDecimal("0.112"),
new BigDecimal("0.104"),
new BigDecimal("0.096"),
new BigDecimal("0.088"),
new BigDecimal("0.08"),
new BigDecimal("0.072"),
new BigDecimal("0.064"),
new BigDecimal("0.056"),
new BigDecimal("0.048"),
new BigDecimal("0.04"),
new BigDecimal("0.032"),
new BigDecimal("0.024"),
new BigDecimal("0.016"),
new BigDecimal("0.008"),
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
new BigDecimal("1020"),
new BigDecimal("960"),
new BigDecimal("900"),
new BigDecimal("840"),
new BigDecimal("780"),
new BigDecimal("720"),
new BigDecimal("660"),
new BigDecimal("600"),
new BigDecimal("540"),
new BigDecimal("480"),
new BigDecimal("420"),
new BigDecimal("360"),
new BigDecimal("300"),
new BigDecimal("240"),
new BigDecimal("180"),
new BigDecimal("120"),
new BigDecimal("60"),
new BigDecimal("0")];
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
new BigDecimal("306"),
new BigDecimal("288"),
new BigDecimal("270"),
new BigDecimal("252"),
new BigDecimal("234"),
new BigDecimal("216"),
new BigDecimal("198"),
new BigDecimal("180"),
new BigDecimal("162"),
new BigDecimal("144"),
new BigDecimal("126"),
new BigDecimal("108"),
new BigDecimal("90"),
new BigDecimal("72"),
new BigDecimal("54"),
new BigDecimal("36"),
new BigDecimal("18"),
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
new BigDecimal("0.136"),
new BigDecimal("0.128"),
new BigDecimal("0.12"),
new BigDecimal("0.112"),
new BigDecimal("0.104"),
new BigDecimal("0.096"),
new BigDecimal("0.088"),
new BigDecimal("0.08"),
new BigDecimal("0.072"),
new BigDecimal("0.064"),
new BigDecimal("0.056"),
new BigDecimal("0.048"),
new BigDecimal("0.04"),
new BigDecimal("0.032"),
new BigDecimal("0.024"),
new BigDecimal("0.016"),
new BigDecimal("0.008"),
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
new BigDecimal("646"),
new BigDecimal("608"),
new BigDecimal("570"),
new BigDecimal("532"),
new BigDecimal("494"),
new BigDecimal("456"),
new BigDecimal("418"),
new BigDecimal("380"),
new BigDecimal("342"),
new BigDecimal("304"),
new BigDecimal("266"),
new BigDecimal("228"),
new BigDecimal("190"),
new BigDecimal("152"),
new BigDecimal("114"),
new BigDecimal("76"),
new BigDecimal("38"),
new BigDecimal("0")];
// const BigDecimal
var ZAHL1 = new BigDecimal("1");
// const BigDecimal
var ZAHL2 = new BigDecimal("2");
// const BigDecimal
var ZAHL3 = new BigDecimal("3");
// const BigDecimal
var ZAHL4 = new BigDecimal("4");
// const BigDecimal
var ZAHL5 = new BigDecimal("5");
// const BigDecimal
var ZAHL6 = new BigDecimal("6");
// const BigDecimal
var ZAHL7 = new BigDecimal("7");
// const BigDecimal
var ZAHL8 = new BigDecimal("8");
// const BigDecimal
var ZAHL9 = new BigDecimal("9");
// const BigDecimal
var ZAHL10 = BigDecimal.TEN;
// const BigDecimal
var ZAHL11 = new BigDecimal("11");
// const BigDecimal
var ZAHL12 = new BigDecimal("12");
// const BigDecimal
var ZAHL100 = new BigDecimal("100");
// const BigDecimal
var ZAHL360 = new BigDecimal("360");
module.exports = function Lohnsteuer2007Big(args) {
    //  Stand: 2015-11-10
    //  ZIVIT Düsseldorf
    //   EINGABEPARAMETER
    //  Auf die Vollendung des 64. Lebensjahres folgende
    //              Kalenderjahr (erforderlich, wenn ALTER1=1)
    // int - Implicit Default
    var AJAHR = (args.AJAHR !== undefined) ? args.AJAHR : 0;

    //  1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
    //              der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
    // int - Implicit Default
    var ALTER1 = (args.ALTER1 !== undefined) ? args.ALTER1 : 0;

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
    //              fuer den Lohnzahlungszeitraum in Cents
    // BigDecimal - Implicit Default
    var HINZUR = (args.HINZUR !== undefined) ? new BigDecimal(String(args.HINZUR)) : new BigDecimal("0");

    //  Jahresfreibetrag nach Ma&szlig;gabe der Eintragungen auf der
    //              Lohnsteuerkarte in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JFREIB = (args.JFREIB !== undefined) ? new BigDecimal(String(args.JFREIB)) : new BigDecimal("0");

    //  Jahreshinzurechnungsbetrag in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JHINZU = (args.JHINZU !== undefined) ? new BigDecimal(String(args.JHINZU)) : new BigDecimal("0");

    //  Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezuege und
    //              ohne Verguetung fuer mehrjaehrige Taetigkeit in Cents (ggf. 0)
    //              Anmerkung: Die Eingabe dieses Feldes ist erforderlich bei Eingabe
    //              „sonstiger Bezuege“ (Feld SONSTB) oder bei Eingabe der „Verguetung
    //              fuer mehrjaehrige Taetigkeit“ (Feld VMT).
    // BigDecimal - Implicit Default
    var JRE4 = (args.JRE4 !== undefined) ? new BigDecimal(String(args.JRE4)) : new BigDecimal("0");

    //  In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JVBEZ = (args.JVBEZ !== undefined) ? new BigDecimal(String(args.JVBEZ)) : new BigDecimal("0");

    //  1 = der Arbeitnehmer ist im Lohnzahlungszeitraum in der gesetzlichen
    //              Rentenversicherung versicherungsfrei und gehoert zu den in
    //              § 10 c Abs. 3 EStG genannten Personen.
    //              Bei anderen Arbeitnehmern ist „0“ einzusetzen.
    //              Fuer die Zuordnung sind allein die dem Arbeitgeber ohnehin bekannten
    //              Tatsachen ma&szlig;gebend; zusaetzliche Ermittlungen braucht
    //              der Arbeitgeber nicht anzustellen.
    // int - Implicit Default
    var KRV = (args.KRV !== undefined) ? args.KRV : 0;

    //  Lohnzahlungszeitraum:
    //              1 = Jahr
    //              2 = Monat
    //              3 = Woche
    //              4 = Tag
    // int - Implicit Default
    var LZZ = (args.LZZ !== undefined) ? args.LZZ : 0;

    //  Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
    //              keiner Religionszugehoerigkeit = 0)
    // int - Implicit Default
    var R = (args.R !== undefined) ? args.R : 0;

    //  Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
    //              fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
    //              der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
    //              Freibetrags in Cents.
    // BigDecimal - Implicit Default
    var RE4 = (args.RE4 !== undefined) ? new BigDecimal(String(args.RE4)) : new BigDecimal("0");

    //  Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
    //              Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //              soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var SONSTB = (args.SONSTB !== undefined) ? new BigDecimal(String(args.SONSTB)) : new BigDecimal("0");

    //  Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //              soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
    //              (in SONSTB enthalten) in Cents
    // BigDecimal - Implicit Default
    var STERBE = (args.STERBE !== undefined) ? new BigDecimal(String(args.STERBE)) : new BigDecimal("0");

    //  Steuerklasse:
    //              1 = I
    //              2 = II
    //              3 = III
    //              4 = IV
    //              5 = V
    //              6 = VI
    // int - Implicit Default
    var STKL = (args.STKL !== undefined) ? args.STKL : 0;

    //  In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBEZ = (args.VBEZ !== undefined) ? new BigDecimal(String(args.VBEZ)) : new BigDecimal("0");

    //  Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
    //              in Cents
    // BigDecimal - Implicit Default
    var VBEZM = (args.VBEZM !== undefined) ? new BigDecimal(String(args.VBEZM)) : new BigDecimal("0");

    //  Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
    //              bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
    //              bei Versorgungsbezuegen in Cents
    // BigDecimal - Implicit Default
    var VBEZS = (args.VBEZS !== undefined) ? new BigDecimal(String(args.VBEZS)) : new BigDecimal("0");

    //  In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
    //             in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBS = (args.VBS !== undefined) ? new BigDecimal(String(args.VBS)) : new BigDecimal("0");

    //  Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
    //              mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug
    // int - Implicit Default
    var VJAHR = (args.VJAHR !== undefined) ? args.VJAHR : 0;

    //  Kapitalauszahlungen/Abfindungen bei Versorgungsbezuegen fuer mehrere Jahre in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VKAPA = (args.VKAPA !== undefined) ? new BigDecimal(String(args.VKAPA)) : new BigDecimal("0");

    //  Verguetung fuer mehrjaehrige Taetigkeit ohne Kapitalauszahlungen/Abfindungen bei
    //              Versorgungsbezuegen in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VMT = (args.VMT !== undefined) ? new BigDecimal(String(args.VMT)) : new BigDecimal("0");

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag
    //              fuer den Lohnzahlungszeitraum in Cents
    // BigDecimal - Implicit Default
    var WFUNDF = (args.WFUNDF !== undefined) ? new BigDecimal(String(args.WFUNDF)) : new BigDecimal("0");

    //  Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
    //              I, II, III und IV)
    // BigDecimal - Implicit Default
    var ZKF = (args.ZKF !== undefined) ? new BigDecimal(String(args.ZKF)) : new BigDecimal("0");

    //  Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
    //              erforderlich bei Jahresberechnung (LZZ = 1)
    // int - Implicit Default
    var ZMVB = (args.ZMVB !== undefined) ? args.ZMVB : 0;

    //   AUSGABEPARAMETER
    //  Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents
    var BK = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
    //              fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents
    var BKS = new BigDecimal("0"); // BigDecimal

    var BKV = new BigDecimal("0"); // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents
    var LSTLZZ = new BigDecimal("0"); // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
    //              in Cents
    var SOLZLZZ = new BigDecimal("0"); // BigDecimal

    //  Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
    //              Taetigkeit) in Cents
    var SOLZS = new BigDecimal("0"); // BigDecimal

    //  Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
    //              Cents
    var SOLZV = new BigDecimal("0"); // BigDecimal

    //  Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
    //              Taetigkeit) in Cents
    var STS = new BigDecimal("0"); // BigDecimal

    //  Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents
    var STV = new BigDecimal("0"); // BigDecimal

    //   INTERNE FELDER
    //  Altersentlastungsbetrag nach Alterseinkuenftegesetz in Cents
    var ALTE = new BigDecimal("0"); // BigDecimal

    //  Arbeitnehmer-Pauschbetrag in EURO
    var ANP = new BigDecimal("0"); // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //              auf ganze Cents abgerundet
    var ANTEIL1 = new BigDecimal("0"); // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //              auf ganze Cents aufgerundet
    var ANTEIL2 = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage fuer Altersentlastungsbetrag in Cents
    var BMG = new BigDecimal("0"); // BigDecimal

    //  Differenz zwischen ST1 und ST2 in EURO
    var DIFF = new BigDecimal("0"); // BigDecimal

    //  Entlastungsbetrag fuer Alleinerziehende in EURO
    var EFA = new BigDecimal("0"); // BigDecimal

    //  Versorgungsfreibetrag in Cents
    var FVB = new BigDecimal("0"); // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in EURO
    var FVBZ = new BigDecimal("0"); // BigDecimal

    //  Massgeblich maximaler Versorgungsfreibetrag in Cents
    var HFVB = new BigDecimal("0"); // BigDecimal

    //  Nummer der Tabellenwerte fuer Versorgungsparameter
    var J = 0; // int

    //  Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
    //              Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
    var JBMG = new BigDecimal("0"); // BigDecimal

    //  Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
    //              UPANTEIL errechnet werden soll in Cents
    var JW = new BigDecimal("0"); // BigDecimal

    //  Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
    var K = 0; // int

    //  Kennzeichen bei Verguetung fuer mehrjaehrige Taetigkeit
    //              0 = beim Vorwegabzug ist ZRE4VP zu beruecksichtigen
    //              1 = beim Vorwegabzug ist ZRE4VP1 zu beruecksichtigen
    var KENNZ = 0; // int

    //  Summe der Freibetraege fuer Kinder in EURO
    var KFB = new BigDecimal("0"); // BigDecimal

    //  Kennzahl fuer die Einkommensteuer-Tabellenart:
    //              1 = Grundtabelle
    //              2 = Splittingtabelle
    var KZTAB = 0; // int

    //  Jahreslohnsteuer in EURO
    var LSTJAHR = new BigDecimal("0"); // BigDecimal

    //  Zwischenfelder der Jahreslohnsteuer in Cents
    var LST1 = new BigDecimal("0"); // BigDecimal

    var LST2 = new BigDecimal("0"); // BigDecimal

    var LST3 = new BigDecimal("0"); // BigDecimal

    //  Mindeststeuer fuer die Steuerklassen V und VI in EURO
    var MIST = new BigDecimal("0"); // BigDecimal

    //  Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
    //              fuer Versorgungsbezuege, des Altersentlastungsbetrags und des
    //              in der Lohnsteuerkarte eingetragenen Freibetrags und Hinzurechnung
    //              eines Hinzurechnungsbetrags in Cents. Entspricht dem Arbeitslohn,
    //              fuer den die Lohnsteuer im personellen Verfahren aus der
    //              zum Lohnzahlungszeitraum gehoerenden Tabelle abgelesen wuerde
    var RE4LZZ = new BigDecimal("0"); // BigDecimal

    //  Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
    //              fuer Versorgungsbezuege und des Altersentlastungsbetrags in
    //              Cents zur Berechnung der Vorsorgepauschale
    var RE4LZZV = new BigDecimal("0"); // BigDecimal

    //  Rechenwert in Gleitkommadarstellung
    var RW = new BigDecimal("0"); // BigDecimal

    //  Sonderausgaben-Pauschbetrag in EURO
    var SAP = new BigDecimal("0"); // BigDecimal

    //  Freigrenze fuer den Solidaritaetszuschlag in EURO
    var SOLZFREI = new BigDecimal("0"); // BigDecimal

    //  Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen)
    var SOLZJ = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
    //              in EURO, C (2 Dezimalstellen)
    var SOLZMIN = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer in EURO
    var ST = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO
    var ST1 = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO
    var ST2 = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
    var VBEZB = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VHB = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale in EURO, C (2 Dezimalstellen)
    var VSP = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VSPN = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
    //              dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP1 = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
    //              dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP2 = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 3 EStG in EURO
    var VSPKURZ = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO
    var VSPMAX1 = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO
    var VSPMAX2 = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
    //              in EURO, C (2 Dezimalstellen)
    var VSPO = new BigDecimal("0"); // BigDecimal

    //  Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
    //              Rest von VSPO in EURO, C (2 Dezimalstellen)
    var VSPREST = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
    //              in EURO, C (2 Dezimalstellen)
    var VSPVOR = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG
    //              (2 Dezimalstellen)
    var X = new BigDecimal("0"); // BigDecimal

    //  gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
    var Y = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4LZZ in EURO, C (2 Dezimalstellen)
    var ZRE4 = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4LZZV zur Berechnung
    //              der Vorsorgepauschale in EURO, C (2 Dezimalstellen)
    var ZRE4VP = new BigDecimal("0"); // BigDecimal

    //  Sicherungsfeld von ZRE4VP in EURO,C bei der Berechnung des Vorwegabzugs
    //              fuer die Verguetung fuer mehrjaehrige Taetigkeit
    var ZRE4VP1 = new BigDecimal("0"); // BigDecimal

    //  Feste Tabellenfreibetraege (ohne Vorsorgepauschale) in EURO
    var ZTABFB = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
    //              EURO, C (2 Dezimalstellen)
    var ZVBEZ = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen in EURO
    var ZVE = new BigDecimal("0"); // BigDecimal

    //  Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
    //              Abs. 2 Satz 8 EStG in EURO.
    var ZX = new BigDecimal("0"); // BigDecimal

    var ZZX = new BigDecimal("0"); // BigDecimal

    var HOCH = new BigDecimal("0"); // BigDecimal

    var VERGL = new BigDecimal("0"); // BigDecimal

    //  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags

    //  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags

    //  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag

    //  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags

    //  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags

    //  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte














    //  PROGRAMMABLAUFPLAN 2007, PAP Seite 9
    function main() {
        MRE4LZZ();
        KENNZ = 0;
        RE4LZZ = RE4.subtract(FVB).subtract(ALTE).subtract(WFUNDF).add(HINZUR);
        RE4LZZV = RE4.subtract(FVB).subtract(ALTE);
        MRE4();
        MZTABFB();
        MLSTJAHR();
        LSTJAHR = ST;
        JW = LSTJAHR.multiply(ZAHL100);
        UPANTEIL();
        LSTLZZ = ANTEIL1;
        if (ZKF.compareTo(new BigDecimal("0")) === 1) {
            ZTABFB = ZTABFB.add(KFB);
            MLSTJAHR();
            JBMG = ST;
        } else {
            JBMG = LSTJAHR;
        }
        MSOLZ();
        MSONST();
        MVMT();
    }

    //  Freibetraege fuer Versorgungsbezuege, Altersentlastungsbetrag (§39b Abs. 2 Satz 2 EStG), PAP Seite 10
    function MRE4LZZ() {
        if (VBEZ.compareTo(new BigDecimal("0")) === 0) {
            FVBZ = new BigDecimal("0");
            FVB = new BigDecimal("0");
        } else {
            if (VJAHR < 2006) {
                J = 1;
            } else {
                if (VJAHR < 2040) {
                    J = VJAHR - 2004;
                } else {
                    J = 36;
                }
            }
            if (LZZ === 1) {
                if (((STERBE.add(VKAPA)).compareTo(new BigDecimal("0"))) === 1) {
                    VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                    HFVB = TAB2[J].multiply(ZAHL100);
                    FVBZ = TAB3[J];
                } else {
                    VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                    //  Achtung! Rechengenauigkeit Division?
                    HFVB = TAB2[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).multiply(ZAHL100);
                    FVBZ = TAB3[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).round(0, BigDecimal.RoundingModes.UP);
                }
            } else {
                VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).round(2, BigDecimal.RoundingModes.DOWN);
                HFVB = TAB2[J].multiply(ZAHL100);
                FVBZ = TAB3[J];
            }
            FVB = (VBEZB.multiply(TAB1[J])).round(2, BigDecimal.RoundingModes.UP);
            if (FVB.compareTo(HFVB) === 1) {
                FVB = HFVB;
            }
            JW = FVB;
            UPANTEIL();
            FVB = ANTEIL2;
        }
        if (ALTER1 === 0) {
            ALTE = new BigDecimal("0");
        } else {
            if (AJAHR < 2006) {
                K = 1;
            } else {
                if (AJAHR < 2040) {
                    K = AJAHR - 2004;
                } else {
                    K = 36;
                }
            }
            BMG = RE4.subtract(VBEZ);
            ALTE = (BMG.multiply(TAB4[K])).round(2, BigDecimal.RoundingModes.UP);
            JW = TAB5[K].multiply(ZAHL100);
            UPANTEIL();
            if (ALTE.compareTo(ANTEIL2) === 1) {
                ALTE = ANTEIL2;
            }
        }
    }

    //  Massgeblicher Arbeitslohn fuer die Jahreslohnsteuer, PAP Seite 12
    function MRE4() {
        if (LZZ === 1) {
            ZRE4 = RE4LZZ.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            ZRE4VP = RE4LZZV.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            ZVBEZ = (VBEZ.subtract(FVB)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        } else {
            if (LZZ === 2) {
                ZRE4 = ((RE4LZZ.add(new BigDecimal("0.67"))).multiply(new BigDecimal("0.12"))).round(2, BigDecimal.RoundingModes.DOWN);
                ZRE4VP = ((RE4LZZV.add(new BigDecimal("0.67"))).multiply(new BigDecimal("0.12"))).round(2, BigDecimal.RoundingModes.DOWN);
                ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal("0.67"))).multiply(new BigDecimal("0.12"))).round(2, BigDecimal.RoundingModes.DOWN);
            } else {
                if (LZZ === 3) {
                    ZRE4 = ((RE4LZZ.add(new BigDecimal("0.89"))).multiply(new BigDecimal("3.6"))).divide(new BigDecimal("7.0"), 2, BigDecimal.ROUND_DOWN);
                    ZRE4VP = ((RE4LZZV.add(new BigDecimal("0.89"))).multiply(new BigDecimal("3.6"))).divide(new BigDecimal("7.0"), 2, BigDecimal.ROUND_DOWN);
                    ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal("0.89"))).multiply(new BigDecimal("3.6"))).divide(new BigDecimal("7.0"), 2, BigDecimal.ROUND_DOWN);
                } else {
                    ZRE4 = ((RE4LZZ.add(new BigDecimal("0.56"))).multiply(new BigDecimal("3.6"))).round(2, BigDecimal.RoundingModes.DOWN);
                    ZRE4VP = ((RE4LZZV.add(new BigDecimal("0.56"))).multiply(new BigDecimal("3.6"))).round(2, BigDecimal.RoundingModes.DOWN);
                    ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal("0.56"))).multiply(new BigDecimal("3.6"))).round(2, BigDecimal.RoundingModes.DOWN);
                }
            }
        }
        if (RE4LZZ.compareTo(new BigDecimal("0")) === -1) {
            ZRE4 = new BigDecimal("0");
        }
        if (RE4LZZV.compareTo(new BigDecimal("0")) === -1) {
            ZRE4VP = new BigDecimal("0");
        }
        if (VBEZ.compareTo(new BigDecimal("0")) === 0) {
            if (FVB.compareTo(new BigDecimal("0")) === 0) {
                ZVBEZ = new BigDecimal("0");
            }
        } else {
            if ((VBEZ.subtract(FVB)).compareTo(new BigDecimal("0")) === -1) {
                ZVBEZ = new BigDecimal("0");
            }
        }
    }

    //  Ermittlung der festen Tabellenfreibetraege (ohne Vorsorgepauschale), PAP Seite 13
    function MZTABFB() {
        ANP = new BigDecimal("0");
        if (ZVBEZ.compareTo(new BigDecimal("0")) >= 0) {
            if (ZVBEZ.compareTo(FVBZ) === -1) {
                FVBZ = ZVBEZ.round(0, BigDecimal.RoundingModes.DOWN);
            }
        }
        if (STKL < 6) {
            if (ZVBEZ.compareTo(new BigDecimal("0")) === 1) {
                if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal("102")) === -1) {
                    ANP = (ZVBEZ.subtract(FVBZ)).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    ANP = new BigDecimal("102");
                }
            }
        }
        if (STKL < 6) {
            if (ZRE4.compareTo(ZVBEZ) === 1) {
                if ((ZRE4.subtract(ZVBEZ)).compareTo(new BigDecimal("920")) === -1) {
                    ANP = (ANP.add(ZRE4).subtract(ZVBEZ)).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    ANP = ANP.add(new BigDecimal("920"));
                }
            }
        }
        KZTAB = 1;
        if (STKL === 1) {
            SAP = new BigDecimal("36");
            KFB = (ZKF.multiply(new BigDecimal("5808"))).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            if (STKL === 2) {
                EFA = new BigDecimal("1308");
                SAP = new BigDecimal("36");
                KFB = (ZKF.multiply(new BigDecimal("5808"))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (STKL === 3) {
                    KZTAB = 2;
                    SAP = new BigDecimal("72");
                    KFB = (ZKF.multiply(new BigDecimal("5808"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (STKL === 4) {
                        SAP = new BigDecimal("36");
                        KFB = (ZKF.multiply(new BigDecimal("2904"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        KFB = new BigDecimal("0");
                    }
                }
            }
        }
        ZTABFB = EFA.add(ANP).add(SAP).add(FVBZ);
    }

    //  Ermittlung Jahreslohnsteuer, PAP Seite 14
    function MLSTJAHR() {
        if (STKL < 5) {
            UPEVP();
        } else {
            VSP = new BigDecimal("0");
        }
        ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP)).round(0, BigDecimal.RoundingModes.DOWN);
        if (ZVE.compareTo(ZAHL1) === -1) {
            ZVE = new BigDecimal("0");
            X = new BigDecimal("0");
        } else {
            X = ZVE.divide(new BigDecimal(String(KZTAB)), 0, BigDecimal.ROUND_DOWN);
        }
        if (STKL < 5) {
            UPTAB07();
        } else {
            MST5_6();
        }
    }

    //  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG), PAP Seite 15
    function UPEVP() {
        //  Achtung: Es wird davon ausgegangen, dass
        //     a) die Rentenversicherungsbemessungsgrenze gegenueber 2006 unveraendert bleibt und
        //     b) der Beitragssatz zur Rentenversicherung auf 9,95 v.H. angehoben wird
        //
        if (KRV === 1) {
            VSP1 = new BigDecimal("0");
        } else {
            if (ZRE4VP.compareTo(new BigDecimal("63000")) === 1) {
                ZRE4VP = new BigDecimal("63000");
            }
            VSP1 = (ZRE4VP.multiply(new BigDecimal("0.28"))).round(2, BigDecimal.RoundingModes.DOWN);
            VSP1 = (VSP1.multiply(new BigDecimal("0.0995"))).round(2, BigDecimal.RoundingModes.DOWN);
        }
        VSP2 = ZRE4VP.multiply(new BigDecimal("0.11"));
        VHB = new BigDecimal(String(KZTAB)).multiply(new BigDecimal("1500"));
        if (VSP2.compareTo(VHB) === 1) {
            VSP2 = VHB;
        }
        VSPN = (VSP1.add(VSP2)).round(0, BigDecimal.RoundingModes.UP);
        MVSP();
        if (VSPN.compareTo(VSP) === 1) {
            VSP = VSPN.round(2, BigDecimal.RoundingModes.DOWN);
        }
    }

    //  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 16
    function MVSP() {
        if (KENNZ === 1) {
            VSPO = ZRE4VP1.multiply(new BigDecimal("0.2"));
        } else {
            VSPO = ZRE4VP.multiply(new BigDecimal("0.2"));
        }
        VSPVOR = new BigDecimal(String(KZTAB)).multiply(new BigDecimal("3068"));
        VSPMAX1 = new BigDecimal(String(KZTAB)).multiply(new BigDecimal("1334"));
        VSPMAX2 = new BigDecimal(String(KZTAB)).multiply(new BigDecimal("667"));
        VSPKURZ = new BigDecimal(String(KZTAB)).multiply(new BigDecimal("1134"));
        if (KRV === 1) {
            if (VSPO.compareTo(VSPKURZ) === 1) {
                VSP = VSPKURZ;
            } else {
                VSP = VSPO.round(0, BigDecimal.RoundingModes.DOWN);
            }
        } else {
            UMVSP();
        }
    }

    //  Vorsorgepauschale, PAP Seite 17
    function UMVSP() {
        if (KENNZ === 1) {
            VSPVOR = VSPVOR.subtract(ZRE4VP1.multiply(new BigDecimal("0.16")));
        } else {
            VSPVOR = VSPVOR.subtract(ZRE4VP.multiply(new BigDecimal("0.16")));
        }
        if (VSPVOR.compareTo(new BigDecimal("0")) === -1) {
            VSPVOR = new BigDecimal("0");
        }
        if (VSPO.compareTo(VSPVOR) === 1) {
            VSP = VSPVOR;
            VSPREST = VSPO.subtract(VSPVOR);
            if (VSPREST.compareTo(VSPMAX1) === 1) {
                VSP = VSP.add(VSPMAX1);
                VSPREST = (VSPREST.subtract(VSPMAX1)).divide(ZAHL2).round(2, BigDecimal.RoundingModes.UP);
                if (VSPREST.compareTo(VSPMAX2) === 1) {
                    VSP = (VSP.add(VSPMAX2)).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    VSP = (VSP.add(VSPREST)).round(0, BigDecimal.RoundingModes.DOWN);
                }
            } else {
                VSP = (VSP.add(VSPREST)).round(0, BigDecimal.RoundingModes.DOWN);
            }
        } else {
            VSP = VSPO.round(0, BigDecimal.RoundingModes.DOWN);
        }
    }

    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG), PAP Seite 18
    function MST5_6() {
        ZZX = X;
        if (ZZX.compareTo(new BigDecimal("25812")) === 1) {
            ZX = new BigDecimal("25812");
            UP5_6();
            if (ZZX.compareTo(new BigDecimal("200000")) === 1) {
                ST = (ST.add(new BigDecimal("73158.96"))).round(0, BigDecimal.RoundingModes.DOWN);;
                ST = (ST.add((ZZX.subtract(new BigDecimal("200000"))).multiply(new BigDecimal("0.45")))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                ST = (ST.add((ZZX.subtract(new BigDecimal("25812"))).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
            }
        } else {
            ZX = ZZX;
            UP5_6();
            if (ZZX.compareTo(new BigDecimal("9144")) === 1) {
                VERGL = ST;
                ZX = new BigDecimal("9144");
                UP5_6();
                HOCH = (ST.add((ZZX.subtract(new BigDecimal("9144"))).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
                if (HOCH.compareTo(VERGL) === -1) {
                    ST = HOCH;
                } else {
                    ST = VERGL;
                }
            }
        }
    }

    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG), PAP Seite 18
    function UP5_6() {
        X = ZX.multiply(new BigDecimal("1.25"));
        UPTAB07();
        ST1 = ST;
        X = ZX.multiply(new BigDecimal("0.75"));
        UPTAB07();
        ST2 = ST;
        DIFF = (ST1.subtract(ST2)).multiply(ZAHL2);
        MIST = (ZX.multiply(new BigDecimal("0.15"))).round(0, BigDecimal.RoundingModes.DOWN);
        if (MIST.compareTo(DIFF) === 1) {
            ST = MIST;
        } else {
            ST = DIFF;
        }
    }

    //  Solidaritaetszuschlag, PAP Seite 19
    function MSOLZ() {
        SOLZFREI = new BigDecimal(String(972 * KZTAB));
        if (JBMG.compareTo(SOLZFREI) === 1) {
            SOLZJ = (JBMG.multiply(new BigDecimal("5.5"))).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal("20")).divide(ZAHL100);
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

    //  Anteil von Jahresbetraegen fuer einen LZZ (§ 39b Abs. 2 Satz 10 EStG), PAP Seite 20
    function UPANTEIL() {
        if (LZZ === 1) {
            ANTEIL1 = JW;
            ANTEIL2 = JW;
        } else {
            if (LZZ === 2) {
                ANTEIL1 = JW.divide(ZAHL12).round(0, BigDecimal.RoundingModes.DOWN);
                ANTEIL2 = JW.divide(ZAHL12).round(0, BigDecimal.RoundingModes.UP);
            } else {
                if (LZZ === 3) {
                    ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360).round(0, BigDecimal.RoundingModes.DOWN);
                    ANTEIL2 = (JW.multiply(ZAHL7)).divide(ZAHL360).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANTEIL1 = JW.divide(ZAHL360).round(0, BigDecimal.RoundingModes.DOWN);
                    ANTEIL2 = JW.divide(ZAHL360).round(0, BigDecimal.RoundingModes.UP);
                }
            }
        }
    }

    //  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG), PAP Seite 21
    function MSONST() {
        if (SONSTB.compareTo(new BigDecimal("0")) === 0) {
            STS = new BigDecimal("0");
            SOLZS = new BigDecimal("0");
            BKS = new BigDecimal("0");
        } else {
            LZZ = 1;
            VBEZ = JVBEZ;
            RE4 = JRE4;
            MRE4LZZ();
            MRE4LZZ2();
            MLSTJAHR();
            LST1 = ST.multiply(ZAHL100);
            VBEZ = JVBEZ.add(VBS);
            RE4 = JRE4.add(SONSTB);
            VBEZS = VBEZS.add(STERBE);
            MRE4LZZ();
            MRE4LZZ2();
            MLSTJAHR();
            LST2 = ST.multiply(ZAHL100);
            STS = LST2.subtract(LST1);
            if (SONSTB.compareTo(new BigDecimal("0")) === 1) {
                if (STS.compareTo(new BigDecimal("0")) === -1) {
                    STS = new BigDecimal("0");
                }
            }
            SOLZS = STS.multiply(new BigDecimal("5.5")).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN);
            if (R > 0) {
                BKS = STS;
            } else {
                BKS = new BigDecimal("0");
            }
        }
    }

    //  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
    //          PAP Seite 21
    function MRE4LZZ2() {
        RE4LZZ = RE4.subtract(FVB).subtract(ALTE).subtract(JFREIB).add(JHINZU);
        RE4LZZV = RE4.subtract(FVB).subtract(ALTE);
        MRE4();
        MZTABFB();
    }

    //  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG), PAP Seite 22
    function MVMT() {
        if (VKAPA.compareTo(new BigDecimal("0")) === -1) {
            VKAPA = new BigDecimal("0");
        }
        if ((VMT.add(VKAPA)).compareTo(new BigDecimal("0")) === 1) {
            LZZ = 1;
            VBEZ = JVBEZ.add(VBS);
            RE4 = JRE4.add(SONSTB);
            MRE4LZZ();
            MRE4LZZ2();
            MLSTJAHR();
            LST1 = ST.multiply(ZAHL100);
            VMT = VMT.add(VKAPA);
            VBEZS = VBEZS.add(VKAPA);
            VBEZ = VBEZ.add(VKAPA);
            RE4 = JRE4.add(SONSTB).add(VMT);
            MRE4LZZ();
            MRE4LZZ2();
            KENNZ = 1;
            ZRE4VP1 = ZRE4VP;
            MLSTJAHR();
            LST3 = ST.multiply(ZAHL100);
            VBEZ = VBEZ.subtract(VKAPA);
            VBEZS = VBEZS.subtract(VKAPA);
            RE4 = JRE4.add(SONSTB);
            MRE4LZZ();
            if ((RE4.subtract(JFREIB).add(JHINZU)).compareTo(new BigDecimal("0")) === -1) {
                RE4 = RE4.subtract(JFREIB).add(JHINZU);
                JFREIB = new BigDecimal("0");
                JHINZU = new BigDecimal("0");
                RE4 = (RE4.add(VMT)).divide(ZAHL5).round(0, BigDecimal.RoundingModes.DOWN);
                MRE4LZZ2();
                MLSTJAHR();
                LST2 = ST.multiply(ZAHL100);
                STV = LST2.multiply(ZAHL5);
            } else {
                RE4 = RE4.add(VMT.divide(ZAHL5).round(0, BigDecimal.RoundingModes.DOWN));
                MRE4LZZ2();
                MLSTJAHR();
                LST2 = ST.multiply(ZAHL100);
                STV = (LST2.subtract(LST1)).multiply(ZAHL5);
            }
            LST3 = LST3.subtract(LST1);
            if (LST3.compareTo(STV) === -1) {
                STV = LST3;
            }
            SOLZV = (STV.multiply(new BigDecimal("5.5"))).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN);
            if (R > 0) {
                BKV = STV;
            } else {
                BKV = new BigDecimal("0");
            }
        } else {
            STV = new BigDecimal("0");
            SOLZV = new BigDecimal("0");
            BKV = new BigDecimal("0");
        }
    }

    //  Tarifliche Einkommensteuer §32a EStG, PAP Seite 23
    function UPTAB07() {
        if (X.compareTo(new BigDecimal("7665")) === -1) {
            ST = new BigDecimal("0");
        } else {
            if (X.compareTo(new BigDecimal("12740")) === -1) {
                Y = (X.subtract(new BigDecimal("7664"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                RW = Y.multiply(new BigDecimal("883.74"));
                RW = RW.add(new BigDecimal("1500"));
                ST = (RW.multiply(Y)).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (X.compareTo(new BigDecimal("52152")) === -1) {
                    Y = (X.subtract(new BigDecimal("12739"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                    RW = Y.multiply(new BigDecimal("228.74"));
                    RW = RW.add(new BigDecimal("2397"));
                    RW = RW.multiply(Y);
                    ST = (RW.add(new BigDecimal("989"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (X.compareTo(new BigDecimal("250001")) === -1) {
                        ST = ((X.multiply(new BigDecimal("0.42"))).subtract(new BigDecimal("7914"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        ST = ((X.multiply(new BigDecimal("0.45"))).subtract(new BigDecimal("15414"))).round(0, BigDecimal.RoundingModes.DOWN);
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
        BKV: BKV,
        LSTLZZ: LSTLZZ,
        SOLZLZZ: SOLZLZZ,
        SOLZS: SOLZS,
        SOLZV: SOLZV,
        STS: STS,
        STV: STV
    };
};
