'use strict';
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x757 + -0x20 * -0x11 + 0x4b * 0x14);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0xc9)) / (-0x4 * -0x610 + 0xfba + 0x27f9 * -0x1) * (parseInt(B(0xb1)) / (-0x2316 + -0x416 * -0x9 + 0x2b * -0xa)) + parseInt(B(0xa5)) / (-0x1 * -0x1cd + -0x85a + 0x690) * (parseInt(C(0xad)) / (-0x1655 + -0x1b14 * -0x1 + -0x4bb)) + parseInt(C(0xbc)) / (0x1c4 * -0x2 + -0x82 * 0x18 + -0x4f * -0x33) + -parseInt(C(0xbf)) / (-0x95e + -0x1 * -0xfb + -0x869 * -0x1) * (parseInt(C(0xba)) / (0x2 * -0xa39 + 0x1fe3 * -0x1 + 0x345c)) + parseInt(B(0xa6)) / (-0x2 * 0x72f + -0x1b93 + 0x865 * 0x5) * (-parseInt(C(0xbb)) / (-0x4 * 0x791 + -0xfac + -0x1 * -0x2df9)) + -parseInt(B(0xb7)) / (-0x554 * -0x7 + 0x5 * 0x197 + -0x1 * 0x2d35) + parseInt(C(0xaf)) / (-0x503 * -0x6 + -0x20a + -0x1bfd) * (parseInt(C(0xa8)) / (0xc1 * 0x33 + -0x311 + 0x11ab * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3f299 + -0x4ed31 * 0x1 + 0x95cb7 * 0x1));
function a() {
    const I = [
        '28440mrIPNR',
        'ions',
        '12bOwifw',
        '../../mode',
        'defineProp',
        'cnpj',
        'findByPk',
        '1762148PLzPEQ',
        'email',
        '14352877QxPCcH',
        'pgFYr',
        '1108XAdwWK',
        'ls/Tenant',
        '__esModule',
        'value',
        'phone',
        'recurrence',
        '7139660gjhyGm',
        'planId',
        'name',
        '161puQcOw',
        '2259WyleIc',
        '2100090AsCBrR',
        'default',
        'maxUsers',
        '163668joAxpW',
        'dueDate',
        'erty',
        'update',
        'status',
        'maxConnect',
        'fault',
        'ownerId',
        '__importDe',
        'oPTPP',
        '1115kPdEEY',
        '3xPXDIG'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0xc7) + E(0xc5)] || function (c) {
    const F = D;
    return c && c[F(0xb3)] ? c : { 'default': c };
};
const k = {};
k[E(0xb4)] = !![], Object[E(0xaa) + E(0xc1)](exports, E(0xb3), k);
const Tenant_1 = __importDefault(require(E(0xa9) + D(0xb2))), AdminUpdateTenantService = async ({
        id: f,
        name: g,
        cnpj: h,
        maxUsers: i,
        maxConnections: j,
        planId: l,
        phone: m,
        email: n,
        dueDate: o,
        recurrence: p
    }) => {
        const G = E, H = D, q = {};
        q[G(0xb0)] = function (z, A) {
            return z !== A;
        }, q[H(0xc8)] = function (z, A) {
            return z !== A;
        };
        const r = q, s = await Tenant_1[H(0xbd)][H(0xac)](f), t = {};
        t[G(0xb9)] = g, t[H(0xab)] = h, t[H(0xb5)] = m, t[G(0xae)] = n, t[H(0xc0)] = o, t[G(0xb6)] = p;
        const u = t;
        if (r[H(0xb0)](i, undefined))
            u[H(0xbe)] = i;
        if (r[H(0xb0)](j, undefined))
            u[H(0xc4) + H(0xa7)] = j;
        if (r[H(0xc8)](l, undefined))
            u[G(0xb8)] = l;
        await s[H(0xc2)](u);
        const v = {};
        v['id'] = s['id'], v[H(0xb9)] = s[H(0xb9)], v[H(0xab)] = s[H(0xab)], v[H(0xc3)] = s[H(0xc3)], v[H(0xc6)] = s[G(0xc6)], v[G(0xbe)] = s[G(0xbe)], v[H(0xc4) + G(0xa7)] = s[H(0xc4) + G(0xa7)], v[G(0xb8)] = s[H(0xb8)], v[G(0xb5)] = s[H(0xb5)], v[G(0xae)] = s[G(0xae)], v[G(0xc0)] = s[H(0xc0)], v[G(0xb6)] = s[G(0xb6)];
        const w = v;
        return w;
    };
exports[E(0xbd)] = AdminUpdateTenantService;