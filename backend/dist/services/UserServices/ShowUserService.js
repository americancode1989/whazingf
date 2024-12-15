'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x9c)) / (-0x960 + -0x261d + 0x2f7e) * (parseInt(n(0xa7)) / (-0x91f + -0x4 * 0x63e + 0x2219)) + -parseInt(n(0xa5)) / (-0xb55 + -0x2b4 * 0x4 + 0x1628) + -parseInt(n(0xa9)) / (0x1c * -0x158 + 0x130e + -0xb7 * -0x1a) + parseInt(n(0x9b)) / (-0x2680 + -0x1dba + -0x443f * -0x1) * (-parseInt(o(0xaf)) / (-0x1 * -0xf81 + -0x1ed4 + 0xf59)) + parseInt(o(0xbd)) / (-0x2257 + 0x1 * -0x1d6f + 0x3fcd) * (-parseInt(o(0xa8)) / (-0x14 * 0xe9 + 0xb1e + -0x38f * -0x2)) + -parseInt(n(0xbe)) / (-0x2f * -0x2b + -0x1 * 0x17e9 + -0x100d * -0x1) * (-parseInt(o(0xc1)) / (-0x1 * 0x1b5 + 0x724 * 0x1 + -0x565 * 0x1)) + parseInt(n(0xbc)) / (0x9b * 0x29 + 0xfea + -0x28b2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbfc55 + 0x417 * -0x535 + -0x183466 * -0x2));
var __importDefault = this && this[p(0x9e) + p(0xa6)] || function (c) {
    const r = q;
    return c && c[r(0xa3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1af4 + -0x1af * -0x9 + 0xc65);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'defineProp',
        'nexiK',
        'R_FOUND',
        'lJLel',
        '57290541UGtIoB',
        '12514187xRgOhX',
        '6963651wZoAcV',
        'vxNJC',
        'default',
        '10OsAYBS',
        'include',
        '../../erro',
        'profile',
        '422315fpuOlt',
        '1aObaoL',
        'smcLp',
        '__importDe',
        'erty',
        'email',
        '../../mode',
        'tokenVersi',
        '__esModule',
        'name',
        '2456892quwfhC',
        'fault',
        '3775964gYIYLO',
        '8afkRNf',
        '294224WOFAQj',
        'attributes',
        'rZSfB',
        'rs/AppErro',
        'queues',
        'findByPk',
        '30XmOfzU',
        'ls/User',
        'ls/Queue',
        'MNOZC',
        'BJsic',
        'YTIFK',
        'value',
        'tenantId',
        'ERR_NO_USE'
    ];
    a = function () {
        return u;
    };
    return a();
}
const k = {};
k[q(0xb5)] = !![], Object[q(0xb8) + q(0x9f)](exports, p(0xa3), k);
const User_1 = __importDefault(require(q(0xa1) + q(0xb0))), AppError_1 = __importDefault(require(q(0x99) + p(0xac) + 'r')), Queue_1 = __importDefault(require(p(0xa1) + p(0xb1))), ShowUserService = async (e, f) => {
        const s = p, t = q, g = {};
        g[s(0xab)] = t(0xa4), g[s(0xb9)] = t(0xa0), g[t(0xbf)] = s(0x9a), g[s(0xbb)] = t(0xa2) + 'on', g[s(0xb3)] = s(0xb6), g[t(0x9d)] = t(0xad), g[t(0xb2)] = function (l, m) {
            return l !== m;
        }, g[t(0xb4)] = s(0xb7) + s(0xba);
        const h = g, i = {};
        i[t(0xaa)] = [
            h[t(0xab)],
            'id',
            h[s(0xb9)],
            h[s(0xbf)],
            h[s(0xbb)],
            h[t(0xb3)]
        ], i[s(0x98)] = [{
                'model': Queue_1[t(0xc0)],
                'as': h[s(0x9d)]
            }];
        const j = await User_1[s(0xc0)][t(0xae)](e, i);
        if (!j || h[s(0xb2)](j[t(0xb6)], f))
            throw new AppError_1[(t(0xc0))](h[t(0xb4)], -0x4e1 * -0x3 + 0x145e + -0x216d);
        return j;
    };
exports[p(0xc0)] = ShowUserService;