'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x13b)) / (-0x1305 + 0x14 * -0x157 + 0x2dd2) + -parseInt(E(0x146)) / (-0x13ee * -0x1 + -0x28c + -0x1160) + parseInt(D(0x14e)) / (-0x1e9e + -0xe * 0x35 + -0x2187 * -0x1) * (parseInt(D(0x12a)) / (0x1b75 * 0x1 + -0x1e0 + 0x7 * -0x3a7)) + -parseInt(E(0x131)) / (0xe88 + -0x23a7 + 0xc * 0x1c3) * (-parseInt(D(0x147)) / (0x12f1 * 0x1 + 0xb18 + -0x1e03)) + -parseInt(D(0x133)) / (-0x17fd + 0x183d + 0x1 * -0x39) * (-parseInt(D(0x142)) / (-0x16fd + -0x11 * -0x209 + 0x1a * -0x72)) + -parseInt(E(0x12c)) / (0x186f + 0x44 * 0x68 + 0x1 * -0x3406) * (parseInt(D(0x139)) / (-0x2f * -0x8b + -0xe * -0xfe + -0x275f * 0x1)) + parseInt(E(0x13a)) / (-0x1d0b + -0x47 * -0x40 + 0x1 * 0xb56) * (parseInt(E(0x138)) / (0x18a * -0x4 + -0x61b + 0xc4f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xaca1 + 0x1 * -0xb9aba + 0x13d79b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7c6 + 0xb0 * 0x16 + -0x632);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0x136)] = !![], Object[G(0x14d) + G(0x141)](exports, F(0x14f), C);
function a() {
    const L = [
        'CASCADE',
        'dropTable',
        'value',
        'txId',
        '12IGWenn',
        '120440mfsCKp',
        '9436097lzFheF',
        '972922NxJvmk',
        'amZIm',
        'addIndex',
        'qeiSv',
        'exports',
        'DATE',
        'erty',
        '190600nTnTJl',
        'FLOAT',
        'yOReK',
        'DfrHh',
        '1938738acdXQc',
        '19542WeqCPA',
        'ent',
        'createTabl',
        'sequelize',
        'DataTypes',
        'primaryKey',
        'defineProp',
        '3VOsvyU',
        '__esModule',
        'STRING',
        'INTEGER',
        'Invoices',
        'idx_txid',
        'Tenants',
        '3135116xhCMlX',
        'PMTEb',
        '36ooYDIS',
        'type',
        'CxwwN',
        'autoIncrem',
        'TEXT',
        '565pAmHFy',
        'allowNull',
        '140KkCKsX'
    ];
    a = function () {
        return L;
    };
    return a();
}
const sequelize_1 = require(G(0x14a));
module[F(0x13f)] = {
    'up': k => {
        const H = G, I = F, l = {};
        l[H(0x12b)] = H(0x152), l[I(0x13c)] = H(0x129), l[H(0x145)] = H(0x134), l[I(0x13e)] = I(0x137), l[H(0x144)] = H(0x128);
        const m = l, n = {};
        n[H(0x12d)] = sequelize_1[H(0x14b)][H(0x151)], n[I(0x12f) + I(0x148)] = !![], n[H(0x14c)] = !![], n[I(0x132)] = ![];
        const o = {};
        o[H(0x12d)] = sequelize_1[H(0x14b)][H(0x150)];
        const p = {};
        p[I(0x12d)] = sequelize_1[H(0x14b)][H(0x150)];
        const q = {};
        q[I(0x12d)] = sequelize_1[H(0x14b)][H(0x143)];
        const r = {};
        r[H(0x12d)] = sequelize_1[I(0x14b)][H(0x140)], r[H(0x132)] = ![];
        const s = {};
        s[I(0x12d)] = sequelize_1[I(0x14b)][H(0x140)], s[I(0x132)] = ![];
        const t = {};
        t[I(0x12d)] = sequelize_1[I(0x14b)][H(0x150)];
        return k[I(0x149) + 'e'](m[H(0x12b)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[I(0x14b)][H(0x151)],
                'references': {
                    'model': m[I(0x13c)],
                    'key': 'id'
                },
                'onUpdate': m[H(0x145)],
                'onDelete': m[H(0x145)]
            },
            'txId': { 'type': sequelize_1[I(0x14b)][I(0x150)] },
            'payGw': { 'type': sequelize_1[I(0x14b)][H(0x150)] },
            'payGwData': { 'type': sequelize_1[I(0x14b)][H(0x130)] }
        });
        k[H(0x13d)](m[H(0x12b)], [m[I(0x13e)]], {
            'name': m[I(0x144)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0x12e)] = J(0x152);
        const f = e;
        return d[J(0x135)](f[J(0x12e)]);
    }
};