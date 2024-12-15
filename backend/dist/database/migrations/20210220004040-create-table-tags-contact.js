'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x153)) / (-0x1a92 + -0x1 * 0x4a9 + 0x2 * 0xf9e) + -parseInt(r(0x152)) / (-0xfdd + -0x1dba + 0x2d99) * (parseInt(s(0x172)) / (-0xb41 + 0x3 * 0x257 + 0x43f)) + -parseInt(r(0x171)) / (0x5 * 0xeb + 0x217e * 0x1 + -0x5 * 0x79d) * (parseInt(s(0x174)) / (-0x1a0e + -0x4 * -0x8e3 + -0x979 * 0x1)) + -parseInt(r(0x150)) / (-0x1615 + 0xc89 + 0x992 * 0x1) + -parseInt(r(0x160)) / (-0x1bc7 + 0x1c50 + -0x82) * (-parseInt(s(0x157)) / (-0x26d8 + -0x23d6 + 0x83 * 0x92)) + -parseInt(s(0x14d)) / (0x1184 + -0x5bd + 0x14e * -0x9) * (parseInt(r(0x170)) / (0x84a + 0x1509 + -0x1d49)) + -parseInt(s(0x15e)) / (-0x2 * 0x66b + -0x1fb7 + 0x4 * 0xb26) * (-parseInt(s(0x16e)) / (-0x190c + -0x1 * -0x503 + 0x35 * 0x61));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17a27 + -0x6b9c7 + 0xb9a3a));
function a() {
    const z = [
        '55aRfQEx',
        'ContactTag',
        '63DtrTSj',
        'type',
        'bkafP',
        '1299846JwAVRW',
        'CRrOG',
        '2zxIjqB',
        '380365OiggUh',
        'RXaJq',
        'Tenants',
        'gKZBE',
        '88XTEhrG',
        'allowNull',
        'DATE',
        'primaryKey',
        'INTEGER',
        'autoIncrem',
        'gJNnz',
        '4094486SSNpAw',
        'DataTypes',
        '2156iJXXKR',
        'Tags',
        'zepQX',
        'Contacts',
        'dropTable',
        'qMfzy',
        'createTabl',
        'ent',
        'erty',
        'RESTRICT',
        'CASCADE',
        'exports',
        'value',
        'defineProp',
        '12xsTnbK',
        '__esModule',
        '201850doqTCX',
        '1944SBJdEj',
        '509703dfffVe',
        'sequelize'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x16c)] = !![], Object[t(0x16d) + u(0x168)](exports, t(0x16f), q);
const sequelize_1 = require(t(0x173));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x210d + 0x4 * 0x161 + 0x1cd5);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0x16b)] = {
    'up': e => {
        const v = t, w = u, f = {};
        f[v(0x151)] = w(0x14c) + 's', f[w(0x154)] = v(0x161), f[v(0x14f)] = v(0x16a), f[w(0x156)] = v(0x169), f[w(0x165)] = w(0x163), f[w(0x162)] = w(0x155);
        const g = f, h = {};
        return h[w(0x14e)] = sequelize_1[w(0x15f)][w(0x15b)], h[w(0x15c) + v(0x167)] = !![], h[v(0x15a)] = !![], h[w(0x158)] = ![], e[v(0x166) + 'e'](g[w(0x151)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[w(0x15f)][w(0x15b)],
                'references': {
                    'model': g[v(0x154)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x14f)],
                'onDelete': g[w(0x156)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0x15f)][w(0x15b)],
                'references': {
                    'model': g[w(0x165)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x14f)],
                'onDelete': g[w(0x14f)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x15f)][v(0x15b)],
                'references': {
                    'model': g[w(0x162)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x14f)],
                'onDelete': g[v(0x14f)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x15f)][w(0x159)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x15f)][w(0x159)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x15d)] = x(0x14c) + 's';
        const f = e;
        return d[y(0x164)](f[x(0x15d)]);
    }
};