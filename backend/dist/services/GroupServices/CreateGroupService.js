'use strict';
const n = b, o = b;
function a() {
    const s = [
        'ls/Group',
        '660IYPZmv',
        '1477ZWDLMQ',
        '__importDe',
        'default',
        '30456HpgUtl',
        '53011JTJssE',
        'group',
        'fault',
        '287415AgABFr',
        '165256jxAtxu',
        '24yuNsYo',
        'create',
        '../../mode',
        '__esModule',
        '12455046sxCbvo',
        'defineProp',
        '30329940SYSKQh',
        'erty',
        'value',
        '466nvLbhQ',
        'tenantId',
        'isActive',
        'userId'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1007 * 0x1 + -0x1c0 + 0x1 * 0x123b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x78)) / (-0x1 * 0x169 + -0x3c8 + 0x532) * (-parseInt(m(0x8a)) / (-0x17c7 + 0x2 * 0xbf + 0x1 * 0x164b)) + parseInt(m(0x7b)) / (0x1451 + -0xf29 + -0x1b7 * 0x3) + -parseInt(l(0x81)) / (-0x169c + -0x2fb + 0x199b) * (parseInt(m(0x7f)) / (-0x3a5 * 0x7 + -0xddc + 0x2764)) + parseInt(m(0x77)) / (-0x1 * -0x21e2 + -0x1b * -0x7d + 0x1 * -0x2f0b) * (-parseInt(m(0x7c)) / (-0xbe6 + -0x16a + 0xd57)) + -parseInt(l(0x80)) / (0x25b * -0x9 + -0xf * -0x199 + 0x46 * -0xa) + -parseInt(m(0x85)) / (-0x1976 + -0x1cf0 * -0x1 + -0x1 * 0x371) + parseInt(m(0x87)) / (0x814 + 0x1 * -0x1b16 + 0x1 * 0x130c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2303 * 0x62 + -0x1b105 + 0x91a7));
var __importDefault = this && this[n(0x79) + n(0x7e)] || function (c) {
    const p = o;
    return c && c[p(0x84)] ? c : { 'default': c };
};
const k = {};
k[n(0x89)] = !![], Object[o(0x86) + n(0x88)](exports, n(0x84), k);
const Group_1 = __importDefault(require(o(0x83) + o(0x76))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x7d)] = d, h[r(0x74)] = e, h[q(0x75)] = f, h[r(0x8b)] = g;
        const i = await Group_1[r(0x7a)][r(0x82)](h);
        return i;
    };
exports[n(0x7a)] = CreateGruopService;