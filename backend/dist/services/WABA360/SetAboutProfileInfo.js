'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xae)) / (0x2 * -0x10b4 + 0x11 * -0x24 + -0x2f * -0xc3) * (-parseInt(p(0xb6)) / (0x1fbd * 0x1 + 0xf2e + -0x2ee9)) + parseInt(p(0xc5)) / (-0x22fc + -0x13d7 + -0x36d6 * -0x1) + -parseInt(p(0xaf)) / (0xce * 0x16 + -0x1525 * -0x1 + -0x26d5) * (parseInt(p(0xb1)) / (-0x1 * -0x23d + -0xfa * 0x12 + 0xf5c)) + parseInt(p(0xb8)) / (-0x1502 + -0x13fc + 0x2904) * (parseInt(o(0xd2)) / (-0x2641 + 0x106 * 0x24 + 0x17 * 0x10)) + parseInt(o(0xab)) / (-0x16b * 0x8 + -0x56f * -0x1 + 0x5f1) + parseInt(p(0xcd)) / (0xa3e + -0x20b * -0x5 + -0x146c) * (parseInt(p(0xc2)) / (-0x1192 + -0x1 * -0xf24 + 0x278)) + -parseInt(o(0xb7)) / (-0x1 * 0x242b + -0xec * 0x3 + 0x26fa) * (parseInt(p(0xbd)) / (-0x328 * -0xc + 0x1b22 + -0x40f6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6fe42 + -0x5f385 + 0x624b * 0xb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b8f + -0x1 * 0xfc1 + -0xb24);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0xc3) + q(0xbc)] || function (c) {
    const s = r;
    return c && c[s(0xd3)] ? c : { 'default': c };
};
const k = {};
k[r(0xcf)] = !![], Object[q(0xc4) + r(0xcc)](exports, r(0xd3), k);
function a() {
    const v = [
        'value',
        'data',
        's/logger',
        '59353YHKwdT',
        '__esModule',
        'HghPy',
        'applicatio',
        'aKSQb',
        'text',
        '715984qyiIpW',
        'headers',
        '360_NOT_SE',
        '77074gGQkNT',
        '1147544ZfnCQI',
        'API_URL_36',
        '10pcVjim',
        '/about',
        'error',
        'gs/profile',
        '../../util',
        '16ukbbcJ',
        '3446377oOhibT',
        '342NbcUyN',
        'n/json',
        'url',
        'method',
        'fault',
        '48WyleJj',
        'Content-Ty',
        'logger',
        'axios',
        '/v1/settin',
        '22790VQJtoE',
        '__importDe',
        'defineProp',
        '958488PkPGKl',
        '../../erro',
        'rs/AppErro',
        'D360-API-K',
        'env',
        'T_ABOUT:\x20',
        'patch',
        'erty',
        '2619OrrMAt',
        'default'
    ];
    a = function () {
        return v;
    };
    return a();
}
const axios_1 = __importDefault(require(r(0xc0))), AppError_1 = __importDefault(require(r(0xc6) + q(0xc7) + 'r')), logger_1 = require(q(0xb5) + q(0xd1)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0xd4)] = t(0xcb), h[t(0xd6)] = t(0xd5) + u(0xb9);
        const i = h, j = process[t(0xc9)][t(0xb0) + '0'] + (u(0xc1) + u(0xb4) + t(0xb2));
        try {
            const l = {};
            l[t(0xaa)] = f;
            const m = {};
            return m[t(0xbb)] = i[u(0xd4)], m[t(0xba)] = j, m[u(0xd0)] = l, m[u(0xac)] = {}, m[u(0xac)][t(0xc8) + 'EY'] = g, m[u(0xac)][t(0xbe) + 'pe'] = i[t(0xd6)], await (0x2 * -0x102a + -0x1830 + 0x2 * 0x1c42, axios_1[t(0xce)])(m), !![];
        } catch (n) {
            logger_1[t(0xbf)][t(0xb3)](n);
            throw new AppError_1[(t(0xce))](t(0xad) + t(0xca) + n);
        }
    };
exports[r(0xce)] = SetAboutProfileInfo;