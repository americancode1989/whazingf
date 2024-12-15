'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x1d9)) / (0xc79 + 0x1 * 0xda1 + -0x3 * 0x8b3) * (parseInt(x(0x1ca)) / (-0x4 * 0x256 + -0x10a9 + 0x1a03)) + -parseInt(x(0x1d4)) / (-0x8f6 + 0x677 + -0x2 * -0x141) * (-parseInt(y(0x1cb)) / (-0x17d6 + -0x1 * 0x1848 + 0x3022)) + -parseInt(x(0x1d3)) / (0x2f * -0xc1 + -0x6f8 * -0x2 + -0x72c * -0x3) * (-parseInt(x(0x1b7)) / (-0x1 * -0x1d1b + 0x11d2 + -0x2ee7 * 0x1)) + -parseInt(y(0x1b2)) / (-0x226d + -0x125 * 0x4 + 0x2708) * (-parseInt(x(0x1d7)) / (0x5 * 0x7a6 + 0xca0 + -0x32d6)) + parseInt(x(0x1b0)) / (0x374 * 0x8 + 0x22f5 + 0x3e8c * -0x1) + parseInt(x(0x1cc)) / (0x170d * 0x1 + 0x22e4 + 0x66f * -0x9) + -parseInt(y(0x1c4)) / (0xc9e + -0x72 * -0x51 + 0x3 * -0x1037) * (parseInt(y(0x1b8)) / (-0x1275 + 0xadc + 0x7a5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * 0x70ca + 0x1aa82 * 0x1 + 0x70764));
function a() {
    const F = [
        '__esModule',
        '3114189TWjVKV',
        'DATE',
        '7uOnUKl',
        'Tenants',
        'sequelize',
        'primaryKey',
        'value',
        '18ainufn',
        '12Povnlr',
        'exports',
        'type',
        'ent',
        'Tickets',
        'SET\x20NULL',
        'createTabl',
        'UserRating',
        'dAXzD',
        'hAmTm',
        'Users',
        'FOKuv',
        '6321271biJXlT',
        'DataTypes',
        'wHwzJ',
        'autoIncrem',
        'Whatsapps',
        'vVVdq',
        '1058flSqyc',
        '4WpSjlw',
        '7107510zWMEHM',
        'NDxLN',
        'Contacts',
        'erty',
        'defineProp',
        'EgVRr',
        'allowNull',
        '174905wDIojR',
        '5109otEqcs',
        'dropTable',
        'INTEGER',
        '351872WuClVJ',
        'iqFWi',
        '501abPjEA'
    ];
    a = function () {
        return F;
    };
    return a();
}
const w = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x882 + -0x1649 + 0x207b);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0x1b6)] = !![], Object[z(0x1d0) + A(0x1cf)](exports, A(0x1da), w);
const sequelize_1 = require(A(0x1b4));
module[z(0x1b9)] = {
    'up': e => {
        const B = z, C = A, f = {};
        f[B(0x1c3)] = B(0x1bf) + 's', f[B(0x1c9)] = C(0x1bc), f[B(0x1c6)] = C(0x1bd), f[B(0x1c0)] = C(0x1b3), f[B(0x1cd)] = C(0x1c2), f[C(0x1d1)] = C(0x1ce), f[C(0x1d8)] = C(0x1c8);
        const g = f, h = {};
        return h[C(0x1ba)] = sequelize_1[B(0x1c5)][C(0x1d6)], h[C(0x1c7) + C(0x1bb)] = !![], h[C(0x1b5)] = !![], h[B(0x1d2)] = ![], e[B(0x1be) + 'e'](g[B(0x1c3)], {
            'id': h,
            'ticketId': {
                'type': sequelize_1[B(0x1c5)][C(0x1d6)],
                'references': {
                    'model': g[C(0x1c9)],
                    'key': 'id'
                },
                'onDelete': g[B(0x1c6)]
            },
            'tenantId': {
                'type': sequelize_1[C(0x1c5)][C(0x1d6)],
                'references': {
                    'model': g[B(0x1c0)],
                    'key': 'id'
                },
                'onDelete': g[C(0x1c6)]
            },
            'userId': {
                'type': sequelize_1[B(0x1c5)][B(0x1d6)],
                'references': {
                    'model': g[C(0x1cd)],
                    'key': 'id'
                },
                'onDelete': g[C(0x1c6)],
                'allowNull': !![]
            },
            'contactId': {
                'type': sequelize_1[B(0x1c5)][B(0x1d6)],
                'references': {
                    'model': g[C(0x1d1)],
                    'key': 'id'
                },
                'onDelete': g[B(0x1c6)],
                'allowNull': !![]
            },
            'whatsappId': {
                'type': sequelize_1[C(0x1c5)][C(0x1d6)],
                'references': {
                    'model': g[B(0x1d8)],
                    'key': 'id'
                },
                'onDelete': g[C(0x1c6)],
                'allowNull': !![]
            },
            'rate': {
                'type': sequelize_1[B(0x1c5)][C(0x1d6)],
                'defaultValue': 0x0
            },
            'createdAt': {
                'type': sequelize_1[C(0x1c5)][C(0x1b1)],
                'allowNull': !![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0x1c5)][C(0x1b1)],
                'allowNull': !![]
            }
        });
    },
    'down': d => {
        const D = z, E = z, e = {};
        e[D(0x1c1)] = E(0x1bf) + 's';
        const f = e;
        return d[D(0x1d5)](f[E(0x1c1)]);
    }
};