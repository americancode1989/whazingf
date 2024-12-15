'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1f4)) / (-0x2410 + -0x16 * 0x179 + -0x1 * -0x4477) + parseInt(i(0x1f9)) / (-0x22cc + -0x329 * -0x9 + 0x65d) + -parseInt(j(0x1f2)) / (-0x184a + -0x160f * 0x1 + 0x2e5c) + -parseInt(i(0x1f8)) / (-0x1 * -0x23e1 + -0x3c * -0x21 + -0x2b99) + -parseInt(i(0x1f3)) / (-0x1568 + -0x2ec + 0x1859) + -parseInt(j(0x1ee)) / (-0x946 + 0x1031 + -0x161 * 0x5) + -parseInt(j(0x1e9)) / (-0x7 * -0x583 + 0x1c36 + -0x42c4) * (-parseInt(j(0x1f5)) / (-0x2218 + 0x5a * 0xd + 0x1d8e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6528f + 0x1 * -0x91ccf + 0x14c860));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6e0 + 0x883 + 0x1 * 0x44);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1fc)] = !![], Object[k(0x1fe) + l(0x1fb)](exports, l(0x1ff), g);
const sequelize_1 = require(l(0x1fd));
function a() {
    const q = [
        '1920702tNocbN',
        'admin',
        'xQvTr',
        'removeColu',
        '337521CfAiPg',
        '2234175twODDZ',
        '233218wBaQQx',
        '4783024PxFZBh',
        'STRING',
        'Users',
        '1293372gwyOBc',
        '1181460trfDlI',
        'profile',
        'erty',
        'value',
        'sequelize',
        'defineProp',
        '__esModule',
        'lootW',
        'VEhMt',
        'CxxGm',
        '14yCJBha',
        'DataTypes',
        'addColumn',
        'exports',
        'jxnqD'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[l(0x1ec)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x1ed)] = m(0x1f7), e[n(0x200)] = n(0x1fa), e[n(0x1e7)] = m(0x1ef);
        const f = e;
        return d[n(0x1eb)](f[m(0x1ed)], f[n(0x200)], {
            'type': sequelize_1[n(0x1ea)][m(0x1f6)],
            'allowNull': ![],
            'defaultValue': f[n(0x1e7)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1f0)] = p(0x1f7), e[p(0x1e8)] = p(0x1fa);
        const f = e;
        return d[p(0x1f1) + 'mn'](f[p(0x1f0)], f[p(0x1e8)]);
    }
};