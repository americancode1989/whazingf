'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x46 * -0x64 + -0x1b2d + 0x1c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1ee)) / (0x12f * 0x5 + -0x207e + 0xe * 0x1e6) + -parseInt(i(0x1fa)) / (0x135 * 0xc + 0x878 + -0x59 * 0x42) + parseInt(j(0x1fc)) / (-0x1 * 0xa0b + -0x37d * -0xa + 0x7 * -0x38c) + parseInt(j(0x207)) / (-0x1e8e + -0x1 * -0x236e + -0x4dc) * (parseInt(j(0x204)) / (-0x236e + -0x1779 + 0x3aec)) + parseInt(j(0x1fe)) / (-0x7cc + -0x146e + -0xe2 * -0x20) * (-parseInt(i(0x201)) / (0x226b + 0x25b9 + -0x1 * 0x481d)) + -parseInt(j(0x206)) / (-0x1 * -0x2387 + -0x71 * -0x4f + -0x465e * 0x1) + -parseInt(j(0x1f3)) / (0x24a8 + -0x1ce7 + -0x7b8) * (-parseInt(j(0x20d)) / (0xb * -0x18e + -0x59 * -0x6a + -0x13b6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa32b * -0x4 + -0x1aca2a + 0x2bc189));
const g = {};
g[k(0x1ff)] = !![], Object[l(0x1f8) + l(0x1ed)](exports, k(0x200), g);
const sequelize_1 = require(l(0x20a));
function a() {
    const q = [
        'value',
        '__esModule',
        '40607pZywMq',
        'INTEGER',
        'zIJkg',
        '5MtUpGs',
        'StepsReply',
        '3808824FlXiHd',
        '5474144KsKFJy',
        'oReplyId',
        'removeColu',
        'sequelize',
        'vqlVN',
        'all',
        '3951990bmsBXu',
        'rLHoy',
        'erty',
        '633878XJrjBT',
        'JxwCi',
        'CASCADE',
        'exports',
        'addColumn',
        '36TNLSgX',
        'DataTypes',
        'UhYBL',
        'SET\x20NULL',
        'oldStepAut',
        'defineProp',
        'jYkyB',
        '2718164vSzjNY',
        'Tickets',
        '427071yNVIXw',
        'yeaXn',
        '978swJsLP'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0x1f1)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1f5)] = n(0x1fb), e[n(0x1f9)] = m(0x1f7) + n(0x208);
        const f = e;
        return Promise[m(0x20c)]([d[n(0x209) + 'mn'](f[n(0x1f5)], f[m(0x1f9)])]);
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x20b)] = p(0x1fb), e[p(0x203)] = p(0x1f7) + p(0x208), e[p(0x1ef)] = p(0x205), e[p(0x1ec)] = p(0x1f0), e[p(0x1fd)] = p(0x1f6);
        const f = e;
        return d[o(0x1f2)](f[o(0x20b)], f[o(0x203)], {
            'type': sequelize_1[o(0x1f4)][p(0x202)],
            'references': {
                'model': f[p(0x1ef)],
                'key': 'id'
            },
            'onUpdate': f[o(0x1ec)],
            'onDelete': f[o(0x1fd)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};