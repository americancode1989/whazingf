'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x1a2)) / (0x35 * 0x32 + 0xd77 + -0x7f * 0x30) + -parseInt(k(0x1b0)) / (0x674 * -0x6 + 0x2156 + -0x159 * -0x4) + -parseInt(k(0x1a4)) / (0x11d5 + 0x2 * -0x4b1 + -0x870) * (parseInt(k(0x1a1)) / (-0x2 * 0x36a + -0x94b + 0x1023)) + -parseInt(j(0x19e)) / (-0x1 * -0x1781 + 0x133f + -0x2abb) + parseInt(j(0x1a5)) / (-0xa80 + 0x2364 + -0x18de) * (parseInt(k(0x1b8)) / (0x17f8 + 0x1 * 0x112e + 0x21 * -0x13f)) + -parseInt(j(0x1a6)) / (-0x255a + 0x1f04 + 0x32f * 0x2) * (parseInt(j(0x1b3)) / (-0x16cd + -0x1 * -0x494 + 0x616 * 0x3)) + parseInt(j(0x1ac)) / (-0x243 * 0x1 + -0x16b * -0xb + -0xd4c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10a804 + -0xaf55e + -0x19b * -0x1aa3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x533 * -0x7 + 0xaa0 + -0x2d69);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'allowNull',
        'all',
        'Settings',
        '1350050GrjGJa',
        'INTEGER',
        'ent',
        '9FfayzA',
        'addColumn',
        'defineProp',
        'sequelize',
        'DFCbL',
        '14791UpQSUv',
        'type',
        'autoIncrem',
        '6753825imMoKD',
        '__esModule',
        'MsXBu',
        '937172UPJMRI',
        '393970xgNEGL',
        'exports',
        '3DINrdt',
        '3240VTwRYS',
        '9429704glSpad',
        'primaryKey',
        'erty',
        'value',
        'DataTypes',
        'removeColu',
        '36845930hhGtaw'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x1a9)] = !![], Object[m(0x1b5) + m(0x1a8)](exports, l(0x19f), i);
const sequelize_1 = require(l(0x1b6));
module[l(0x1a3)] = {
    'up': e => {
        const n = m, o = l, f = {};
        f[n(0x1a0)] = n(0x1af);
        const g = f, h = {};
        return h[o(0x19c)] = sequelize_1[n(0x1aa)][n(0x1b1)], h[n(0x19d) + n(0x1b2)] = !![], h[n(0x1a7)] = !![], h[n(0x1ad)] = ![], Promise[o(0x1ae)]([e[o(0x1b4)](g[o(0x1a0)], 'id', h)]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x1b7)] = p(0x1af);
        const f = e;
        return Promise[q(0x1ae)]([d[q(0x1ab) + 'mn'](f[q(0x1b7)], 'id')]);
    }
};