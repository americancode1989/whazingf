'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2621 + 0xbe5 + 0x7 * -0x712);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'headers',
        '360_NOT_SE',
        'url',
        'value',
        '14bXCFre',
        'fault',
        'logger',
        'rs/AppErro',
        'n/json',
        '1708772qGlSpT',
        'applicatio',
        '78JIVWIB',
        '21596240DZSUVx',
        '/v1/settin',
        'axios',
        '../../util',
        '__esModule',
        'env',
        'IbYiZ',
        'method',
        's/profile',
        'post',
        '4349704owsozM',
        '__importDe',
        'API_URL_36',
        'error',
        '9StaESk',
        'default',
        'data',
        'gs/busines',
        'defineProp',
        '784211cGiQOY',
        '../../erro',
        'Content-Ty',
        '8737632yPYBeQ',
        'T_BUSINESS',
        'D360-API-K',
        '3392060VzwqVR',
        's/logger',
        '12508jtyGQA',
        'xArEg',
        'erty'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x93)) / (-0x1b8e + 0xaac + -0xb * -0x189) + -parseInt(m(0xa7)) / (-0x8a1 + -0x1d36 + 0x25d9) + parseInt(n(0xa9)) / (-0x47f * 0x1 + -0x1747 + -0x943 * -0x3) * (-parseInt(n(0x9b)) / (0xb91 + 0x79 + -0xc06)) + -parseInt(n(0x99)) / (-0x259 * 0x3 + 0x23e0 + -0x1cd0) + -parseInt(n(0x96)) / (-0x36 + -0xef5 * -0x1 + 0xeb9 * -0x1) + parseInt(m(0xa2)) / (-0xeb * -0x5 + -0x6b1 + 0x221) * (parseInt(n(0x8a)) / (0x1c6d + 0x4a6 * 0x6 + -0x12c3 * 0x3)) + parseInt(n(0x8e)) / (0xc2 + -0x345 + 0x2 * 0x146) * (parseInt(n(0xaa)) / (-0xa4 * 0xb + -0x53d + -0x277 * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x37 * -0x7fa9 + 0x16f3b5 + -0x3bc3 * 0x99));
var __importDefault = this && this[o(0x8b) + o(0xa3)] || function (c) {
    const q = o;
    return c && c[q(0xae)] ? c : { 'default': c };
};
const k = {};
k[o(0xa1)] = !![], Object[p(0x92) + p(0x9d)](exports, o(0xae), k);
const axios_1 = __importDefault(require(o(0xac))), AppError_1 = __importDefault(require(p(0x94) + o(0xa5) + 'r')), logger_1 = require(p(0xad) + p(0x9a)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = o, g = {};
        g[r(0x9c)] = r(0x89), g[r(0xb0)] = s(0xa8) + s(0xa6);
        const h = g, i = process[r(0xaf)][r(0x8c) + '0'] + (r(0xab) + s(0x91) + r(0x88));
        try {
            const j = {};
            return j[r(0xb1)] = h[s(0x9c)], j[r(0xa0)] = i, j[r(0x90)] = e, j[r(0x9e)] = {}, j[r(0x9e)][s(0x98) + 'EY'] = f, j[r(0x9e)][s(0x95) + 'pe'] = h[r(0xb0)], await (0x568 * 0x1 + -0xaba * -0x1 + 0x23 * -0x76, axios_1[s(0x8f)])(j), !![];
        } catch (l) {
            logger_1[s(0xa4)][s(0x8d)](l);
            throw new AppError_1[(r(0x8f))](r(0x9f) + r(0x97) + ':\x20' + l);
        }
    };
exports[o(0x8f)] = SetBusinessProfile;