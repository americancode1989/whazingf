'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0xa7f + -0x9 + -0x9 * -0x3a9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x18a)) / (-0x10aa + 0xf9c + 0x10f) + parseInt(s(0x16f)) / (0x3a2 + 0xc84 + -0x1024) * (parseInt(s(0x17e)) / (0x65d + 0x5cc + -0xc26)) + -parseInt(s(0x174)) / (-0xb * 0xe1 + 0x6 * 0x29e + -0x605) * (-parseInt(s(0x18c)) / (-0x6b * 0x9 + -0x1 * -0x7c9 + -0x401 * 0x1)) + -parseInt(r(0x178)) / (0x2685 + 0x257f * -0x1 + -0x20 * 0x8) * (-parseInt(s(0x193)) / (-0xb1b + 0x22a + 0x8f8)) + -parseInt(r(0x16d)) / (0x1 * -0x11af + 0x190 + -0x1027 * -0x1) * (-parseInt(r(0x190)) / (-0x27f * -0x9 + 0x4d * 0x13 + -0x1c25)) + parseInt(r(0x18e)) / (0x8a * 0x39 + 0x371 * -0x5 + 0x1ed * -0x7) * (-parseInt(s(0x183)) / (-0x14dd + -0x2 * 0x9e3 + -0x2 * -0x1457)) + parseInt(r(0x170)) / (-0x2 * 0xb8d + 0x19 * -0x9b + -0x9 * -0x441) * (-parseInt(r(0x187)) / (-0x1 * -0x442 + 0x1fee + -0x13f * 0x1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13218 + 0x14 * 0x9cb5 + 0x2 * -0x1b565));
const q = {};
q[t(0x182)] = !![], Object[u(0x177) + t(0x17d)](exports, u(0x16b), q);
function a() {
    const z = [
        'lets',
        '447813FnymEp',
        'createTabl',
        'DATE',
        '104335pJEUJZ',
        '__esModule',
        'Tenants',
        '160LpeerB',
        'ixqoq',
        '4LnEJei',
        '6431052pETcBM',
        'kEmll',
        'QIXyb',
        'DataTypes',
        '1528hLsfoe',
        'ent',
        'ETfkw',
        'defineProp',
        '12URsjIb',
        'type',
        'sequelize',
        'exports',
        'XcfOc',
        'erty',
        '995889nwiLyB',
        'Contacts',
        'autoIncrem',
        'INTEGER',
        'value',
        '4116706GRnShi',
        'CASCADE',
        'cOlch',
        'dropTable',
        '13vptItH',
        'ContactWal',
        'allowNull',
        '843653fBrNHo',
        'primaryKey',
        '7395lBMBRF',
        'Users',
        '10iPVQBo'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(u(0x17a));
module[t(0x17b)] = {
    'up': e => {
        const v = t, w = u, f = {};
        f[v(0x176)] = v(0x188) + v(0x18f), f[v(0x185)] = v(0x18d), f[w(0x171)] = v(0x184), f[w(0x16e)] = v(0x17f), f[w(0x17c)] = w(0x16c);
        const g = f, h = {};
        return h[w(0x179)] = sequelize_1[w(0x173)][v(0x181)], h[w(0x180) + w(0x175)] = !![], h[w(0x18b)] = !![], h[v(0x189)] = ![], e[w(0x191) + 'e'](g[v(0x176)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[w(0x173)][w(0x181)],
                'references': {
                    'model': g[v(0x185)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x171)],
                'onDelete': g[w(0x171)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x173)][w(0x181)],
                'references': {
                    'model': g[v(0x16e)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x171)],
                'onDelete': g[w(0x171)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x173)][v(0x181)],
                'references': {
                    'model': g[w(0x17c)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x171)],
                'onDelete': g[w(0x171)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x173)][w(0x192)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x173)][w(0x192)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x172)] = x(0x188) + x(0x18f);
        const f = e;
        return d[y(0x186)](f[y(0x172)]);
    }
};