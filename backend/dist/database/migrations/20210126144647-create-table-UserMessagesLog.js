'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16 * 0x16f + -0x551 * 0x2 + -0x1 * 0x1346);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1c1)) / (-0x1b1d + 0x3d * 0x92 + -0x7ac) + parseInt(s(0x1b6)) / (-0x2b * 0xe8 + 0x512 + 0x21e8) * (parseInt(s(0x1c6)) / (-0x127d * -0x2 + 0x20 * 0x71 + -0x3317)) + -parseInt(s(0x1b3)) / (-0x2142 + 0x1 * -0x1837 + 0x397d) * (-parseInt(r(0x1a6)) / (0x1516 + -0x269d + -0x2 * -0x8c6)) + parseInt(r(0x1b8)) / (-0x4a9 + 0x209b + -0x1bec) * (-parseInt(s(0x1be)) / (0xfa7 + 0x81 * -0x36 + -0x5cb * -0x2)) + -parseInt(s(0x1ba)) / (-0x971 * 0x3 + 0x879 + -0x2 * -0x9f1) + -parseInt(r(0x1aa)) / (-0x1888 + -0xc * -0x115 + 0xb95) + -parseInt(r(0x1c9)) / (0x119b + 0x1a0e + 0x2b9f * -0x1) * (parseInt(r(0x1c2)) / (0x138d + -0x601 * -0x3 + 0x2585 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcc20 + 0x802af + 0x1 * -0x4ac8a));
const q = {};
q[t(0x1c0)] = !![], Object[t(0x1b4) + u(0x1bc)](exports, t(0x1a8), q);
const sequelize_1 = require(u(0x1c7));
function a() {
    const z = [
        'exports',
        'WYITL',
        'Tickets',
        'Users',
        'allowNull',
        'GMQFl',
        '876PSymEF',
        'defineProp',
        'ent',
        '6962gVNsJU',
        'DATE',
        '193092IXosUE',
        'autoIncrem',
        '2516528aAKuRY',
        'defaultVal',
        'erty',
        'DbuHk',
        '7EAxcLj',
        'dropTable',
        'value',
        '334476KQjcTC',
        '424457DIwiEu',
        'bCimM',
        'STRING',
        'type',
        '51dOeEiT',
        'sequelize',
        'createTabl',
        '20KgZvrR',
        'SET\x20NULL',
        'esLog',
        'RESTRICT',
        'primaryKey',
        'ohPiE',
        'dpbqd',
        'CASCADE',
        '11145VNsuLL',
        'INTEGER',
        '__esModule',
        'LfHnA',
        '1682685fPwLdw',
        'UserMessag',
        'DataTypes'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[u(0x1ad)] = {
    'up': f => {
        const v = u, w = u, g = {};
        g[v(0x1b2)] = w(0x1ab) + v(0x1cb), g[v(0x1a9)] = w(0x1b0), g[w(0x1a3)] = w(0x1a5), g[v(0x1bd)] = w(0x1cc), g[w(0x1c3)] = w(0x1af), g[v(0x1a4)] = v(0x1ca);
        const h = g, i = {};
        i[w(0x1c5)] = sequelize_1[w(0x1ac)][w(0x1a7)], i[w(0x1b9) + v(0x1b5)] = !![], i[v(0x1a2)] = !![], i[v(0x1b1)] = ![];
        const j = {};
        return j[w(0x1c5)] = sequelize_1[w(0x1ac)][v(0x1c4)], j[w(0x1b1)] = !![], j[v(0x1bb) + 'ue'] = null, f[w(0x1c8) + 'e'](h[w(0x1b2)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[v(0x1ac)][w(0x1a7)],
                'references': {
                    'model': h[w(0x1a9)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x1a3)],
                'onDelete': h[v(0x1bd)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x1ac)][w(0x1a7)],
                'references': {
                    'model': h[v(0x1c3)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x1a3)],
                'onDelete': h[v(0x1a4)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x1ac)][w(0x1b7)](0x1bd7 + -0x283 * -0x1 + -0x1e54),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1ac)][v(0x1b7)](-0x8b9 + -0x69a * -0x4 + -0x11a9),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x1ae)] = x(0x1ab) + x(0x1cb);
        const f = e;
        return d[y(0x1bf)](f[x(0x1ae)]);
    }
};