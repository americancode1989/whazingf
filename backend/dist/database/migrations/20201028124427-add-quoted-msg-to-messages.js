'use strict';
const k = b, l = b;
function a() {
    const q = [
        'GnuRL',
        'rrFTG',
        'removeColu',
        '40iFwJfW',
        '909BKyXkm',
        'iPNpk',
        'Messages',
        'defineProp',
        '580132sXSzzT',
        '3301485EunvXW',
        'value',
        '164vvpVgk',
        '5692908MAJApX',
        'STRING',
        'SET\x20NULL',
        'erty',
        'exports',
        'BtUPQ',
        '6446IPLahA',
        'jGCHi',
        '7492509OFVQPc',
        '933755dWOhiY',
        '__esModule',
        'quotedMsgI',
        'CASCADE',
        'sequelize',
        '107670pCoQqJ',
        'addColumn',
        'unegl',
        'DataTypes',
        '10WVLpNC'
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
            const f = parseInt(i(0x1d5)) / (0x5 * -0x503 + 0x1b04 + -0x1f4) + -parseInt(j(0x1d2)) / (-0x1 * 0xa7c + -0x69f * 0x1 + -0x111d * -0x1) * (parseInt(i(0x1c4)) / (0x30 * 0x8d + 0x72a + 0x1 * -0x2197)) + parseInt(i(0x1cb)) / (0xccd + 0x1 * -0x1153 + -0x48a * -0x1) * (parseInt(i(0x1da)) / (0x1e9f + -0x1b76 + -0x324)) + -parseInt(j(0x1cc)) / (-0x2 * 0x658 + -0x3 * 0xb91 + 0x2f69) + -parseInt(i(0x1c8)) / (-0x29e + -0x1865 + 0x1b0a) * (parseInt(j(0x1e2)) / (0x1087 + -0x25 * 0x7f + -0x77 * -0x4)) + parseInt(j(0x1d4)) / (-0xe5e + 0x232e + 0x14c7 * -0x1) * (parseInt(j(0x1de)) / (-0x90b + 0x3 * 0x7a7 + 0x8 * -0x1bc)) + parseInt(j(0x1c9)) / (0x79d + -0x3 * -0x59 + -0x2df * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x92ab9 + 0x8a503 + 0x9d2a4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2359 * -0x1 + -0xc75 + -0x1520);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1ca)] = !![], Object[l(0x1c7) + l(0x1cf)](exports, k(0x1d6), g);
const sequelize_1 = require(k(0x1d9));
module[k(0x1d0)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1e0)] = m(0x1c6), e[n(0x1d3)] = n(0x1d7) + 'd', e[n(0x1c5)] = n(0x1d8), e[m(0x1dc)] = m(0x1ce);
        const f = e;
        return d[m(0x1db)](f[n(0x1e0)], f[m(0x1d3)], {
            'type': sequelize_1[n(0x1dd)][m(0x1cd)],
            'references': {
                'model': f[n(0x1e0)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1c5)],
            'onDelete': f[n(0x1dc)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1df)] = p(0x1c6), e[p(0x1d1)] = p(0x1d7) + 'd';
        const f = e;
        return d[o(0x1e1) + 'mn'](f[p(0x1df)], f[o(0x1d1)]);
    }
};