'use strict';
function a() {
    const x = [
        'DataTypes',
        'Groups',
        '5860OdgTOF',
        '1932408jXWcJm',
        'dropTable',
        '172534WvvPCR',
        'erty',
        'sequelize',
        '21JyrDwx',
        'value',
        '590226LzqqXL',
        '164591dlhuDc',
        'ThCDQ',
        '441252DkrHxM',
        'type',
        'gsrlc',
        'primaryKey',
        'defineProp',
        'ent',
        'nWQMm',
        'CASCADE',
        '3121004zhTNcl',
        'UsersGroup',
        'autoIncrem',
        'createTabl',
        '354owqdCq',
        '__esModule',
        'exports',
        'Users',
        'UsersQueue',
        'tYVrQ',
        'DATE',
        'qvpJk',
        'allowNull',
        'INTEGER'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1d0)) / (0x11b * 0xe + 0x199 + -0x1112) + parseInt(p(0x1ca)) / (-0x93 + -0x1 * 0x2500 + 0x2595) * (parseInt(q(0x1cd)) / (0x7b * -0x36 + 0x12af + 0x62 * 0x13)) + -parseInt(q(0x1da)) / (0x245 * 0x5 + 0x2177 + -0x2ccc) + parseInt(q(0x1ea)) / (-0x363 + -0xb49 * -0x3 + -0x1e73) * (parseInt(p(0x1de)) / (0x1 * 0x1b47 + 0x2 * -0x7a2 + -0xbfd)) + parseInt(p(0x1cf)) / (-0x1df0 + 0x2 * 0x5f9 + 0x1205) + parseInt(q(0x1eb)) / (0x1 * 0x100b + -0x17f8 * -0x1 + -0x27fb) + parseInt(p(0x1d2)) / (0x3b * 0x45 + 0x684 * -0x4 + -0x1d * -0x5a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x51 * 0x170b + -0xbbc76 + 0x94c3 * 0x13));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf71 + 0xaab * -0x1 + 0x1 * -0x2fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x1ce)] = !![], Object[r(0x1d6) + r(0x1cb)](exports, r(0x1df), o);
const sequelize_1 = require(r(0x1cc));
module[s(0x1e0)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x1d4)] = t(0x1db) + 's', f[u(0x1d8)] = u(0x1e9), f[u(0x1d1)] = u(0x1d9), f[u(0x1e5)] = u(0x1e1);
        const g = f, h = {};
        return h[t(0x1d3)] = sequelize_1[t(0x1e8)][t(0x1e7)], h[u(0x1d5)] = !![], h[u(0x1dc) + u(0x1d7)] = !![], h[u(0x1e6)] = ![], e[u(0x1dd) + 'e'](g[u(0x1d4)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x1e8)][t(0x1e7)],
                'references': {
                    'model': g[t(0x1d8)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x1d1)],
                'onDelete': g[t(0x1d1)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x1e8)][t(0x1e7)],
                'references': {
                    'model': g[u(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x1d1)],
                'onDelete': g[t(0x1d1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1e8)][t(0x1e4)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1e8)][t(0x1e4)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x1e3)] = v(0x1e2) + 's';
        const f = e;
        return d[v(0x1ec)](f[w(0x1e3)]);
    }
};