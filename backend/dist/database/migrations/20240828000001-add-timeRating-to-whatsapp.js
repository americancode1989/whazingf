'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x199)) / (-0xd6 * 0x2a + 0x23a7 + -0x8a) + parseInt(k(0x194)) / (0x32 * -0x2 + 0xd2e + -0xcc8) * (-parseInt(l(0x19d)) / (-0x76 * 0x4e + -0xcc5 + 0x30bc)) + parseInt(l(0x191)) / (-0x3dc + -0xa * 0x233 + 0x19de) * (parseInt(l(0x1a9)) / (0xc4 * -0x2f + 0xe * 0x281 + 0xf3)) + parseInt(k(0x18e)) / (0xc21 + -0x2 * -0xdbb + -0x1 * 0x2791) * (-parseInt(l(0x192)) / (-0x2171 + -0x1ef7 * 0x1 + 0x406f)) + parseInt(l(0x1aa)) / (-0x1f2b + 0x782 + -0x5 * -0x4bd) + -parseInt(k(0x198)) / (-0x6 * 0x59b + 0xd89 + 0x6 * 0x35b) * (-parseInt(l(0x18f)) / (0x1c5 * 0x2 + 0x5cd + -0x94d * 0x1)) + parseInt(k(0x1ac)) / (-0x1c57 + -0x2 * 0x644 + -0x28ea * -0x1);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x6813d + -0x2aba * -0x2f + -0x3e8a1 * -0x3));
const c = {};
c[m(0x1a2)] = !![], Object[n(0x1ab) + m(0x195)](exports, m(0x19f), c);
const sequelize_1 = require(m(0x1a1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9ec + -0xb17 + -0x6 * -0x74);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'timeRating',
        '282FBwYPt',
        '301270XbJGDK',
        'nuoUM',
        '24XjOopF',
        '100247zYITfR',
        'defaultVal',
        '206NVYMGj',
        'erty',
        'type',
        'INTEGER',
        '36tBktfo',
        '110763xFSiCF',
        'removeColu',
        'addColumn',
        'describeTa',
        '41967rUOUTh',
        'exports',
        '__esModule',
        'ble',
        'sequelize',
        'value',
        'Whatsapps',
        'allowNull',
        'mpVYX',
        'kOyZh',
        'DataTypes',
        'dRxeB',
        '1173175GBRiCF',
        '6397216LAwRaN',
        'defineProp',
        '8283165bMdTtF'
    ];
    a = function () {
        return s;
    };
    return a();
}
module[m(0x19e)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x190)] = o(0x1a3), g[o(0x1a6)] = p(0x18d);
        const h = g, i = await f[p(0x19c) + o(0x1a0)](h[p(0x190)]);
        if (!i || !i[h[o(0x1a6)]]) {
            const j = {};
            j[p(0x196)] = sequelize_1[o(0x1a7)][o(0x197)], j[p(0x193) + 'ue'] = 0x5, j[p(0x1a4)] = !![], await f[p(0x19b)](h[o(0x190)], h[o(0x1a6)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x1a5)] = q(0x1a3), f[q(0x1a8)] = r(0x18d);
        const g = f;
        await e[q(0x19a) + 'mn'](g[q(0x1a5)], g[r(0x1a8)]);
    }
};