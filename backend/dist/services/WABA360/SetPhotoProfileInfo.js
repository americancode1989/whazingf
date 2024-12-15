'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xf7)) / (0x8a7 + 0x1 * -0xf45 + 0x1 * 0x69f) + -parseInt(p(0x115)) / (-0x185e + 0x2 * 0x274 + 0x1378) * (parseInt(p(0xf3)) / (-0x2 * 0x5de + -0x1 * 0x88 + -0x1c1 * -0x7)) + -parseInt(o(0x108)) / (-0x1169 * -0x1 + 0x2 * 0x7f9 + -0x3 * 0xb1d) + parseInt(o(0xeb)) / (-0x22e3 + -0x11b * 0x19 + -0x3e8b * -0x1) * (-parseInt(o(0x10d)) / (0x1b3a + 0x1a52 + -0x3586)) + parseInt(o(0xfd)) / (-0x356 * -0x9 + -0xb1a + 0x12e5 * -0x1) * (-parseInt(o(0xee)) / (-0x1dbf * -0x1 + -0xe * 0x113 + 0x1 * -0xead)) + parseInt(o(0xf2)) / (0x16b4 + 0x17e6 + 0x2e91 * -0x1) * (-parseInt(o(0x110)) / (0x1 * 0x1c0f + -0x225a + 0x655 * 0x1)) + -parseInt(o(0xfb)) / (-0x68 * 0x57 + -0x65b + -0xd * -0x336) * (-parseInt(o(0xed)) / (-0x1 * -0x7a + -0x13b4 + 0x1346 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x19 * 0x166 + -0xbdb5 * 0xb + 0xf9af2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x41a + 0x85 * -0x49 + 0x115f * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x117) + r(0xf6)] || function (c) {
    const s = r;
    return c && c[s(0xff)] ? c : { 'default': c };
};
const k = {};
k[q(0x101)] = !![], Object[q(0x114) + q(0x113)](exports, r(0xff), k);
const axios_1 = __importDefault(require(q(0xf5))), AppError_1 = __importDefault(require(q(0x116) + q(0x109) + 'r')), logger_1 = require(q(0xf4) + r(0x107)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x112)] = u(0xfe), h[u(0x105)] = u(0x100) + u(0xec);
        const i = h, j = process[t(0xfa)][u(0x111) + '0'] + (t(0xf9) + t(0xef) + u(0xf8));
        try {
            const l = {};
            l[t(0xfc)] = f;
            const m = {};
            return m[u(0xf0)] = i[u(0x112)], m[u(0x104)] = j, m[t(0x106)] = l, m[u(0x103)] = {}, m[u(0x103)][t(0x10b) + 'EY'] = g, m[u(0x103)][t(0x10f) + 'pe'] = i[u(0x105)], await (0x1088 + 0xd1 * -0x1 + -0xfb7, axios_1[u(0x10a)])(m), !![];
        } catch (n) {
            logger_1[t(0x10e)][t(0xf1)](n);
            throw new AppError_1[(t(0x10a))](t(0x102) + t(0x10c) + n);
        }
    };
function a() {
    const v = [
        'IuZix',
        'erty',
        'defineProp',
        '188yxlmdJ',
        '../../erro',
        '__importDe',
        '65GZEjlz',
        'form-data',
        '276BumLJb',
        '16mKIvxb',
        'gs/profile',
        'method',
        'error',
        '364077SHtwPh',
        '16869cYeDSZ',
        '../../util',
        'axios',
        'fault',
        '72323WIlodb',
        '/photo',
        '/v1/settin',
        'env',
        '1614173USeyIk',
        'file',
        '2977219unrnGu',
        'post',
        '__esModule',
        'multipart/',
        'value',
        '360_NOT_SE',
        'headers',
        'url',
        'eemxp',
        'data',
        's/logger',
        '1117380eeFgSj',
        'rs/AppErro',
        'default',
        'D360-API-K',
        'T_PHOTO:\x20',
        '174882DdFveD',
        'logger',
        'Content-Ty',
        '230cEGeix',
        'API_URL_36'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[r(0x10a)] = SetPhotoProfileInfo;