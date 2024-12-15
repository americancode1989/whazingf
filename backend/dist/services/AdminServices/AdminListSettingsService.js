'use strict';
const n = b, o = b;
function a() {
    const s = [
        'default',
        '623446UUUsPk',
        '../../mode',
        'value',
        '301dMGgUB',
        '8660605xuXTMK',
        'order',
        '6381NcwEAN',
        'erty',
        '4384wBSbzd',
        'findAll',
        'qDloA',
        'defineProp',
        '__importDe',
        'tenantId',
        'ls/Setting',
        'fault',
        '6JQTqjr',
        '59710240vWEjPL',
        'where',
        '2721442ATDfkE',
        '3192488siDwOm',
        '__esModule',
        '87798BxzGlU',
        'ASC'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x15f)) / (0x17b9 * -0x1 + -0x15da + 0x2d94) + -parseInt(m(0x172)) / (-0x15ca + 0x268b + -0x10bf) + parseInt(m(0x16f)) / (-0x18b1 * 0x1 + -0x1 * -0x72a + 0x118a) * (-parseInt(m(0x173)) / (-0x22 * -0xc5 + 0x183 * 0x14 + 0x407 * -0xe)) + -parseInt(m(0x163)) / (-0x23a2 + -0x269e * 0x1 + 0x1 * 0x4a45) + parseInt(l(0x175)) / (-0x17c5 + -0x160f + 0x2dda) * (parseInt(m(0x162)) / (-0x21bb + -0x1206 * 0x2 + 0x45ce)) + -parseInt(l(0x167)) / (-0xe * -0x202 + -0xe * 0x171 + -0x7e6) * (parseInt(m(0x165)) / (0x222a * -0x1 + -0x1 * -0x7cf + -0x699 * -0x4)) + parseInt(l(0x170)) / (-0x20ad + 0x26ff + 0x4 * -0x192);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * 0x14297 + -0x7e57 * 0x26 + 0x1b6ef9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19 * -0xc7 + 0x24b0 + -0x36c0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x16b) + o(0x16e)] || function (c) {
    const p = o;
    return c && c[p(0x174)] ? c : { 'default': c };
};
const k = {};
k[n(0x161)] = !![], Object[n(0x16a) + n(0x166)](exports, o(0x174), k);
const Setting_1 = __importDefault(require(o(0x160) + o(0x16d))), AdminListSettingsService = async e => {
        const q = o, r = n, f = {};
        f[q(0x169)] = r(0x176);
        const g = f, h = {};
        e && (h[q(0x16c)] = e);
        const i = {};
        i[q(0x171)] = h, i[r(0x164)] = [[
                'id',
                g[q(0x169)]
            ]];
        const j = await Setting_1[r(0x177)][q(0x168)](i);
        return j;
    };
exports[o(0x177)] = AdminListSettingsService;