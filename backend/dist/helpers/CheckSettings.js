'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xe1)) / (0xf4 * -0x1 + -0x82d + 0x922) * (-parseInt(n(0xee)) / (0x14c9 + 0x26bf + -0x1 * 0x3b86)) + -parseInt(n(0xe6)) / (0x2 * -0x54e + -0x18ec + 0x238b) * (-parseInt(m(0xef)) / (0x1 * -0x1e58 + 0x262 * -0x1 + -0x42 * -0x7f)) + parseInt(n(0xe9)) / (0x2445 + -0x3ee * 0x8 + 0x268 * -0x2) + parseInt(n(0xe5)) / (-0xcd5 * 0x1 + 0x2565 + 0x3 * -0x82e) * (-parseInt(n(0xe3)) / (0x71 * -0x2 + -0x173 * 0x18 + 0x23b1)) + parseInt(m(0xfa)) / (-0x1337 + -0x5fb + 0x193a * 0x1) * (parseInt(m(0xf5)) / (-0x24be + 0x19 * -0x167 + 0x47d6)) + -parseInt(n(0xe7)) / (0xc36 + -0x13 * -0x91 + 0x13 * -0x135) + -parseInt(m(0xf3)) / (-0x1e0b + -0x197 * -0x17 + -0x67b) * (-parseInt(m(0xf0)) / (-0x2537 + -0x20d4 * 0x1 + 0x4617 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9c * 0x367 + -0x8ef5f + 0x1295a7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2035 + -0x2 * -0x16 + -0x1f80);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xfb) + p(0xe8)] || function (c) {
    const q = o;
    return c && c[q(0xe2)] ? c : { 'default': c };
};
const k = {};
k[p(0xf7)] = !![], Object[o(0xeb) + p(0xf4)](exports, p(0xe2), k);
function a() {
    const t = [
        '499384JyDjuD',
        '__importDe',
        'default',
        'nPIAy',
        '2kDMbbk',
        '__esModule',
        '3767897bJbIti',
        'ERR_NO_SET',
        '6FyKWbP',
        '3tnhxkz',
        '7710670nkrLRb',
        'fault',
        '1403745XIMhKU',
        'AppError',
        'defineProp',
        'key',
        'TING_FOUND',
        '509386TdJnvK',
        '2890676KCcEvM',
        '14243712gIvhcO',
        'Setting',
        'where',
        '11HvcXmK',
        'erty',
        '18vWzBeC',
        'findOne',
        'value',
        '../errors/',
        '../models/'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Setting_1 = __importDefault(require(p(0xf9) + o(0xf1))), AppError_1 = __importDefault(require(o(0xf8) + p(0xea))), CheckSettings = async f => {
        const r = o, s = o, g = {};
        g[r(0xfd)] = r(0xe4) + r(0xed);
        const h = g, i = {};
        i[r(0xec)] = f;
        const j = {};
        j[r(0xf2)] = i;
        const l = await Setting_1[s(0xfc)][r(0xf6)](j);
        if (!l)
            throw new AppError_1[(s(0xfc))](h[r(0xfd)], 0xe15 + -0x1f * 0x10d + 0x1412 * 0x1);
        return l[s(0xf7)];
    };
exports[o(0xfc)] = CheckSettings;