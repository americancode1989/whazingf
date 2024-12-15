'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1db)) / (0x23 + -0x1 * -0xe5 + 0x1 * -0x107) + -parseInt(w(0x1ec)) / (-0x10c0 + -0x305 + -0x53 * -0x3d) * (-parseInt(w(0x1e5)) / (0xfd + 0x54d * 0x1 + 0x1 * -0x647)) + parseInt(v(0x1f0)) / (0x2 * -0xdc9 + -0x4cf * 0x7 + 0x3d3f) + -parseInt(v(0x1e1)) / (-0x1b73 + -0x2 * -0x1cb + -0x6 * -0x3fb) + -parseInt(w(0x1dd)) / (0x2456 + 0x2 * -0x1132 + -0x1 * 0x1ec) * (-parseInt(v(0x1fb)) / (-0x1efc + 0xe42 * 0x2 + -0x1 * -0x27f)) + -parseInt(w(0x1df)) / (-0x1803 + -0xc98 + 0x71 * 0x53) + -parseInt(v(0x1d9)) / (-0x4c * 0x24 + -0x6 * -0x323 + 0x819 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x126f2c + 0x153 * -0x7d3 + 0x2770b4));
const u = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * 0x191 + -0x922 * -0x2 + -0x1b64);
        let h = e[f];
        return h;
    }, b(c, d);
}
u[x(0x1dc)] = !![], Object[x(0x1ea) + y(0x1e4)](exports, y(0x1e8), u);
const sequelize_1 = require(x(0x1e0));
module[y(0x1f2)] = {
    'up': g => {
        const z = x, A = x, h = {};
        h[z(0x1f1)] = z(0x1e2), h[z(0x1de)] = A(0x1ed), h[z(0x1f6)] = A(0x1e3), h[z(0x1e9)] = z(0x1e7), h[z(0x1da)] = A(0x1f3);
        const i = h, j = {};
        j[A(0x1f7)] = sequelize_1[z(0x1ef)][z(0x1f5)], j[z(0x1f4) + A(0x1eb)] = !![], j[A(0x1d8)] = !![], j[A(0x1f8)] = ![];
        const k = {};
        k[z(0x1f7)] = sequelize_1[z(0x1ef)][z(0x1d7)], k[A(0x1f8)] = ![];
        const l = {};
        return l[A(0x1f7)] = sequelize_1[A(0x1ef)][A(0x1f5)], l[z(0x1f8)] = ![], g[A(0x1ee) + 'e'](i[A(0x1f1)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[z(0x1ef)][z(0x1f5)],
                'references': {
                    'model': i[A(0x1de)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x1f6)],
                'onDelete': i[z(0x1f6)]
            },
            'action': {
                'type': sequelize_1[z(0x1ef)][z(0x1f5)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[z(0x1ef)][A(0x1f5)],
                'references': {
                    'model': i[A(0x1e9)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x1f6)],
                'onDelete': i[A(0x1da)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x1ef)][A(0x1f9)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x1ef)][z(0x1f9)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = y, e = {};
        e[B(0x1fa)] = C(0x1e2);
        const f = e;
        return d[C(0x1e6)](f[B(0x1fa)]);
    }
};
function a() {
    const D = [
        'mwnvL',
        'type',
        'allowNull',
        'DATE',
        'dXeLU',
        '9042194CYAuBy',
        'STRING',
        'primaryKey',
        '6957180acdONn',
        'PdLnp',
        '1366776usWaKI',
        'value',
        '6FwLlwV',
        'VIvbg',
        '2699688rqwbYk',
        'sequelize',
        '1489400xcufJJ',
        'StepsReply',
        'CASCADE',
        'erty',
        '3185103JYUdUI',
        'dropTable',
        'Users',
        '__esModule',
        'qFvNi',
        'defineProp',
        'ent',
        '2rtRXpg',
        'AutoReply',
        'createTabl',
        'DataTypes',
        '4477300zhBnpF',
        'Lkfdt',
        'exports',
        'SET\x20NULL',
        'autoIncrem',
        'INTEGER'
    ];
    a = function () {
        return D;
    };
    return a();
}