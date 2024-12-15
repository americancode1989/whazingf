'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xa5)) / (-0xfd6 + -0x23 * -0x11b + -0x16da) + -parseInt(o(0x8d)) / (-0x868 + -0xac1 + 0x132b) + -parseInt(o(0x8c)) / (-0x184a * -0x1 + -0x8 * 0x4ae + 0xd29) + parseInt(o(0xa6)) / (0x792 + 0xb69 + -0x12f7 * 0x1) + -parseInt(p(0x9b)) / (0x2 * -0x13e + 0xa2 * -0x2b + 0x1db7) * (parseInt(p(0xa7)) / (-0xcee * -0x2 + -0x205 + -0x17d1)) + parseInt(p(0x9e)) / (0xa03 + -0x21e5 + 0x17e9) * (-parseInt(o(0x9f)) / (-0x2438 + -0x4 * 0x128 + 0x1 * 0x28e0)) + -parseInt(p(0x96)) / (0x1 * -0x884 + 0x21c2 + -0x1935) * (-parseInt(p(0x8f)) / (-0x223 * 0x5 + -0x159e + 0x2057));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa7241 + 0x74790 + -0xee1 * -0x95));
var __importDefault = this && this[q(0x97) + r(0x8e)] || function (c) {
    const s = q;
    return c && c[s(0xa1)] ? c : { 'default': c };
};
function a() {
    const v = [
        'defineProp',
        'tenantId',
        'ls/Tag',
        '161680ddEfGk',
        'ASC',
        'isActive',
        '14vuiQfH',
        '227320SUTkCH',
        'default',
        '__esModule',
        'VneNy',
        '../../mode',
        'where',
        '185167upsnyv',
        '970244LgFOIH',
        '132ZywikH',
        '679779kBbvHm',
        '722536CHjhwy',
        'fault',
        '477170uVnIHP',
        'value',
        'erty',
        'ewjQq',
        'findAll',
        'tag',
        'order',
        '243dbLIBW',
        '__importDe'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c0b + -0x2702 * -0x1 + -0xa6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x90)] = !![], Object[q(0x98) + r(0x91)](exports, r(0xa1), k);
const Tag_1 = __importDefault(require(r(0xa3) + r(0x9a))), ListTagService = async ({
        tenantId: f,
        isActive: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0xa2)] = u(0x94), h[t(0x92)] = u(0x9c);
        const i = h, j = {};
        j[u(0x99)] = f;
        const l = j;
        g && (l[t(0x9d)] = g);
        const m = {};
        m[t(0xa4)] = l, m[u(0x95)] = [[
                i[u(0xa2)],
                i[u(0x92)]
            ]];
        const n = await Tag_1[u(0xa0)][u(0x93)](m);
        return n;
    };
exports[r(0xa0)] = ListTagService;