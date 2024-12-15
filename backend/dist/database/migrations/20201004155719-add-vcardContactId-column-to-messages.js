'use strict';
const k = b, l = b;
function a() {
    const q = [
        'addColumn',
        'erty',
        'Contacts',
        '2Laylpi',
        'bTsLJ',
        '13796770PmWGCj',
        'INTEGER',
        'removeColu',
        'vcardConta',
        'CeuSc',
        '3265480gKTCvk',
        '3NPIBXy',
        '3143511IoJbza',
        'odzLH',
        '700287cefPsd',
        'sequelize',
        '1407055bduDUd',
        '220229rhsgdu',
        'ctId',
        'defineProp',
        'DataTypes',
        'lXVUz',
        'Messages',
        'NMQbo',
        '__esModule',
        '12OJyzIc',
        'exports',
        'value',
        'IKDTA',
        '462412iFpwNS',
        'CASCADE'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x13e)) / (-0x1b43 + -0x20a1 + 0x39 * 0x10d) * (-parseInt(j(0x14f)) / (-0x2181 + -0x11 * -0x95 + 0x179e * 0x1)) + parseInt(j(0x138)) / (0x897 * -0x4 + 0x1fe1 + 0x27e) * (-parseInt(i(0x14a)) / (0x5 * 0x141 + 0x4f * 0x52 + 0x3 * -0xa85)) + -parseInt(j(0x13d)) / (0x18c3 * 0x1 + -0x192a * 0x1 + -0x4 * -0x1b) + -parseInt(j(0x146)) / (0x1dd2 + -0x169 * 0x1 + -0x1c63) * (parseInt(j(0x13b)) / (-0x12ee + 0x551 + 0xda4)) + -parseInt(i(0x137)) / (0xd5d + -0x1 * -0x2250 + -0x2fa5) + -parseInt(i(0x139)) / (-0x1 * -0x203b + -0x4 * -0x3e5 + -0x17e3 * 0x2) + parseInt(j(0x151)) / (-0x1 * -0xc12 + -0x203e + -0xc7 * -0x1a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x129 * 0x325 + 0x5c * 0x844 + 0x1 * 0x46bdf));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9a5 * 0x3 + -0xbcd + -0x3fb * 0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x148)] = !![], Object[l(0x140) + l(0x14d)](exports, k(0x145), g);
const sequelize_1 = require(k(0x13c));
module[l(0x147)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x142)] = m(0x143), e[n(0x136)] = n(0x154) + n(0x13f), e[n(0x150)] = n(0x14e), e[m(0x13a)] = n(0x14b);
        const f = e;
        return d[n(0x14c)](f[n(0x142)], f[m(0x136)], {
            'type': sequelize_1[m(0x141)][n(0x152)],
            'references': {
                'model': f[m(0x150)],
                'key': 'id'
            },
            'onUpdate': f[m(0x13a)],
            'onDelete': f[n(0x13a)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x149)] = o(0x143), e[o(0x144)] = p(0x154) + o(0x13f);
        const f = e;
        return d[p(0x153) + 'mn'](f[p(0x149)], f[p(0x144)]);
    }
};