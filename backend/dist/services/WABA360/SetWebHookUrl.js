'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x73)) / (-0x1 * 0x4b1 + -0x84a + 0x6 * 0x22a) + -parseInt(p(0x84)) / (-0x8 * -0x4c2 + -0x3 * -0x172 + -0x2a64) * (-parseInt(p(0x70)) / (-0x46a * 0x4 + -0x32 * 0xa0 + -0x7 * -0x6fd)) + parseInt(o(0x8c)) / (-0x705 + 0x24d7 + -0x1dce * 0x1) * (-parseInt(p(0x8b)) / (0x2 * 0xbe1 + 0x24b * 0x2 + -0x1c53)) + parseInt(o(0x89)) / (-0x2d * 0xc1 + -0x20f * -0x7 + -0x9c5 * -0x2) * (-parseInt(p(0x78)) / (-0x1dbc + -0xbf8 + -0x9 * -0x4a3)) + parseInt(p(0x6e)) / (0x21da + 0x576 * 0x6 + -0x1632 * 0x3) * (parseInt(p(0x85)) / (-0x4e9 * -0x7 + -0x27 * 0x25 + -0x1f * 0xed)) + -parseInt(p(0x7a)) / (-0x7f0 * 0x1 + 0x15f5 + -0xdfb) * (-parseInt(p(0x71)) / (-0x10d2 * -0x1 + 0x21df + -0x32a6)) + parseInt(o(0x69)) / (-0x1 * -0x1c05 + 0x57f + -0x2178);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x110aa * 0x5 + -0x522e4 + 0x5c430));
function a() {
    const v = [
        '48TeHXow',
        '/v1/config',
        '122457vQQMSp',
        '11umiHYj',
        'Content-Ty',
        '780239BKAFZl',
        'qAkhJ',
        'post',
        '__importDe',
        'method',
        '7wlntdg',
        'erty',
        '6824270hsYTWi',
        'Gwcel',
        'default',
        'axios',
        'env',
        'data',
        's/webhook',
        '__esModule',
        'T_WEBHOOK:',
        'headers',
        '2OVpLoc',
        '821862HYAkVX',
        'fault',
        'value',
        'n/json',
        '680454mUcCUa',
        '360_NOT_SE',
        '11775UTEWqO',
        '1028lNawnF',
        'rs/AppErro',
        'defineProp',
        'error',
        '../../erro',
        'D360-API-K',
        'logger',
        'url',
        '7416372XhMjsT',
        'API_URL_36',
        '../../util',
        's/logger',
        'applicatio'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1330 + 0x2069 + -0xcd1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x76) + r(0x86)] || function (c) {
    const s = r;
    return c && c[s(0x81)] ? c : { 'default': c };
};
const k = {};
k[q(0x87)] = !![], Object[r(0x8e) + q(0x79)](exports, q(0x81), k);
const axios_1 = __importDefault(require(r(0x7d))), AppError_1 = __importDefault(require(q(0x90) + r(0x8d) + 'r')), logger_1 = require(q(0x6b) + r(0x6c)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x74)] = u(0x75), h[t(0x7b)] = t(0x6d) + u(0x88);
        const i = h, j = process[t(0x7e)][u(0x6a) + '0'] + (u(0x6f) + t(0x80));
        try {
            const l = {};
            l[t(0x68)] = f;
            const m = {};
            return m[t(0x77)] = i[t(0x74)], m[t(0x68)] = j, m[t(0x7f)] = l, m[u(0x83)] = {}, m[u(0x83)][t(0x91) + 'EY'] = g, m[u(0x83)][u(0x72) + 'pe'] = i[t(0x7b)], await (0x3 * 0x68f + -0x158a + -0x9 * -0x35, axios_1[u(0x7c)])(m), !![];
        } catch (n) {
            logger_1[u(0x92)][u(0x8f)](n);
            throw new AppError_1[(u(0x7c))](t(0x8a) + t(0x82) + '\x20' + n);
        }
    };
exports[q(0x7c)] = SetWebHookUrl;