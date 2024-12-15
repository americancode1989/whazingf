'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x135)) / (0x134a + 0x10a + -0x1453) + -parseInt(C(0x113)) / (0xcf * 0x1f + -0x119f * -0x1 + -0x2aae) * (parseInt(C(0x10b)) / (-0x1d45 + 0x11 * 0x124 + 0x9e4)) + parseInt(C(0x136)) / (-0x2665 + 0x1 * 0x14d5 + 0x8ca * 0x2) * (parseInt(D(0x108)) / (0x546 + 0x1 * -0x1e26 + 0x18e5)) + -parseInt(D(0x109)) / (-0x29 * -0xc7 + -0xfe3 + -0x1 * 0xff6) * (-parseInt(C(0x11a)) / (-0x967 + 0x148c + -0xb1e)) + -parseInt(D(0x125)) / (-0xde + 0xee9 * 0x1 + -0xe03 * 0x1) * (-parseInt(D(0x133)) / (0x100 + -0x132a + 0x1233 * 0x1)) + parseInt(C(0x132)) / (0x1 * 0x14e0 + -0x1863 * 0x1 + 0x3 * 0x12f) * (-parseInt(D(0x13a)) / (-0x1799 * 0x1 + -0x2 * -0x793 + 0x87e)) + parseInt(C(0x11f)) / (0x22ef + 0x266 * -0x2 + -0x1e17) * (parseInt(D(0x121)) / (0x542 * 0x1 + -0x7cb + 0x296));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6975a * 0x1 + 0x9b874 + 0x8ac67));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x8b6 + -0x422 + -0x15 * 0x16a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x11d) + E(0x12e)] || function (c) {
    const G = F;
    return c && c[G(0x131)] ? c : { 'default': c };
};
const B = {};
B[E(0x12f)] = !![], Object[E(0x107) + F(0x11c)](exports, E(0x131), B), exports[E(0x126) + F(0x106)] = void (0x4a2 + 0xb3d * -0x2 + 0x11d8);
const jsonwebtoken_1 = require(F(0x12d) + 'en'), AppError_1 = __importDefault(require(E(0x124) + E(0x104))), auth_1 = __importDefault(require(F(0x11e) + E(0x12b))), isAPIAuthParams = (c, d, e) => {
        const H = E, I = F, f = {
                'LNArs': H(0x127) + I(0x114),
                'jpXDP': H(0x12a) + I(0x10e) + I(0x115),
                'sGHez': function (h, i) {
                    return h !== i;
                },
                'owsUj': H(0x10d),
                'WZBuM': H(0x110),
                'RQFBA': H(0x123),
                'jiBpG': function (h, i) {
                    return h !== i;
                },
                'YVjrb': I(0x10f),
                'axnbQ': function (h, i) {
                    return h(i);
                },
                'hgGpm': function (h, i) {
                    return h === i;
                },
                'KqfzX': I(0x105),
                'VLOqq': H(0x116),
                'xJEIP': function (h) {
                    return h();
                }
            }, {bearertoken: g} = c[H(0x112)];
        if (!g || f[H(0x119)](typeof g, f[I(0x138)])) {
            if (f[I(0x119)](f[H(0x139)], f[H(0x10a)]))
                throw new AppError_1[(I(0x137))](f[H(0x111)], -0x14 * 0x1a1 + 0x1142 + 0x10e5 * 0x1);
            else
                throw new d[(H(0x137))](f[I(0x120)], -0x6 * -0x406 + 0x119 * 0xd + 0x2e * -0xcd);
        }
        try {
            if (f[I(0x12c)](f[I(0x10c)], f[H(0x10c)])) {
                const j = {};
                return j[I(0x137)] = j, g && h[H(0x131)] ? i : j;
            } else {
                const j = (-0x1 * -0x176f + -0x1a61 + 0x2f2, jsonwebtoken_1[I(0x129)])(g, auth_1[I(0x137)][I(0x130)]), {
                        apiId: k,
                        sessionId: l,
                        tenantId: m
                    } = j;
                c[I(0x118)] = {
                    'apiId': k,
                    'sessionId': f[H(0x134)](Number, l),
                    'tenantId': m
                };
            }
        } catch (n) {
            if (f[I(0x122)](f[H(0x128)], f[I(0x117)]))
                throw new d[(H(0x137))](f[H(0x111)], -0x2 * 0x466 + 0x95e * 0x4 + -0x7 * 0x3df);
            else
                throw new AppError_1[(H(0x137))](f[H(0x120)], 0x37 * -0x75 + -0x1c82 + 0x3738);
        }
        return f[I(0x11b)](e);
    };
exports[F(0x126) + F(0x106)] = isAPIAuthParams, exports[E(0x137)] = exports[E(0x126) + E(0x106)];
function a() {
    const J = [
        '2331WZGxxZ',
        'axnbQ',
        '120835Dcubtl',
        '4505708TzqwGm',
        'default',
        'owsUj',
        'WZBuM',
        '16161618lDXYfP',
        'AppError',
        'kLtEZ',
        'arams',
        'defineProp',
        '5fDVkxm',
        '1409466ErEHqm',
        'RQFBA',
        '275004wAxLLn',
        'YVjrb',
        'string',
        'not\x20provid',
        'hKCbn',
        'mJGCT',
        'jpXDP',
        'query',
        '8pfxtdO',
        'ken.',
        'ed.',
        'jbpma',
        'VLOqq',
        'APIAuth',
        'sGHez',
        '7jinbWi',
        'xJEIP',
        'erty',
        '__importDe',
        '../config/',
        '894456CzCfFi',
        'LNArs',
        '39hjgCUa',
        'hgGpm',
        'fyVUc',
        '../errors/',
        '35376BGairc',
        'isAPIAuthP',
        'Invalid\x20to',
        'KqfzX',
        'verify',
        'Token\x20was\x20',
        'auth',
        'jiBpG',
        'jsonwebtok',
        'fault',
        'value',
        'secret',
        '__esModule',
        '10ZlHohR'
    ];
    a = function () {
        return J;
    };
    return a();
}