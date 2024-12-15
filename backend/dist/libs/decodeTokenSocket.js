'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x182)) / (-0x554 * 0x6 + -0x11fb + 0x31f4) * (parseInt(G(0x18c)) / (-0x2040 + -0x3a1 * -0x2 + 0x2 * 0xc80)) + parseInt(F(0x184)) / (-0x1 * 0x59 + -0x1 * 0x996 + -0x9f2 * -0x1) * (parseInt(G(0x18d)) / (0x1e21 + -0x1 * -0x2121 + -0x5 * 0xca6)) + parseInt(G(0x187)) / (-0x2 * 0x11d7 + -0x1b93 + 0x3f46) + parseInt(G(0x17f)) / (0xf62 + -0x2312 + 0x13b6) + -parseInt(G(0x17e)) / (-0x2ad * -0xb + 0x2538 * 0x1 + -0x29 * 0x1a0) * (parseInt(F(0x17a)) / (0x661 * -0x5 + -0x1b66 + -0x3b53 * -0x1)) + -parseInt(F(0x197)) / (-0xcc1 * -0x2 + 0x7a5 + -0x211e) + parseInt(F(0x186)) / (0x1600 + 0x19d3 + -0x2fc9) * (-parseInt(G(0x1a1)) / (0x19ab + -0x3 * -0x78b + 0x1 * -0x3041));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc2da3 + -0x151a14 * -0x1 + -0x1544b3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x290 * 0x5 + 0x1 * 0x2d7 + -0xe2f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[H(0x193) + I(0x19f)] || function (c) {
    const J = H;
    return c && c[J(0x185)] ? c : { 'default': c };
};
const u = {};
function a() {
    const M = [
        'verify',
        '826510Cubhwq',
        '452aNDBzb',
        'eZgJb',
        'value',
        'tenantId',
        'DFcpK',
        'odaXk',
        '__importDe',
        'erty',
        'xNoFh',
        'NmJKy',
        '8544888WqGhtM',
        'default',
        'oHPYb',
        'profile',
        '../utils/l',
        'defineProp',
        'myDDc',
        'jsonwebtok',
        'fault',
        'ogger',
        '11wVNNxz',
        'data',
        'error',
        '16MwHYGT',
        'fmXKR',
        'isValid',
        'secret',
        '22281bgcmQf',
        '7686732mbejFi',
        'EEQkL',
        'SdKXQ',
        '1jUYNBH',
        '../config/',
        '13173EBJwmW',
        '__esModule',
        '5356080VzPXIP',
        '440250KRjRSU',
        'auth',
        'logger',
        'GXZcp'
    ];
    a = function () {
        return M;
    };
    return a();
}
u[H(0x18f)] = !![], Object[I(0x19c) + I(0x194)](exports, H(0x185), u);
const jsonwebtoken_1 = require(I(0x19e) + 'en'), auth_1 = __importDefault(require(I(0x183) + H(0x188))), logger_1 = require(I(0x19b) + I(0x1a0)), decode = g => {
        const K = H, L = H, h = {};
        h[K(0x199)] = function (m, n) {
            return m !== n;
        }, h[L(0x181)] = K(0x192), h[K(0x18a)] = K(0x18e), h[L(0x196)] = L(0x19d), h[K(0x195)] = L(0x17b), h[K(0x180)] = L(0x191);
        const i = h, j = {};
        j['id'] = '', j[K(0x19a)] = '', j[K(0x190)] = 0x0;
        const k = {};
        k[K(0x17c)] = ![], k[K(0x178)] = j;
        const l = k;
        if (!g) {
            if (i[K(0x199)](i[K(0x181)], i[K(0x18a)]))
                return l;
            else
                k[L(0x189)][K(0x179)](f);
        }
        try {
            if (i[K(0x199)](i[K(0x196)], i[K(0x196)]))
                return j;
            else {
                const o = (-0x209e + -0x1b1f + 0x29 * 0x175, jsonwebtoken_1[K(0x18b)])(g, auth_1[K(0x198)][K(0x17d)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o;
                l[K(0x17c)] = !![];
                const s = {};
                s['id'] = p, s[L(0x19a)] = q, s[L(0x190)] = r, l[L(0x178)] = s;
            }
        } catch (t) {
            if (i[K(0x199)](i[L(0x195)], i[L(0x180)]))
                logger_1[K(0x189)][L(0x179)](t);
            else {
                const w = {};
                w['id'] = '', w[K(0x19a)] = '', w[L(0x190)] = 0x0;
                const x = {};
                x[L(0x17c)] = ![], x[K(0x178)] = w;
                const y = x;
                if (!x)
                    return y;
                try {
                    const z = (-0xe8 * 0x11 + -0x26 * 0xa1 + -0xd1a * -0x3, m[L(0x18b)])(n, o[K(0x198)][L(0x17d)]), {
                            id: A,
                            profile: B,
                            tenantId: C
                        } = z;
                    y[L(0x17c)] = !![];
                    const D = {};
                    D['id'] = A, D[K(0x19a)] = B, D[K(0x190)] = C, y[K(0x178)] = D;
                } catch (E) {
                    q[L(0x189)][L(0x179)](E);
                }
                return y;
            }
        }
        return l;
    };
exports[I(0x198)] = decode;