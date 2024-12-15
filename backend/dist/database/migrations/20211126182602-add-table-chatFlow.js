'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5b3 + 0x12d1 + 0xa * -0x24e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x185)) / (0x38d + -0x4aa * -0x6 + -0x1f88) + -parseInt(y(0x183)) / (-0x2114 + 0x29 * -0x89 + 0x3707) + parseInt(y(0x195)) / (-0x26c + -0x1574 + 0x5 * 0x4c7) * (parseInt(y(0x178)) / (-0x1db5 + -0x216d * -0x1 + 0x1 * -0x3b4)) + parseInt(x(0x190)) / (0x13d8 + 0x83d + -0x10 * 0x1c1) * (-parseInt(y(0x198)) / (-0xc54 + 0x1f11 + -0x1 * 0x12b7)) + parseInt(y(0x194)) / (0x1 * -0x1 + -0x13cf * -0x1 + -0x1 * 0x13c7) * (parseInt(x(0x19d)) / (-0x24ad + -0x1b * 0x114 + 0x41d1)) + parseInt(x(0x19a)) / (0x7 * -0x3c9 + 0x22a9 + -0x821) + -parseInt(x(0x1a0)) / (0x1eb0 + -0x17 * -0x149 + -0x3c35 * 0x1) * (-parseInt(y(0x18a)) / (-0x1 * 0x1a4d + -0x23cf + 0x3e27));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d24 + -0xcbc6 + 0xbc5c1));
const w = {};
w[z(0x182)] = !![], Object[z(0x19f) + A(0x188)](exports, A(0x192), w);
const sequelize_1 = require(z(0x18e));
module[A(0x180)] = {
    'up': i => {
        const B = z, C = A, j = {};
        j[B(0x17c)] = B(0x17b), j[C(0x17d)] = B(0x186), j[C(0x181)] = C(0x189), j[C(0x191)] = B(0x193), j[B(0x18d)] = B(0x1a1);
        const k = j, l = {};
        l[B(0x197)] = sequelize_1[C(0x184)][B(0x18f)], l[B(0x17a) + B(0x187)] = !![], l[B(0x179)] = !![], l[B(0x17f)] = ![];
        const m = {};
        m[C(0x197)] = sequelize_1[B(0x184)][B(0x17e)], m[B(0x17f)] = ![], m[C(0x199) + 'ue'] = '';
        const n = {};
        n[C(0x197)] = sequelize_1[B(0x184)][B(0x196)], n[C(0x17f)] = ![], n[B(0x199) + 'ue'] = {};
        const o = {};
        o[C(0x197)] = sequelize_1[C(0x184)][B(0x19c)], o[C(0x17f)] = ![], o[B(0x199) + 'ue'] = !![];
        const p = {};
        return p[B(0x197)] = sequelize_1[C(0x184)][B(0x17e)], p[B(0x17f)] = !![], p[B(0x199) + 'ue'] = null, i[B(0x19e) + 'e'](k[B(0x17c)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[C(0x184)][B(0x18f)],
                'references': {
                    'model': k[C(0x17d)],
                    'key': 'id'
                },
                'onUpdate': k[B(0x181)],
                'onDelete': k[B(0x181)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[C(0x184)][C(0x18f)],
                'references': {
                    'model': k[B(0x191)],
                    'key': 'id'
                },
                'onUpdate': k[B(0x181)],
                'onDelete': k[C(0x18d)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[C(0x184)][C(0x18b)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0x184)][B(0x18b)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x18c)] = D(0x17b);
        const f = e;
        return d[E(0x19b)](f[D(0x18c)]);
    }
};
function a() {
    const F = [
        '207109yrXYAC',
        '28161hpktst',
        'JSON',
        'type',
        '5363832fFYsMt',
        'defaultVal',
        '475992RbADWB',
        'dropTable',
        'BOOLEAN',
        '272qoNIGH',
        'createTabl',
        'defineProp',
        '80mWqTjM',
        'restrict',
        '516BVeBDa',
        'primaryKey',
        'autoIncrem',
        'ChatFlow',
        'Suvai',
        'gfGHB',
        'STRING',
        'allowNull',
        'exports',
        'mQIYe',
        'value',
        '249022iTbyTw',
        'DataTypes',
        '1030455oqYMiO',
        'Users',
        'ent',
        'erty',
        'CASCADE',
        '630157zmubFh',
        'DATE',
        'oTMwJ',
        'MqUXq',
        'sequelize',
        'INTEGER',
        '5IZkUam',
        'blNrg',
        '__esModule',
        'Tenants'
    ];
    a = function () {
        return F;
    };
    return a();
}