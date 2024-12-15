'use strict';
function a() {
    const B = [
        '3396524kxbTss',
        'rror',
        'value',
        'fault',
        '3457530oYZjXr',
        '../../../e',
        'reload',
        'rrors/AppE',
        'LY_FOUND',
        '13779117mhZhdo',
        '../../../m',
        'erty',
        'pEnpH',
        'default',
        'P_AUTO_REP',
        'reply',
        'TScoV',
        '2505312ZCdOOC',
        'update',
        'rDIwu',
        'userId',
        'odels/Step',
        '3Sgqaml',
        'initialSte',
        'findOne',
        '__importDe',
        'ERR_NO_STE',
        '6MKFnkn',
        'sReply',
        '74JdJEFA',
        'attributes',
        '169550FUDhGa',
        'defineProp',
        'where',
        '2994341eRNkWp',
        '__esModule',
        '396lFbkml',
        'MGmIZ',
        '5358RaVBQE'
    ];
    a = function () {
        return B;
    };
    return a();
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x181)) / (-0x349 * 0x1 + -0x1 * 0x1fb2 + 0x22fc) * (parseInt(v(0x19f)) / (-0x55 * 0x73 + 0x285 + 0x23ac)) + -parseInt(u(0x198)) / (0x6b9 * -0x5 + -0x15f4 + -0x4 * -0xde5) * (-parseInt(u(0x182)) / (0x18 * -0x164 + 0xb7 + 0x689 * 0x5)) + -parseInt(u(0x186)) / (0x139 * 0x7 + -0x1615 * -0x1 + 0x3 * -0xa35) * (parseInt(u(0x19d)) / (0x1a0 * 0xc + 0x9d * 0x8 + -0x1862)) + -parseInt(v(0x17d)) / (0x6db * 0x1 + -0xbb0 + 0x4 * 0x137) + parseInt(v(0x193)) / (-0x1ba * -0x15 + -0x1e33 * -0x1 + -0x13 * 0x37f) + parseInt(u(0x17f)) / (0x1ebf + -0x25 * 0x4d + 0x1395 * -0x1) * (-parseInt(v(0x1a1)) / (-0x9ad * -0x3 + 0x14 * -0x197 + 0x2cf)) + parseInt(v(0x18b)) / (-0x1 * -0x1d47 + -0xc8b + 0x1 * -0x10b1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf2841 + 0xb028c + -0x194 * -0x9dc));
var __importDefault = this && this[w(0x19b) + w(0x185)] || function (c) {
    const y = x;
    return c && c[y(0x17e)] ? c : { 'default': c };
};
const k = {};
k[w(0x184)] = !![], Object[x(0x1a2) + x(0x18d)](exports, w(0x17e), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19e8 * 0x1 + 0xf18 + 0x2 * 0x626);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0x187) + w(0x189) + w(0x183))), StepsReply_1 = __importDefault(require(x(0x18c) + x(0x197) + x(0x19e))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = w, j = {};
        j[z(0x18e)] = A(0x191), j[z(0x195)] = z(0x196), j[A(0x180)] = A(0x199) + 'p', j[A(0x192)] = A(0x19c) + A(0x190) + z(0x18a);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[A(0x17c)] = p, q[z(0x1a0)] = [
            'id',
            l[A(0x18e)],
            l[A(0x195)],
            l[z(0x180)]
        ];
        const r = await StepsReply_1[z(0x18f)][A(0x19a)](q);
        if (!r)
            throw new AppError_1[(z(0x18f))](l[z(0x192)], -0x99e + 0x5 * -0x2f5 + -0x3 * -0x8a9);
        const s = {};
        s[A(0x191)] = m, s[A(0x196)] = n, s[A(0x199) + 'p'] = o, await r[A(0x194)](s);
        const t = {};
        return t[A(0x1a0)] = [
            'id',
            l[A(0x18e)],
            l[z(0x195)],
            l[z(0x180)]
        ], await r[A(0x188)](t), r;
    };
exports[x(0x18f)] = UpdateStepsReplyService;