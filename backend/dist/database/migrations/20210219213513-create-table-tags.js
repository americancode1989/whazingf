'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f * -0x5 + 0x1d94 + -0x1bfb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const F = [
        'iThfc',
        '540128VFhhDo',
        'ent',
        'DATE',
        '245166XSQCFE',
        'defaultVal',
        'Tenants',
        'Users',
        'dropTable',
        'Tags',
        'hmkHU',
        'allowNull',
        'type',
        '54JfBRSq',
        'GyLfu',
        'SKCcS',
        '11943XOPRUZ',
        '1570fbFNpo',
        'exports',
        '__esModule',
        'MpZQe',
        'autoIncrem',
        'BOOLEAN',
        'sequelize',
        '236852tVkZAl',
        'primaryKey',
        'INTEGER',
        'all',
        'defineProp',
        'CASCADE',
        '2976248VcRWYe',
        '221455xpcGEi',
        'SET\x20NULL',
        '2025284xaeRxz',
        'value',
        'STRING',
        '6EIMkeN',
        'ItIJV',
        'DataTypes',
        'createTabl',
        'erty'
    ];
    a = function () {
        return F;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x113)) / (-0xdc7 * -0x1 + 0x1 * -0x353 + 0x1 * -0xa73) + parseInt(x(0x116)) / (-0x22e + -0x17d9 + 0xd7 * 0x1f) * (-parseInt(x(0x10d)) / (-0xba * -0x26 + -0x1ddb * -0x1 + 0x1cba * -0x2)) + parseInt(x(0x10a)) / (-0x14c + -0x2 * 0x262 + 0x4 * 0x185) + parseInt(x(0x108)) / (-0x3a0 * -0x1 + -0x197 * 0xa + 0xc4b) * (parseInt(x(0x11f)) / (0x1a3a + -0x35b * 0xb + 0xab5)) + parseInt(x(0x101)) / (0x18d * -0x9 + 0x1421 + 0x625 * -0x1) + parseInt(y(0x107)) / (-0x19 * 0x13 + -0xb3 * -0x20 + -0x147d) + -parseInt(y(0x122)) / (-0x22fb + -0x1c4c + 0x2 * 0x1fa8) * (parseInt(y(0x123)) / (-0x1 * 0x1bc6 + -0x1b59 * -0x1 + 0x77));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xffa4 + -0x887d2 + -0x2c * -0x47fb));
const w = {};
w[z(0x10b)] = !![], Object[A(0x105) + A(0x111)](exports, z(0x125), w);
const sequelize_1 = require(z(0x100));
module[A(0x124)] = {
    'up': h => {
        const B = z, C = A, i = {};
        i[B(0x11c)] = B(0x11b), i[B(0x120)] = B(0x119), i[B(0x10e)] = C(0x106), i[C(0x112)] = C(0x109), i[C(0x126)] = C(0x118);
        const j = i, k = {};
        k[C(0x11e)] = sequelize_1[B(0x10f)][B(0x103)], k[B(0x102)] = !![], k[C(0xfe) + B(0x114)] = !![], k[B(0x11d)] = ![];
        const l = {};
        l[B(0x11e)] = sequelize_1[C(0x10f)][C(0x10c)], l[C(0x11d)] = ![];
        const m = {};
        m[C(0x11e)] = sequelize_1[C(0x10f)][C(0xff)], m[C(0x117) + 'ue'] = !![], m[B(0x11d)] = ![];
        const n = {};
        return n[C(0x11e)] = sequelize_1[B(0x10f)][C(0x10c)], n[B(0x11d)] = ![], Promise[C(0x104)]([h[B(0x110) + 'e'](j[C(0x11c)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[C(0x10f)][B(0x103)],
                    'references': {
                        'model': j[B(0x120)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x10e)],
                    'onDelete': j[B(0x112)]
                },
                'tenantId': {
                    'type': sequelize_1[B(0x10f)][B(0x103)],
                    'references': {
                        'model': j[B(0x126)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x10e)],
                    'onDelete': j[C(0x10e)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[C(0x10f)][B(0x115)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0x10f)][B(0x115)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x121)] = D(0x11b);
        const f = e;
        return Promise[E(0x104)]([d[D(0x11a)](f[E(0x121)])]);
    }
};