'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x96)) / (-0xe36 + -0x1765 * 0x1 + 0x259c) * (-parseInt(s(0xb6)) / (0x19a3 + -0xfe7 + -0x5 * 0x1f2)) + -parseInt(r(0xa9)) / (0x1e9c * -0x1 + -0x9 * 0x1e2 + -0x2f91 * -0x1) + -parseInt(s(0xa6)) / (-0xe35 + -0x31c + -0x9 * -0x1ed) + parseInt(s(0xb5)) / (-0x257 * -0x7 + 0x161b + -0x2677) * (-parseInt(r(0xa2)) / (0x21ce + 0xd * -0xb7 + -0x1 * 0x187d)) + parseInt(r(0x9c)) / (0x177e + -0x5 * -0x52 + 0x5d * -0x45) * (-parseInt(r(0xab)) / (-0xd69 + -0x1565 + 0x157 * 0x1a)) + -parseInt(s(0x92)) / (0x44e + -0x1d * 0xd + 0x1 * -0x2cc) * (parseInt(r(0xac)) / (-0x1939 * 0x1 + -0x3d9 + 0x4 * 0x747)) + -parseInt(r(0xa4)) / (-0x1ad0 + 0x243 + 0x1898 * 0x1) * (-parseInt(r(0x9a)) / (-0xe34 * 0x1 + -0x10 * 0x269 + 0x34d0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1db86 + 0x27cd5 + 0x1 * 0x64cb9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1113 + -0x1b * 0xc2 + -0x261b * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xb4)] = !![], Object[t(0xa7) + t(0x99)](exports, u(0xb3), q);
function a() {
    const z = [
        '1ZgOqNJ',
        'DATE',
        'sequelize',
        'erty',
        '21586128VUAbPp',
        'createTabl',
        '14xnVEQd',
        'dropTable',
        'yqjYx',
        'DataTypes',
        'ContactCus',
        'pJJOC',
        '1906260wePLkx',
        'tomFields',
        '44KGVThl',
        'oRibA',
        '5081540JzqDzm',
        'defineProp',
        'STRING',
        '3653994HjbSlb',
        'exports',
        '5446984hdiwZz',
        '581860jZfsnL',
        'ent',
        'CASCADE',
        'allowNull',
        'primaryKey',
        'type',
        'INTEGER',
        '__esModule',
        'value',
        '20VmXjgq',
        '2171714NBVEss',
        '45oTkBNZ',
        'bdFYT',
        'Contacts',
        'autoIncrem'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(u(0x98));
module[t(0xaa)] = {
    'up': g => {
        const v = u, w = t, h = {};
        h[v(0x9e)] = w(0xa0) + w(0xa3), h[w(0xa1)] = v(0x94), h[v(0xa5)] = w(0xae);
        const i = h, j = {};
        j[v(0xb1)] = sequelize_1[w(0x9f)][w(0xb2)], j[w(0x95) + v(0xad)] = !![], j[v(0xb0)] = !![], j[v(0xaf)] = ![];
        const k = {};
        k[w(0xb1)] = sequelize_1[w(0x9f)][w(0xa8)], k[v(0xaf)] = ![];
        const l = {};
        return l[v(0xb1)] = sequelize_1[w(0x9f)][w(0xa8)], l[w(0xaf)] = ![], g[w(0x9b) + 'e'](i[w(0x9e)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[v(0x9f)][w(0xb2)],
                'references': {
                    'model': i[w(0xa1)],
                    'key': 'id'
                },
                'onUpdate': i[v(0xa5)],
                'onDelete': i[w(0xa5)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x9f)][w(0x97)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x9f)][v(0x97)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x93)] = x(0xa0) + y(0xa3);
        const f = e;
        return d[y(0x9d)](f[x(0x93)]);
    }
};