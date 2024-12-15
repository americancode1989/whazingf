'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x7b)) / (0x1 * -0xee6 + -0x9f * 0x35 + -0x17e9 * -0x2) * (parseInt(o(0x88)) / (0x1 * 0x1a78 + -0x125d + -0x2b3 * 0x3)) + -parseInt(p(0x76)) / (0x2459 * -0x1 + -0x14db + 0x3937 * 0x1) * (parseInt(p(0x75)) / (-0x1bfa * -0x1 + -0x1224 + 0x1a3 * -0x6)) + -parseInt(p(0x89)) / (-0x139e + -0x942 + 0x1ce5) + parseInt(p(0x8b)) / (-0x1ce5 + -0x24f2 + 0x41dd) * (-parseInt(o(0x73)) / (0xf5f + 0x795 + -0x16ed)) + -parseInt(p(0x93)) / (-0xd6 * 0x15 + -0x6c2 + 0x1858 * 0x1) + parseInt(o(0x78)) / (0x81c * -0x2 + 0x4dd + 0xb64) * (-parseInt(p(0x80)) / (0x90 + 0x1208 + -0x13 * 0xfa)) + parseInt(p(0x7c)) / (0xfde * -0x1 + 0xa72 + 0x1 * 0x577) * (parseInt(p(0x86)) / (0x13d5 + 0x2197 * -0x1 + 0xdce));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x704 * -0x21 + 0xdba90 + -0x51b78));
var __importDefault = this && this[q(0x7e) + q(0x83)] || function (c) {
    const s = q;
    return c && c[s(0x79)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x202 + -0x3 * -0x1cf + 0x1 * -0xf7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x91)] = !![], Object[q(0x8a) + q(0x72)](exports, q(0x79), k);
const Tag_1 = __importDefault(require(q(0x8f) + q(0x7d))), AppError_1 = __importDefault(require(q(0x87) + r(0x8c) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x85)] = t(0x90) + u(0x82), h[u(0x84)] = u(0x7f) + u(0x7a) + u(0x92);
        const i = h, j = {};
        j['id'] = f, j[u(0x8e)] = g;
        const l = {};
        l[u(0x74)] = j;
        const m = await Tag_1[t(0x77)][t(0x81)](l);
        if (!m)
            throw new AppError_1[(u(0x77))](i[t(0x85)], 0xc7 + -0xfea + 0x10b7);
        try {
            await m[u(0x8d)]();
        } catch (n) {
            throw new AppError_1[(u(0x77))](i[t(0x84)], 0x194 + 0x1134 + -0x1134);
        }
    };
function a() {
    const v = [
        'ls/Tag',
        '__importDe',
        'ERR_TAG_CO',
        '1210NEKhxQ',
        'findOne',
        '_FOUND',
        'fault',
        'LGOOH',
        'hkBLC',
        '898116DlSCEn',
        '../../erro',
        '36oBVptm',
        '3150640NSXvdC',
        'defineProp',
        '7245594iNUKbl',
        'rs/AppErro',
        'destroy',
        'tenantId',
        '../../mode',
        'ERR_NO_TAG',
        'value',
        'STS',
        '2494928QIABCj',
        'erty',
        '7WGYxgi',
        'where',
        '8PKMQXJ',
        '694410zmCwkV',
        'default',
        '47907vgXGsD',
        '__esModule',
        'NTACTS_EXI',
        '42187jwOvud',
        '682rDWirn'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[q(0x77)] = DeleteTagService;