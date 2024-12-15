'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1da)) / (-0x56 * 0x7 + 0x1d6e + 0xef * -0x1d) * (-parseInt(A(0x1e8)) / (-0x698 + 0x2b2 + 0x28 * 0x19)) + parseInt(A(0x1e5)) / (-0x211e + 0xe2 + 0x203f) + parseInt(z(0x1d3)) / (-0x3 * -0xcaf + 0x2 * -0x25e + -0x1f * 0x113) + -parseInt(z(0x1c5)) / (-0x1 * -0x20c5 + -0x2a1 * 0x4 + 0x1 * -0x163c) + parseInt(A(0x1dc)) / (0x15 * -0x14b + -0x1 * -0x15b5 + 0x4 * 0x15e) + -parseInt(A(0x1dd)) / (0x2543 + -0x1f58 + -0x5e4) * (parseInt(z(0x1e7)) / (0x3a * 0x74 + 0x18ea + -0x332a)) + -parseInt(A(0x1d4)) / (0xfa * 0x27 + -0x1fe1 + -0x62c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x37569 + -0x2 * -0x481de + 0xf8));
const y = {};
y[B(0x1e1)] = !![], Object[B(0x1d7) + B(0x1d1)](exports, C(0x1e3), y);
const sequelize_1 = require(C(0x1c6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20a3 + -0x371 * -0x5 + 0x45f * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[B(0x1d8)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0x1df)] = E(0x1e6), k[E(0x1d6)] = D(0x1cf), k[D(0x1d2)] = E(0x1e4), k[D(0x1db)] = D(0x1ca), k[D(0x1c4)] = E(0x1de);
        const l = k, m = {};
        m[E(0x1c7)] = sequelize_1[E(0x1c8)][D(0x1e0)], m[D(0x1d5)] = !![], m[D(0x1d9)] = ![];
        const n = {};
        n[E(0x1c7)] = sequelize_1[D(0x1c8)][D(0x1e2)], n[E(0x1d9)] = ![];
        const o = {};
        o[D(0x1c7)] = sequelize_1[E(0x1c8)][D(0x1c3)], o[E(0x1d9)] = ![], o[E(0x1c9) + 'ue'] = 0x0;
        const p = {};
        p[D(0x1c7)] = sequelize_1[D(0x1c8)][E(0x1cb)], p[E(0x1d9)] = ![], p[E(0x1c9) + 'ue'] = ![];
        const q = {};
        q[D(0x1c7)] = sequelize_1[D(0x1c8)][E(0x1e0)];
        const r = {};
        return r[D(0x1c7)] = sequelize_1[E(0x1c8)][E(0x1e0)], j[E(0x1cc) + 'e'](l[E(0x1df)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[E(0x1c8)][D(0x1c3)],
                'references': {
                    'model': l[E(0x1d6)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1d2)],
                'onDelete': l[D(0x1db)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x1c8)][E(0x1c3)],
                'references': {
                    'model': l[E(0x1c4)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1d2)],
                'onDelete': l[D(0x1d2)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0x1c8)][D(0x1ce)](-0x1c9c + 0x325 + 0x197d),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0x1c8)][E(0x1ce)](-0x1031 * 0x1 + -0x1929 + -0x8 * -0x52c),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = C, e = {};
        e[F(0x1d0)] = F(0x1e6);
        const f = e;
        return d[G(0x1cd)](f[F(0x1d0)]);
    }
};
function a() {
    const H = [
        'INTEGER',
        'IjXZj',
        '7781660ALYxGd',
        'sequelize',
        'type',
        'DataTypes',
        'defaultVal',
        'SET\x20NULL',
        'BOOLEAN',
        'createTabl',
        'dropTable',
        'DATE',
        'Users',
        'WExEa',
        'erty',
        'RGQup',
        '6281096HDotZm',
        '11613735ntNQnn',
        'primaryKey',
        'oXmKW',
        'defineProp',
        'exports',
        'allowNull',
        '3079dTMAoM',
        'nQEZA',
        '3664320yLbDba',
        '3002755nWbueU',
        'Tickets',
        'tylqq',
        'STRING',
        'value',
        'TEXT',
        '__esModule',
        'CASCADE',
        '1543635TXayVb',
        'Messages',
        '8ORtvUF',
        '908VUJWXa'
    ];
    a = function () {
        return H;
    };
    return a();
}