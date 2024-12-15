'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0x5ec + -0x1884 + -0xdd9 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x142)) / (0x227e + -0x94a + 0x1 * -0x1933) + parseInt(v(0x14a)) / (-0x7c9 * 0x2 + -0x139f + 0x2333) * (-parseInt(w(0x153)) / (-0x1c09 + 0x262b + -0xa1f)) + -parseInt(v(0x13f)) / (0x916 + -0x2 * 0xe21 + 0x8 * 0x266) * (-parseInt(w(0x144)) / (0x15bf * 0x1 + -0x23af + -0x9 * -0x18d)) + parseInt(w(0x133)) / (-0x2 * -0xb4d + 0x2544 + -0x5 * 0xbf8) + parseInt(v(0x139)) / (-0x1a0d + 0x1b * 0x69 + 0xa7 * 0x17) + parseInt(v(0x151)) / (0x140 * 0x8 + 0x1f8d + 0x1 * -0x2985) * (-parseInt(v(0x145)) / (0xb6 + 0x29a + 0x1 * -0x347)) + parseInt(w(0x147)) / (0x3 * -0x7d4 + 0xee9 + 0x3f * 0x23) * (-parseInt(v(0x140)) / (0xa2 * 0x15 + 0x1eb9 + 0x2a * -0x10c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d * -0x15e + 0x40e81 * -0x3 + 0x1 * 0x1835fa));
const u = {};
u[x(0x14c)] = !![], Object[y(0x150) + y(0x12e)](exports, y(0x130), u);
const sequelize_1 = require(x(0x14f));
module[x(0x14e)] = {
    'up': e => {
        const z = y, A = x, f = {};
        f[z(0x134)] = A(0x132) + z(0x13e), f[z(0x143)] = A(0x132), f[A(0x141)] = z(0x12d), f[A(0x131)] = A(0x148), f[A(0x12f)] = A(0x146);
        const g = f, h = {};
        return h[z(0x13c)] = sequelize_1[z(0x136)][A(0x13b)], h[A(0x149) + z(0x138)] = !![], h[A(0x13d)] = !![], h[z(0x152)] = ![], e[A(0x14d) + 'e'](g[z(0x134)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[z(0x136)][A(0x13b)],
                'references': {
                    'model': g[A(0x143)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x141)],
                'onDelete': g[z(0x141)]
            },
            'words': {
                'type': sequelize_1[z(0x136)][z(0x135)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[A(0x136)][z(0x13b)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[z(0x136)][A(0x135)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[z(0x136)][z(0x13b)],
                'references': {
                    'model': g[A(0x131)],
                    'key': 'id'
                },
                'onUpdate': g[z(0x141)],
                'onDelete': g[z(0x12f)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x136)][A(0x14b)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x136)][z(0x14b)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0x137)] = B(0x132) + C(0x13e);
        const f = e;
        return d[C(0x13a)](f[C(0x137)]);
    }
};
function a() {
    const D = [
        'CJOtf',
        'ent',
        '3046477LOfPQM',
        'dropTable',
        'INTEGER',
        'type',
        'primaryKey',
        'Actions',
        '4KBHyFu',
        '11BRhLhi',
        'wiAcE',
        '1549622yYZuDf',
        'bPKEF',
        '5613285UrFshD',
        '12303063OedxQG',
        'SET\x20NULL',
        '3180010qufhlV',
        'Users',
        'autoIncrem',
        '2BQkOje',
        'DATE',
        'value',
        'createTabl',
        'exports',
        'sequelize',
        'defineProp',
        '8zggbHv',
        'allowNull',
        '2784585MWQItV',
        'CASCADE',
        'erty',
        'eethD',
        '__esModule',
        'binmm',
        'StepsReply',
        '2098644XDPkBW',
        'Lwsyt',
        'STRING',
        'DataTypes'
    ];
    a = function () {
        return D;
    };
    return a();
}