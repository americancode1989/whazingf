'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2415 + 0x123a + -0x3 * -0x61a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x75)) / (0x308 * 0x6 + -0xea + -0x1145 * 0x1) + parseInt(p(0x83)) / (0xf * -0x21 + -0x1 * -0x33f + 0xa7 * -0x2) * (-parseInt(p(0x77)) / (0x5b4 + -0x2495 + -0x7b9 * -0x4)) + parseInt(q(0x86)) / (-0x1964 + -0x17f8 * 0x1 + 0x3160) + parseInt(q(0x84)) / (-0x2fd + -0x2591 * 0x1 + 0x2893) * (-parseInt(q(0x8f)) / (0x227f * 0x1 + -0x1469 + 0xc * -0x12c)) + parseInt(p(0x7f)) / (0x1f6 + -0x33d * -0xb + 0xd1 * -0x2e) + parseInt(q(0x8a)) / (0x83 * -0x43 + -0x187a + 0x57 * 0xad) * (parseInt(q(0x96)) / (0x1b18 + 0x123f + -0x2d4e)) + -parseInt(p(0x7b)) / (-0xaa * -0x31 + -0x1536 + -0xb4a) * (-parseInt(q(0x8e)) / (0x4 * -0x93a + -0x1086 * -0x1 + 0x146d * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10439f + 0x12e10c + 0x7cd3f));
const o = {};
o[r(0x8d)] = !![], Object[r(0x88) + r(0x89)](exports, s(0x79), o);
const sequelize_1 = require(s(0x7c));
function a() {
    const x = [
        '225damWOP',
        'DataTypes',
        'INTEGER',
        'ent',
        'exports',
        'gAJdn',
        '926227viDaIs',
        'NPZCQ',
        '120ShBxNJ',
        'STRING',
        '__esModule',
        'CASCADE',
        '21100llvqrp',
        'sequelize',
        'createTabl',
        'Users',
        '2827650pKNvQd',
        'allowNull',
        'autoIncrem',
        'LsynL',
        '31018dKGKaY',
        '628510YlevXD',
        'Tenants',
        '475124aqnXim',
        'active',
        'defineProp',
        'erty',
        '323760RFJhKW',
        'dropTable',
        'restrict',
        'value',
        '5588haskDZ',
        '18anKnmB',
        'DATE',
        'Maxqv',
        'type',
        'primaryKey',
        'eakPU',
        'uTqvg'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[r(0x73)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0x74)] = t(0x85), f[t(0x95)] = u(0x87), f[u(0x76)] = t(0x7e), f[t(0x91)] = t(0x7a), f[t(0x94)] = t(0x8c);
        const g = f, h = {};
        return h[t(0x92)] = sequelize_1[t(0x97)][u(0x98)], h[t(0x81) + t(0x99)] = !![], h[t(0x93)] = !![], h[u(0x80)] = ![], e[t(0x7d) + 'e'](g[t(0x74)], {
            'id': h,
            'status': {
                'type': sequelize_1[u(0x97)][t(0x78)],
                'defaultValue': g[t(0x95)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[t(0x97)][t(0x98)],
                'references': {
                    'model': g[t(0x76)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x91)],
                'onDelete': g[u(0x94)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x97)][u(0x90)](0x551 * 0x4 + 0x1bcf + 0x310d * -0x1),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x97)][t(0x90)](-0x2e * -0x41 + 0x266a * 0x1 + 0x1ed * -0x1a),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x82)] = w(0x85);
        const f = e;
        return d[w(0x8b)](f[w(0x82)]);
    }
};