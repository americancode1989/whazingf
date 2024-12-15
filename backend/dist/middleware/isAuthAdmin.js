'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0x160)) / (-0x3d * -0x9c + -0x4e1 + -0x204a) + -parseInt(z(0x15c)) / (-0xa30 + 0x761 + 0x2d1) + parseInt(z(0x156)) / (-0x115 * 0x1c + 0x1 * -0x17cb + 0x361a) + -parseInt(z(0x164)) / (0x21d7 * -0x1 + -0x1d01 + 0x95 * 0x6c) * (-parseInt(z(0x192)) / (-0x3 * 0x4fc + 0x12 * -0x25 + 0x1193)) + parseInt(z(0x178)) / (0x182f + -0x169b + -0x18e) + -parseInt(z(0x198)) / (-0x89 * 0x1 + -0x1 * 0x317 + 0x3a7) * (parseInt(y(0x18f)) / (-0x1754 + -0x19 * 0xed + 0x2e81)) + parseInt(y(0x15b)) / (-0x13d * -0x1f + 0xf02 + -0x355c) * (parseInt(z(0x189)) / (-0x7f * -0x35 + 0x2e * -0x59 + -0xa43));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x36f38 + -0x11 * 0x78dd + 0x103b95));
var __importDefault = this && this[A(0x194) + B(0x183)] || function (c) {
    const C = B;
    return c && c[C(0x181)] ? c : { 'default': c };
};
const k = {};
k[B(0x187)] = !![], Object[B(0x191) + A(0x19a)](exports, A(0x181), k);
function a() {
    const F = [
        'defineProp',
        '248035bXqxKw',
        'DaJom',
        '__importDe',
        'nqJYP',
        'TIPPf',
        'tenantId',
        '2233ZUDaoP',
        'JCNnL',
        'erty',
        'xgfap',
        '1376745dHjmar',
        'UinDg',
        'xmONG',
        'user',
        'ehiTX',
        '200709BgMsLJ',
        '77018YfRxPC',
        '\x20Admin',
        'secret',
        'env',
        '142196RsEeFX',
        'sGfyk',
        'JWpHV',
        'ains\x20defin',
        '4dIuGoi',
        'Not\x20exists',
        'split',
        'oVuZj',
        '../config/',
        'YNgpx',
        '\x20admin\x20dom',
        'auth',
        'authorizat',
        'Agvyi',
        'Not\x20admin\x20',
        'ADMIN_DOMA',
        'BraTy',
        'BAbxt',
        'ion',
        'findByPk',
        'AppError',
        '../errors/',
        'headers',
        'Token\x20was\x20',
        '1090896VtlVja',
        'email',
        'Invalid\x20to',
        'permission',
        'PAsVI',
        'User',
        'jsonwebtok',
        'miFBu',
        'indexOf',
        '__esModule',
        'not\x20provid',
        'fault',
        'profile',
        'swgah',
        '../models/',
        'value',
        'ken\x20or\x20not',
        '20bLZMEv',
        'default',
        'IGExd',
        'verify',
        'CfKeI',
        'njTPt',
        '6056UELtKY',
        'ed.'
    ];
    a = function () {
        return F;
    };
    return a();
}
const jsonwebtoken_1 = require(B(0x17e) + 'en'), AppError_1 = __importDefault(require(B(0x175) + B(0x174))), auth_1 = __importDefault(require(B(0x168) + A(0x16b))), User_1 = __importDefault(require(B(0x186) + B(0x17d))), isAuthAdmin = async (d, e, f) => {
        const D = A, E = B, g = {
                'ehiTX': D(0x177) + E(0x182) + D(0x190),
                'nqJYP': E(0x16e) + E(0x17b),
                'IGExd': E(0x165) + D(0x16a) + D(0x163) + D(0x190),
                'Agvyi': D(0x17a) + E(0x188) + E(0x15d),
                'CfKeI': function (l, m) {
                    return l === m;
                },
                'PAsVI': D(0x18e),
                'BraTy': D(0x162),
                'UinDg': function (l, m) {
                    return l !== m;
                },
                'xmONG': E(0x196),
                'oVuZj': E(0x199),
                'DaJom': E(0x17f),
                'sGfyk': E(0x155),
                'BAbxt': D(0x169),
                'swgah': function (l) {
                    return l();
                }
            }, h = d[E(0x176)][D(0x16c) + E(0x172)], i = process[E(0x15f)][D(0x16f) + 'IN'];
        if (!h) {
            if (g[E(0x18d)](g[E(0x17c)], g[E(0x170)]))
                throw new d[(E(0x18a))](g[E(0x15a)], 0xa8 * -0x31 + 0x626 * -0x4 + 0x3a53);
            else
                throw new AppError_1[(E(0x18a))](g[D(0x15a)], -0x1 * 0x245a + -0x19b3 * -0x1 + 0x5 * 0x272);
        }
        if (!i) {
            if (g[D(0x157)](g[E(0x158)], g[D(0x158)]))
                throw new d[(E(0x18a))](g[E(0x195)], -0x2 * -0x359 + -0x1b7a + 0x165b);
            else
                throw new AppError_1[(E(0x18a))](g[D(0x18b)], -0x15bd + 0x6fd + 0x255 * 0x7);
        }
        const [, j] = h[D(0x166)]('\x20');
        try {
            if (g[E(0x157)](g[E(0x167)], g[E(0x193)])) {
                const n = (0x2 * 0x830 + 0x355 * 0x4 + -0x1db4, jsonwebtoken_1[E(0x18c)])(j, auth_1[E(0x18a)][E(0x15e)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n, r = await User_1[E(0x18a)][E(0x173)](o);
                if (!r || g[E(0x18d)](r[D(0x179)][D(0x180)](i), 0x2146 + -0x6cb * 0x3 + -0xce4)) {
                    if (g[D(0x18d)](g[D(0x161)], g[E(0x161)]))
                        throw new AppError_1[(D(0x18a))](g[E(0x195)], -0x13c1 + 0xb61 * -0x2 + 0x2c16);
                    else
                        throw new d[(E(0x18a))](g[D(0x18b)], 0x1 * -0x16f7 + -0x1eaa + 0x3734);
                }
                const s = {};
                s['id'] = o, s[D(0x184)] = p, s[D(0x197)] = q, d[E(0x159)] = s;
            } else
                throw new d[(D(0x18a))](g[E(0x16d)], -0x6fb * 0x1 + 0x13a1 + -0xb13);
        } catch (v) {
            if (g[D(0x157)](g[D(0x171)], g[E(0x171)])) {
                const x = {};
                return x[E(0x18a)] = j, g && h[E(0x181)] ? i : x;
            } else
                throw new AppError_1[(D(0x18a))](g[E(0x16d)], 0x1646 + 0x132e * -0x1 + -0x185);
        }
        return g[E(0x185)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb2 * -0x13 + -0xeec + 0x1d77);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[A(0x18a)] = isAuthAdmin;