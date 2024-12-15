'use strict';
const C = b, D = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e2e + -0x119e + 0x304b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x97)) / (-0x257a + -0xc7 * 0x7 + 0x2aec) + -parseInt(A(0x9c)) / (-0x2001 + 0x1de9 + 0x10d * 0x2) + -parseInt(A(0xa1)) / (0x6d7 + -0x11d7 + -0xb03 * -0x1) + -parseInt(B(0xbe)) / (0x1e1e + -0x1b60 + 0x2ba * -0x1) * (-parseInt(A(0xab)) / (-0xdda + 0xfc2 * 0x1 + -0x1e3)) + -parseInt(B(0x8e)) / (-0x1a1f + 0x6ee + 0x1 * 0x1337) + parseInt(A(0x8f)) / (-0x19f3 + -0x2630 + -0x2015 * -0x2) * (parseInt(A(0xa7)) / (0x6b * 0x1 + -0x6a4 + 0x641 * 0x1)) + parseInt(A(0xb2)) / (0x9 * -0x39e + 0x47d * 0x8 + -0x1 * 0x351);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x2775 + 0x13044 + -0xd * -0x4ff6));
var __importDefault = this && this[C(0x93) + C(0xc0)] || function (c) {
    const E = D;
    return c && c[E(0xc1)] ? c : { 'default': c };
};
const k = {};
k[D(0xaf)] = !![], Object[C(0x9b) + D(0xba)](exports, D(0xc1), k);
const User_1 = __importDefault(require(C(0x94) + C(0x83))), AppError_1 = __importDefault(require(C(0x88) + C(0xbb) + 'r')), CreateTokens_1 = require(D(0x84) + C(0xa2) + C(0xb9)), Queue_1 = __importDefault(require(C(0x94) + D(0x8a))), Tenant_1 = __importDefault(require(D(0x94) + C(0xb7))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0x87)] = F(0x82), n[F(0x95)] = G(0xbd), n[G(0x9a)] = G(0xa3), n[F(0x90)] = G(0x81) + F(0xb5) + G(0x85), n[F(0xb6)] = G(0x91), n[F(0x9e)] = G(0xa9), n[F(0xb8)] = G(0xa6), n[F(0x9d)] = F(0xb4), n[G(0x89)] = F(0xb3), n[F(0xae)] = G(0xad);
        const o = n, p = {};
        p[F(0xa9)] = l;
        const q = {};
        q[F(0x7f)] = Queue_1[F(0xb1)], q['as'] = o[F(0x87)];
        const r = {};
        r[F(0x7f)] = Tenant_1[F(0xb1)], r['as'] = o[G(0x95)], r[F(0x98)] = {}, r[F(0x98)][G(0xa6)] = o[G(0x9a)];
        const s = {};
        s[G(0x98)] = p, s[G(0xa0)] = [
            q,
            r
        ];
        const t = await User_1[G(0xb1)][G(0x8d)](s);
        if (!t)
            throw new AppError_1[(F(0xb1))](o[F(0x90)], 0x1035 * 0x2 + 0x1628 + -0x3 * 0x11ab);
        if (!await t[G(0x9f) + F(0xb0)](m))
            throw new AppError_1[(G(0xb1))](o[F(0x90)], 0x1188 + -0x4ca * 0x6 + 0x7 * 0x1d3);
        const u = (0x21a + -0x1 * -0x6e6 + -0x900, CreateTokens_1[F(0xa4) + G(0x8c)])(t), v = (-0x576 * 0x6 + 0xc3a * 0x2 + 0x10a * 0x8, CreateTokens_1[F(0x96) + G(0x92)])(t);
        await t[F(0xa5)]({
            'isOnline': !![],
            'status': o[G(0xb6)],
            'lastLogin': new Date()
        });
        const w = {};
        w[G(0x86)] = t[F(0x86)], w[F(0x80)] = !![];
        const x = {};
        x[F(0x98)] = w, x[F(0xac)] = [
            'id',
            o[F(0x9e)],
            o[G(0xb8)],
            o[G(0x9d)],
            o[F(0x89)],
            o[F(0xae)]
        ];
        const y = await User_1[F(0xb1)][G(0xa8)](x), z = {};
        return z[F(0x8b)] = t, z[G(0xaa)] = u, z[F(0x99) + 'en'] = v, z[G(0xbc) + G(0xbf)] = y, z;
    };
exports[D(0xb1)] = AuthUserService;
function a() {
    const H = [
        'ers/Create',
        'active',
        'createAcce',
        'update',
        'status',
        '5576hFadUF',
        'findAll',
        'email',
        'token',
        '5udRavY',
        'attributes',
        'lastLogin',
        'LroEd',
        'value',
        'ord',
        'default',
        '3311262NJCWzZ',
        'name',
        'lastOnline',
        'D_CREDENTI',
        'KCEKc',
        'ls/Tenant',
        'BKRml',
        'Tokens',
        'erty',
        'rs/AppErro',
        'usuariosOn',
        'tenant',
        '2963816EOVuuf',
        'line',
        'fault',
        '__esModule',
        'model',
        'isOnline',
        'ERR_INVALI',
        'queues',
        'ls/User',
        '../../help',
        'ALS',
        'tenantId',
        'hGtCy',
        '../../erro',
        'YZElH',
        'ls/Queue',
        'user',
        'ssToken',
        'findOne',
        '1024176zYzyXl',
        '7035gQZknt',
        'sxOfR',
        'online',
        'eshToken',
        '__importDe',
        '../../mode',
        'YJUDS',
        'createRefr',
        '63487wkdOUo',
        'where',
        'refreshTok',
        'ipNzp',
        'defineProp',
        '1314390YOMlJG',
        'BhxLd',
        'oXRhz',
        'checkPassw',
        'include',
        '1631022pCaoEH'
    ];
    a = function () {
        return H;
    };
    return a();
}