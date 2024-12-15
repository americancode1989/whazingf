'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x118)) / (-0x1cd9 + -0x1 * -0x14ed + 0x7ed * 0x1) * (parseInt(x(0x132)) / (0x1c + -0x120f + 0x11f5 * 0x1)) + parseInt(x(0x11b)) / (0x39c + -0xd * -0x223 + -0x1f6 * 0x10) + parseInt(y(0x10f)) / (-0x2441 * 0x1 + -0x17 * 0x113 + 0xc32 * 0x5) + parseInt(y(0x127)) / (-0x1a5e + -0x1 * 0x53 + 0x1ab6) * (-parseInt(y(0x10d)) / (0xd19 + 0x36f + -0x1082)) + parseInt(y(0x116)) / (0x1d48 + -0x1bc8 + -0x179) * (-parseInt(x(0x122)) / (0x6f8 + 0x1ce1 + -0x23d1)) + -parseInt(x(0x11a)) / (-0x11ba + 0x19c * 0x1 + 0x1027) + parseInt(y(0x125)) / (0xa4d + -0x1 * -0x1b62 + -0x25a5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3c8 * -0x2d2 + 0xfcb84 + 0x6cf27));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x242f * 0x1 + 0x20a + 0x1 * 0x2331);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x12d) + z(0x11c)] || function (c) {
    const B = A;
    return c && c[B(0x123)] ? c : { 'default': c };
};
const k = {};
k[z(0x120)] = !![], Object[A(0x115) + A(0x12e)](exports, A(0x123), k);
const AppError_1 = __importDefault(require(z(0x111) + A(0x113) + 'r')), AutoReply_1 = __importDefault(require(z(0x114) + A(0x134) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = A, D = z, l = {};
        l[C(0x11f)] = D(0x12c), l[D(0x12b)] = D(0x131), l[D(0x10e)] = D(0x11d), l[D(0x126)] = C(0x110), l[D(0x117)] = C(0x12f) + 'te', l[C(0x119)] = D(0x10c) + D(0x133) + D(0x124);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[C(0x129)] = j;
        const t = {};
        t[C(0x11e)] = s, t[C(0x128)] = [
            'id',
            m[C(0x11f)],
            m[C(0x12b)],
            m[D(0x10e)],
            m[D(0x126)],
            m[D(0x117)]
        ];
        const u = await AutoReply_1[D(0x112)][C(0x130)](t);
        if (!u)
            throw new AppError_1[(D(0x112))](m[D(0x119)], -0x1b8a + 0x325 + -0x19f9 * -0x1);
        const v = {};
        v[D(0x12c)] = n, v[D(0x131)] = o, v[C(0x11d)] = p, v[C(0x110)] = q, v[C(0x12f) + 'te'] = r, await u[D(0x121)](v);
        const w = {};
        return w[C(0x128)] = [
            'id',
            m[D(0x11f)],
            m[D(0x12b)],
            m[D(0x10e)],
            m[C(0x126)],
            m[C(0x117)]
        ], await u[C(0x12a)](w), u;
    };
function a() {
    const E = [
        'action',
        '2vqXofz',
        'O_REPLY_FO',
        'ls/AutoRep',
        'ERR_NO_AUT',
        '1929846lvWkeA',
        'jWFvK',
        '5538752AubELr',
        'isActive',
        '../../erro',
        'default',
        'rs/AppErro',
        '../../mode',
        'defineProp',
        '14OZpEaH',
        'DMNgl',
        '738936JSzmsy',
        'MLGLI',
        '1647567bkcHGK',
        '4016763swHEZL',
        'fault',
        'userId',
        'where',
        'GVIUR',
        'value',
        'update',
        '3199592dsmKmo',
        '__esModule',
        'UND',
        '4240610FDBVof',
        'BngXa',
        '10QOpyTv',
        'attributes',
        'tenantId',
        'reload',
        'oTYoy',
        'name',
        '__importDe',
        'erty',
        'celularTes',
        'findOne'
    ];
    a = function () {
        return E;
    };
    return a();
}
exports[A(0x112)] = UpdateAutoReplyService;