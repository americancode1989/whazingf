'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x119)) / (0x12a0 + 0x1 * -0x1303 + 0x64) * (-parseInt(k(0x127)) / (-0x3f7 + -0x1 * 0x6cd + 0xc5 * 0xe)) + parseInt(l(0x10c)) / (0x1e6c + -0x15f3 * -0x1 + -0x45d * 0xc) * (-parseInt(k(0x12d)) / (0xabb * -0x2 + -0x6 * 0x123 + 0x1c4c)) + -parseInt(k(0x120)) / (0xef7 * -0x1 + -0x1a2c + 0x2928) * (parseInt(l(0x121)) / (-0xa2 * -0x17 + 0x2e2 + -0x116a)) + -parseInt(l(0x122)) / (-0x117c + 0xc4e + 0x535) + parseInt(k(0x11b)) / (-0xa5 * 0x23 + -0x3 * 0x1d2 + 0x1c0d) * (-parseInt(l(0x12a)) / (-0x1 * -0x3fd + 0x1 * 0x721 + 0x1 * -0xb15)) + parseInt(l(0x123)) / (-0x1087 + -0xb33 + 0x6f1 * 0x4) + -parseInt(l(0x129)) / (-0x1b77 + -0x7 * 0x515 + 0x7 * 0x903) * (-parseInt(k(0x10f)) / (-0x1 * 0x1fa8 + 0x1a9f + 0x515 * 0x1));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x152e1 * -0x4 + 0x550fe + -0x6f22b));
const c = {};
function a() {
    const s = [
        'addColumn',
        '8DZFTad',
        'type',
        'CASCADE',
        'TrJnL',
        'erty',
        '17495yPTMTV',
        '96nCeeDO',
        '1864058wwqGoy',
        '2701680NBmvGF',
        'BOOLEAN',
        'sequelize',
        'Groups',
        '44BElWRb',
        'tenantId',
        '935xufUjU',
        '3680604ZNQgSf',
        'removeColu',
        'dACKe',
        '1387844zDNEvX',
        'MHjiV',
        'describeTa',
        'YSOsO',
        'dKlmX',
        'qzZJN',
        'isActive',
        'restrict',
        'value',
        'iQAMy',
        '3DpGUPX',
        'defineProp',
        '__esModule',
        '191544UTdElI',
        'allowNull',
        'DataTypes',
        'INTEGER',
        'exports',
        'Tenants',
        'ble',
        'ACIbn',
        'defaultVal',
        'CTzZr',
        '14024ofjLiB'
    ];
    a = function () {
        return s;
    };
    return a();
}
c[m(0x10a)] = !![], Object[m(0x10d) + m(0x11f)](exports, m(0x10e), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1099 + 0x1fd5 + -0x1 * 0x2f69);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0x125));
module[m(0x113)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x116)] = p(0x126), g[p(0x11e)] = p(0x128), g[o(0x118)] = o(0x114), g[o(0x107)] = p(0x11d), g[o(0x12c)] = p(0x109), g[o(0x10b)] = p(0x108);
        const h = g, i = await f[p(0x12f) + p(0x115)](h[o(0x116)]);
        (!i || !i[h[o(0x11e)]]) && await f[o(0x11a)](h[o(0x116)], h[o(0x11e)], {
            'type': sequelize_1[o(0x111)][p(0x112)],
            'references': {
                'model': h[p(0x118)],
                'key': 'id'
            },
            'onUpdate': h[p(0x107)],
            'onDelete': h[p(0x12c)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[p(0x10b)]]) {
            const j = {};
            j[p(0x11c)] = sequelize_1[p(0x111)][o(0x124)], j[p(0x110)] = ![], j[p(0x117) + 'ue'] = !![], await f[p(0x11a)](h[o(0x116)], h[o(0x10b)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x106)] = q(0x126), f[q(0x105)] = q(0x128), f[r(0x12e)] = r(0x108);
        const g = f;
        await e[q(0x12b) + 'mn'](g[q(0x106)], g[r(0x105)]), await e[r(0x12b) + 'mn'](g[q(0x106)], g[q(0x12e)]);
    }
};