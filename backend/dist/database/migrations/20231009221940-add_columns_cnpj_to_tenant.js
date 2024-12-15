'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x9c)) / (0x2 * -0x303 + -0x1504 + 0x1b0b) + -parseInt(k(0xa0)) / (-0xee3 + -0x10 * 0x22b + -0x3 * -0x1087) + -parseInt(l(0xa4)) / (-0x1 * 0x1957 + -0x1 * -0x1159 + 0x801) + parseInt(k(0xae)) / (0xac * 0x23 + -0x1012 * -0x2 + -0x37a4) * (-parseInt(l(0xa8)) / (-0x2 * -0xbf3 + 0xff4 + -0x27d5)) + parseInt(k(0xa3)) / (-0x1 * -0xef5 + -0x89a + -0x1 * 0x655) * (-parseInt(l(0xb0)) / (-0x25a3 + -0x20a5 * -0x1 + 0x505)) + -parseInt(l(0xa6)) / (0x1e * 0x107 + 0x26a3 + 0x7 * -0x9eb) + parseInt(l(0x9e)) / (-0x1957 + -0x13d5 + 0x2d35);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x13ba0e + -0x6 * -0x22fb3 + 0x12a * -0x132c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x59 * 0xe + 0x26e * 0x8 + 0x121 * -0x15);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[m(0xb3)] = !![], Object[n(0x9f) + m(0xb5)](exports, n(0x9b), c);
function a() {
    const s = [
        'removeColu',
        '9723064BfWNWK',
        'qyMnd',
        '1670ZJmEOb',
        'ble',
        'type',
        'addColumn',
        'sequelize',
        'Tenants',
        '4508FAOyDq',
        'STRING',
        '35THPzni',
        'cIyOC',
        'allowNull',
        'value',
        'cnpj',
        'erty',
        'Bpzky',
        'describeTa',
        '__esModule',
        '1097577vonckd',
        'exports',
        '18158481CNZIzK',
        'defineProp',
        '396520CpJUMG',
        'DataTypes',
        'RRPsd',
        '124104TTfpgF',
        '1595331nikOQo'
    ];
    a = function () {
        return s;
    };
    return a();
}
const sequelize_1 = require(m(0xac));
module[m(0x9d)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x99)] = p(0xad), g[p(0xb1)] = o(0xb4);
        const h = g, i = await f[o(0x9a) + p(0xa9)](h[p(0x99)]);
        if (!i || !i[h[p(0xb1)]]) {
            const j = {};
            j[o(0xaa)] = sequelize_1[o(0xa1)][p(0xaf)], j[o(0xb2)] = ![], await f[o(0xab)](h[o(0x99)], h[p(0xb1)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0xa2)] = q(0xad), f[r(0xa7)] = q(0xb4);
        const g = f;
        await e[q(0xa5) + 'mn'](g[q(0xa2)], g[q(0xa7)]);
    }
};