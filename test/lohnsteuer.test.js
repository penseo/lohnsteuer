/*jslint node: true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;

var lohnsteuer = require('../');

describe('lohnsteuer', function () {
    it('should calculate the german wage tax for 2015 correctly', function () {
//       <?xml version="1.0" encoding="UTF-8"?>
//         <lohnsteuer jahr="2015">
//         <eingaben>
//           <eingabe name="STKL" value="1" status="ok" />
//           <eingabe name="LZZ" value="1" status="ok" />
//           <eingabe name="RE4" value="2500000" status="ok" />
//         </eingaben>
//         <ausgaben>
//           <ausgabe name="BK" value="0" />
//           <ausgabe name="BKS" value="0" />
//           <ausgabe name="BKV" value="0" />
//           <ausgabe name="LSTLZZ" value="277400" />
//           <ausgabe name="SOLZLZZ" value="15257" />
//           <ausgabe name="SOLZS" value="0" />
//           <ausgabe name="SOLZV" value="0" />
//           <ausgabe name="STS" value="0" />
//           <ausgabe name="STV" value="0" />
//           <ausgabe name="VKVLZZ" value="0" />
//           <ausgabe name="VKVSONST" value="0" />
//         </ausgaben>
//       </lohnsteuer>
        expect(lohnsteuer.algorithmByName("2015BisNov", {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 277400,
            SOLZLZZ: 15257,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0
        });
    });

    it('should calculate the german wage tax for 2018 correctly', function () {
        expect(lohnsteuer.algorithmByName("2018", {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 252500,
            SOLZLZZ: 13887,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 100000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 1122100,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });


    it('should return the algorithm based on the date', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2015, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 277400,
            SOLZLZZ: 15257,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0
        });
    });

    it('should return the algorithm based on the date for 2018', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2018, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 252500,
            SOLZLZZ: 13887,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 100000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 1122100,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should return the algorithm based on the date for 2019', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2019, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 243100,
            SOLZLZZ: 13370,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 100000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 1089700,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should return the algorithm based on the date for 2020', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2020, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 233900,
            SOLZLZZ: 12864,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 100000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 1056400,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should return the algorithm based on the date for 2021', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2021, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 223400,
            SOLZLZZ: 0,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 100000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 1013500,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should return the algorithm based on the date for 2022', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2022, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 215100,
            SOLZLZZ: 0,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 100000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 980200,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should return the algorithm based on the date for 2023', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2023, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 178000,
            SOLZLZZ: 0,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 120000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 839900,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should return the algorithm based on the date for 2024', function () {
        expect(lohnsteuer.algorithmForDate(new Date(2024, 2, 1), {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 156800,
            SOLZLZZ: 0,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0,
            VFRB: 123000,
            VFRBS1: 0,
            VFRBS2: 0,
            WVFRB: 763000,
            WVFRBO: 0,
            WVFRBM: 0
        });
    });

    it('should throw if no algorithm is available', function () {
        expect(function () {
            lohnsteuer.algorithmByName('2001');
        }).to.throw('No german income tax algorithm for name 2001 available');
        expect(function () {
            lohnsteuer.algorithmForDate(new Date(2001, 2, 1));
        }).to.throw(/No german income tax algorithm for given/);
    });
});
