'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xab)) / (-0x88 * 0x46 + -0x2108 + 0x4639) * (-parseInt(p(0xaf)) / (-0xcce + 0xc2c * -0x2 + -0xe8 * -0x29)) + -parseInt(q(0xa9)) / (-0x1bfd + 0x26ef * 0x1 + -0xaef) * (-parseInt(p(0xbf)) / (-0xe * -0x1be + 0x15fb + -0x2e5b)) + -parseInt(q(0xac)) / (-0x19df + -0x6 * 0x20f + 0x37a * 0xb) * (parseInt(q(0xb3)) / (0xc14 + -0x305 * 0x2 + -0x604)) + -parseInt(p(0xba)) / (0x10ae + 0x1 * 0x241f + 0xe * -0x3c5) * (parseInt(q(0xa2)) / (-0x4ff * 0x4 + -0xcb * 0x28 + 0x33bc)) + parseInt(q(0xa8)) / (0x8 * 0x388 + -0x1 * -0x240b + -0x4042) + parseInt(q(0x9f)) / (0x249d * 0x1 + 0x2d7 * -0x7 + -0x10b2) + -parseInt(q(0xc1)) / (-0x1830 + 0x157 * -0xe + -0x9b * -0x47) * (-parseInt(p(0xb6)) / (-0x207 * -0x3 + -0x3 * -0x9cb + 0xbce * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x34fa4 + 0xa41b * 0x8 + 0x1053 * -0x1f));
function a() {
    const x = [
        'cRzSu',
        '2802191AZQnkI',
        'QVWQr',
        'dropTable',
        'type',
        'DATE',
        '3764zuNDYR',
        'autoIncrem',
        '387189HJCJkc',
        'primaryKey',
        'DataTypes',
        '2304320UIRIuS',
        'defineProp',
        'Queues',
        '8pPuHyG',
        'OaEjP',
        'value',
        'erty',
        'Users',
        'allowNull',
        '963171ZMCRXm',
        '120EYGpEF',
        '__esModule',
        '130933tHckdN',
        '905ztiVOc',
        'createTabl',
        'exports',
        '10TkqNsj',
        'INTEGER',
        'ent',
        'CASCADE',
        '11262wAyEPA',
        'sequelize',
        'nKByj',
        '492Rsgmua',
        'UsersQueue',
        'ttthI'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0xa4)] = !![], Object[r(0xa0) + r(0xa5)](exports, r(0xaa), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x31f * -0x2 + 0x21d3 + -0x1af8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(s(0xb4));
module[r(0xae)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0xa3)] = t(0xb7) + 's', f[u(0xb9)] = u(0xa1), f[u(0xbb)] = t(0xb2), f[u(0xb8)] = t(0xa6);
        const g = f, h = {};
        return h[t(0xbd)] = sequelize_1[u(0x9e)][t(0xb0)], h[t(0x9d)] = !![], h[t(0xc0) + u(0xb1)] = !![], h[u(0xa7)] = ![], e[u(0xad) + 'e'](g[u(0xa3)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[u(0x9e)][u(0xb0)],
                'references': {
                    'model': g[u(0xb9)],
                    'key': 'id'
                },
                'onUpdate': g[t(0xbb)],
                'onDelete': g[t(0xbb)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x9e)][u(0xb0)],
                'references': {
                    'model': g[t(0xb8)],
                    'key': 'id'
                },
                'onUpdate': g[t(0xbb)],
                'onDelete': g[u(0xbb)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x9e)][u(0xbe)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x9e)][u(0xbe)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0xb5)] = w(0xb7) + 's';
        const f = e;
        return d[v(0xbc)](f[w(0xb5)]);
    }
};