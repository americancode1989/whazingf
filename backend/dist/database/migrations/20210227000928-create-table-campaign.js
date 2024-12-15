'use strict';
function a() {
    const R = [
        'Tenants',
        'createTabl',
        'CASCADE',
        'XEYex',
        'exports',
        '3384570daYSMM',
        'DataTypes',
        '8VDetue',
        'dropTable',
        'Whatsapps',
        '46712eIMjfe',
        '1430526VpPXAH',
        '4470237CwnZhI',
        'allowNull',
        '10OSQppK',
        'erty',
        '753660LgGIYL',
        'STRING',
        'aOMdE',
        'GszVg',
        'DATE',
        'Campaigns',
        'mOkvs',
        'ileVU',
        'autoIncrem',
        'SET\x20NULL',
        'sequelize',
        '346504UenoFB',
        '858752IDILdw',
        '3eMjZPC',
        'defineProp',
        'INTEGER',
        'mtQpZ',
        'ent',
        'YylQJ',
        'Users',
        'eyhIf',
        'value',
        'pending',
        'type',
        '__esModule',
        'primaryKey',
        'TEXT',
        'all'
    ];
    a = function () {
        return R;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe * 0x17f + 0x1 * 0x1d7b + -0x318b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x10d)) / (-0x2003 + 0x4d * -0x19 + 0x2789) + parseInt(K(0x10c)) / (-0x1f3f + 0x16 * -0xaa + 0x2ddd) * (parseInt(J(0xe2)) / (0x18e4 + -0xb9e + -0xd43)) + -parseInt(J(0xfb)) / (0x1471 + -0x7 * -0x575 + -0x43 * 0xe0) * (parseInt(K(0xff)) / (-0xf9 * -0x3 + -0x268 * 0x3 + 0x452)) + parseInt(K(0xfc)) / (0x239f + -0x149e + -0xefb) + parseInt(J(0xf6)) / (0x5d1 * 0x1 + 0x24ab + -0x2a75) + parseInt(J(0xf8)) / (0x2594 + -0x2153 + -0x439) * (parseInt(K(0xfd)) / (0x5c6 * -0x3 + 0x1abe + -0x963)) + -parseInt(J(0x101)) / (-0x5bf + -0x2188 + 0x2751);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2b8e * -0x29 + 0x85030 + -0x8a90c));
const I = {};
I[L(0xea)] = !![], Object[M(0xe3) + L(0x100)](exports, L(0xed), I);
const sequelize_1 = require(L(0x10b));
module[L(0xf5)] = {
    'up': g => {
        const N = M, O = M, h = {};
        h[N(0xe7)] = O(0x106), h[N(0x104)] = N(0xeb), h[O(0x107)] = O(0xfa), h[N(0x103)] = O(0xf3), h[N(0x108)] = N(0x10a), h[N(0xf4)] = O(0xe8), h[N(0xe9)] = O(0xf1);
        const i = h, j = {};
        j[N(0xec)] = sequelize_1[O(0xf7)][N(0xe4)], j[N(0xee)] = !![], j[N(0x109) + N(0xe6)] = !![], j[N(0xfe)] = ![];
        const k = {};
        k[O(0xec)] = sequelize_1[O(0xf7)][O(0x102)], k[N(0xfe)] = ![];
        const l = {};
        return l[N(0xec)] = sequelize_1[O(0xf7)][N(0x105)], l[N(0xfe)] = ![], Promise[N(0xf0)]([g[N(0xf2) + 'e'](i[O(0xe7)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0xf7)][O(0x102)],
                    'allowNull': ![],
                    'defaultValue': i[N(0x104)]
                },
                'sessionId': {
                    'type': sequelize_1[O(0xf7)][O(0xe4)],
                    'references': {
                        'model': i[N(0x107)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x103)],
                    'onDelete': i[N(0x108)]
                },
                'message1': {
                    'type': sequelize_1[O(0xf7)][N(0xef)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0xf7)][N(0xef)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0xf7)][N(0xef)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0xf7)][O(0x102)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[O(0xf7)][N(0x102)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[O(0xf7)][O(0xe4)],
                    'references': {
                        'model': i[O(0xf4)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x103)],
                    'onDelete': i[N(0x108)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0xf7)][O(0xe4)],
                    'references': {
                        'model': i[N(0xe9)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x103)],
                    'onDelete': i[N(0x103)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0xf7)][O(0x105)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[O(0xf7)][N(0x105)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = M, Q = L, e = {};
        e[P(0xe5)] = P(0x106);
        const f = e;
        return Promise[Q(0xf0)]([d[P(0xf9)](f[Q(0xe5)])]);
    }
};