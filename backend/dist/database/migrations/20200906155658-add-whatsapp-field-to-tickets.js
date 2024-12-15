'use strict';
function a() {
    const q = [
        '961112ZmRiZu',
        'defineProp',
        'DataTypes',
        'Whatsapps',
        'cPTmZ',
        'exports',
        '1636724wAdLhN',
        '110KSKKVh',
        '227340XNRTSQ',
        '163937NgoQZT',
        '3245373cVgdnB',
        'addColumn',
        '2500yhnVXp',
        'SET\x20NULL',
        'sequelize',
        'INTEGER',
        'oLDAZ',
        '38952RLOwei',
        'whatsappId',
        '6993rZAMki',
        'Tickets',
        'erty',
        '8008VcefCt',
        'zLFLr',
        '__esModule',
        'qPawB',
        'FRGsP',
        'jpYHQ',
        'removeColu',
        'yqYEH',
        'CASCADE',
        'value'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa7e + -0x2b3 * 0x2 + 0x1064);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x89)) / (0xc4d + 0x14af + -0x20fb) + parseInt(j(0x86)) / (-0xaae + -0x9f + -0xf * -0xc1) + -parseInt(i(0x8a)) / (-0x19 * 0xfb + 0x1e75 + -0x5ef) + -parseInt(j(0x80)) / (0x2668 + -0x69 + -0x25fb) + parseInt(j(0x87)) / (0x149e + -0x79 * -0x20 + -0x23b9) * (-parseInt(i(0x88)) / (-0x20bb + 0x39 * 0x3f + 0x12ba)) + -parseInt(i(0x93)) / (0x150 + 0x1 * 0xadb + -0x40c * 0x3) * (-parseInt(i(0x96)) / (0xd * 0x1d + 0x1406 + -0x1577)) + parseInt(i(0x91)) / (-0x11 * 0x5b + -0x1204 + 0x1818) * (parseInt(j(0x8c)) / (0x1 * 0x1eef + 0x1cc + -0x20b1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x8f7c1 + -0xf227a + -0x3 * -0xafcf6));
const g = {};
g[k(0x9f)] = !![], Object[l(0x81) + l(0x95)](exports, l(0x98), g);
const sequelize_1 = require(l(0x8e));
module[l(0x85)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x9b)] = m(0x94), e[m(0x84)] = n(0x92), e[m(0x9d)] = m(0x83), e[n(0x9a)] = m(0x9e), e[n(0x90)] = n(0x8d);
        const f = e;
        return d[m(0x8b)](f[m(0x9b)], f[m(0x84)], {
            'type': sequelize_1[n(0x82)][m(0x8f)],
            'references': {
                'model': f[n(0x9d)],
                'key': 'id'
            },
            'onUpdate': f[m(0x9a)],
            'onDelete': f[m(0x90)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x97)] = p(0x94), e[p(0x99)] = o(0x92);
        const f = e;
        return d[p(0x9c) + 'mn'](f[p(0x97)], f[p(0x99)]);
    }
};