'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xba)) / (0xc9 + 0x4cc + -0x594) + -parseInt(q(0xce)) / (0x1257 + -0xf75 + -0x2e0) * (-parseInt(q(0xc1)) / (0x8b * -0x2f + 0xeb + -0x1 * -0x189d)) + parseInt(p(0xd5)) / (-0x1f71 + -0x163 + -0x1 * -0x20d8) * (parseInt(p(0xb3)) / (0x2514 + 0x1334 + -0x3843)) + parseInt(q(0xca)) / (0x31 * -0x95 + 0x10e8 + 0x14b * 0x9) * (-parseInt(p(0xcc)) / (0x3 * 0x41f + 0x9e7 + 0x163d * -0x1)) + parseInt(q(0xc4)) / (0x13a6 + 0xc7 * -0x21 + 0x609) + -parseInt(p(0xb8)) / (0x4 * 0x62e + 0x26be + -0x3f6d) * (-parseInt(q(0xd7)) / (-0x30 * -0x1e + 0xfbe + -0x1554)) + -parseInt(q(0xc2)) / (0x88 * 0x13 + -0x22d4 + -0x1 * -0x18c7) * (parseInt(p(0xc0)) / (0xc0a + 0x359 * -0x2 + -0x54c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x129ff3 + -0x5da8c + -0xf499 * -0x25));
const o = {};
o[r(0xc7)] = !![], Object[r(0xd4) + r(0xb4)](exports, r(0xbb), o);
const sequelize_1 = require(s(0xcf));
function a() {
    const x = [
        'dropTable',
        '8675800WXWDGt',
        'Users',
        'type',
        'value',
        'allowNull',
        'lVSxL',
        '3870HkSnRG',
        'SET\x20NULL',
        '10486CLIliq',
        'STRING',
        '634smgukG',
        'sequelize',
        'DataTypes',
        'lEzuR',
        'Queues',
        'DATE',
        'defineProp',
        '75380cPyUTm',
        'yJMvU',
        '26710uuQtmk',
        'mNXFu',
        '190knjvEz',
        'erty',
        'kCDDC',
        'CASCADE',
        'primaryKey',
        '3411jTNnkb',
        'createTabl',
        '1226636EwlytX',
        '__esModule',
        'ent',
        'INTEGER',
        'autoIncrem',
        'exports',
        '108MxZdxK',
        '2193OQIyEj',
        '3168539ouCROM'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x23b7 * 0x1 + 0x1e5 + 0x2284);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[s(0xbf)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0xd6)] = u(0xd2), g[t(0xb5)] = t(0xc5), g[t(0xb2)] = u(0xb6), g[u(0xd1)] = t(0xcb);
        const h = g, i = {};
        i[t(0xc6)] = sequelize_1[u(0xd0)][t(0xbd)], i[t(0xb7)] = !![], i[u(0xbe) + t(0xbc)] = !![], i[t(0xc8)] = ![];
        const j = {};
        return j[u(0xc6)] = sequelize_1[t(0xd0)][u(0xcd)], j[u(0xc8)] = ![], f[t(0xb9) + 'e'](h[u(0xd6)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[u(0xd0)][t(0xbd)],
                'references': {
                    'model': h[t(0xb5)],
                    'key': 'id'
                },
                'onUpdate': h[u(0xb2)],
                'onDelete': h[u(0xd1)]
            },
            'createdAt': {
                'type': sequelize_1[t(0xd0)][u(0xd3)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0xd0)][u(0xd3)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0xc9)] = w(0xd2);
        const f = e;
        return d[w(0xc3)](f[w(0xc9)]);
    }
};