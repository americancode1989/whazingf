'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xae)) / (0x19e5 + 0x83e + -0x2222) * (parseInt(t(0x9d)) / (-0xd35 + 0x2251 + -0x151a)) + -parseInt(t(0x9b)) / (-0xe * 0x1a6 + 0x3 * 0xb7e + -0x35 * 0x37) * (-parseInt(u(0xb1)) / (-0x1 * 0x254f + -0xfee + 0x3541)) + parseInt(t(0x94)) / (-0xeeb + 0x1acf * -0x1 + 0x29bf) + -parseInt(t(0xb5)) / (0xd * 0x1d + -0x1597 + 0xa12 * 0x2) * (-parseInt(u(0xb4)) / (0x20a * 0xf + -0xd1b + -0x1174)) + parseInt(t(0x92)) / (-0x1f3 * -0xb + 0x3a9 * 0x9 + -0x365a) + -parseInt(u(0xa1)) / (-0x106 * 0x8 + 0x1654 + -0x1 * 0xe1b) + -parseInt(u(0x96)) / (-0x10fe + -0x2450 + 0x2 * 0x1aac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6e69b + 0x377ff + -0xe * -0x100ab));
const s = {};
function a() {
    const B = [
        'allowNull',
        'DataTypes',
        'pending',
        'qDcVP',
        'BzVTb',
        'nUNGy',
        'erty',
        'primaryKey',
        'exports',
        'INTEGER',
        'STRING',
        '410413ELaqHr',
        'CASCADE',
        'ent',
        '4pPaFOB',
        'autoIncrem',
        'createTabl',
        '5327DRRcbO',
        '6330JcOrlq',
        'OpQLI',
        'eucaS',
        'defineProp',
        'dropTable',
        '6127024xlTEfl',
        'sequelize',
        '5492115izpFqF',
        '__esModule',
        '24697170AnDbUS',
        'type',
        'sTTtj',
        'qScLt',
        'Contacts',
        '3596850XEWJeo',
        'DATE',
        '2AImgYx',
        'Users',
        'Tickets',
        'value',
        '2619018WPEDCL',
        'SET\x20NULL'
    ];
    a = function () {
        return B;
    };
    return a();
}
s[v(0xa0)] = !![], Object[v(0x90) + v(0xa9)](exports, w(0x95), s);
const sequelize_1 = require(v(0x93));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x218d + -0x3 * 0x1 + 0x3 * -0xafe);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[v(0xab)] = {
    'up': e => {
        const x = w, y = w, f = {};
        f[x(0xb6)] = y(0x9f), f[y(0x99)] = x(0xa5), f[y(0x98)] = y(0x9a), f[x(0xa7)] = y(0xaf), f[x(0xa8)] = y(0x9e), f[x(0xa6)] = x(0xa2);
        const g = f, h = {};
        return h[x(0x97)] = sequelize_1[y(0xa4)][y(0xac)], h[x(0xb2) + x(0xb0)] = !![], h[y(0xaa)] = !![], h[x(0xa3)] = ![], e[y(0xb3) + 'e'](g[x(0xb6)], {
            'id': h,
            'status': {
                'type': sequelize_1[y(0xa4)][y(0xad)],
                'defaultValue': g[y(0x99)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0xa4)][y(0xad)] },
            'contactId': {
                'type': sequelize_1[x(0xa4)][x(0xac)],
                'references': {
                    'model': g[y(0x98)],
                    'key': 'id'
                },
                'onUpdate': g[x(0xa7)],
                'onDelete': g[x(0xa7)]
            },
            'userId': {
                'type': sequelize_1[x(0xa4)][y(0xac)],
                'references': {
                    'model': g[y(0xa8)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xa7)],
                'onDelete': g[x(0xa6)]
            },
            'createdAt': {
                'type': sequelize_1[y(0xa4)][x(0x9c)](-0x8db + -0x1ecf + 0x27b0),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xa4)][y(0x9c)](0x1 * -0x9fc + -0x1 * 0x6e6 + 0x1 * 0x10e8),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0xb7)] = z(0x9f);
        const f = e;
        return d[z(0x91)](f[A(0xb7)]);
    }
};