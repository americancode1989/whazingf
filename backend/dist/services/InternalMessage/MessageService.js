'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0xbc)) / (-0x18d9 * 0x1 + 0x93 * -0x1 + -0x1 * -0x196d) * (-parseInt(J(0xb1)) / (0x44 * 0x1c + -0x26ad + 0x1 * 0x1f3f)) + parseInt(J(0x88)) / (0xcf * -0x1f + -0x9fd + -0x2311 * -0x1) * (parseInt(J(0x97)) / (-0x91 + 0x1 * -0x2151 + 0x21e6)) + -parseInt(J(0xb9)) / (0x1 * 0x1607 + -0x15b1 + -0x51) * (parseInt(J(0x90)) / (0x99b * 0x3 + -0x22cd + 0x301 * 0x2)) + -parseInt(J(0x84)) / (0x1 * 0x15a6 + -0xc0 * -0x22 + -0x2f1f) + -parseInt(J(0xb5)) / (-0x1a2c + -0x33 * -0x24 + -0x2 * -0x984) * (-parseInt(K(0xc1)) / (-0xd * -0xa3 + 0x3 * -0xb3c + 0x1976)) + -parseInt(K(0xa2)) / (0x4 * 0x859 + 0x1904 + -0x2 * 0x1d2f) * (-parseInt(K(0xaa)) / (-0x1f7 * 0x6 + -0x46c * -0x3 + -0x16f)) + -parseInt(K(0xa1)) / (0x1f * -0x127 + 0x30 * -0x8d + 0x27d * 0x19);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x2644d + 0x60f7d + 0x414b8));
function a() {
    const U = [
        'update',
        'agens',
        'UvYui',
        '__importDe',
        'model',
        'CQlgB',
        'fault',
        'SOOeZ',
        'marcarMens',
        'receiver',
        'KbZyM',
        '5704678frUhMs',
        'CONaK',
        'senderId',
        'adHnt',
        '60924FblmJi',
        '../../mode',
        'FIavW',
        'CQxmH',
        'default',
        '__esModule',
        'XeSuc',
        'ls/Interna',
        '48ATJyBJ',
        'wMXBX',
        'defineProp',
        'mmUXz',
        'GixkA',
        'sender',
        'Mensagem\x20n',
        '116zSlAlJ',
        'isUnread',
        'kaTXB',
        'wqRcc',
        'name',
        'erty',
        'where',
        'hGeGi',
        'listarMens',
        'DWMjW',
        '4273224jWYqMm',
        '11710kyMdTe',
        'attributes',
        'findByPk',
        'ão\x20encontr',
        'criarMensa',
        'yjbpF',
        'NAaNv',
        'limit',
        '935duWKuI',
        'ERBaN',
        'include',
        'findAll',
        'nouFY',
        'Hozoi',
        'lMessage',
        '1418xJArMn',
        'pRWQM',
        'agemNaoLid',
        'PAwgf',
        '2192yLlgVS',
        'value',
        'sequelize',
        'KrcpL',
        '185270AEkqLW',
        'ls/User',
        'false',
        '619QYxCqd',
        'UkXNa',
        'receiverId',
        'timestamp',
        'groupId',
        '27855hOycJX',
        'TVovy',
        'gem',
        'ada.',
        'create',
        'LzkWl',
        'order'
    ];
    a = function () {
        return U;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12a2 + -0x16 * 0x197 + 0x268 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[L(0xcb) + L(0xce)] || function (c) {
    const N = M;
    return c && c[N(0x8d)] ? c : { 'default': c };
};
const k = {};
k[M(0xb6)] = !![], Object[M(0x92) + M(0x9c)](exports, M(0x8d), k);
const sequelize_1 = require(L(0xb7)), InternalMessage_1 = __importDefault(require(M(0x89) + L(0x8f) + L(0xb0))), User_1 = __importDefault(require(L(0x89) + L(0xba)));
class MessageService {
    static async [L(0x9f) + L(0xc9)](o, p, q) {
        const O = M, P = M, r = {};
        r[O(0x93)] = P(0x96) + O(0xa5) + O(0xc4), r[O(0x8a)] = function (t, u) {
            return t !== u;
        }, r[O(0xb2)] = P(0x80), r[P(0xbd)] = P(0xc6), r[P(0x83)] = function (t, u) {
            return t == u;
        }, r[P(0x9a)] = O(0xbb), r[P(0x85)] = function (t, u) {
            return t !== u;
        }, r[P(0xa0)] = P(0x8e), r[O(0xca)] = P(0x95), r[O(0x8b)] = O(0x9b), r[P(0xa7)] = P(0x82), r[P(0xb4)] = O(0xbf), r[O(0xcd)] = function (t, u) {
            return t === u;
        }, r[O(0x99)] = P(0xb8), r[O(0xab)] = P(0x9e), r[O(0x87)] = function (t, u) {
            return t === u;
        }, r[O(0xa8)] = O(0xae);
        const s = r;
        try {
            if (s[O(0x8a)](s[O(0xb2)], s[O(0xbd)])) {
                let t;
                if (s[O(0x83)](q, s[O(0x9a)])) {
                    if (s[P(0x85)](s[P(0xa0)], s[O(0xa0)]))
                        throw d;
                    else {
                        const v = {};
                        v[P(0x86)] = o, v[O(0xbe)] = p;
                        const w = {};
                        w[P(0xbe)] = o, w[P(0x86)] = p;
                        const x = {
                                [sequelize_1['Op']['or']]: [
                                    v,
                                    w
                                ]
                            }, y = {};
                        y[O(0xcc)] = User_1[P(0x8c)], y['as'] = s[P(0xca)], y[O(0xa3)] = [
                            'id',
                            s[P(0x8b)]
                        ];
                        const z = {};
                        z[P(0xcc)] = User_1[P(0x8c)], z['as'] = s[P(0xa7)], z[O(0xa3)] = [
                            'id',
                            s[O(0x8b)]
                        ];
                        const A = {};
                        A[P(0x9d)] = x, A[O(0xac)] = [
                            y,
                            z
                        ], A[O(0xc7)] = [s[P(0xb4)]], A[O(0xa9)] = 0x1f4, t = await InternalMessage_1[O(0x8c)][O(0xad)](A);
                    }
                } else {
                    if (s[P(0xcd)](s[P(0x99)], s[O(0xab)]))
                        throw new d(s[O(0x93)]);
                    else {
                        const C = {};
                        C[P(0xc0)] = p;
                        const D = {};
                        D[P(0xcc)] = User_1[P(0x8c)], D['as'] = s[O(0xca)], D[O(0xa3)] = [
                            'id',
                            s[P(0x8b)]
                        ];
                        const E = {};
                        E[P(0xcc)] = User_1[P(0x8c)], E['as'] = s[P(0xa7)], E[P(0xa3)] = [
                            'id',
                            s[O(0x8b)]
                        ];
                        const F = {};
                        F[O(0x9d)] = C, F[P(0xac)] = [
                            D,
                            E
                        ], F[O(0xc7)] = [s[O(0xb4)]], F[P(0xa9)] = 0x1f4, t = await InternalMessage_1[O(0x8c)][O(0xad)](F);
                    }
                }
                return t;
            } else {
                const H = {};
                return H[O(0x8c)] = j, g && h[P(0x8d)] ? i : H;
            }
        } catch (H) {
            if (s[O(0x87)](s[O(0xa8)], s[O(0xa8)]))
                throw H;
            else
                throw d;
        }
    }
    static async [M(0xa6) + L(0xc3)](d) {
        const Q = M, R = L, e = {};
        e[Q(0x94)] = function (g, h) {
            return g === h;
        }, e[R(0x91)] = Q(0xc2);
        const f = e;
        try {
            if (f[Q(0x94)](f[Q(0x91)], f[R(0x91)]))
                return await InternalMessage_1[Q(0x8c)][Q(0xc5)](d);
            else
                throw d;
        } catch (h) {
            throw h;
        }
    }
    static async [L(0x81) + L(0xb3) + 'a'](e) {
        const S = L, T = L, f = {};
        f[S(0xaf)] = T(0x96) + T(0xa5) + T(0xc4);
        const g = f;
        try {
            const h = await InternalMessage_1[S(0x8c)][T(0xa4)](e);
            if (!h)
                throw new Error(g[S(0xaf)]);
            const i = {};
            i[T(0x98)] = !![], await h[T(0xc8)](i);
        } catch (j) {
            throw j;
        }
    }
}
exports[L(0x8c)] = MessageService;