'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xbbf + -0x12 * -0x191 + -0xf43);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x13b)) / (-0x6d * 0x11 + 0x1 * -0x1046 + -0x8c * -0x2b) + parseInt(q(0x137)) / (0x66e * 0x2 + 0x23ba + -0x184a * 0x2) * (-parseInt(p(0x151)) / (0x79 * -0x14 + -0x15dd + -0x191 * -0x14)) + parseInt(q(0x134)) / (0xd6f + 0xe7a * -0x1 + -0x10f * -0x1) * (-parseInt(q(0x154)) / (0x1e * -0x18 + 0x2d3 * -0xa + 0x1f13)) + -parseInt(p(0x13a)) / (0x1d * 0xe + -0x24e9 + -0x1 * -0x2359) + -parseInt(p(0x147)) / (-0x6f * -0x57 + 0x1d18 * -0x1 + -0x89a) + -parseInt(p(0x138)) / (-0x14ba * -0x1 + -0x1 * 0xea7 + 0x60b * -0x1) * (-parseInt(q(0x13c)) / (0x2 * 0x332 + 0x1ace + -0x2129)) + -parseInt(p(0x133)) / (-0x639 + 0xb * -0x16e + -0x1b1 * -0xd) * (-parseInt(q(0x14e)) / (0x52 * 0x35 + 0x3 * 0x259 + -0x17fa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf7bb4 + 0x9336d + 0x4f6 * 0x37a));
function a() {
    const x = [
        'createTabl',
        'QyOPT',
        '8127056lxvKRc',
        'QzpvA',
        'HBvta',
        'autoIncrem',
        'Qfzqn',
        'value',
        'sequelize',
        '275ZKZkte',
        'Groups',
        'dropTable',
        '3418068RbByyZ',
        'erty',
        'DataTypes',
        '10ZKNFyV',
        'exports',
        '__esModule',
        'fKBJU',
        '1288910AocUOZ',
        '250672tJjedi',
        'INTEGER',
        'CASCADE',
        '2MbIWhW',
        '1821016VgbnDf',
        'Users',
        '1646490QpHAxI',
        '486460nodxyz',
        '27HgLPnl',
        'allowNull',
        'SET\x20NULL',
        'STRING',
        'defineProp',
        'ent',
        'type',
        'DATE',
        'primaryKey'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x14c)] = !![], Object[r(0x140) + s(0x152)](exports, s(0x131), o);
const sequelize_1 = require(s(0x14d));
module[r(0x130)] = {
    'up': f => {
        const t = s, u = s, g = {};
        g[t(0x148)] = t(0x14f), g[t(0x132)] = u(0x139), g[t(0x149)] = u(0x136), g[u(0x14b)] = t(0x13e);
        const h = g, i = {};
        i[t(0x142)] = sequelize_1[t(0x153)][t(0x135)], i[t(0x144)] = !![], i[u(0x14a) + u(0x141)] = !![], i[t(0x13d)] = ![];
        const j = {};
        return j[t(0x142)] = sequelize_1[t(0x153)][t(0x13f)], j[t(0x13d)] = ![], f[t(0x145) + 'e'](h[u(0x148)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[u(0x153)][u(0x135)],
                'references': {
                    'model': h[t(0x132)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x149)],
                'onDelete': h[t(0x14b)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x153)][u(0x143)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x153)][u(0x143)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x146)] = v(0x14f);
        const f = e;
        return d[w(0x150)](f[w(0x146)]);
    }
};