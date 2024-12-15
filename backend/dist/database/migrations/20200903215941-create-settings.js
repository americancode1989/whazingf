'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xb2)) / (0x17dc + -0x1228 + -0x5b3 * 0x1) * (-parseInt(s(0xbc)) / (-0x56c * -0x2 + 0x1363 * 0x1 + -0x3 * 0xa13)) + -parseInt(r(0xb9)) / (-0x6c9 + -0x16ea + -0x1 * -0x1db6) + -parseInt(s(0xab)) / (0x2e * -0x1 + 0x1867 * -0x1 + 0x1899) * (parseInt(r(0xaa)) / (-0x11c8 + -0xb * 0x31c + 0x3401)) + -parseInt(r(0xb4)) / (0xf4e + 0x771 * -0x1 + -0x29d * 0x3) + parseInt(s(0xa4)) / (-0x1507 + -0x15f7 + 0xe57 * 0x3) * (-parseInt(s(0xa9)) / (-0xe26 + -0x8c1 + -0x13 * -0x135)) + -parseInt(s(0xc0)) / (0x2ae + 0x349 * -0xb + 0x217e) * (parseInt(r(0xa6)) / (0x1d * 0xd3 + 0x1 * -0x315 + -0x14c8)) + parseInt(s(0xbb)) / (0x1420 + 0x9a + 0x423 * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x170b01 + -0x197c2f + 0x1160c4));
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf8b + -0x214d * 0x1 + -0x3 * -0x107e);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[t(0xba)] = !![], Object[t(0xc1) + u(0xad)](exports, t(0xbd), m);
const sequelize_1 = require(u(0xa3));
function a() {
    const z = [
        '47260Ebkgqr',
        'key',
        'Settings',
        '47624YBSyDK',
        '2595505gttHDJ',
        '4JGYyXO',
        'allowNull',
        'erty',
        'TEXT',
        'type',
        'primaryKey',
        'exports',
        '772DkyRsl',
        'updatedAt',
        '6994668mkkaLu',
        'CrmwL',
        'DataTypes',
        'STRING',
        'createTabl',
        '5275617pvLqwy',
        'value',
        '69948373LQqkve',
        '1264lGiNyc',
        '__esModule',
        'smDNC',
        'DATE',
        '1341hdXdxd',
        'defineProp',
        'dropTable',
        'sequelize',
        '2023ZSPvdI',
        'createdAt'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0xb1)] = {
    'up': i => {
        const v = u, w = u, j = {};
        j[v(0xb5)] = w(0xa8);
        const k = j, l = {};
        l[w(0xaf)] = sequelize_1[v(0xb6)][v(0xb7)], l[v(0xb0)] = !![], l[w(0xac)] = ![];
        const n = {};
        n[v(0xaf)] = sequelize_1[v(0xb6)][v(0xae)], n[v(0xac)] = ![];
        const o = {};
        o[w(0xaf)] = sequelize_1[v(0xb6)][v(0xbf)], o[w(0xac)] = ![];
        const p = {};
        p[v(0xaf)] = sequelize_1[v(0xb6)][w(0xbf)], p[w(0xac)] = ![];
        const q = {};
        return q[v(0xa7)] = l, q[v(0xba)] = n, q[w(0xa5)] = o, q[w(0xb3)] = p, i[w(0xb8) + 'e'](k[w(0xb5)], q);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xbe)] = y(0xa8);
        const f = e;
        return d[x(0xa2)](f[x(0xbe)]);
    }
};