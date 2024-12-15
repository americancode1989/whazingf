'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0xe1)) / (-0xcf4 + 0x7ed * -0x3 + 0x24bc) + parseInt(D(0xdb)) / (0x1ba7 + 0x13a8 + 0x2f4d * -0x1) * (-parseInt(D(0xea)) / (-0x127f * 0x1 + -0x47 * 0x5 + -0x1 * -0x13e5)) + parseInt(D(0xd5)) / (0xf1 * -0x4 + 0x1d74 + -0x19ac) + -parseInt(D(0xd7)) / (0x22a * 0x3 + -0x20e + -0x46b * 0x1) * (-parseInt(E(0xc1)) / (-0x1 * -0x2e7 + 0x43 * -0x77 + 0x1c44)) + -parseInt(E(0xc0)) / (0x4bd * -0x1 + -0x1 * -0x1875 + -0x1 * 0x13b1) * (parseInt(D(0xef)) / (-0xdcc + -0x619 + -0x1 * -0x13ed)) + parseInt(E(0xcf)) / (-0x2 * 0x7f9 + -0x1e1a + 0x2e15) * (parseInt(D(0xdd)) / (0x16 * -0x133 + -0x7e + 0x1aea)) + parseInt(D(0xd9)) / (-0xc52 + 0x180 * -0x9 + -0x19dd * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8bf0a + 0x4880b + -0x25 * 0x38d4));
function a() {
    const L = [
        '283340CRsSwh',
        'jIDZT',
        'pending',
        'Tasks',
        'STRING',
        'dropTable',
        'DATE',
        'Users',
        'high',
        '81ogfVYz',
        'defaultVal',
        'kPRgc',
        'allowNull',
        'defineProp',
        '179856rosiyN',
        'SET\x20NULL',
        'ent',
        'DRmTt',
        'medium',
        'sequelize',
        'huOVU',
        'GRuyr',
        'CASCADE',
        '28DFsaNZ',
        '461172cWcYKS',
        'autoIncrem',
        'wenGP',
        'primaryKey',
        'exports',
        'low',
        'ENUM',
        'bpZQX',
        'TEXT',
        'DataTypes',
        'createTabl',
        'vdKLA',
        'xKLel',
        '__esModule',
        '1566lYynPk',
        'Tenants',
        'finished',
        'delayed',
        'type',
        'none',
        '788388cObfjz',
        'hzQrF',
        '10JtYcWe',
        'value',
        '3525687auuiCw',
        'QpEFE',
        '7226kyNUOZ',
        'INTEGER',
        '7550gPwJoK',
        'dcGzo',
        'pnRob',
        'erty'
    ];
    a = function () {
        return L;
    };
    return a();
}
const C = {};
C[F(0xd8)] = !![], Object[G(0xee) + F(0xe0)](exports, F(0xce), C);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x68d + -0x18 * 0x148 + 0xd * 0x1eb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(F(0xbc));
module[G(0xc5)] = {
    'up': i => {
        const H = F, I = F, j = {};
        j[H(0xf2)] = I(0xe4), j[I(0xde)] = I(0xd2), j[I(0xe2)] = H(0xe3), j[H(0xd6)] = H(0xd1), j[H(0xbd)] = H(0xe9), j[H(0xdf)] = H(0xf3), j[I(0xc8)] = I(0xc6), j[H(0xda)] = H(0xd4), j[H(0xbe)] = I(0xd0), j[H(0xcc)] = I(0xbf), j[I(0xc3)] = I(0xf0), j[H(0xec)] = H(0xe8);
        const k = j, l = {};
        l[H(0xd3)] = sequelize_1[I(0xca)][I(0xdc)], l[H(0xc2) + I(0xf1)] = !![], l[I(0xc4)] = !![], l[I(0xed)] = ![];
        const m = {};
        m[H(0xd3)] = sequelize_1[I(0xca)][H(0xc9)], m[I(0xed)] = !![], m[H(0xeb) + 'ue'] = null;
        const n = {};
        n[H(0xd3)] = sequelize_1[H(0xca)][H(0xc9)], n[H(0xed)] = !![], n[H(0xeb) + 'ue'] = null;
        const o = {};
        o[H(0xd3)] = sequelize_1[H(0xca)][I(0xe7)], o[I(0xed)] = !![], o[H(0xeb) + 'ue'] = null;
        const p = {};
        return p[H(0xd3)] = sequelize_1[H(0xca)][H(0xe5)], p[I(0xed)] = !![], p[H(0xeb) + 'ue'] = null, i[H(0xcb) + 'e'](k[I(0xf2)], {
            'id': l,
            'name': m,
            'description': n,
            'limitDate': o,
            'owner': p,
            'status': {
                'type': sequelize_1[I(0xca)][I(0xc7)](k[H(0xde)], k[I(0xe2)], k[I(0xd6)]),
                'allowNull': !![],
                'defaultValue': null
            },
            'priority': {
                'type': sequelize_1[H(0xca)][I(0xc7)](k[H(0xbd)], k[H(0xdf)], k[H(0xc8)], k[I(0xda)]),
                'allowNull': !![],
                'defaultValue': null
            },
            'comments': {
                'type': sequelize_1[H(0xca)][H(0xc9)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[I(0xca)][I(0xdc)],
                'references': {
                    'model': k[I(0xbe)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xcc)],
                'onDelete': k[I(0xc3)],
                'allowNull': !![]
            },
            'userId': {
                'type': sequelize_1[I(0xca)][I(0xdc)],
                'references': {
                    'model': k[H(0xec)],
                    'key': 'id'
                },
                'onUpdate': k[H(0xcc)],
                'onDelete': k[I(0xc3)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[H(0xca)][I(0xe7)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[I(0xca)][I(0xe7)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = G, e = {};
        e[J(0xcd)] = K(0xe4);
        const f = e;
        return d[K(0xe6)](f[J(0xcd)]);
    }
};