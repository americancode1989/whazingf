'use strict';
function a() {
    const t = [
        'changeColu',
        '_uuid()',
        'value',
        'all',
        '8SkKPjL',
        '2594485ohtWLk',
        '12EzcGjY',
        'CkcZm',
        '302492KdeqEJ',
        'sequelize',
        'exports',
        'DataTypes',
        '4434514RQGEEo',
        '1143196vwtqSR',
        'erty',
        'tPMcB',
        '40ViWjpA',
        'Sequelize',
        'literal',
        'bDCOi',
        '6OmqCdz',
        '1734964LHnywp',
        '8435430GhVEBW',
        'aUTBO',
        'ApiConfigs',
        'gen_random',
        'defineProp',
        '1202334LPjMxX',
        '__esModule',
        'UUID'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x160)) / (0x20 * 0x100 + -0x31 * 0x1b + -0x194 * 0x11) + -parseInt(m(0x15b)) / (0x2 * 0xd4b + 0x1d70 + -0x3804) * (parseInt(m(0x167)) / (0x51 * 0x17 + 0x5 * -0x1a6 + 0x32 * 0x5)) + -parseInt(l(0x159)) / (-0x24e0 + 0x261f + -0x13b) * (-parseInt(m(0x158)) / (0x2 * -0x3ce + -0xadf * 0x3 + 0x283e * 0x1)) + -parseInt(m(0x150)) / (0x1 * 0xff5 + -0x9a7 * -0x4 + -0x368b * 0x1) + parseInt(l(0x15f)) / (0xb89 * 0x2 + -0x1 * -0x1bf6 + -0x1 * 0x3301) * (parseInt(m(0x157)) / (-0x2d0 + 0x959 * 0x1 + 0x1 * -0x681)) + parseInt(m(0x14b)) / (0xac2 + 0xb03 + -0x15bc) + -parseInt(l(0x163)) / (0x1a2e * 0x1 + -0x327 * -0xb + -0x3cd1 * 0x1) * (parseInt(m(0x168)) / (-0x1b16 + -0x7dc + -0x22fd * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43c0c * -0x1 + -0xe3476 + 0x16f2a4));
const k = {};
k[n(0x155)] = !![], Object[o(0x14f) + o(0x161)](exports, n(0x151), k);
const sequelize_1 = require(n(0x15c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x19d9 + -0x2049 + 0x1 * 0x3b6d);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[o(0x15d)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x162)] = q(0x14d), e[q(0x15a)] = q(0x14e) + p(0x154);
        const f = e;
        return Promise[q(0x156)]([d[p(0x153) + 'mn'](f[p(0x162)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x15e)][p(0x152)],
                'defaultValue': sequelize_1[p(0x164)][q(0x165)](f[q(0x15a)])
            })]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x14c)] = r(0x14d), e[s(0x166)] = s(0x14e) + r(0x154);
        const f = e;
        return Promise[s(0x156)]([d[r(0x153) + 'mn'](f[s(0x14c)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x15e)][r(0x152)],
                'defaultValue': sequelize_1[s(0x164)][r(0x165)](f[r(0x166)])
            })]);
    }
};