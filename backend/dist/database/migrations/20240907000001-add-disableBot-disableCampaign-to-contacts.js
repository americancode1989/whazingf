'use strict';
function a() {
    const v = [
        '5042180FeGwXF',
        '22yyyrgw',
        'IhOVZ',
        'disableCam',
        'exports',
        'type',
        'defaultVal',
        'ObCLr',
        '2933208Ggizjg',
        'value',
        '1239688sGSvOh',
        '75959SAFuIi',
        'erty',
        'DataTypes',
        'sequelize',
        'jlJrd',
        'disableBot',
        '__esModule',
        'addColumn',
        '872166YFLVng',
        'paign',
        'Contacts',
        'all',
        'PnQpm',
        '11507792lJczrx',
        'removeColu',
        'cLoml',
        '1564542LtJPgE',
        'esWDF',
        'BOOLEAN',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xaf)) / (0x83b * -0x2 + 0x200 * 0x8 + 0x77) * (parseInt(o(0xa5)) / (-0xb8 * -0x2 + 0x2 * 0x349 + -0x800)) + parseInt(o(0xac)) / (0x1 * -0x1d6e + 0x1d48 + 0x29) + -parseInt(n(0xae)) / (-0x1565 + 0x4d * -0x47 + 0xa1 * 0x44) + -parseInt(n(0xa4)) / (-0x1c17 + -0x1 * 0x76f + 0x238b) + parseInt(n(0x98)) / (-0x237c + 0x1d2 * -0x2 + 0x2 * 0x1393) + parseInt(n(0xa0)) / (-0x14b6 + 0xa9 * 0x2b + 0x16 * -0x59) + parseInt(o(0x9d)) / (-0x1 * -0x1f90 + 0x13ea + -0x525 * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d0f6 + 0x18 * 0xb5fd + -0x2ba * -0xe0));
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x107 + 0x7 * 0x2cc + -0x502 * 0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[p(0xad)] = !![], Object[p(0xa3) + q(0xb0)](exports, q(0x96), m);
const sequelize_1 = require(p(0x93));
module[p(0xa8)] = {
    'up': f => {
        const r = p, s = q, g = {};
        g[r(0x9c)] = s(0x9a), g[r(0xab)] = s(0x95), g[s(0x9f)] = s(0xa7) + r(0x99);
        const h = g, i = {};
        i[r(0xa9)] = sequelize_1[r(0xb1)][r(0xa2)], i[r(0xaa) + 'ue'] = ![];
        const j = {};
        return j[s(0xa9)] = sequelize_1[s(0xb1)][s(0xa2)], j[r(0xaa) + 'ue'] = ![], Promise[s(0x9b)]([
            f[s(0x97)](h[s(0x9c)], h[s(0xab)], i),
            f[s(0x97)](h[s(0x9c)], h[s(0x9f)], j)
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0xa6)] = u(0x9a), e[t(0xa1)] = t(0x95), e[u(0x94)] = t(0xa7) + u(0x99);
        const f = e;
        return Promise[u(0x9b)]([
            d[t(0x9e) + 'mn'](f[u(0xa6)], f[t(0xa1)]),
            d[t(0x9e) + 'mn'](f[t(0xa6)], f[u(0x94)])
        ]);
    }
};