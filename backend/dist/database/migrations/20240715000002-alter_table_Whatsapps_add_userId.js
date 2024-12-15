'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x175)) / (-0x1 * 0x22b + 0x359 + -0x7 * 0x2b) + -parseInt(i(0x183)) / (-0x58 + -0x2606 + 0x1330 * 0x2) + -parseInt(i(0x168)) / (-0x7a0 + 0x1347 + 0x2 * -0x5d2) + parseInt(j(0x176)) / (0x1842 + -0x1aa * 0x3 + -0x2c0 * 0x7) * (-parseInt(j(0x173)) / (-0x1b46 + -0x242f + -0x1a * -0x271)) + -parseInt(i(0x167)) / (0x1091 + 0x22eb + -0xe * 0x3ad) + -parseInt(i(0x174)) / (-0x3ec + 0x5 * -0x177 + 0xb46) * (-parseInt(i(0x169)) / (0x6 * -0x197 + 0x19f7 + -0x1065)) + parseInt(i(0x16b)) / (0xe11 + -0x52d + 0x1 * -0x8db) * (parseInt(i(0x184)) / (-0x1 * 0x49b + -0x9 * 0x34b + 0x2248));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xef914 + -0x113226 + 0xd1317));
const g = {};
g[k(0x16d)] = !![], Object[k(0x16a) + k(0x16c)](exports, l(0x16e), g);
function a() {
    const q = [
        'exports',
        'addColumn',
        'dfGVK',
        'CASCADE',
        'HGFoi',
        'removeColu',
        'vUJZl',
        '780000LOFJWR',
        '230SdKzkv',
        'HkHkb',
        'sequelize',
        '3226212sQhbrm',
        '3642378SWtcqk',
        '123920UCMQbJ',
        'defineProp',
        '1274382ZDgxVS',
        'erty',
        'value',
        '__esModule',
        'OLYOq',
        'DataTypes',
        'SET\x20NULL',
        'gEeLH',
        '60TKmaDo',
        '343elkBrq',
        '924611vFwIDu',
        '79384ZegABG',
        'Whatsapps',
        'userId',
        'INTEGER',
        'Users',
        'iPWnJ'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1fb2 + -0x248f + 0xe5 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(k(0x166));
module[k(0x17c)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x182)] = n(0x177), e[n(0x180)] = m(0x178), e[m(0x16f)] = m(0x17a), e[m(0x17b)] = m(0x17f), e[n(0x172)] = m(0x171);
        const f = e;
        return d[n(0x17d)](f[m(0x182)], f[n(0x180)], {
            'type': sequelize_1[n(0x170)][n(0x179)],
            'references': {
                'model': f[n(0x16f)],
                'key': 'id'
            },
            'onUpdate': f[m(0x17b)],
            'onDelete': f[m(0x172)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x17e)] = o(0x177), e[p(0x185)] = p(0x178);
        const f = e;
        return d[p(0x181) + 'mn'](f[p(0x17e)], f[o(0x185)]);
    }
};