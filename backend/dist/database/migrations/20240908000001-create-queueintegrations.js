'use strict';
const P = b, Q = b;
(function (c, d) {
    const N = b, O = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(N(0x1e8)) / (-0x1ea8 + -0x5d * -0x6 + 0x1c7b) + parseInt(O(0x1ee)) / (0x317 * -0xc + 0x166d + 0xea9) * (-parseInt(O(0x1e7)) / (-0x58f * -0x7 + 0xf57 + -0xad9 * 0x5)) + -parseInt(N(0x1ec)) / (0x1156 * -0x1 + 0x9f5 + -0x277 * -0x3) + parseInt(N(0x1f3)) / (0x1 * -0x119d + 0x1f * -0x3d + 0x1905) + -parseInt(O(0x1da)) / (-0x5ff * 0x6 + -0x1 * 0x1fd2 + 0x1 * 0x43d2) + parseInt(O(0x1dd)) / (0x1026 + 0x1 * 0x155b + 0x3 * -0xc7e) * (-parseInt(N(0x1eb)) / (0x50c + -0x4 * -0x29d + 0x14a * -0xc)) + -parseInt(O(0x1df)) / (0x12 + -0x1535 + 0x152c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8f36e + -0x373 * 0x5c + 0x35812));
function a() {
    const V = [
        'rations',
        'STRING',
        'gSxHh',
        'createTabl',
        'defineProp',
        'bSxfR',
        'type',
        'exports',
        'primaryKey',
        '8201472rnZQVJ',
        'DataTypes',
        'TEXT',
        '2034130NxlwuC',
        'DATE',
        '217791DrAOqI',
        'value',
        'autoIncrem',
        'dropTable',
        'SET\x20NULL',
        'ebpDx',
        '__esModule',
        'allowNull',
        '12VxLnoo',
        '1171564UAizFK',
        'ent',
        'UTCeD',
        '8MVnorv',
        '648328ngjuZv',
        'kRxGs',
        '10434CdznLj',
        'CASCADE',
        'QueueInteg',
        'INTEGER',
        'Tenants',
        '7088055zWAhIi',
        'erty',
        'sequelize'
    ];
    a = function () {
        return V;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14dd + 0x1297 + 0x41b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const M = {};
M[P(0x1e0)] = !![], Object[P(0x1d5) + Q(0x1f4)](exports, Q(0x1e5), M);
const sequelize_1 = require(Q(0x1f5));
module[P(0x1d8)] = {
    'up': k => {
        const R = P, S = P, l = {};
        l[R(0x1d6)] = S(0x1f0) + R(0x1f6), l[S(0x1f8)] = R(0x1f2), l[S(0x1ed)] = R(0x1ef), l[S(0x1e4)] = R(0x1e3);
        const m = l, n = {};
        n[S(0x1d7)] = sequelize_1[R(0x1db)][R(0x1f1)], n[R(0x1e1) + R(0x1e9)] = !![], n[S(0x1d9)] = !![], n[R(0x1e6)] = ![];
        const o = {};
        o[R(0x1d7)] = sequelize_1[R(0x1db)][S(0x1dc)], o[R(0x1e6)] = !![];
        const p = {};
        p[S(0x1d7)] = sequelize_1[S(0x1db)][S(0x1dc)], p[S(0x1e6)] = !![];
        const q = {};
        q[R(0x1d7)] = sequelize_1[S(0x1db)][S(0x1dc)], q[S(0x1e6)] = !![];
        const r = {};
        r[R(0x1d7)] = sequelize_1[S(0x1db)][S(0x1dc)], r[S(0x1e6)] = !![];
        const s = {};
        s[S(0x1d7)] = sequelize_1[R(0x1db)][S(0x1dc)], s[S(0x1e6)] = !![];
        const t = {};
        return t[R(0x1d7)] = sequelize_1[S(0x1db)][R(0x1dc)], t[S(0x1e6)] = !![], k[S(0x1f9) + 'e'](m[R(0x1d6)], {
            'id': n,
            'type': o,
            'name': p,
            'projectName': q,
            'jsonContent': r,
            'urlN8N': s,
            'language': t,
            'createdAt': {
                'type': sequelize_1[R(0x1db)][S(0x1de)](0x71e + 0x18d2 + -0x1fea),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[S(0x1db)][R(0x1de)](0x2 * 0xeff + -0x1 * -0x30d + -0x2105),
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[S(0x1db)][S(0x1f1)],
                'references': {
                    'model': m[S(0x1f8)],
                    'key': 'id'
                },
                'onUpdate': m[R(0x1ed)],
                'onDelete': m[R(0x1e4)],
                'allowNull': !![]
            },
            'typebotSlug': {
                'type': sequelize_1[S(0x1db)][S(0x1f7)],
                'allowNull': !![]
            },
            'typebotExpires': {
                'type': sequelize_1[R(0x1db)][S(0x1f1)],
                'allowNull': !![],
                'defaultValue': 0x0
            },
            'typebotKeywordFinish': {
                'type': sequelize_1[R(0x1db)][R(0x1f7)],
                'allowNull': !![]
            },
            'typebotUnknownMessage': {
                'type': sequelize_1[S(0x1db)][R(0x1f7)],
                'allowNull': !![]
            },
            'typebotDelayMessage': {
                'type': sequelize_1[S(0x1db)][S(0x1f1)],
                'allowNull': !![],
                'defaultValue': 0x3e8
            },
            'typebotKeywordRestart': {
                'type': sequelize_1[S(0x1db)][S(0x1f7)],
                'allowNull': !![]
            },
            'typebotRestartMessage': {
                'type': sequelize_1[S(0x1db)][R(0x1f7)],
                'allowNull': !![]
            }
        });
    },
    'down': d => {
        const T = P, U = Q, e = {};
        e[T(0x1ea)] = U(0x1f0) + U(0x1f6);
        const f = e;
        return d[U(0x1e2)](f[T(0x1ea)]);
    }
};