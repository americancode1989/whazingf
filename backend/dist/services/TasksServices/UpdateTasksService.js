'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0xcb)) / (0x15ba + 0x1 * 0x17ed + -0x2 * 0x16d3) * (parseInt(B(0xd3)) / (-0xb4 * 0xf + 0x28d + -0x801 * -0x1)) + -parseInt(B(0xd6)) / (0x226b + -0xd45 * -0x1 + -0x2fad * 0x1) * (parseInt(C(0xbd)) / (0x6 * -0x93 + -0x6 * 0x59b + 0x2518)) + parseInt(C(0xb8)) / (0x1c13 + -0x20d4 + 0x263 * 0x2) * (parseInt(C(0xd2)) / (-0x2d * 0x89 + -0x1428 + 0x2c43 * 0x1)) + -parseInt(C(0xc1)) / (-0x3cf + -0x7ba + 0xb90) + parseInt(B(0xd9)) / (0x4e5 + -0xd1c * -0x1 + -0x2b * 0x6b) * (parseInt(C(0xca)) / (0x2206 + 0x1cb8 + 0x1 * -0x3eb5)) + -parseInt(B(0xde)) / (-0xb5 * -0x35 + -0x2083 + 0x5a * -0xe) * (-parseInt(C(0xc6)) / (0x3ed + 0x2245 + -0x2627 * 0x1)) + -parseInt(C(0xb7)) / (-0x1d0d * -0x1 + -0x172a + -0x5d7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1eca0 + 0x4c * 0x52a + 0x21e5f));
function a() {
    const I = [
        'epJni',
        'aFpLQ',
        'erty',
        '__importDe',
        '10lhEfut',
        'high',
        'includes',
        '../../mode',
        'reload',
        '__esModule',
        'findOne',
        'TVMzN',
        'iXdWc',
        'Lhguy',
        'fault',
        'low',
        'descriptio',
        'where',
        '1951812dBsAPS',
        '30460QeMdGQ',
        'priority',
        'rs/AppErro',
        'ls/Tasks',
        'name',
        '200Rubjjg',
        'tenantId',
        'WWHUE',
        '../../erro',
        '769034YprmHT',
        'limitDate',
        'K_FOUND',
        'owner',
        'attributes',
        '2263987MbXQAU',
        'medium',
        'defineProp',
        'status',
        '27MSViKS',
        '165sWnpfT',
        'yKEPT',
        'cJVtD',
        'ERR_NO_TAS',
        'userId',
        'update',
        'comments',
        '138RfFGTv',
        '622hHmYkt',
        'none',
        'value',
        '8139sLkRpg',
        'GSKVu',
        'default',
        '330992bEQSmi'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0xdd) + D(0xb3)] || function (c) {
    const F = D;
    return c && c[F(0xe3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x92 * 0x3e + 0x3 * 0xcb5 + -0x213);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[D(0xd5)] = !![], Object[E(0xc8) + D(0xdc)](exports, D(0xe3), k);
const AppError_1 = __importDefault(require(E(0xc0) + D(0xba) + 'r')), Tasks_1 = __importDefault(require(E(0xe1) + D(0xbb))), validPriorities = [
        D(0xdf),
        E(0xc7),
        D(0xb4),
        E(0xd4)
    ], UpdateTasksService = async ({
        taskData: h,
        id: i
    }) => {
        const G = D, H = D, j = {};
        j[G(0xb0)] = H(0xbc), j[H(0xcd)] = H(0xb5) + 'n', j[G(0xbf)] = G(0xc2), j[G(0xcc)] = H(0xc4), j[H(0xb1)] = H(0xc9), j[H(0xdb)] = H(0xb9), j[G(0xda)] = H(0xd1), j[G(0xb2)] = H(0xcf), j[G(0xd7)] = G(0xce) + G(0xc3);
        const l = j, {
                name: m,
                description: n,
                limitDate: o,
                owner: p,
                status: q,
                priority: r,
                comments: s,
                userId: t,
                tenantId: u
            } = h, v = {};
        v['id'] = i, v[H(0xbe)] = u;
        const w = {};
        w[H(0xb6)] = v, w[G(0xc5)] = [
            'id',
            l[H(0xb0)],
            l[G(0xcd)],
            l[H(0xbf)],
            l[G(0xcc)],
            l[H(0xb1)],
            l[G(0xdb)],
            l[H(0xda)],
            l[G(0xb2)]
        ];
        const x = await Tasks_1[G(0xd8)][G(0xe4)](w);
        if (!x)
            throw new AppError_1[(H(0xd8))](l[G(0xd7)], 0x1 * -0x253d + 0x21d6 + 0x4fb);
        const y = {};
        y[G(0xbc)] = m, y[G(0xb5) + 'n'] = n, y[H(0xc2)] = o, y[G(0xc4)] = p, y[H(0xc9)] = q, y[G(0xd1)] = s, y[G(0xcf)] = t;
        const z = y;
        validPriorities[G(0xe0)](r) && (z[H(0xb9)] = r);
        await x[G(0xd0)](z);
        const A = {};
        return A[H(0xc5)] = [
            'id',
            l[G(0xb0)],
            l[H(0xcd)],
            l[G(0xbf)],
            l[G(0xcc)],
            l[H(0xb1)],
            l[H(0xdb)],
            l[G(0xda)],
            l[H(0xb2)]
        ], await x[G(0xe2)](A), x;
    };
exports[E(0xd8)] = UpdateTasksService;