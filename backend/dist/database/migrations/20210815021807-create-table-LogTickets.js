'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x156)) / (-0x1828 + 0x5b6 + 0x1273 * 0x1) + -parseInt(t(0x160)) / (-0x1 * 0x23c9 + -0x1d6a + -0x1 * -0x4135) + -parseInt(u(0x162)) / (0x15d8 + 0x2 * -0x61c + -0x99d) + parseInt(u(0x154)) / (-0x1a * 0xca + -0xb * -0x293 + -0x7c9) + parseInt(u(0x157)) / (-0x3 * -0x342 + 0x6 * 0x2c0 + -0x1a41) * (parseInt(u(0x15d)) / (0x24ed + -0x4a * 0x83 + 0x1 * 0xf7)) + -parseInt(u(0x152)) / (-0xf4a * 0x1 + 0x5b5 + 0x99c) + -parseInt(t(0x14b)) / (-0x1 * -0x1496 + 0x9 * -0x167 + 0x7ef * -0x1) * (-parseInt(u(0x158)) / (0x247f * 0x1 + 0xd47 + 0x77 * -0x6b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5e12b + -0x181b0 + 0xa93ea));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15 * -0x15b + 0x1e39 + 0x396f * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0x15a)] = !![], Object[v(0x14c) + w(0x143)](exports, w(0x14e), s);
const sequelize_1 = require(v(0x163));
function a() {
    const B = [
        '88490wyWcjR',
        '12080kedeLS',
        '9zCvlVq',
        'STRING',
        'value',
        'qCRVb',
        'DataTypes',
        '366CHwZAo',
        'createTabl',
        'kBhED',
        '26274fUmqtm',
        'DATE',
        '1171920AwtGTx',
        'sequelize',
        'exports',
        'primaryKey',
        'Users',
        'ent',
        'erty',
        'WGsAg',
        'CASCADE',
        'Queues',
        'INTEGER',
        'Tickets',
        'autoIncrem',
        'LogTickets',
        '3968816puIIVw',
        'defineProp',
        'type',
        '__esModule',
        'allowNull',
        'KGTqs',
        'Maplt',
        '1165787BHruGw',
        'dropTable',
        '190068lUJSbf',
        'sAvGx'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[w(0x164)] = {
    'up': e => {
        const x = w, y = v, f = {};
        f[x(0x150)] = y(0x14a), f[x(0x151)] = y(0x141), f[y(0x15b)] = x(0x145), f[x(0x15f)] = y(0x148), f[x(0x144)] = x(0x146);
        const g = f, h = {};
        return h[y(0x14d)] = sequelize_1[x(0x15c)][y(0x147)], h[x(0x149) + x(0x142)] = !![], h[x(0x165)] = !![], h[y(0x14f)] = ![], e[y(0x15e) + 'e'](g[y(0x150)], {
            'id': h,
            'userId': {
                'type': sequelize_1[y(0x15c)][x(0x147)],
                'references': {
                    'model': g[x(0x151)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x15b)],
                'onDelete': g[y(0x15b)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[x(0x15c)][y(0x147)],
                'references': {
                    'model': g[y(0x15f)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x15b)],
                'onDelete': g[y(0x15b)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[x(0x15c)][y(0x147)],
                'references': {
                    'model': g[y(0x144)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x15b)],
                'onDelete': g[x(0x15b)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0x15c)][y(0x159)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[x(0x15c)][x(0x161)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x15c)][y(0x161)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x155)] = z(0x14a);
        const f = e;
        return d[A(0x153)](f[A(0x155)]);
    }
};