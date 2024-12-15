'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xae)) / (0x89b + -0xb * -0x12d + -0x1589) * (-parseInt(n(0xb1)) / (-0xccf * -0x3 + -0xdd * 0x1e + 0x281 * -0x5)) + -parseInt(n(0xa9)) / (0x1982 + -0xa1 * 0x1 + -0x18de) + -parseInt(m(0xb0)) / (0x22de * 0x1 + 0x26e6 + -0x49c0) + parseInt(n(0xa3)) / (-0x275 + -0x12e * 0x4 + -0x6 * -0x133) + parseInt(m(0xa7)) / (0xdb5 + -0x115 * 0x24 + -0x1 * -0x1945) + parseInt(n(0xa5)) / (-0x7c9 + 0x2 * 0x120 + 0x590) + parseInt(n(0xb5)) / (0x8c4 + 0xfbc + 0x2b8 * -0x9) * (-parseInt(m(0xac)) / (-0xf1 * 0x7 + 0xd * -0x18a + 0x7 * 0x3ce));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5a42 * 0x4 + -0x4597e * -0x1 + -0x120 * -0x5ba));
function a() {
    const t = [
        'defineProp',
        '3052653lDbrPz',
        'value',
        'rs/AppErro',
        '6424479bSwERy',
        '../../erro',
        '1146727TgnhLD',
        'ERR_NO_HEL',
        '894976Isepzv',
        '2ZLoajY',
        'fault',
        'findOne',
        'YwTTi',
        '8GikYct',
        'P_FOUND',
        'destroy',
        '../../mode',
        'erty',
        'ls/Help',
        'where',
        'default',
        '1667105jorrhO',
        '__esModule',
        '3818983yiqDDX',
        '__importDe',
        '3265482mIpVOo'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xcf4 + 0x24b7 * -0x1 + 0x1861);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xa6) + o(0xb2)] || function (c) {
    const q = p;
    return c && c[q(0xa4)] ? c : { 'default': c };
};
const k = {};
k[o(0xaa)] = !![], Object[o(0xa8) + o(0x9f)](exports, p(0xa4), k);
const Help_1 = __importDefault(require(p(0x9e) + p(0xa0))), AppError_1 = __importDefault(require(p(0xad) + o(0xab) + 'r')), DeleteService = async f => {
        const r = p, s = o, g = {};
        g[r(0xb4)] = r(0xaf) + s(0xb6);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0xa1)] = i;
        const l = await Help_1[s(0xa2)][r(0xb3)](j);
        if (!l)
            throw new AppError_1[(r(0xa2))](h[r(0xb4)], -0x14 * -0x199 + -0x4 * -0x73 + 0x2 * -0x1016);
        await l[r(0xb7)]();
    };
exports[p(0xa2)] = DeleteService;