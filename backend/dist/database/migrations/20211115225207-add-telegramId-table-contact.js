'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18a)) / (0x1941 + 0x96 * -0x35 + 0x5ce) + parseInt(q(0x168)) / (-0x1517 * 0x1 + 0xb58 + 0x9c1) + -parseInt(q(0x183)) / (0x24bd + -0xf19 + 0x1 * -0x15a1) + -parseInt(q(0x184)) / (0x116 * -0x1 + -0x1ed7 + -0x1 * -0x1ff1) + parseInt(q(0x178)) / (-0x18 * 0x18e + 0x1fdc + 0x1 * 0x579) + -parseInt(q(0x188)) / (-0x1a28 + -0xd6c + 0x279a) + -parseInt(p(0x177)) / (-0x2b6 + 0x28 * -0xf1 + 0x3 * 0xd77) * (-parseInt(q(0x16f)) / (-0x2594 + -0x9f1 + 0x2f8d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcebaa + 0x1b4396 + 0x2 * -0xcd0d1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x166 + -0x13 * -0x17e + 0x1560 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'int',
        'defineProp',
        'addConstra',
        'straint_co',
        'zNVFd',
        'addColumn',
        '694162ENTYwc',
        '8557710GeTxqX',
        'mMHRU',
        'Contacts',
        'telegramId',
        'Ztuty',
        'all',
        'UCDla',
        'value',
        'type',
        'atnZO',
        'defaultVal',
        '1236795FzQpKD',
        '6484716JEHQMU',
        'er_tenant',
        'JfwbK',
        'tenantId',
        '5020812ebuoMH',
        'unique_con',
        '1867946nbTrAN',
        'sequelize',
        'changeColu',
        'EFTcg',
        'exports',
        'NfqmW',
        '__esModule',
        'unique',
        'number',
        'STRING',
        'removeColu',
        'allowNull',
        'traint',
        '2209188IIdDjr',
        'DataTypes',
        'VIFOU',
        'removeCons',
        'erty',
        'BIGINT',
        'NaSEe',
        '232XaUJCx',
        'ntact_numb'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x17f)] = !![], Object[r(0x172) + s(0x16c)](exports, r(0x190), o);
const sequelize_1 = require(r(0x18b));
module[s(0x18e)] = {
    'up': f => {
        const t = s, u = r, g = {};
        g[t(0x181)] = t(0x17a), g[t(0x186)] = u(0x17b), g[u(0x16a)] = t(0x189) + t(0x174) + u(0x170) + t(0x185), g[t(0x16e)] = t(0x163);
        const h = g, i = {};
        i[u(0x180)] = sequelize_1[u(0x169)][u(0x16d)], i[t(0x182) + 'ue'] = null, i[u(0x166)] = !![];
        const j = {};
        return j[u(0x180)] = sequelize_1[t(0x169)][t(0x164)], j[t(0x166)] = !![], j[t(0x162)] = ![], j[t(0x182) + 'ue'] = null, Promise[t(0x17d)]([
            f[u(0x176)](h[u(0x181)], h[u(0x186)], i),
            f[t(0x16b) + u(0x167)](h[t(0x181)], h[t(0x16a)]),
            f[t(0x18c) + 'mn'](h[u(0x181)], h[u(0x16e)], j)
        ]);
    },
    'down': e => {
        const v = r, w = s, f = {};
        f[v(0x18f)] = w(0x17a), f[w(0x17c)] = v(0x17b), f[w(0x17e)] = w(0x163), f[v(0x175)] = w(0x187), f[w(0x179)] = v(0x162), f[w(0x18d)] = w(0x189) + w(0x174) + v(0x170) + w(0x185);
        const g = f, h = {};
        return h[w(0x180)] = sequelize_1[v(0x169)][w(0x164)], h[w(0x166)] = ![], h[v(0x162)] = !![], Promise[w(0x17d)]([
            e[w(0x165) + 'mn'](g[v(0x18f)], g[w(0x17c)]),
            e[v(0x18c) + 'mn'](g[v(0x18f)], g[v(0x17e)], h),
            e[w(0x173) + w(0x171)](g[w(0x18f)], [
                g[w(0x17e)],
                g[v(0x175)]
            ], {
                'type': g[w(0x179)],
                'name': g[v(0x18d)]
            })
        ]);
    }
};