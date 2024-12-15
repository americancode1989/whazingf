'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xdd)) / (0x9 * 0x87 + -0xcd * -0x2f + -0x2a61) + -parseInt(n(0xc8)) / (0x3f8 + 0x407 + 0x1 * -0x7fd) + parseInt(n(0xba)) / (-0x1 * 0x675 + 0x1c7c + -0x1604) * (parseInt(n(0xca)) / (0x1 * -0x2194 + -0x1 * -0x119a + 0xffe)) + -parseInt(o(0xc0)) / (0x2601 + 0x24f7 + -0x4af3) + parseInt(n(0xd4)) / (-0x198e + -0x2 * -0xe67 + -0x33a) * (parseInt(o(0xbf)) / (0x9d * 0x17 + -0x7 * -0x11e + -0x15e6 * 0x1)) + parseInt(o(0xcb)) / (0x4d5 * -0x2 + 0x5b * 0x67 + -0x1aeb * 0x1) * (parseInt(n(0xc9)) / (0x10c3 * -0x1 + -0x5 * -0x101 + -0xf * -0xc9)) + -parseInt(o(0xcc)) / (0x14 * 0x15a + -0xc30 + -0xece);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3397c + -0x1 * 0x6f7df + -0x4 * -0x38aad));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5ae * -0x5 + -0xc96 + -0xf1e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '294859QfMXFN',
        'wait',
        '__importDe',
        'data',
        'erty',
        'liUKc',
        'value',
        'Content-Ty',
        '../../erro',
        'API_URL_36',
        '111VgnXIn',
        '__esModule',
        'contacts',
        'T_CONTACTS',
        'applicatio',
        '42OQtamq',
        '391485iYXFnH',
        'ikeiQ',
        'KSses',
        'headers',
        'rs/AppErro',
        'axios',
        '/v1/contac',
        'blocking',
        '934212TtYLpI',
        '1852803pZpnbB',
        '18188LIHdTl',
        '8McUcDC',
        '2749190UeOzgY',
        '360_NOT_GE',
        'logger',
        's/logger',
        'env',
        'error',
        'n/json',
        'default',
        '411798Ncaxra',
        'url',
        'force_chec',
        'defineProp',
        '../../util',
        'post',
        'D360-API-K',
        'fault',
        'method'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xb2) + q(0xdb)] || function (c) {
    const r = q;
    return c && c[r(0xbb)] ? c : { 'default': c };
};
const k = {};
k[q(0xb6)] = !![], Object[q(0xd7) + p(0xb4)](exports, p(0xbb), k);
const axios_1 = __importDefault(require(p(0xc5))), AppError_1 = __importDefault(require(p(0xb8) + q(0xc4) + 'r')), logger_1 = require(q(0xd8) + p(0xcf)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = p, t = q, g = {};
        g[s(0xc1)] = t(0xd9), g[t(0xb5)] = s(0xde), g[s(0xc2)] = s(0xbe) + s(0xd2);
        const h = g, i = process[t(0xd0)][s(0xb9) + '0'] + (t(0xc6) + 'ts');
        try {
            const j = {};
            j[s(0xdc)] = h[t(0xc1)], j[s(0xd5)] = i, j[s(0xb3)] = {}, j[s(0xc3)] = {}, j[s(0xb3)][t(0xc7)] = h[s(0xb5)], j[s(0xb3)][s(0xd6) + 'k'] = !![], j[s(0xb3)][t(0xbc)] = e, j[s(0xc3)][t(0xda) + 'EY'] = f, j[s(0xc3)][s(0xb7) + 'pe'] = h[s(0xc2)];
            const l = await (-0xb1 * 0x7 + 0x3 + 0x4d4, axios_1[t(0xd3)])(j);
            return l[s(0xb3)];
        } catch (m) {
            logger_1[s(0xce)][s(0xd1)](m);
            throw new AppError_1[(s(0xd3))](s(0xcd) + s(0xbd) + ':\x20' + m);
        }
    };
exports[q(0xd3)] = CheckContact;