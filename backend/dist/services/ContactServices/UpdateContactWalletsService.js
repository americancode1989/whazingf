'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x14a)) / (-0x19 * -0x3a + -0x548 + 0x1 * -0x61) * (-parseInt(w(0x11e)) / (0xb8f + -0x277 * -0x8 + 0x5 * -0x641)) + -parseInt(v(0x12e)) / (0x4 * -0x1c1 + -0x1274 + 0x197b) + parseInt(w(0x12c)) / (-0x1a * -0xdd + 0x999 + -0x2007) + parseInt(v(0x120)) / (-0xfd0 + -0x1c39 + -0x1607 * -0x2) * (parseInt(w(0x139)) / (-0x225a + -0x3 * 0x69d + 0x3637)) + -parseInt(w(0x136)) / (0x16e6 * -0x1 + -0x26eb + 0x3dd8) * (parseInt(w(0x127)) / (-0x92d + 0x17 * -0x10f + -0x10c7 * -0x2)) + parseInt(w(0x134)) / (-0x1 * -0x105d + -0xb6 * 0x1e + -0x14 * -0x40) * (parseInt(w(0x11d)) / (-0x1eeb + 0x2376 + -0x481)) + -parseInt(v(0x13b)) / (0xb1b + 0x1 * 0x162a + -0x213a) * (-parseInt(w(0x144)) / (0x167 * -0x18 + 0x2 * -0x1fe + 0x25b0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7df6 * -0x13 + -0x47d2c + 0x2995d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x69c + -0x1690 + 0x110b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x11b) + y(0x141)] || function (c) {
    const z = y;
    return c && c[z(0x142)] ? c : { 'default': c };
};
const o = {};
function a() {
    const E = [
        'SMgPy',
        'number',
        'push',
        '__importDe',
        'AaAiK',
        '50iTDyuU',
        '14hgclgn',
        'ERR_NO_CON',
        '85ORthFy',
        'VERRp',
        'contactId',
        'attributes',
        'tags',
        'rs/AppErro',
        'wallets',
        '32nEuXCU',
        'YCGMK',
        'default',
        'value',
        '../../erro',
        '2187124gsMjYZ',
        'erty',
        '1952478USPPUq',
        'destroy',
        'bulkCreate',
        '../../mode',
        'walletId',
        'include',
        '257265emWTGm',
        'where',
        '355166ekrBbl',
        'LfHut',
        'extraInfo',
        '283794gDuZOb',
        'ls/Contact',
        '662684KwPozz',
        'Wallet',
        'QqPJl',
        'tenantId',
        'TACT_FOUND',
        'profilePic',
        'fault',
        '__esModule',
        'email',
        '48ibPYJt',
        'Url',
        'Polxt',
        'FkMVD',
        'findOne',
        'forEach',
        '56024uwVJwY',
        'name',
        'defineProp'
    ];
    a = function () {
        return E;
    };
    return a();
}
o[y(0x12a)] = !![], Object[y(0x117) + y(0x12d)](exports, y(0x142), o);
const AppError_1 = __importDefault(require(y(0x12b) + x(0x125) + 'r')), Contact_1 = __importDefault(require(y(0x131) + y(0x13a))), ContactWallet_1 = __importDefault(require(x(0x131) + x(0x13a) + y(0x13c))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0x146)] = A(0x14b), k[B(0x121)] = A(0x119), k[A(0x147)] = B(0x143), k[A(0x13d)] = B(0x140) + A(0x145), k[B(0x11c)] = A(0x138), k[A(0x137)] = A(0x124), k[A(0x118)] = B(0x126), k[B(0x128)] = A(0x11f) + B(0x13f);
        const l = k, m = {};
        m[A(0x13e)] = j, m[B(0x122)] = i;
        const n = {};
        n[B(0x135)] = m, await ContactWallet_1[A(0x129)][A(0x12f)](n);
        const p = [];
        h[B(0x149)](t => {
            const C = B, D = A, u = {};
            u[C(0x132)] = !t['id'] ? t : t['id'], u[C(0x122)] = i, u[D(0x13e)] = j, p[C(0x11a)](u);
        }), await ContactWallet_1[B(0x129)][A(0x130)](p);
        const q = {};
        q['id'] = i, q[B(0x13e)] = j;
        const r = {};
        r[B(0x135)] = q, r[A(0x123)] = [
            'id',
            l[B(0x146)],
            l[B(0x121)],
            l[B(0x147)],
            l[A(0x13d)]
        ], r[B(0x133)] = [
            l[B(0x11c)],
            l[A(0x137)],
            {
                'association': l[B(0x118)],
                'attributes': [
                    'id',
                    l[B(0x146)]
                ]
            }
        ];
        const s = await Contact_1[A(0x129)][A(0x148)](r);
        if (!s)
            throw new AppError_1[(B(0x129))](l[B(0x128)], -0x73d + -0x1832 + 0x1b * 0x139);
        return s;
    };
exports[x(0x129)] = UpdateContactWalletsService;