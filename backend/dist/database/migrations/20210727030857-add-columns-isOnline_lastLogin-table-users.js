'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11f * -0x1 + -0x1c58 + -0x65 * -0x4e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x160)) / (-0x22c6 * 0x1 + 0x1c1 * -0x15 + -0x479c * -0x1) + -parseInt(s(0x16c)) / (-0x1f6 * 0x1 + -0x742 + 0x93a) + -parseInt(r(0x157)) / (0x7ca * -0x4 + 0x33f * 0x8 + -0xb * -0x79) + parseInt(s(0x15a)) / (0x360 + -0xdd7 + 0xa7b) * (-parseInt(r(0x172)) / (-0x2129 + -0x3dd + -0x1d * -0x147)) + -parseInt(r(0x15c)) / (-0x29 * -0x14 + -0x640 + -0x6 * -0x83) * (parseInt(r(0x14f)) / (0x18dd + 0xbfd + -0x24d3)) + parseInt(r(0x170)) / (-0x2 * 0x7b2 + -0x96 + 0x1002) + parseInt(s(0x168)) / (0x9af + -0x1 * -0x5fb + -0x1 * 0xfa1) * (parseInt(r(0x164)) / (0x22b2 + -0x125d + -0x1 * 0x104b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x117ebb + -0x122f2d + 0xd0ce8));
function a() {
    const z = [
        '4ASjfYv',
        'type',
        '899244jlVMkR',
        'defaultVal',
        'BOOLEAN',
        'EHQnD',
        '1224164IOzNmR',
        'removeColu',
        'lastLogin',
        'DATE',
        '230ywTbZI',
        'Users',
        'YSvjh',
        'isOnline',
        '347265QhrwZq',
        'nPjfa',
        'addColumn',
        'kINku',
        '1057022tEhngZ',
        '__esModule',
        'exports',
        'JhLHF',
        '7346896BOoWlS',
        'lastLogout',
        '3999745qBmmFJ',
        '21Kksfwp',
        'erty',
        'sequelize',
        'all',
        'value',
        'defineProp',
        'asedo',
        'mxQGn',
        '1325391eUrcGr',
        'prdsG',
        'DataTypes'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x153)] = !![], Object[u(0x154) + u(0x150)](exports, t(0x16d), q);
const sequelize_1 = require(u(0x151));
module[t(0x16e)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x166)] = v(0x165), h[v(0x16f)] = v(0x162), h[w(0x155)] = v(0x171), h[v(0x158)] = w(0x167);
        const i = h, j = {};
        j[w(0x15b)] = sequelize_1[w(0x159)][v(0x163)], j[w(0x15d) + 'ue'] = null;
        const k = {};
        k[w(0x15b)] = sequelize_1[w(0x159)][v(0x163)], k[w(0x15d) + 'ue'] = null;
        const l = {};
        return l[w(0x15b)] = sequelize_1[v(0x159)][w(0x15e)], l[w(0x15d) + 'ue'] = ![], Promise[v(0x152)]([
            g[w(0x16a)](i[w(0x166)], i[w(0x16f)], j),
            g[v(0x16a)](i[v(0x166)], i[w(0x155)], k),
            g[v(0x16a)](i[w(0x166)], i[w(0x158)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x156)] = x(0x165), e[x(0x15f)] = x(0x162), e[x(0x169)] = x(0x171), e[y(0x16b)] = y(0x167);
        const f = e;
        return Promise[x(0x152)]([
            d[x(0x161) + 'mn'](f[x(0x156)], f[y(0x15f)]),
            d[x(0x161) + 'mn'](f[x(0x156)], f[y(0x169)]),
            d[y(0x161) + 'mn'](f[y(0x156)], f[y(0x16b)])
        ]);
    }
};