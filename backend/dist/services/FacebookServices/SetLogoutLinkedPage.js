'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x129)) / (0x1b0e + 0x2664 + -0x4171) * (-parseInt(u(0x120)) / (-0xccc + 0x24a6 * 0x1 + -0x17d8)) + -parseInt(u(0x11d)) / (0xbdb + -0x2 * -0xfa3 + -0x2b1e) * (-parseInt(u(0x136)) / (0x13d * 0x4 + -0x54f + 0x5f)) + -parseInt(u(0x128)) / (0x2b1 + -0x29b * -0xd + -0x1 * 0x248b) + parseInt(v(0x13c)) / (-0x4 * -0x44a + -0x2389 + -0x7 * -0x2a1) * (parseInt(v(0x142)) / (0x286 * -0x3 + -0x1 * -0x38c + 0x40d)) + parseInt(v(0x13d)) / (0xd0 * -0x30 + -0xfa5 + 0x36ad) * (parseInt(v(0x13e)) / (-0x5e * -0x5 + 0x24e5 + 0x6 * -0x673)) + parseInt(u(0x135)) / (0x22a * 0x8 + 0x3f1 * -0x3 + -0x573) + parseInt(v(0x12f)) / (-0x779 * 0x2 + 0x14f5 + -0x5f8) * (-parseInt(u(0x137)) / (-0x11ad + -0x1e8b + 0x2 * 0x1822));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x101d6b + -0x28fe5 + -0x29 * 0x259));
var __importDefault = this && this[w(0x13b) + w(0x12a)] || function (c) {
    const y = w;
    return c && c[y(0x123)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15b6 + -0xe4 * -0x1 + 0x312 * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'value',
        'fbPageId',
        '__esModule',
        'update',
        'where',
        'fbObject',
        'action',
        '8371500fmaBqt',
        '353363XTXrbi',
        'fault',
        ':whatsappS',
        'tokenAPI',
        'erty',
        'XpEnM',
        '33ghKfMs',
        'DISCONNECT',
        'status',
        'session',
        'emit',
        'ls/Whatsap',
        '2694540JVUSOE',
        '1636OLGvjj',
        '258108lYbZyx',
        '../../mode',
        'getIO',
        'defineProp',
        '__importDe',
        '269118NYIDql',
        '16UiYmAe',
        '3081717nzIgKC',
        'ession',
        '/socket',
        '../../libs',
        '175RpCpNv',
        'tenantId',
        '1272xrZdsP',
        'default',
        'gmGyh',
        '2lenIMj'
    ];
    a = function () {
        return B;
    };
    return a();
}
const q = {};
q[x(0x121)] = !![], Object[w(0x13a) + x(0x12d)](exports, w(0x123), q);
const socket_1 = require(x(0x141) + w(0x140)), Whatsapp_1 = __importDefault(require(w(0x138) + w(0x134) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = x, A = x, k = {};
        k[z(0x11f)] = A(0x130) + 'ED', k[A(0x12e)] = A(0x124);
        const l = k, m = (-0x4f * 0x6b + 0x572 + -0x1b93 * -0x1, socket_1[A(0x139)])(), n = {};
        n[z(0x122)] = null, n[z(0x126)] = {}, n[z(0x12c)] = null, n[A(0x131)] = l[A(0x11f)];
        const o = n, p = {};
        p['id'] = i['id'], p[z(0x11c)] = j;
        const r = {};
        r[A(0x125)] = p, Whatsapp_1[A(0x11e)][A(0x124)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[A(0x127)] = l[z(0x12e)], t[z(0x132)] = s, m[z(0x133)](j + (A(0x12b) + z(0x13f)), t);
    };
exports[w(0x11e)] = SetLogoutLinkedPage;