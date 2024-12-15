'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x1a4)) / (0x885 * -0x2 + 0x1 * 0xa03 + 0x708) + parseInt(j(0x1ae)) / (-0x2 * -0x12e2 + 0xda0 * 0x2 + -0x4102) * (-parseInt(j(0x1af)) / (-0x2268 + 0x144 + 0x29 * 0xcf)) + parseInt(j(0x194)) / (0x568 + -0x243 * 0x4 + -0x8 * -0x75) * (-parseInt(k(0x1ac)) / (-0x25 * 0x88 + 0x1635 + -0x288 * 0x1)) + -parseInt(j(0x19e)) / (0xd * -0x1d + 0x9 * -0x359 + 0x1fa0) + parseInt(j(0x1ad)) / (-0x1cc4 + -0x2f0 + 0x1fbb) * (-parseInt(k(0x1a5)) / (-0x1a3a + 0x1 * -0x1ca2 + 0x36e4 * 0x1)) + -parseInt(j(0x1a8)) / (-0x95 + 0x806 + -0x768) * (-parseInt(j(0x195)) / (0xd9 * -0x1d + -0x1 * -0x243 + 0x2 * 0xb2e)) + parseInt(j(0x1aa)) / (0x1 * -0x26a9 + 0x3fe + -0x2 * -0x115b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x95da0 + 0x66856 + -0x11d30 * 0x9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x206 * 0xc + -0x8f5 + -0x2 * -0x1168);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x1a2)] = !![], Object[l(0x19c) + l(0x19b)](exports, m(0x19d), i);
const sequelize_1 = require(m(0x1b0));
function a() {
    const r = [
        'ELfSp',
        '18668qlsnva',
        '5006770auPZCx',
        'exports',
        'Users',
        'removeColu',
        'DataTypes',
        'STRING',
        'erty',
        'defineProp',
        '__esModule',
        '845892DlMxPV',
        'addColumn',
        'offline',
        'ngOIF',
        'value',
        'status',
        '630720TjurXe',
        '22824eelwFW',
        'GSQzp',
        'iUDmN',
        '9nMhtJZ',
        'FsDJW',
        '16979248kMPXsE',
        'all',
        '145WKSGEu',
        '1701qMDElI',
        '390jXSpZK',
        '1035ObdfYy',
        'sequelize'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0x196)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0x1a1)] = o(0x197), e[n(0x1a7)] = n(0x1a3), e[o(0x1a9)] = o(0x1a0);
        const f = e;
        return Promise[n(0x1ab)]([d[n(0x19f)](f[o(0x1a1)], f[n(0x1a7)], {
                'type': sequelize_1[n(0x199)][o(0x19a)],
                'allowNull': ![],
                'defaultValue': f[o(0x1a9)]
            })]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0x1a6)] = q(0x197), e[q(0x193)] = p(0x1a3);
        const f = e;
        return Promise[p(0x1ab)]([d[q(0x198) + 'mn'](f[q(0x1a6)], f[q(0x193)])]);
    }
};