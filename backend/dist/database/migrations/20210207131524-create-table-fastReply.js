'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * 0x295 + -0x16a + -0x5d1 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1f3)) / (0x23d4 + -0x32b * -0x6 + -0x1247 * 0x3) * (-parseInt(u(0x1fc)) / (0x1 * 0x195e + 0xaa4 + -0x2400)) + parseInt(t(0x1df)) / (-0x2469 + -0x1cbc + 0x4128) * (parseInt(t(0x1db)) / (0x67 * 0x13 + 0x695 * -0x2 + -0xd * -0x6d)) + parseInt(t(0x1ed)) / (-0x1 * -0x1a7c + -0x1956 + 0x1 * -0x121) + -parseInt(t(0x1e9)) / (-0x233 * 0x7 + -0xe64 + 0x1dcf) + -parseInt(u(0x1f2)) / (-0x170d + 0x1a5d + -0x349 * 0x1) + -parseInt(u(0x1fb)) / (0xd * 0x296 + -0x1726 + -0xa70) + parseInt(t(0x1f8)) / (0x1 * 0x188b + -0x260e + -0x11 * -0xcc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x5d71d + 0xc5bda + -0x1 * 0xb45a3));
function a() {
    const B = [
        'Tenants',
        '332EiMaDG',
        'dropTable',
        'CASCADE',
        'TEXT',
        '1473pHTHXK',
        'autoIncrem',
        'DataTypes',
        'FastReply',
        'pEIxB',
        'STRING',
        'INTEGER',
        'kKviH',
        'value',
        'DATE',
        '3631710speuKP',
        'KkzHx',
        'type',
        'primaryKey',
        '592650RsHAst',
        'createTabl',
        'sequelize',
        'Users',
        'AkxWT',
        '5999609aiwHFb',
        '129293WSsuFe',
        'SET\x20NULL',
        'exports',
        'allowNull',
        'defineProp',
        '21749364OBNhFM',
        'uMcwI',
        'erty',
        '2173248qSYqSE',
        '6OWUCut',
        '__esModule',
        'hbhpP',
        'ent'
    ];
    a = function () {
        return B;
    };
    return a();
}
const s = {};
s[v(0x1e7)] = !![], Object[w(0x1f7) + v(0x1fa)](exports, w(0x1fd), s);
const sequelize_1 = require(w(0x1ef));
module[w(0x1f5)] = {
    'up': g => {
        const x = v, y = w, h = {};
        h[x(0x1e6)] = y(0x1e2), h[x(0x1f9)] = x(0x1f0), h[x(0x1ea)] = x(0x1dd), h[x(0x1e3)] = y(0x1f4), h[x(0x1f1)] = y(0x1da);
        const i = h, j = {};
        j[x(0x1eb)] = sequelize_1[y(0x1e1)][x(0x1e5)], j[y(0x1e0) + y(0x1d9)] = !![], j[x(0x1ec)] = !![], j[x(0x1f6)] = ![];
        const k = {};
        k[y(0x1eb)] = sequelize_1[x(0x1e1)][x(0x1e4)], k[y(0x1f6)] = ![];
        const l = {};
        return l[x(0x1eb)] = sequelize_1[x(0x1e1)][y(0x1de)], l[x(0x1f6)] = ![], g[x(0x1ee) + 'e'](i[y(0x1e6)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[y(0x1e1)][x(0x1e5)],
                'references': {
                    'model': i[x(0x1f9)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x1ea)],
                'onDelete': i[y(0x1e3)]
            },
            'tenantId': {
                'type': sequelize_1[x(0x1e1)][y(0x1e5)],
                'references': {
                    'model': i[x(0x1f1)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x1ea)],
                'onDelete': i[y(0x1ea)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0x1e1)][x(0x1e8)](0x156 + 0x11 * -0x175 + 0x4b1 * 0x5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1e1)][x(0x1e8)](-0x268c * -0x1 + 0x1 * -0x261d + -0x23 * 0x3),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x1fe)] = A(0x1e2);
        const f = e;
        return d[z(0x1dc)](f[z(0x1fe)]);
    }
};