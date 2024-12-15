'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc33 + 0x1e86 + -0x2911);
        let h = e[f];
        return h;
    }, b(c, d);
}
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x1ce)) / (0x102 + -0x96 + -0x6b) + -parseInt(L(0x1c7)) / (-0x1 * 0x211 + -0x754 + -0x1d * -0x53) * (-parseInt(L(0x1d5)) / (-0x1 * 0x2202 + 0x7f7 * 0x2 + 0x1217)) + parseInt(M(0x1bc)) / (0x1d6c + -0x500 + -0x61a * 0x4) * (-parseInt(M(0x1bb)) / (0x1f82 + -0xcca * 0x1 + -0x12b3 * 0x1)) + -parseInt(L(0x1d1)) / (0xd0b * -0x1 + 0x1699 + -0x2 * 0x4c4) * (parseInt(M(0x1cf)) / (0x4c8 + -0xac5 + 0x604)) + parseInt(M(0x1c4)) / (0x1afa * 0x1 + -0x1091 + -0xa61) + -parseInt(L(0x1aa)) / (-0x1a79 + 0xb6a + 0x228 * 0x7) * (parseInt(L(0x1be)) / (0x1b77 + 0xc76 + -0x27e3)) + parseInt(L(0x1bf)) / (0x1612 + 0xb * -0x376 + 0x100b) * (parseInt(M(0x1a9)) / (0x199 * 0x5 + -0xa51 + -0x4c * -0x8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbe58 * 0x1d + 0x12ab4f + -0x19f197));
const K = {};
K[N(0x1c2)] = !![], Object[O(0x1ae) + O(0x1d3)](exports, N(0x1c1), K);
const sequelize_1 = require(N(0x1d4));
function a() {
    const T = [
        '7817718diScdU',
        'dropTable',
        'erty',
        'sequelize',
        '1780923nRWIOa',
        'uRzGK',
        '24MWlFUn',
        '54MQQhcp',
        'DataTypes',
        'STRING',
        'Tenants',
        'defineProp',
        'INTEGER',
        'notEmpty',
        'udyoo',
        'exports',
        'DATE',
        'gen_random',
        'CvHIO',
        'sVBvt',
        'all',
        'CASCADE',
        'SPpzx',
        'literal',
        '744805qrOqtg',
        '12RDtPUI',
        'Whatsapps',
        '2129300bcyfBx',
        '17430501ZoJpFH',
        'len',
        '__esModule',
        'value',
        'SET\x20NULL',
        '12875096MtDGbM',
        'TEXT',
        'UUID',
        '2cHnQjI',
        'ApiMessage',
        'qZjEY',
        'createTabl',
        'Sequelize',
        'Hiscp',
        '_uuid()',
        '1408426kKijLe',
        '7FjOwfE',
        'JSONB'
    ];
    a = function () {
        return T;
    };
    return a();
}
module[N(0x1b2)] = {
    'up': f => {
        const P = N, Q = O, g = {};
        g[P(0x1b9)] = Q(0x1c8) + 's', g[Q(0x1cc)] = Q(0x1b4) + P(0x1cd), g[Q(0x1c9)] = P(0x1bd), g[P(0x1b6)] = P(0x1b8), g[P(0x1a8)] = Q(0x1c3), g[Q(0x1b1)] = P(0x1ad);
        const h = g, i = {};
        i[P(0x1b0)] = !![];
        const j = {};
        return j[P(0x1b0)] = !![], j[P(0x1c0)] = [
            -0x721 + 0x3 * -0x407 + 0x1342,
            -0x1 * 0x55 + 0x1460 + 0x2b * -0x77
        ], Promise[Q(0x1b7)]([f[P(0x1ca) + 'e'](h[Q(0x1b9)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x1ab)][P(0x1c6)],
                    'defaultValue': sequelize_1[P(0x1cb)][P(0x1ba)](h[P(0x1cc)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x1ab)][Q(0x1ac)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x1ab)][Q(0x1ac)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x1ab)][P(0x1c5)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x1ab)][P(0x1af)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[Q(0x1ab)][Q(0x1ac)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[Q(0x1ab)][P(0x1c5)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[Q(0x1ab)][P(0x1af)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x1ab)][Q(0x1af)],
                    'references': {
                        'model': h[P(0x1c9)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x1b6)],
                    'onDelete': h[P(0x1a8)]
                },
                'tenantId': {
                    'type': sequelize_1[Q(0x1ab)][P(0x1af)],
                    'references': {
                        'model': h[Q(0x1b1)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x1b6)],
                    'onDelete': h[Q(0x1b6)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0x1ab)][Q(0x1d0)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x1ab)][P(0x1d0)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x1ab)][Q(0x1b3)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x1ab)][P(0x1b3)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = O, S = N, e = {};
        e[R(0x1b5)] = R(0x1c8) + 's';
        const f = e;
        return Promise[S(0x1b7)]([d[S(0x1d2)](f[R(0x1b5)])]);
    }
};