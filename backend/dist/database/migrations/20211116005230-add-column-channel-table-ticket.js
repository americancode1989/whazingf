'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xd9)) / (0xeab + -0x3d + -0xe6d * 0x1) + parseInt(j(0xd1)) / (0x11d3 * -0x1 + 0x1 * 0x1859 + 0x2 * -0x342) * (parseInt(j(0xdf)) / (0x8 * 0x1a7 + -0x2 * -0x11cf + -0x1af * 0x1d)) + -parseInt(j(0xdb)) / (-0x6f7 + -0x3 * 0x4f8 + 0x15e3) + -parseInt(k(0xda)) / (-0x17 * -0x192 + -0xeef + -0x70e * 0x3) * (-parseInt(k(0xc7)) / (0x1840 + 0x328 * -0x4 + -0xb9a)) + -parseInt(j(0xd6)) / (-0xbb8 + 0x5 * 0x174 + 0x47b) + parseInt(j(0xdd)) / (0x5 * -0x2b9 + 0x176f + -0x9ca * 0x1) * (parseInt(k(0xdc)) / (-0xabe + 0x776 * 0x5 + -0x1a87 * 0x1)) + -parseInt(k(0xc8)) / (0x17eb + -0x58b * -0x2 + -0x22f7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x46e63 + -0x426be + -0x1a * -0x6cb3));
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x487 + 0x349 * -0x1 + -0x2dd * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
i[l(0xcf)] = !![], Object[m(0xde) + m(0xe1)](exports, l(0xd3), i);
function a() {
    const r = [
        '__esModule',
        'sequelize',
        'whatsapp',
        '858025NclMfo',
        'CdYPu',
        'DataTypes',
        '165644vAdqxc',
        '230995heyDef',
        '876172XNLBbo',
        '2808639aJvyGr',
        '8RDOnBi',
        'defineProp',
        '414264serPdb',
        'all',
        'erty',
        'GgFHF',
        'exports',
        '30bBLqbo',
        '3441430BWJoNS',
        'STRING',
        'iXfsY',
        'addColumn',
        'channel',
        'Tickets',
        'edodW',
        'value',
        'PXAqI',
        '2SDdbdu',
        'removeColu'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(m(0xd4));
module[m(0xe3)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0xe2)] = o(0xcd), e[o(0xd7)] = o(0xcc), e[o(0xd0)] = o(0xd5);
        const f = e;
        return Promise[n(0xe0)]([d[n(0xcb)](f[n(0xe2)], f[o(0xd7)], {
                'type': sequelize_1[o(0xd8)][n(0xc9)],
                'allowNull': !![],
                'defaultValue': f[n(0xd0)]
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xce)] = p(0xcd), e[q(0xca)] = p(0xcc);
        const f = e;
        return Promise[p(0xe0)]([d[p(0xd2) + 'mn'](f[q(0xce)], f[p(0xca)])]);
    }
};