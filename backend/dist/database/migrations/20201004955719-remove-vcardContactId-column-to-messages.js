'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x115)) / (-0x14b5 + -0x68f + 0xd * 0x219) * (parseInt(i(0x111)) / (0x1 * 0x1201 + 0x87e * -0x1 + -0x981)) + -parseInt(j(0x113)) / (0xf59 + 0xf0c + -0x1 * 0x1e62) + parseInt(j(0x11f)) / (-0x47 * -0x33 + -0x7dc + -0x645) * (parseInt(i(0x119)) / (-0x9bc + -0x1 * -0x1f0f + -0x154e)) + -parseInt(j(0x117)) / (-0xf7f + -0xf8b + 0x1f10) + -parseInt(i(0x11c)) / (0x295 * 0xb + -0xe58 + -0xe08 * 0x1) + -parseInt(i(0x10e)) / (0x1a * 0xd4 + -0x2619 + -0x7 * -0x25f) * (-parseInt(j(0x108)) / (0x75d + -0x2648 + 0x1ef4)) + parseInt(j(0x112)) / (0x1f7 * 0xe + 0x1 * 0x2651 + -0x41c9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x9b869 + 0x6a61 * -0x2b + 0x94d * 0x42d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1cd2 + -0xbd4 + -0x1 * -0x29aa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'sequelize',
        'DataTypes',
        'defineProp',
        'Ovpgo',
        '158416SkpzMg',
        '__esModule',
        'Messages',
        '6ndTAgs',
        '2880140viHQKk',
        '1219026zQgSQb',
        'LADHL',
        '329087osxGfp',
        'ctId',
        '2064576wYnzCh',
        'vcardConta',
        '310llxQrb',
        'INTEGER',
        'exports',
        '8075172DtcQCW',
        'erty',
        'removeColu',
        '67688oCdduQ',
        'akBZw',
        'hjuYG',
        'PHnCU',
        'Contacts',
        'addColumn',
        'sAuEQ',
        'CASCADE',
        '144fWoLDN',
        'value'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x109)] = !![], Object[l(0x10c) + l(0x11d)](exports, k(0x10f), g);
const sequelize_1 = require(k(0x10a));
module[l(0x11b)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x121)] = n(0x110), e[m(0x114)] = m(0x118) + m(0x116);
        const f = e;
        return d[m(0x11e) + 'mn'](f[m(0x121)], f[n(0x114)]);
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x10d)] = o(0x110), e[o(0x106)] = o(0x118) + p(0x116), e[o(0x120)] = o(0x104), e[p(0x122)] = o(0x107);
        const f = e;
        return d[o(0x105)](f[p(0x10d)], f[o(0x106)], {
            'type': sequelize_1[o(0x10b)][o(0x11a)],
            'references': {
                'model': f[p(0x120)],
                'key': 'id'
            },
            'onUpdate': f[o(0x122)],
            'onDelete': f[p(0x122)]
        });
    }
};