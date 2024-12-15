'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xe5)) / (-0x21 * -0x70 + 0x24d8 + -0x1 * 0x3347) + -parseInt(z(0xe7)) / (-0x20e7 * 0x1 + -0x192 * 0x11 + 0x3b9b) * (parseInt(A(0xc3)) / (0x1151 + -0x1d6b + 0xc1d)) + -parseInt(A(0xcc)) / (0x16c1 * -0x1 + -0x1b * 0x83 + 0x2496) * (-parseInt(A(0xb5)) / (-0xa7f * 0x2 + 0x123d + 0x47 * 0xa)) + -parseInt(z(0xdb)) / (0x125 * -0x4 + 0x228c + -0x1df2) + parseInt(A(0xbd)) / (0x4c0 + -0x2 * -0x3c1 + 0x65 * -0x1f) * (-parseInt(z(0xad)) / (-0x2250 + 0x63a * -0x1 + 0x12 * 0x241)) + parseInt(A(0xb7)) / (0x39 * -0x2 + 0x1d02 + -0x1c87) * (-parseInt(A(0xe2)) / (0x869 + 0x3c6 * -0x9 + 0x1 * 0x1997)) + parseInt(z(0xd7)) / (-0x22 + -0x15a7 * -0x1 + -0x1 * 0x157a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xef67a + -0x1 * 0xf4db + -0xe87 * 0x6d));
var __importDefault = this && this[B(0xd2) + B(0xd3)] || function (c) {
    const D = C;
    return c && c[D(0xc2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14c7 + 0x2470 + -0xf01);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[B(0xb6)] = !![], Object[B(0xdd) + C(0xd5)](exports, C(0xc2), k);
function a() {
    const G = [
        '478174ioEvBu',
        'userId',
        'base64',
        'reload',
        'split',
        'MediaField',
        'jyrgA',
        'zBszC',
        'findOne',
        '80YtTMGc',
        'public',
        'isActive',
        'default',
        'WNwvJ',
        'getTime',
        'promisify',
        'util',
        '216970uPsIin',
        'value',
        '27QFzqLu',
        'YtLHR',
        'T_FLOW_FOU',
        'media',
        'PqNKR',
        'AqceL',
        '463085rCztwy',
        'path',
        'BqBZp',
        'ZIbvO',
        'join',
        '__esModule',
        '3eLWtmF',
        'nodeList',
        'rs/AppErro',
        'GjnvQ',
        'Dohdd',
        '../../mode',
        'node',
        'where',
        'celularTes',
        '92gJxiay',
        'dpHEl',
        '../../erro',
        'interactio',
        'type',
        'ZyANm',
        '__importDe',
        'fault',
        'length',
        'erty',
        'nrhXu',
        '26202407RnOWCq',
        'tenantId',
        'flow',
        'ERR_NO_CHA',
        '4693326RPJVOJ',
        'kGgkx',
        'defineProp',
        'data',
        'writeFile',
        'update',
        'name',
        '3002810PKGDpv',
        'ls/ChatFlo',
        'attributes',
        '283850xIfBwz',
        'mediaUrl'
    ];
    a = function () {
        return G;
    };
    return a();
}
const util_1 = require(C(0xb4)), path_1 = require(B(0xbe)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(B(0xc8) + B(0xe3) + 'w')), AppError_1 = __importDefault(require(B(0xce) + B(0xc5) + 'r')), writeFileAsync = (-0x2 * -0xe89 + 0x23f4 * -0x1 + 0x2 * 0x371, util_1[C(0xb3)])(fs_1[C(0xdf)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = C, F = B, j = {
                'jyrgA': E(0xe1),
                'kGgkx': E(0xd9),
                'GjnvQ': E(0xe8),
                'ZyANm': E(0xaf),
                'nrhXu': F(0xcb) + 'te',
                'PqNKR': E(0xda) + E(0xb9) + 'ND',
                'YtLHR': function (v, w) {
                    return v === w;
                },
                'ZIbvO': E(0xc9),
                'zBszC': function (v, w) {
                    return v === w;
                },
                'dpHEl': E(0xa9),
                'AqceL': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'BqBZp': F(0xae),
                'Dohdd': F(0xe9),
                'WNwvJ': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0xd8)] = i;
        const r = {};
        r[F(0xca)] = q, r[F(0xe4)] = [
            'id',
            j[E(0xaa)],
            j[E(0xdc)],
            j[F(0xc6)],
            j[F(0xd1)],
            j[F(0xd6)]
        ];
        const s = await ChatFlow_1[E(0xb0)][E(0xac)](r);
        if (!s)
            throw new AppError_1[(E(0xb0))](j[F(0xbb)], -0x10c8 + -0x1041 + -0x1 * -0x229d);
        for await (const v of m[E(0xd9)][E(0xc4)]) {
            if (j[F(0xb8)](v[F(0xd0)], j[F(0xc0)]))
                for await (const w of v[F(0xcf) + 'ns']) {
                    if (j[E(0xab)](w[F(0xd0)], j[F(0xcd)]) && w[F(0xde)][E(0xba)]) {
                        const x = new Date()[F(0xb2)]() + '-' + w[E(0xde)][F(0xe1)];
                        await j[E(0xbc)](writeFileAsync, (0x5 * -0x645 + -0x124e + 0x31a7, path_1[E(0xc1)])(__dirname, '..', '..', '..', j[E(0xbf)], x), w[F(0xde)][E(0xba)][F(0xa8)](j[F(0xc7)])[0x381 + 0x1d * 0x10b + -0x21bf], j[F(0xc7)]), delete w[E(0xde)][F(0xba)], w[E(0xde)][F(0xe6)] = x;
                    }
                    if (j[E(0xb8)](w[E(0xd0)], j[F(0xcd)]) && w[E(0xde)][E(0xe6)]) {
                        const y = w[F(0xde)][F(0xe6)][F(0xa8)]('/');
                        w[F(0xde)][E(0xe6)] = y[j[F(0xb1)](y[F(0xd4)], 0xe43 + -0x2 * 0xa86 + 0x1 * 0x6ca)];
                    }
                }
        }
        const t = {};
        t[E(0xe1)] = l, t[F(0xd9)] = m[E(0xd9)], t[E(0xe8)] = n, t[F(0xaf)] = m[F(0xaf)], t[E(0xcb) + 'te'] = m[E(0xcb) + 'te'], await s[E(0xe0)](t);
        const u = {};
        return u[E(0xe4)] = [
            'id',
            j[F(0xaa)],
            j[F(0xdc)],
            j[E(0xc6)],
            j[E(0xd1)],
            j[F(0xd6)]
        ], await s[F(0xea)](u), s;
    };
exports[B(0xb0)] = UpdateChatFlowService;