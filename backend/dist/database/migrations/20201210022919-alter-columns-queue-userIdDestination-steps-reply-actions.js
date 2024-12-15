'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x145)) / (-0xb42 + -0x22dd + -0x29 * -0x120) + -parseInt(r(0x133)) / (-0xc3e * -0x2 + -0x643 * -0x3 + -0x1 * 0x2b43) + parseInt(s(0x12f)) / (0x377 * -0x9 + 0x1 * -0x250 + 0x2182) + parseInt(s(0x12b)) / (-0x1ff * 0xf + 0x16 * -0xc1 + -0x5 * -0x94f) + parseInt(s(0x139)) / (-0xc9 * 0x22 + -0x2 * 0x579 + 0x25a9 * 0x1) * (-parseInt(r(0x138)) / (0x226d + 0x24f4 + 0x475b * -0x1)) + -parseInt(r(0x127)) / (0x1 * 0x2519 + 0x1381 + 0x7 * -0x815) + -parseInt(r(0x13f)) / (-0x2 * -0x1183 + 0x3 * -0xc29 + 0x17d) * (-parseInt(s(0x14a)) / (0x5c5 * 0x5 + -0x1264 * -0x1 + -0x2f34));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd7f2d + 0x12d56 + -0x45af5));
function a() {
    const z = [
        '95938leVAsZ',
        'addColumn',
        'cEcfJ',
        'StepsReply',
        'userIdDest',
        '6uBzXHu',
        '3545785KsZzzr',
        'defineProp',
        'fJLln',
        'removeColu',
        'oNVHc',
        'nyFWn',
        '5640gYPmqC',
        'FXaZJ',
        'DataTypes',
        'FQQZp',
        'ination',
        'Users',
        '1149620aXHpqS',
        'defaultVal',
        'queue',
        'restrict',
        'ALOEJ',
        '5787xglLan',
        'erty',
        'Queues',
        'all',
        'CASCADE',
        '__esModule',
        'queueId',
        'Antau',
        'allowNull',
        'INTEGER',
        '5687787NqHjru',
        'exports',
        'value',
        'FuYfF',
        '943240Brxnqd',
        'Actions',
        'sequelize',
        'type',
        '1221480HqJELP',
        'qEuQe',
        'sXtlD',
        'GLNcR'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x129)] = !![], Object[u(0x13a) + u(0x14b)](exports, t(0x14f), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x785 + 0x1013 + -0x76b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x12d));
module[u(0x128)] = {
    'up': d => {
        const v = u, w = t, e = {};
        e[v(0x131)] = w(0x136) + w(0x12c), e[w(0x132)] = w(0x147), e[v(0x140)] = w(0x123), e[w(0x12a)] = w(0x14c), e[w(0x13e)] = w(0x14e), e[v(0x13b)] = v(0x148), e[v(0x149)] = v(0x137) + v(0x143), e[w(0x135)] = v(0x144);
        const f = e;
        return Promise[v(0x14d)]([
            d[v(0x13c) + 'mn'](f[v(0x131)], f[v(0x132)]),
            d[w(0x134)](f[v(0x131)], f[w(0x140)], {
                'type': sequelize_1[w(0x141)][v(0x126)],
                'references': {
                    'model': f[v(0x12a)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x13e)],
                'onDelete': f[w(0x13b)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[v(0x13c) + 'mn'](f[w(0x131)], f[v(0x149)]),
            d[v(0x134)](f[v(0x131)], f[v(0x149)], {
                'type': sequelize_1[w(0x141)][v(0x126)],
                'references': {
                    'model': f[w(0x135)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x13e)],
                'onDelete': f[v(0x13b)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = t, y = t, g = {};
        g[x(0x124)] = y(0x136) + x(0x12c), g[x(0x142)] = y(0x123), g[x(0x13d)] = x(0x147), g[y(0x130)] = x(0x137) + y(0x143);
        const h = g, i = {};
        i[y(0x12e)] = sequelize_1[x(0x141)][x(0x126)], i[y(0x146) + 'ue'] = null, i[x(0x125)] = !![];
        const j = {};
        return j[x(0x12e)] = sequelize_1[x(0x141)][y(0x126)], j[x(0x146) + 'ue'] = null, j[x(0x125)] = !![], Promise[x(0x14d)]([
            f[y(0x13c) + 'mn'](h[y(0x124)], h[x(0x142)]),
            f[x(0x134)](h[y(0x124)], h[x(0x13d)], i),
            f[x(0x13c) + 'mn'](h[x(0x124)], h[x(0x130)]),
            f[y(0x134)](h[x(0x124)], h[y(0x130)], j)
        ]);
    }
};