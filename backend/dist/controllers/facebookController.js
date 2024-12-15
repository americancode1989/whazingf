'use strict';
function a() {
    const u = [
        'value',
        'defineProp',
        'tenantId',
        '12jOcqxF',
        'erty',
        '18VilOzw',
        'default',
        'etTokenAnd',
        'LinkedPage',
        '9289qvSdcX',
        'status',
        'etLogoutLi',
        'fault',
        'store',
        'gout',
        'userToken',
        's/Facebook',
        '162805oBJHoj',
        'whatsapp',
        'json',
        'facebookLo',
        '1329918kYtYjB',
        'Services/G',
        '4147278InAEmH',
        'user',
        'body',
        'Services/S',
        '../service',
        '7656490BRnotc',
        '__importDe',
        '3120fbAoyZ',
        'nkedPage',
        'accountId',
        '1591932hWJDwS',
        '668767vzKpji',
        '__esModule'
    ];
    a = function () {
        return u;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x14c)) / (0x1 * -0xe6a + 0x1f66 * -0x1 + -0x1 * -0x2dd1) + parseInt(m(0x13f)) / (-0x11 * -0xf2 + 0x3 * 0x985 + -0x2c9f) + parseInt(m(0x14b)) / (-0xd0f * -0x1 + -0x373 * -0x3 + -0x1765) + -parseInt(l(0x151)) / (0x872 + -0xb5 + -0x293 * 0x3) * (parseInt(l(0x13b)) / (-0x1 * -0x1b81 + -0x12f + -0x1a4d)) + parseInt(l(0x141)) / (-0x2f * -0x6b + 0x94 * 0x1c + 0x1 * -0x23cf) + -parseInt(m(0x133)) / (-0xb * 0x1cd + 0x19eb + -0x615) * (parseInt(l(0x148)) / (-0x2 * 0x3ee + -0x1 * -0x18fd + -0x1 * 0x1119)) + parseInt(m(0x12f)) / (-0x2 * -0xe19 + 0x206c + -0x3c95) * (-parseInt(l(0x146)) / (0x1 * 0x26e4 + 0x189b + -0x3f75));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa * 0xa003 + 0xb2b86 + -0x17 * 0x7c6c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7b2 + 0x1 * -0x269b + 0x68 * 0x4f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x147) + n(0x136)] || function (c) {
    const p = o;
    return c && c[p(0x14d)] ? c : { 'default': c };
};
const k = {};
k[n(0x14e)] = !![], Object[n(0x14f) + n(0x152)](exports, o(0x14d), k), exports[o(0x13e) + o(0x138)] = exports[n(0x137)] = void (0x2 * 0x3c7 + 0x13d + 0x1 * -0x8cb);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x145) + o(0x13a) + o(0x140) + n(0x131) + n(0x132))), SetLogoutLinkedPage_1 = __importDefault(require(o(0x145) + n(0x13a) + o(0x144) + o(0x135) + n(0x149))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x143)], i = {};
        return i[q(0x13c)] = f, i[q(0x14a)] = g, i[q(0x139)] = h, i[q(0x150)] = d[r(0x142)][r(0x150)], await (0x167f + 0x1 * 0x267b + 0x1be * -0x23, GetTokenAndLinkedPage_1[r(0x130)])(i), e[q(0x134)](0x6 * -0x64e + -0x8e0 * -0x2 + 0x14dc)[q(0x13d)]();
    };
exports[n(0x137)] = store;
const facebookLogout = async (d, e) => {
    const s = n, t = o, f = d[s(0x143)], g = {};
    return g[s(0x13c)] = f, g[t(0x150)] = d[s(0x142)][s(0x150)], await (0xb2 * 0xa + 0x1c4b * 0x1 + 0x1 * -0x233f, SetLogoutLinkedPage_1[s(0x130)])(g), e[t(0x134)](0x13 * 0x22 + -0x78 * 0x15 + -0x7a * -0x11)[t(0x13d)]();
};
exports[n(0x13e) + o(0x138)] = facebookLogout;