'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x58b * -0x1 + -0x1d6b * 0x1 + 0x2373);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'Queues',
        'PymAP',
        '638388ZtVGTU',
        '46218DTkXzG',
        '19dDQCSP',
        'fPcWp',
        'jRUSP',
        'SET\x20NULL',
        '2028xOOXOx',
        'IvSkM',
        'queueId',
        'ZgkVh',
        'removeColu',
        'exports',
        'Whatsapps',
        '__esModule',
        'erty',
        '8180rkJAbH',
        'addColumn',
        'INTEGER',
        'DataTypes',
        '4771976izPmoe',
        '1629BgOhpO',
        'sQwyV',
        'CASCADE',
        'UWjoR',
        '7AscMgt',
        'sequelize',
        '240FpcAyD',
        '11429ynBHzX',
        '40408cuAxll',
        '8YaEqPt',
        'value',
        'defineProp',
        '13393874ZBWrMo'
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
            const f = parseInt(i(0x88)) / (0x9b4 + -0x109c + 0x6e9) * (-parseInt(j(0x7f)) / (0x901 * 0x1 + 0xa7d * 0x3 + -0x2876)) + -parseInt(j(0x86)) / (0x15 * -0x28 + -0x15c0 + 0x3 * 0x859) * (parseInt(j(0x80)) / (0x229e + 0x1c39 + -0x3ed3)) + -parseInt(i(0x7d)) / (0x515 + -0x591 * -0x2 + -0x1032) * (-parseInt(i(0x87)) / (0xcf7 + -0x1305 + -0x4 * -0x185)) + -parseInt(j(0x9e)) / (0x110 * 0x19 + 0x1601 + -0x817 * 0x6) * (parseInt(j(0x99)) / (0x2 * 0x11c2 + -0x752 * 0x3 + -0x6 * 0x241)) + -parseInt(i(0x9a)) / (0x2066 + 0x7 * -0x49d + -0x12) * (-parseInt(j(0x95)) / (0x1c74 * 0x1 + -0x29a + -0x19d0)) + -parseInt(j(0x7e)) / (0x1 * 0xb5 + -0x1 * -0x1732 + -0x1fd * 0xc) * (-parseInt(j(0x8c)) / (-0x1585 + -0x248e * 0x1 + 0x1 * 0x3a1f)) + parseInt(j(0x83)) / (-0x25b8 + 0xe2c + -0x1799 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x704a7 + 0x1cec5 + 0xa0f00));
const g = {};
g[k(0x81)] = !![], Object[l(0x82) + l(0x94)](exports, l(0x93), g);
const sequelize_1 = require(k(0x9f));
module[k(0x91)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x8f)] = n(0x92), e[m(0x9b)] = m(0x8e), e[n(0x89)] = n(0x84), e[m(0x9d)] = m(0x9c), e[n(0x8a)] = m(0x8b);
        const f = e;
        return d[n(0x96)](f[m(0x8f)], f[n(0x9b)], {
            'type': sequelize_1[n(0x98)][m(0x97)],
            'references': {
                'model': f[n(0x89)],
                'key': 'id'
            },
            'onUpdate': f[m(0x9d)],
            'onDelete': f[m(0x8a)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x85)] = o(0x92), e[o(0x8d)] = p(0x8e);
        const f = e;
        return d[o(0x90) + 'mn'](f[o(0x85)], f[p(0x8d)]);
    }
};