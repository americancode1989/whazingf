'use strict';
function a() {
    const E = [
        'ERR_NO_QUE',
        'isActive',
        'tenantId',
        'findOne',
        'userId',
        'update',
        'rs/AppErro',
        '2344OysiUt',
        'WWaRl',
        '1107916BogAjh',
        '3953005XRVnSm',
        'queue',
        'UE_FOUND',
        '__importDe',
        'erty',
        'integratio',
        'bHMmi',
        '6881976CPqxYD',
        'defineProp',
        'attributes',
        '4dNJYsm',
        '../../mode',
        'nId',
        '459714audnJy',
        'color',
        'aVCEP',
        'default',
        '23653aNPjjB',
        'ls/Queue',
        'hReUl',
        '10IUswDO',
        'jnKXK',
        'value',
        '../../erro',
        'where',
        'reload',
        'fault',
        'JhJNE',
        '160354AZPCGV',
        '__esModule',
        '1329306UydRAu'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xa6)) / (-0x25f7 + -0x24c7 + 0x4abf) + parseInt(y(0x9a)) / (-0x906 + -0x45b * -0x5 + -0x1 * 0xcbf) + parseInt(y(0xb4)) / (-0x3 * -0x867 + 0x5 * 0x469 + 0x2f3f * -0x1) * (parseInt(y(0xb1)) / (0x2309 + -0x1 * 0x15b + -0x2 * 0x10d5)) + -parseInt(y(0xa7)) / (0xf * -0xc7 + -0x9 * 0x8 + 0xbf6) + -parseInt(x(0x9c)) / (-0x172f + 0x2167 + -0xa32) + -parseInt(y(0xb8)) / (0x1df4 + 0x4 * -0x1c5 + -0x1 * 0x16d9) * (-parseInt(y(0xa4)) / (0x469 + -0x1cf8 + 0x5 * 0x4eb)) + -parseInt(y(0xae)) / (0x255 + -0x594 + 0x348) * (parseInt(y(0xbb)) / (-0x1 * -0x57d + 0x5a7 + -0xb1a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x102d69 + -0xd * -0x12d36 + 0xdab * -0x1af));
var __importDefault = this && this[z(0xaa) + z(0xc1)] || function (c) {
    const B = z;
    return c && c[B(0x9b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * -0x5f + 0x1821 + 0x1 * -0x1a21);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0xbd)] = !![], Object[A(0xaf) + z(0xab)](exports, z(0x9b), k);
const AppError_1 = __importDefault(require(A(0xbe) + z(0xa3) + 'r')), Queue_1 = __importDefault(require(A(0xb2) + z(0xb9))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0xb6)] = C(0xa8), j[D(0x99)] = D(0x9e), j[C(0xbc)] = D(0xa1), j[D(0xa5)] = C(0xb5), j[D(0xad)] = C(0xac) + D(0xb3), j[C(0xba)] = D(0x9d) + C(0xa9);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                color: q,
                integrationId: r
            } = h, s = {};
        s['id'] = i, s[D(0x9f)] = p;
        const t = {};
        t[C(0xbf)] = s, t[D(0xb0)] = [
            'id',
            l[C(0xb6)],
            l[C(0x99)],
            l[C(0xbc)],
            l[D(0xa5)],
            l[C(0xad)]
        ];
        const u = await Queue_1[C(0xb7)][C(0xa0)](t);
        if (!u)
            throw new AppError_1[(D(0xb7))](l[C(0xba)], 0x18c * 0x17 + -0x1d0f + -0x4f1);
        const v = {};
        v[D(0xa8)] = m, v[D(0x9e)] = n, v[C(0xb5)] = q, v[D(0xa1)] = o, v[D(0xac) + C(0xb3)] = r, await u[C(0xa2)](v);
        const w = {};
        return w[D(0xb0)] = [
            'id',
            l[C(0xb6)],
            l[D(0x99)],
            l[C(0xbc)],
            l[D(0xa5)],
            l[D(0xad)]
        ], await u[D(0xc0)](w), u;
    };
exports[A(0xb7)] = UpdateQueueService;