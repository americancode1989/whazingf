'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xed)) / (-0x365 * 0xb + -0x23f + -0x2797 * -0x1) + parseInt(j(0xe9)) / (0x1835 + -0x1e6d * -0x1 + -0x36a0) * (parseInt(j(0xe8)) / (0x1 * 0xb1b + -0xab * 0x7 + 0x1f * -0x35)) + parseInt(j(0xfa)) / (-0x3ae * -0x7 + 0x17d8 + -0x1 * 0x3196) + parseInt(i(0xe0)) / (0x2a5 + 0x260f * -0x1 + -0x1 * -0x236f) + parseInt(j(0xdc)) / (0x25f6 + -0x922 + -0x99a * 0x3) * (parseInt(i(0xf1)) / (0x33 * -0x9 + -0x210b + 0x4b * 0x77)) + -parseInt(j(0xf2)) / (-0x3fb * 0x3 + 0x1 * -0xbcf + 0x17c8) * (-parseInt(i(0xdd)) / (0x19 * -0xe4 + 0x1 * 0x24c3 + -0xe76)) + -parseInt(i(0xdf)) / (0x193 * -0xb + 0x8ba + -0x2f * -0x2f) * (parseInt(i(0xf7)) / (-0x1275 + 0x263f + -0xf * 0x151));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x975a * 0x2 + -0x97de + 0x26 * 0x2299));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15 * -0x113 + -0x12bb * -0x2 + -0x21 * 0x6d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'value',
        'JtUYF',
        'eliEa',
        'CuEOH',
        'SqBfg',
        'sequelize',
        '93486Uxfwxk',
        '14dRzVpD',
        'addColumn',
        'removeColu',
        'erty',
        '167010oFiLwo',
        'SET\x20NULL',
        'defineProp',
        'PWFzN',
        '166285umhUfa',
        '16DNcKPS',
        'INTEGER',
        'exports',
        'xLBvN',
        'XacRE',
        '8311413ZVTkeQ',
        'ChatFlow',
        'chatFlowId',
        '1684336pnLUnB',
        '__esModule',
        'DataTypes',
        '30dUNCaj',
        '462420pkHiNv',
        'CASCADE',
        '10RSjLNq',
        '1410180rTfrtI',
        'Whatsapps'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xe2)] = !![], Object[l(0xef) + k(0xec)](exports, k(0xda), g);
const sequelize_1 = require(l(0xe7));
module[k(0xf4)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xf5)] = m(0xe1), e[m(0xe6)] = m(0xf9), e[m(0xe3)] = n(0xf8), e[n(0xf6)] = n(0xde), e[m(0xe4)] = m(0xee);
        const f = e;
        return d[m(0xea)](f[n(0xf5)], f[n(0xe6)], {
            'type': sequelize_1[n(0xdb)][m(0xf3)],
            'references': {
                'model': f[m(0xe3)],
                'key': 'id'
            },
            'onUpdate': f[m(0xf6)],
            'onDelete': f[n(0xe4)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xe5)] = o(0xe1), e[p(0xf0)] = p(0xf9);
        const f = e;
        return d[o(0xeb) + 'mn'](f[p(0xe5)], f[p(0xf0)]);
    }
};