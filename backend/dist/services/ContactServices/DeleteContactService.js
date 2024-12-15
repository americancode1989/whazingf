'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x183)) / (0x1 * 0x1d72 + 0x57 * -0x40 + -0x7b1 * 0x1) * (-parseInt(u(0x172)) / (-0x243b * 0x1 + -0x4b0 + 0x1 * 0x28ed)) + parseInt(u(0x16d)) / (-0x334 * -0xa + -0x1 * -0x23c5 + -0x43ca) * (-parseInt(u(0x16e)) / (-0x266c + 0x22fb + 0x375)) + -parseInt(v(0x190)) / (0x182f * -0x1 + 0x5c4 + -0x127 * -0x10) * (parseInt(u(0x173)) / (-0x53f + 0x7bf + -0x27a)) + -parseInt(u(0x184)) / (-0x8ab * 0x1 + 0x1 * -0x16a2 + 0x1f54) + parseInt(v(0x18a)) / (0x1b07 + -0x1 * 0x2302 + 0x125 * 0x7) + -parseInt(v(0x17d)) / (-0x159 * 0x17 + 0x3cb * -0x5 + 0x31ff * 0x1) * (-parseInt(v(0x187)) / (0x28d * 0x7 + -0xca2 + 0x52f * -0x1)) + parseInt(v(0x17e)) / (0x1bee + -0xb6b + -0x1078) * (-parseInt(v(0x181)) / (0x1e63 + -0x11 * -0x4 + -0x1e9b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4c813 * -0x1 + -0x19 * 0x1ac7 + 0xa62a1));
var __importDefault = this && this[w(0x16b) + x(0x169)] || function (c) {
    const y = x;
    return c && c[y(0x192)] ? c : { 'default': c };
};
const k = {};
k[x(0x16a)] = !![], Object[x(0x193) + x(0x174)](exports, w(0x192), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd61 + -0x1 * -0x2fc + 0x5e7 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Contact_1 = __importDefault(require(w(0x18d) + x(0x18f))), AppError_1 = __importDefault(require(x(0x16c) + w(0x177) + 'r')), Ticket_1 = __importDefault(require(x(0x18d) + w(0x182))), socketEmit_1 = __importDefault(require(x(0x194) + x(0x17a) + w(0x188))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = x, A = x, l = {};
        l[z(0x178)] = z(0x17b) + z(0x18e), l[z(0x195)] = z(0x189) + A(0x186) + A(0x175), l[A(0x16f)] = z(0x17f) + z(0x191);
        const m = l, n = {};
        n['id'] = i, n[z(0x176)] = j;
        const o = {};
        o[A(0x171)] = n;
        const p = await Contact_1[z(0x18c)][z(0x170)](o);
        if (!p)
            throw new AppError_1[(z(0x18c))](m[z(0x178)], 0x4 * -0x2d3 + -0x4 * 0x7d8 + 0x162 * 0x20);
        const q = {};
        q[A(0x17c)] = i;
        const r = {};
        r[A(0x171)] = q;
        const s = await Ticket_1[z(0x18c)][z(0x18b)](r);
        if (s)
            throw new AppError_1[(A(0x18c))](m[A(0x195)], -0x1fad + 0x1ee8 + -0x259 * -0x1);
        await p[A(0x179)]();
        const t = {};
        t[z(0x176)] = j, t[A(0x185)] = m[z(0x16f)], t[z(0x180)] = p, (0xb * -0x65 + -0x2 * 0x24b + 0x8ed * 0x1, socketEmit_1[A(0x18c)])(t);
    };
exports[w(0x18c)] = DeleteContactService;
function a() {
    const B = [
        'tenantId',
        'rs/AppErro',
        'udOFb',
        'destroy',
        'ers/socket',
        'ERR_NO_CON',
        'contactId',
        '1702053JYArbY',
        '11mGkCYi',
        'contact:de',
        'payload',
        '1664076TqnrJt',
        'ls/Ticket',
        '2107MAnEwT',
        '2161271ZzqxkF',
        'type',
        'T_TICKETS_',
        '10AOFysI',
        'Emit',
        'ERR_CONTAC',
        '2805504BIstoa',
        'count',
        'default',
        '../../mode',
        'TACT_FOUND',
        'ls/Contact',
        '5zTmpvR',
        'lete',
        '__esModule',
        'defineProp',
        '../../help',
        'ndpqc',
        'fault',
        'value',
        '__importDe',
        '../../erro',
        '9aOqfDF',
        '247328OzfvHS',
        'LMIAJ',
        'findOne',
        'where',
        '358IydPfo',
        '528990yTrhsY',
        'erty',
        'REGISTERED'
    ];
    a = function () {
        return B;
    };
    return a();
}