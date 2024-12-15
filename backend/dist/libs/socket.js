'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x1d9)) / (-0x162f + -0x1 * -0x1efd + -0x2ef * 0x3) * (-parseInt(y(0x242)) / (0x3 * 0x4af + 0xf25 * -0x1 + -0x11a * -0x1)) + parseInt(z(0x20f)) / (0x3e * 0x65 + 0x1a0b * -0x1 + 0x198) * (parseInt(y(0x22b)) / (-0xc92 * 0x1 + -0x13dc + 0x2 * 0x1039)) + -parseInt(y(0x1d4)) / (0x1014 + -0x122b * -0x1 + -0x223a) + -parseInt(y(0x1ce)) / (-0xf72 + 0xbfb * 0x2 + -0x2 * 0x43f) * (parseInt(z(0x211)) / (0x21fe + 0x1 * 0x53b + 0xad * -0x3a)) + parseInt(z(0x229)) / (0x3e * 0x78 + -0x13e7 + 0x39 * -0x29) + parseInt(y(0x249)) / (-0x1 * 0xb69 + -0x1212 + -0x1d84 * -0x1) * (-parseInt(z(0x230)) / (0x1b5 + 0x4 * -0x6e0 + 0x19d5)) + -parseInt(z(0x206)) / (0x40 * 0x19 + -0x1ac8 * 0x1 + 0x1 * 0x1493) * (-parseInt(y(0x1a5)) / (0xe * -0x236 + -0x10a4 + 0x2fa4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x552c3 + 0x1b2fc + -0x1 * -0x68933));
var __importDefault = this && this[A(0x1dd) + B(0x1ae)] || function (c) {
    const C = B;
    return c && c[C(0x202)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11b7 + -0x346 * -0x2 + -0x1e * 0xc1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[B(0x1f2)] = !![], Object[B(0x239) + A(0x231)](exports, B(0x202), o), exports[B(0x21d)] = exports[B(0x1ed)] = void (-0x2 * 0x9a8 + -0x3f * 0x5b + -0x1 * -0x29b5);
const socket_io_1 = require(B(0x219)), socket_io_redis_1 = __importDefault(require(A(0x1c6) + A(0x209))), AppError_1 = __importDefault(require(B(0x1e3) + A(0x1c9))), decodeTokenSocket_1 = __importDefault(require(A(0x248) + B(0x1a8))), logger_1 = require(A(0x1a6) + A(0x1c1)), User_1 = __importDefault(require(A(0x1d6) + B(0x1e9))), Chat_1 = __importDefault(require(B(0x1fd) + A(0x1c8)));
let io;
const initIO = e => {
    const D = A, E = B, f = {
            'jaoRf': D(0x237) + E(0x246) + D(0x1bd),
            'daArW': function (k, l) {
                return k(l);
            },
            'rErmW': E(0x1e4) + E(0x216),
            'PffGJ': function (k, l) {
                return k === l;
            },
            'IECuX': E(0x1be),
            'ZaQgE': E(0x1b3),
            'hcYTv': function (k, l) {
                return k !== l;
            },
            'TchuF': D(0x1c3),
            'fcKAB': D(0x227),
            'EvZkC': function (k, l) {
                return k !== l;
            },
            'JkZZc': D(0x1cf),
            'gNhmO': E(0x1b7),
            'gBTER': function (k, l) {
                return k(l);
            },
            'ODgty': E(0x1d7),
            'OcEyP': E(0x1ff),
            'TyTKI': E(0x243),
            'depLw': E(0x241),
            'mUElC': E(0x1e1),
            'TcUSs': D(0x1e0),
            'alXwU': D(0x1df),
            'CmZWS': function (k) {
                return k();
            },
            'IrUEf': function (k, l) {
                return k(l);
            },
            'SOOxS': D(0x245),
            'pDEyA': E(0x1c2),
            'BSgyz': D(0x1bb),
            'dPTIv': function (k, l) {
                return k !== l;
            },
            'EaTZA': D(0x1c7),
            'ScRah': E(0x201),
            'zKYzT': D(0x1d3),
            'rrdNb': E(0x1b8),
            'lCLBo': E(0x1f5) + D(0x22f) + D(0x240),
            'riBNf': E(0x20e),
            'JbYyS': E(0x24c)
        }, g = {};
    g[D(0x214)] = '*';
    const h = {};
    h[E(0x1d2)] = g, h[D(0x24b) + 't'] = 0x2bf20, h[E(0x226) + 'al'] = 0xea60, io = new socket_io_1[(E(0x1da))](e, h);
    const i = {
            'host': process[D(0x22a)][D(0x210) + E(0x1fc)],
            'port': f[D(0x213)](Number, process[E(0x22a)][E(0x1db) + E(0x1b1)]),
            'username': process[E(0x22a)][E(0x1b9) + E(0x1e8)],
            'password': process[D(0x22a)][E(0x1db) + E(0x217)]
        }, j = socket_io_redis_1[D(0x1e5)];
    return io[E(0x21f)](f[D(0x1b0)](j, i)), io[D(0x208)](async (k, l) => {
        const G = E, H = D, m = {
                'OFVSj': function (n, p) {
                    const F = b;
                    return f[F(0x1e6)](n, p);
                },
                'hINkF': f[G(0x1a9)]
            };
        if (f[G(0x244)](f[G(0x23c)], f[H(0x20a)]))
            throw new h[(H(0x1e5))](f[H(0x225)]);
        else
            try {
                if (f[H(0x1eb)](f[H(0x1cc)], f[G(0x1ea)])) {
                    const p = k?.[G(0x1fa)]?.[H(0x23e)]?.[H(0x236)], q = (0x191f + -0xc8b * 0x1 + -0xc94, decodeTokenSocket_1[H(0x1e5)])(p);
                    if (q[H(0x23b)]) {
                        if (f[H(0x1cd)](f[H(0x203)], f[G(0x20d)])) {
                            const r = k?.[H(0x1fa)]?.[H(0x23e)];
                            k[G(0x1fa)][G(0x23e)] = {
                                ...r,
                                ...q[H(0x218)],
                                'id': f[H(0x1b0)](String, q[G(0x218)]['id']),
                                'tenantId': f[H(0x1b0)](String, q[H(0x218)][H(0x1d7)])
                            };
                            const s = {};
                            s[G(0x1e2)] = [
                                'id',
                                f[H(0x1a7)],
                                f[G(0x1ee)],
                                f[G(0x1bc)],
                                f[G(0x20c)],
                                f[H(0x222)],
                                f[H(0x1d1)],
                                f[H(0x1c5)]
                            ];
                            const t = await User_1[G(0x1e5)][H(0x23d)](q[H(0x218)]['id'], s);
                            k[G(0x1fa)][H(0x23e)][H(0x1c0)] = t, f[G(0x205)](l);
                        } else {
                            const v = {};
                            return v[H(0x1e5)] = j, g && h[H(0x202)] ? i : v;
                        }
                    }
                    f[H(0x213)](l, new Error(f[H(0x1a9)]));
                } else
                    i[H(0x21b)][H(0x1ef)](H(0x1b5) + H(0x1aa) + j), k[H(0x1d5)](G(0x1b5) + G(0x204) + l['id']), m[G(0x1af)](m, new n(m[G(0x21a)]));
            } catch (w) {
                f[G(0x244)](f[G(0x224)], f[G(0x1f8)]) ? (i[H(0x21b)][G(0x238)](H(0x1cb) + G(0x1f9) + G(0x200) + '\x20' + j + ':' + k), l[H(0x24d)](m + ':' + n)) : (logger_1[G(0x21b)][G(0x1ef)](H(0x1b5) + H(0x1aa) + k), k[G(0x1d5)](H(0x1b5) + G(0x204) + k['id']), f[G(0x213)](l, new Error(f[G(0x1a9)])));
            }
    }), io['on'](f[D(0x1bf)], k => {
        const J = E, K = E, l = {
                'WEyLq': function (n, p) {
                    const I = b;
                    return f[I(0x244)](n, p);
                },
                'hpUIb': f[J(0x20b)],
                'TvEfb': f[K(0x225)],
                'RfdlY': function (n, p) {
                    const L = J;
                    return f[L(0x223)](n, p);
                },
                'MCKMM': f[J(0x1f1)],
                'HWYcz': function (n, p) {
                    const M = K;
                    return f[M(0x244)](n, p);
                },
                'hDFwA': f[K(0x21e)],
                'TkgTW': f[K(0x1ac)],
                'PUfpn': f[K(0x215)]
            }, {tenantId: m} = k[K(0x1fa)][J(0x23e)];
        if (m) {
            const n = {};
            n[J(0x247)] = f[K(0x228)], n[K(0x218)] = k[K(0x1fa)][J(0x23e)], logger_1[J(0x21b)][J(0x238)](n), k[K(0x24d)](m[K(0x1b4)]()), k['on'](m + (J(0x1e7) + J(0x212)), async p => {
                const N = J, O = J;
                if (l[N(0x1ab)](l[N(0x1ba)], l[N(0x1ba)])) {
                    const q = await User_1[O(0x1e5)][O(0x23d)](p[N(0x233)]), r = {};
                    r[N(0x1fe)] = !![], await q[N(0x1f4)](r), k[N(0x1d5)](p[O(0x1d7)] + (N(0x221) + O(0x234)), q);
                } else {
                    const t = {};
                    t[N(0x247)] = N(0x1c4) + O(0x1ad) + O(0x22d) + t + ',\x20' + h, f[N(0x21b)][O(0x238)](t);
                }
            }), k['on'](m + (J(0x23f) + 'ox'), p => {
                const P = J, Q = K;
                if (l[P(0x22e)](l[P(0x220)], l[P(0x220)])) {
                    if (!f)
                        throw new i[(P(0x1e5))](l[P(0x235)]);
                    return h;
                } else
                    logger_1[Q(0x21b)][P(0x238)](Q(0x1cb) + P(0x1f9) + P(0x200) + '\x20' + m + ':' + p), k[Q(0x24d)](m + ':' + p);
            }), k['on'](m + (J(0x1f7) + J(0x1f3)), () => {
                const R = J, S = J;
                l[R(0x1d0)](l[R(0x1f6)], l[R(0x1ec)]) ? (i[S(0x21b)][S(0x238)](S(0x24a) + S(0x1fb) + j + ':' + k + (S(0x1b2) + R(0x21c))), l[S(0x24d)](m + ':' + n)) : (logger_1[S(0x21b)][S(0x238)](R(0x24a) + S(0x1de) + S(0x1dc) + S(0x22c) + m + (R(0x1b6) + R(0x207))), k[R(0x24d)](m + (S(0x1b6) + S(0x207))));
            }), k['on'](m + (K(0x1ca) + 'ts'), p => {
                const T = K, U = J;
                l[T(0x1d0)](l[T(0x1d8)], l[T(0x1d8)]) ? (logger_1[U(0x21b)][U(0x238)](T(0x24a) + T(0x1fb) + m + ':' + p + (T(0x1b2) + T(0x21c))), k[T(0x24d)](m + ':' + p)) : (g[T(0x21b)][U(0x238)](T(0x24a) + T(0x1de) + T(0x1dc) + U(0x22c) + h + (T(0x1b6) + T(0x207))), i[T(0x24d)](j + (U(0x1b6) + T(0x207))));
            }), Chat_1[J(0x1e5)][K(0x232)](k);
        }
        k['on'](f[K(0x1f0)], p => {
            const V = J, W = K, q = {};
            q[V(0x247)] = W(0x1c4) + V(0x1ad) + V(0x22d) + m + ',\x20' + p, logger_1[V(0x21b)][W(0x238)](q);
        });
    }), io;
};
exports[B(0x1ed)] = initIO;
const getIO = () => {
    const X = A, Y = A, d = {};
    d[X(0x23a)] = Y(0x237) + X(0x246) + Y(0x1bd);
    const e = d;
    if (!io)
        throw new AppError_1[(X(0x1e5))](e[X(0x23a)]);
    return io;
};
function a() {
    const Z = [
        'TkgTW',
        'initIO',
        'OcEyP',
        'warn',
        'riBNf',
        'EaTZA',
        'value',
        'ication',
        'update',
        'Client\x20con',
        'hDFwA',
        ':joinNotif',
        'pDEyA',
        'ned\x20a\x20tick',
        'handshake',
        'oined\x20to\x20',
        'ERVER',
        './socketCh',
        'isOnline',
        'name',
        'et\x20channel',
        'dUzzW',
        '__esModule',
        'JkZZc',
        'id:',
        'CmZWS',
        '15719burzqH',
        'ion',
        'use',
        'redis',
        'ZaQgE',
        'BSgyz',
        'depLw',
        'gNhmO',
        'disconnect',
        '93kvjfEe',
        'IO_REDIS_S',
        '10913UnXEPe',
        'ied',
        'IrUEf',
        'origin',
        'rrdNb',
        'tion\x20error',
        'ASSWORD',
        'data',
        'socket.io',
        'hINkF',
        'logger',
        'hannel.',
        'getIO',
        'ScRah',
        'adapter',
        'MCKMM',
        ':updateSta',
        'mUElC',
        'dPTIv',
        'SOOxS',
        'jaoRf',
        'pingInterv',
        'PHGHj',
        'lCLBo',
        '2824584QqMoXl',
        'env',
        '19588fYMnuI',
        'hannel\x20',
        'nected\x20,\x20',
        'RfdlY',
        'nected\x20in\x20',
        '756820tSzVdN',
        'erty',
        'register',
        'userId',
        'tusUser',
        'TvEfb',
        'token',
        'Socket\x20IO\x20',
        'info',
        'defineProp',
        'ziqrh',
        'isValid',
        'IECuX',
        'findByPk',
        'auth',
        ':joinChatB',
        'tenant',
        'profile',
        '10THnvmu',
        'email',
        'PffGJ',
        'cHrAg',
        'not\x20initia',
        'message',
        './decodeTo',
        '9qHWBLh',
        'A\x20client\x20j',
        'pingTimeou',
        'connection',
        'join',
        '1032OuKWUn',
        '../utils/l',
        'ODgty',
        'kenSocket',
        'rErmW',
        'id:\x20',
        'WEyLq',
        'zKYzT',
        'ent\x20discon',
        'fault',
        'OFVSj',
        'gBTER',
        'ORT',
        '\x20tickets\x20c',
        'ufjpS',
        'toString',
        'tokenInval',
        ':notificat',
        'vYRyk',
        'mbqkU',
        'IO_REDIS_U',
        'hpUIb',
        'KasOj',
        'TyTKI',
        'lized',
        'zxrAh',
        'JbYyS',
        'user',
        'ogger',
        'BRazu',
        'WvFov',
        'SOCKET\x20Cli',
        'alXwU',
        'socket.io-',
        'zzJgA',
        'at/Chat',
        'AppError',
        ':joinTicke',
        'Client\x20joi',
        'TchuF',
        'EvZkC',
        '1038zMwMdt',
        'mTdZx',
        'HWYcz',
        'TcUSs',
        'cors',
        'jdKEV',
        '342485ovyqjP',
        'emit',
        '../models/',
        'tenantId',
        'PUfpn',
        '4612CBFnQc',
        'Server',
        'IO_REDIS_P',
        'fication\x20c',
        '__importDe',
        'oined\x20noti',
        'lastOnline',
        'lastLogin',
        'status',
        'attributes',
        '../errors/',
        'authentica',
        'default',
        'daArW',
        ':userVerif',
        'SERNAME',
        'User',
        'fcKAB',
        'hcYTv'
    ];
    a = function () {
        return Z;
    };
    return a();
}
exports[B(0x21d)] = getIO;