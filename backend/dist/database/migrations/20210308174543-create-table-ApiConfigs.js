'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x1ef)) / (0x1 * -0x1976 + 0x1f6a + 0x1 * -0x5f3) * (parseInt(G(0x1d2)) / (0x26bd + 0x301 * -0x4 + -0x1ab7)) + parseInt(G(0x1d9)) / (0x1 * 0xc6f + -0x7 * 0x501 + -0x3 * -0x789) * (-parseInt(F(0x1dc)) / (0x11 * -0x1e7 + -0x3a9 + 0x2 * 0x1202)) + parseInt(G(0x1cf)) / (-0x1cc9 + -0x1 * 0x168e + 0x335c) * (parseInt(G(0x1d3)) / (-0xa16 + 0x1 * -0x26ef + 0x310b)) + -parseInt(G(0x1e8)) / (-0x1390 + -0xca + 0x1461) + -parseInt(F(0x1fd)) / (-0x140f + 0x2df + 0x1138) * (parseInt(F(0x1d5)) / (0x1c5d * 0x1 + 0x2264 + 0x24 * -0x1be)) + -parseInt(F(0x1ea)) / (-0x12d1 + 0x1 * -0x180e + 0x5 * 0x895) * (parseInt(G(0x1fa)) / (-0x58 * -0x31 + -0x1 * 0xc55 + -0x478)) + parseInt(G(0x1dd)) / (0x79a + -0x3bd * 0x2 + -0x14);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x1dd37 + 0x72245 + 0x2c5 * -0x1e3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20f9 + 0x1591 * 0x1 + -0x34bb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const E = {};
function a() {
    const N = [
        '6948468AreuBx',
        'VPRDx',
        'defineProp',
        'Tenants',
        '__esModule',
        'pCJgJ',
        'DATE',
        'DataTypes',
        'CASCADE',
        'erty',
        'gen_random',
        '1493842ZaLfFn',
        'STRING',
        '20pcknoh',
        'vakXY',
        'exports',
        'Whatsapps',
        'sequelize',
        '112aFjugq',
        'gmmIG',
        'INTEGER',
        'kYCaI',
        'SET\x20NULL',
        'BOOLEAN',
        'ApiConfigs',
        'isUrl',
        'Users',
        'Sequelize',
        'all',
        '118822lOREoP',
        'DJXgq',
        'createTabl',
        '218912qlTBYi',
        '5zSJXJw',
        'UUID',
        'rapPr',
        '11542cbauBO',
        '3214842XeieEm',
        '_uuid()',
        '171UrbbsN',
        'fiVVU',
        'TEXT',
        'literal',
        '210BHlPaq',
        'value',
        'dropTable',
        '36392EhCsNJ'
    ];
    a = function () {
        return N;
    };
    return a();
}
E[H(0x1da)] = !![], Object[H(0x1df) + H(0x1e6)](exports, H(0x1e1), E);
const sequelize_1 = require(I(0x1ee));
module[I(0x1ec)] = {
    'up': f => {
        const J = I, K = I, g = {};
        g[J(0x1e2)] = J(0x1f5), g[K(0x1eb)] = J(0x1e7) + K(0x1d4), g[K(0x1d1)] = K(0x1ed), g[K(0x1f0)] = K(0x1e5), g[K(0x1f2)] = J(0x1f3), g[K(0x1fb)] = J(0x1f7), g[J(0x1d6)] = J(0x1e0);
        const h = g, i = {};
        i[K(0x1f6)] = !![];
        const j = {};
        return j[K(0x1f6)] = !![], Promise[J(0x1f9)]([f[J(0x1fc) + 'e'](h[K(0x1e2)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x1e4)][J(0x1d0)],
                    'defaultValue': sequelize_1[J(0x1f8)][J(0x1d8)](h[J(0x1eb)])
                },
                'sessionId': {
                    'type': sequelize_1[J(0x1e4)][K(0x1f1)],
                    'references': {
                        'model': h[K(0x1d1)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x1f0)],
                    'onDelete': h[J(0x1f2)]
                },
                'name': {
                    'type': sequelize_1[J(0x1e4)][K(0x1e9)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x1e4)][K(0x1f4)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[J(0x1e4)][J(0x1e9)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0x1e4)][J(0x1f1)],
                    'references': {
                        'model': h[K(0x1fb)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x1f0)],
                    'onDelete': h[K(0x1f2)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x1e4)][J(0x1f1)],
                    'references': {
                        'model': h[K(0x1d6)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x1f0)],
                    'onDelete': h[K(0x1f0)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[J(0x1e4)][J(0x1d7)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[J(0x1e4)][J(0x1d7)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0x1e4)][J(0x1e3)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x1e4)][K(0x1e3)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0x1de)] = M(0x1f5);
        const f = e;
        return Promise[L(0x1f9)]([d[L(0x1db)](f[L(0x1de)])]);
    }
};