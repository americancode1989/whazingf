'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0xa5)) / (0x224e + 0x206d + -0x27 * 0x1b6) + parseInt(E(0x9d)) / (-0x4 * 0x8a9 + 0x10b5 + 0x11f1) * (-parseInt(E(0x86)) / (-0x541 * -0x7 + -0x2 * 0x49e + -0x1b88)) + -parseInt(D(0x90)) / (-0x1282 + -0x1 * -0x45f + 0xe27) * (parseInt(D(0x85)) / (0x358 * 0x5 + 0x41 * 0xa + -0x133d)) + parseInt(D(0x99)) / (-0x1587 * -0x1 + 0x1a01 * -0x1 + 0x480) + -parseInt(D(0x9e)) / (-0x2145 + 0x1290 + 0xebc * 0x1) + -parseInt(D(0x8a)) / (-0x1fc * -0xa + -0x24a4 + 0x10d4) * (parseInt(D(0x89)) / (0x2 * 0x214 + 0xb75 * -0x2 + -0x11 * -0x11b)) + parseInt(D(0x7f)) / (-0x4 * -0x229 + 0x7 * 0x16 + -0x934) * (parseInt(D(0xa8)) / (-0x2 * -0x5 + 0xc4b + 0x1 * -0xc4a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * -0x2af5b + 0x7e58 * 0x14 + 0xa51df));
function a() {
    const L = [
        'PjCaF',
        'SET\x20NULL',
        'erty',
        'value',
        'ssage',
        'defaultVal',
        '4736730cyQrLl',
        'RwHgQ',
        'DataTypes',
        'sequelize',
        '36466UpPHZc',
        '6154911NXjzup',
        'lHcnH',
        'BOOLEAN',
        'DbSiy',
        'defineProp',
        'Groups',
        'STRING',
        '658225DNWPFu',
        'dropTable',
        'INTEGER',
        '385hxxRjD',
        'createTabl',
        'primaryKey',
        'Tenants',
        'GhpCp',
        '311460EhUfkm',
        'exports',
        'LxAXs',
        'Users',
        'ent',
        'autoIncrem',
        '2185lIplxm',
        '129YmXrmM',
        'type',
        'InternalMe',
        '562941SXapye',
        '32HdeQvl',
        'CASCADE',
        'DATE',
        'allowNull',
        'uLJWI',
        'TEXT',
        '1656yKftPw',
        '__esModule',
        'BIGINT'
    ];
    a = function () {
        return L;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d45 + -0x2 * 0xe5b + -0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0x96)] = !![], Object[F(0xa2) + F(0x95)](exports, F(0x91), C);
const sequelize_1 = require(G(0x9c));
module[G(0x80)] = {
    'up': i => {
        const H = G, I = G, j = {};
        j[H(0x9a)] = I(0x88) + H(0x97), j[H(0x93)] = I(0x82), j[I(0x7e)] = I(0x8b), j[I(0x8e)] = H(0x94), j[H(0x81)] = H(0xa3), j[I(0x9f)] = H(0x7d);
        const k = j, l = {};
        l[I(0x87)] = sequelize_1[I(0x9b)][I(0x92)], l[I(0x7c)] = !![], l[H(0x84) + H(0x83)] = !![], l[H(0x8d)] = ![];
        const m = {};
        m[I(0x87)] = sequelize_1[H(0x9b)][I(0x8f)], m[I(0x8d)] = ![];
        const n = {};
        n[I(0x87)] = sequelize_1[H(0x9b)][H(0xa0)], n[I(0x8d)] = ![], n[I(0x98) + 'ue'] = ![];
        const o = {};
        o[I(0x87)] = sequelize_1[H(0x9b)][I(0xa4)];
        const p = {};
        return p[H(0x87)] = sequelize_1[I(0x9b)][H(0xa4)], i[I(0xa9) + 'e'](k[H(0x9a)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[I(0x9b)][H(0xa7)],
                'references': {
                    'model': k[I(0x93)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x7e)],
                'onDelete': k[I(0x8e)]
            },
            'receiverId': {
                'type': sequelize_1[H(0x9b)][I(0xa7)],
                'references': {
                    'model': k[I(0x93)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x7e)],
                'onDelete': k[H(0x8e)]
            },
            'groupId': {
                'type': sequelize_1[H(0x9b)][I(0xa7)],
                'references': {
                    'model': k[H(0x81)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x7e)],
                'onDelete': k[I(0x7e)]
            },
            'tenantId': {
                'type': sequelize_1[H(0x9b)][I(0xa7)],
                'references': {
                    'model': k[H(0x9f)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x7e)],
                'onDelete': k[H(0x7e)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[I(0x9b)][H(0x92)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x9b)][H(0x8c)](0x6 * 0x314 + -0x2572 + 0x1300),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[I(0x9b)][H(0x8c)](0x198b + -0x253a + 0xbb5),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0xa1)] = J(0x88) + K(0x97);
        const f = e;
        return d[J(0xa6)](f[J(0xa1)]);
    }
};