'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x7b)) / (-0xfd6 * 0x2 + -0x1f33 * -0x1 + -0x3d * -0x2) + -parseInt(B(0x8b)) / (0x23b5 + -0xca5 + -0xe3 * 0x1a) + parseInt(C(0x94)) / (-0x17fe + -0x1e73 * 0x1 + 0xa * 0x572) * (parseInt(C(0x82)) / (-0x1ea5 + -0x19d * -0x14 + 0x1 * -0x19b)) + -parseInt(C(0x7a)) / (0x1 * -0x5c7 + -0x4 * 0x68f + 0x2008) + -parseInt(B(0x81)) / (0x1d95 + 0x3 * -0x5c8 + 0x3b * -0x35) + -parseInt(C(0x90)) / (0x6d * -0x2b + 0x30a * -0x4 + 0x1e7e) + parseInt(B(0x70)) / (-0x27b * -0x2 + 0x1b94 + -0x2082);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7189a + 0x13ba1 + 0x19a3 * 0x79));
var __importDefault = this && this[D(0x85) + E(0x75)] || function (c) {
    const F = D;
    return c && c[F(0x74)] ? c : { 'default': c };
};
function a() {
    const I = [
        'VUvzc',
        'jsonwebtok',
        'AppError',
        'gtkQm',
        '581900UaUeRf',
        'value',
        'SvXoT',
        'fJaEb',
        'defineProp',
        '2566067UPQAgM',
        'Invalid\x20to',
        'dhXBz',
        'split',
        '162tdXXhk',
        'uZMwl',
        'rNpfZ',
        'headers',
        'default',
        'secret',
        '../config/',
        'AHrHi',
        'sUGjj',
        'apiId',
        'sessionId',
        'tenantId',
        '22149152vzRRNA',
        'OzFyE',
        'cIZdX',
        'APIAuth',
        '__esModule',
        'fault',
        'erty',
        'not\x20provid',
        'Token\x20was\x20',
        'MTQZk',
        '3016985lvEQFY',
        '764974AhrENW',
        'verify',
        'ken.',
        'authorizat',
        'ed.',
        '../errors/',
        '2382444dbFgNz',
        '4756azENYb',
        'ion',
        'Iumoc',
        '__importDe',
        'auth'
    ];
    a = function () {
        return I;
    };
    return a();
}
const A = {};
A[E(0x8c)] = !![], Object[E(0x8f) + D(0x76)](exports, D(0x74), A);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9de + -0x3a * -0x93 + -0x1 * 0x170b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const jsonwebtoken_1 = require(D(0x88) + 'en'), AppError_1 = __importDefault(require(E(0x80) + D(0x89))), auth_1 = __importDefault(require(E(0x6a) + D(0x86))), isAPIAuth = (d, e, f) => {
        const G = E, H = E, g = {
                'SvXoT': G(0x91) + G(0x7d),
                'sUGjj': function (j, k) {
                    return j === k;
                },
                'cIZdX': G(0x8a),
                'MTQZk': G(0x78) + H(0x77) + H(0x7f),
                'fJaEb': function (j, k) {
                    return j !== k;
                },
                'rNpfZ': G(0x92),
                'Iumoc': G(0x65),
                'OzFyE': G(0x87),
                'AHrHi': function (j) {
                    return j();
                }
            }, h = d[G(0x67)][G(0x7e) + H(0x83)];
        if (!h) {
            if (g[H(0x6c)](g[G(0x72)], g[G(0x72)]))
                throw new AppError_1[(G(0x68))](g[G(0x79)], 0xb * 0x25 + -0x1 * -0x1d1d + 0x1 * -0x1d21);
            else {
                const k = {};
                return k[G(0x68)] = j, g && h[G(0x74)] ? i : k;
            }
        }
        const [, i] = h[G(0x93)]('\x20');
        try {
            if (g[G(0x8e)](g[G(0x66)], g[H(0x84)])) {
                const k = (-0x1951 + -0x1767 + 0x30b8, jsonwebtoken_1[H(0x7c)])(i, auth_1[H(0x68)][H(0x69)]), {
                        apiId: l,
                        sessionId: m,
                        tenantId: n
                    } = k, o = {};
                o[G(0x6d)] = l, o[H(0x6e)] = m, o[G(0x6f)] = n, d[G(0x73)] = o;
            } else {
                const q = (-0x94c + -0x2 * -0x5e + 0x890, g[H(0x7c)])(h, i[H(0x68)][G(0x69)]), {
                        apiId: r,
                        sessionId: s,
                        tenantId: t
                    } = q, u = {};
                u[G(0x6d)] = r, u[H(0x6e)] = s, u[H(0x6f)] = t, j[G(0x73)] = u;
            }
        } catch (q) {
            if (g[H(0x8e)](g[G(0x71)], g[G(0x71)]))
                throw new d[(H(0x68))](g[H(0x8d)], 0x5 * -0x6b2 + -0x4 * -0x409 + 0x12e9 * 0x1);
            else
                throw new AppError_1[(G(0x68))](g[G(0x8d)], -0x4 * 0x717 + 0x13f3 * -0x1 + -0x1 * -0x31e2);
        }
        return g[G(0x6b)](f);
    };
exports[D(0x68)] = isAPIAuth;