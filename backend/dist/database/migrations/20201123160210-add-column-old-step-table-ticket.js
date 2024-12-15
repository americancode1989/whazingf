'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x458 + -0x115d + 0xa3 * 0x25);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1f0)) / (-0x5 * 0x21e + -0x12b9 + 0x1d50) * (-parseInt(k(0x1f5)) / (-0xe6e + -0x402 + 0x1272)) + parseInt(k(0x1de)) / (-0x1dfc + 0x1 * 0x5ab + 0x1854) + parseInt(j(0x1db)) / (-0x2 * 0x1367 + 0x1076 + 0x165c) + parseInt(j(0x1eb)) / (-0x1fcb * 0x1 + 0xe38 + 0x1198) * (parseInt(k(0x1df)) / (-0x1 * 0x18d1 + 0x1c5 * 0x11 + -0x16 * 0x3d)) + parseInt(j(0x1e5)) / (0x9c + -0x5fb * 0x1 + 0x2 * 0x2b3) * (parseInt(j(0x1e0)) / (0x5ad + 0x1 * -0xa27 + -0x2 * -0x241)) + parseInt(j(0x1dd)) / (-0x12df + -0x1e35 + 0x311d) + -parseInt(k(0x1ea)) / (-0x1d37 + 0x2 * -0x935 + -0x1 * -0x2fab);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3083b + 0xc85b3 + 0x1 * -0x23708));
function a() {
    const r = [
        'hEJRe',
        'oReplyId',
        '__esModule',
        'jvyLw',
        '39428SqLxMH',
        'sequelize',
        'addColumn',
        'INTEGER',
        'defineProp',
        'mHIeS',
        'removeColu',
        'Tickets',
        '2960460zaobaP',
        'CASCADE',
        '8280126oIyZdw',
        '1019472roGkaT',
        '626580PGqORA',
        '112ckcVqV',
        'SET\x20NULL',
        'value',
        'mpzYx',
        'lznNe',
        '346409AnTWmY',
        'oldStepAut',
        'erty',
        'exports',
        'all',
        '15771450bsqsJZ',
        '10KoPgZa',
        'BkrKQ',
        'DataTypes',
        'VIyfp',
        'StepsReply',
        '43tbNljF'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x1e2)] = !![], Object[m(0x1f9) + l(0x1e7)](exports, m(0x1f3), i);
const sequelize_1 = require(l(0x1f6));
module[m(0x1e8)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x1e3)] = o(0x1da), e[o(0x1fa)] = n(0x1e6) + n(0x1f2), e[o(0x1e4)] = n(0x1ef), e[o(0x1ee)] = o(0x1dc), e[n(0x1f4)] = n(0x1e1);
        const f = e;
        return Promise[o(0x1e9)]([d[n(0x1f7)](f[n(0x1e3)], f[o(0x1fa)], {
                'type': sequelize_1[o(0x1ed)][o(0x1f8)],
                'references': {
                    'model': f[n(0x1e4)],
                    'key': 'id'
                },
                'onUpdate': f[o(0x1ee)],
                'onDelete': f[o(0x1f4)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = l, q = m, e = {};
        e[p(0x1f1)] = q(0x1da), e[q(0x1ec)] = q(0x1e6) + q(0x1f2);
        const f = e;
        return d[p(0x1fb) + 'mn'](f[p(0x1f1)], f[q(0x1ec)]);
    }
};