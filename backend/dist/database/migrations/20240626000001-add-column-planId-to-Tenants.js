'use strict';
function a() {
    const q = [
        '5639968wgQicN',
        '111120cUsVed',
        'Plans',
        'TvPpq',
        'SET\x20NULL',
        'bAtmD',
        'erty',
        'planId',
        'INTEGER',
        '3213564mRAQpK',
        'gkWML',
        'value',
        'sequelize',
        'zJykK',
        'Tenants',
        'DataTypes',
        '6222013EGOGjI',
        'addColumn',
        'lMsWQ',
        '24794154FmuUbI',
        'defineProp',
        '990271JBrPww',
        'exports',
        '989700PndrCB',
        '18ihhNWi',
        '3tOYanz',
        'removeColu',
        'CASCADE',
        '__esModule',
        'esHlN',
        'jZSBW'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x164)) / (0x10a9 + 0x5f6 + -0x6 * 0x3c5) + parseInt(i(0x16f)) / (-0x1a67 * -0x1 + 0xc3 * 0x1 + -0x2 * 0xd94) + -parseInt(j(0x168)) / (0x16b + 0xc4b * 0x1 + -0xdb3) * (parseInt(j(0x177)) / (0x1892 + 0x46 * -0x27 + 0xfe * -0xe)) + -parseInt(i(0x166)) / (0x16d + 0x34 * -0x6b + 0x1454) * (parseInt(j(0x167)) / (-0x1 * 0x1dc5 + 0x1e2f + -0x5 * 0x14)) + parseInt(i(0x17e)) / (-0x639 + -0x1947 * -0x1 + 0x1 * -0x1307) + -parseInt(j(0x16e)) / (0x20ad + -0xea2 * -0x2 + -0x3de9) + parseInt(i(0x181)) / (0x8cf * 0x4 + -0x19ca + -0x969);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x118bd9 + -0x197a9 * 0x6 + 0x245c4e));
const g = {};
g[k(0x179)] = !![], Object[l(0x182) + l(0x174)](exports, l(0x16b), g);
const sequelize_1 = require(k(0x17a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5cc + 0x22a8 * -0x1 + 0xd * 0x338);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x165)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x16d)] = m(0x17c), e[n(0x178)] = m(0x175), e[m(0x180)] = n(0x170), e[m(0x171)] = n(0x16a), e[n(0x173)] = n(0x172);
        const f = e;
        return d[n(0x17f)](f[m(0x16d)], f[n(0x178)], {
            'type': sequelize_1[n(0x17d)][m(0x176)],
            'references': {
                'model': f[n(0x180)],
                'key': 'id'
            },
            'onUpdate': f[n(0x171)],
            'onDelete': f[m(0x173)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x17b)] = o(0x17c), e[p(0x16c)] = o(0x175);
        const f = e;
        return d[o(0x169) + 'mn'](f[o(0x17b)], f[o(0x16c)]);
    }
};