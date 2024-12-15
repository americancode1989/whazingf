'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * 0x1b + 0x14ba + 0x6b9 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
function a() {
    const w = [
        'D360-API-K',
        'default',
        '__importDe',
        'Content-Ty',
        'method',
        'n/json',
        'data',
        'axios',
        'env',
        '13946670HtQIFM',
        '6AiWpHM',
        'applicatio',
        'rs/AppErro',
        'erty',
        '121156jSXcrH',
        'vyMJL',
        's/logger',
        'headers',
        'logger',
        '../../util',
        'NT_MESSAGE',
        'url',
        '__esModule',
        '../../erro',
        '2284HsvNIj',
        'value',
        '31576kwQkGQ',
        'defineProp',
        '360_NOT_SE',
        '655026adKrsD',
        '477VbAsrx',
        '/v1/messag',
        'error',
        'fault',
        '327AutgUH',
        '297475lOdgvp',
        'jQvOw',
        'post',
        '1471235GDGHZD',
        'API_URL_36'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x123)) / (-0x188 + 0x1c73 + -0x1aea) + -parseInt(q(0x11d)) / (0x1 * 0x1e31 + -0xcf + 0x8 * -0x3ac) + parseInt(p(0x122)) / (0xe11 + -0x1dc6 + 0x4 * 0x3ee) * (-parseInt(q(0x118)) / (0x7 * 0x183 + -0x54a + -0x547 * 0x1)) + parseInt(p(0x126)) / (-0x177a + 0x5 * 0x79f + -0xe9c) * (-parseInt(p(0x132)) / (-0x19ab + -0x2 * 0x77c + 0x28a9)) + -parseInt(p(0x136)) / (-0x1095 * 0x2 + -0x1136 + 0x3267) + parseInt(q(0x11a)) / (0xdd * 0x3 + 0x253b + -0x27ca) * (-parseInt(p(0x11e)) / (0x2 * 0xc85 + 0xbbe + -0x24bf)) + parseInt(p(0x131)) / (-0xb2 * -0x2e + 0x1 * 0x205d + 0x1 * -0x404f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11d95 + 0xa9cb + 0x1 * 0x111e6));
var __importDefault = this && this[r(0x12a) + s(0x121)] || function (c) {
    const t = r;
    return c && c[t(0x116)] ? c : { 'default': c };
};
const k = {};
k[r(0x119)] = !![], Object[s(0x11b) + r(0x135)](exports, s(0x116), k);
const axios_1 = __importDefault(require(s(0x12f))), AppError_1 = __importDefault(require(r(0x117) + r(0x134) + 'r')), logger_1 = require(s(0x13b) + s(0x138)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x137)] = v(0x125), h[u(0x124)] = u(0x133) + v(0x12d);
        const i = h, j = process[v(0x130)][v(0x127) + '0'] + (v(0x11f) + 'es');
        try {
            const l = { ...f }, m = {};
            m[u(0x12c)] = i[v(0x137)], m[u(0x13d)] = j, m[v(0x12e)] = l, m[v(0x139)] = {}, m[v(0x139)][u(0x128) + 'EY'] = g, m[v(0x139)][u(0x12b) + 'pe'] = i[v(0x124)];
            const n = await (-0x1 * -0x895 + 0x1 * -0x2007 + 0x1772, axios_1[v(0x129)])(m);
            return n[u(0x12e)];
        } catch (o) {
            logger_1[v(0x13a)][u(0x120)](o);
            throw new AppError_1[(u(0x129))](u(0x11c) + v(0x13c) + ':\x20' + o);
        }
    };
exports[r(0x129)] = SentMessage;