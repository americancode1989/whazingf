'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1f5)) / (-0x6 * 0x347 + -0x1 * 0xc4b + 0x1ff6) * (-parseInt(n(0x211)) / (0x1f0a * 0x1 + -0x17b8 + -0xd * 0x90)) + parseInt(n(0x201)) / (-0x309 + -0x7 * -0x2ae + -0xfb6) + -parseInt(n(0x21d)) / (-0x1a7a + -0x191a + -0x2 * -0x19cc) + -parseInt(n(0x1f4)) / (-0xf60 + -0x3d * 0x57 + -0x4 * -0x908) * (-parseInt(m(0x21b)) / (-0x27 * 0x2 + -0x180c + 0x1860)) + -parseInt(m(0x1fe)) / (0x158 + 0x47a + -0x5cb) * (-parseInt(m(0x214)) / (0x117 * 0x23 + -0x234c + -0x2d1)) + parseInt(n(0x213)) / (0x3 * -0x803 + -0xe8 * 0x4 + 0x1bb2) + -parseInt(n(0x203)) / (0xb * -0xd + 0x6 * 0x5fb + -0x1 * 0x2349);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5425a + -0x505f2 + 0x3948e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbb9 * -0x2 + 0x1 * 0x853 + 0x1112);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'default',
        '1589067TJVvdb',
        '18896GiyNHE',
        'ZCuuo',
        'mber',
        'axios',
        'url',
        'applicatio',
        'Content-Ty',
        '2293446EvLOPy',
        '../../util',
        '1189448RYuIAp',
        '__importDe',
        'value',
        '5RSwuRh',
        '1BlaFUs',
        'n/json',
        'defineProp',
        '../../erro',
        'headers',
        'T_PHONE_NU',
        'aQuQU',
        'MBER_REGIS',
        'rs/AppErro',
        '1099dcoYoY',
        '360_NOT_GE',
        'API_URL_36',
        '596529HHvaem',
        'erty',
        '9446600vbYvxN',
        'method',
        'D360-API-K',
        's/logger',
        'TERED:\x20',
        'error',
        '/v1/config',
        'get',
        's/phone_nu',
        'data',
        '__esModule',
        'fault',
        'env',
        'logger',
        '727286bmRSOq'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x21e) + o(0x20e)] || function (c) {
    const q = p;
    return c && c[q(0x20d)] ? c : { 'default': c };
};
const k = {};
k[o(0x1f3)] = !![], Object[o(0x1f7) + p(0x202)](exports, o(0x20d), k);
const axios_1 = __importDefault(require(o(0x217))), AppError_1 = __importDefault(require(p(0x1f8) + p(0x1fd) + 'r')), logger_1 = require(p(0x21c) + p(0x206)), GetRegisteredPhone = async e => {
        const r = o, s = p, f = {};
        f[r(0x215)] = s(0x20a), f[s(0x1fb)] = s(0x219) + s(0x1f6);
        const g = f, h = process[s(0x20f)][s(0x200) + '0'] + (r(0x209) + s(0x20b) + s(0x216));
        try {
            const i = {};
            i[s(0x204)] = g[r(0x215)], i[r(0x218)] = h, i[r(0x1f9)] = {}, i[r(0x1f9)][r(0x205) + 'EY'] = e, i[r(0x1f9)][s(0x21a) + 'pe'] = g[s(0x1fb)];
            const j = await (-0xd * -0x17b + 0x1484 + -0x15f * 0x1d, axios_1[r(0x212)])(i);
            return j[s(0x20c)];
        } catch (l) {
            logger_1[s(0x210)][s(0x208)](l);
            throw new AppError_1[(r(0x212))](r(0x1ff) + s(0x1fa) + r(0x1fc) + s(0x207) + l);
        }
    };
exports[p(0x212)] = GetRegisteredPhone;