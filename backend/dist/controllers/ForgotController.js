'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xce)) / (-0x2fe * 0x9 + -0x1812 + -0x1 * -0x3301) + parseInt(q(0xae)) / (0x4ff + 0x1951 + -0x1e4e) * (parseInt(q(0xbd)) / (0x1 * -0x2368 + 0x133d + 0x102e)) + -parseInt(r(0xb2)) / (-0x1638 + -0x2 * 0xd + -0x3 * -0x772) + parseInt(r(0xd6)) / (0xd * 0x1dd + 0x1286 + -0x1 * 0x2aba) * (parseInt(r(0xb6)) / (-0x4 * -0x916 + -0xce5 * 0x1 + -0x3 * 0x7cf)) + -parseInt(q(0xd2)) / (0x1 * 0x114a + -0x214f * 0x1 + 0x100c) * (-parseInt(q(0xcc)) / (-0x33e + 0x223c + 0xa52 * -0x3)) + parseInt(r(0xb3)) / (0xbaf * -0x1 + -0x7f4 * 0x3 + 0x114 * 0x21) + -parseInt(q(0xb8)) / (-0x9 * 0x3bf + 0x1657 + 0xb6a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x95ded + -0x56e7 * -0x9 + 0xcc89a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x32c + 0x90e * -0x3 + 0x222f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xd3) + s(0xd4)] || function (c) {
    const u = s;
    return c && c[u(0xd8)] ? c : { 'default': c };
};
const k = {};
k[s(0xcb)] = !![], Object[t(0xaf) + t(0xdb)](exports, s(0xd8), k), exports[t(0xc5) + s(0xc0)] = exports[t(0xd1)] = void (0x2 * -0x8ab + 0x1a89 + -0xf * 0x9d);
const uuid_1 = require(t(0xb7)), SendMail_1 = __importDefault(require(t(0xad) + s(0xd7) + s(0xca) + s(0xc9) + t(0xb9))), ResetPassword_1 = __importDefault(require(s(0xad) + s(0xc6) + s(0xc4) + s(0xc2) + s(0xb4))), store = async (f, g) => {
        const v = s, w = t, h = {};
        h[v(0xda)] = v(0xba) + w(0xbb) + v(0xbf);
        const i = h, {email: j} = f[v(0xb1)], l = (0x67f + 0x1 * -0xd88 + 0x709, uuid_1['v4'])(), m = await (-0xeab + 0x8 * -0x25 + -0xfd3 * -0x1, SendMail_1[v(0xc1)])(j, l);
        if (!m) {
            const o = {};
            return o[w(0xcd)] = i[w(0xda)], g[v(0xbc)](-0x3a2 + -0x15d8 + -0xd21 * -0x2)[v(0xb0)](o);
        }
        const n = {};
        return n[w(0xd0)] = i[v(0xda)], g[v(0xbc)](-0x40e + -0x1 * -0x22d + -0xf * -0x3b)[v(0xb0)](n);
    };
exports[s(0xd1)] = store;
const resetPasswords = async (f, g) => {
    const x = t, y = s, h = {};
    h[x(0xc3)] = y(0xcf) + y(0xbe) + y(0xd5), h[x(0xb5)] = x(0xc8) + y(0xd9) + y(0xc7);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[y(0xb1)], n = await (-0x513 + 0xdf1 + -0x8de, ResetPassword_1[x(0xc1)])(j, l, m);
    if (!n) {
        const p = {};
        return p[x(0xcd)] = i[x(0xc3)], g[y(0xbc)](0x146 * -0x15 + 0x248f + 0x9 * -0x101)[y(0xb0)](p);
    }
    const o = {};
    return o[x(0xd0)] = i[x(0xb5)], g[y(0xbc)](0xa * -0x2cc + 0x1eab + 0x7 * -0x29)[y(0xb0)](o);
};
function a() {
    const z = [
        'Senha\x20rede',
        'error',
        'store',
        '7xZCgZQ',
        '__importDe',
        'fault',
        '\x20sucesso',
        '1190370YlebGb',
        's/ForgotPa',
        '__esModule',
        'o\x20Token\x20in',
        'gWpBU',
        'erty',
        '../service',
        '24130yYXcck',
        'defineProp',
        'json',
        'params',
        '1012684vXTZeZ',
        '1190844XdEhpv',
        'ssword',
        'Qkbln',
        '6qpqVaO',
        'uuid',
        '401390eGtWXw',
        'ail',
        'E-mail\x20env',
        'iado\x20com\x20s',
        'status',
        '33uodLMx',
        'finida\x20com',
        'ucesso',
        'ords',
        'default',
        'ce/ResetPa',
        'XGKdl',
        'swordServi',
        'resetPassw',
        's/ResetPas',
        'formado',
        'Verifique\x20',
        'ices/SendM',
        'ssWordServ',
        'value',
        '3665072HMUGES',
        'message',
        '243789GpOeUe'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[t(0xc5) + t(0xc0)] = resetPasswords;