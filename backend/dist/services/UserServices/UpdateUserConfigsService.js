'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xee)) / (-0x1b * 0xca + 0x14a1 + 0xae) + -parseInt(o(0x105)) / (-0xcf * 0x2c + -0x1 * -0x1bd3 + 0x7c3) * (-parseInt(p(0xf2)) / (0x8 * 0x66 + -0xa24 + 0x6f7)) + parseInt(o(0xff)) / (0x443 * -0x1 + -0xe2f + 0x116 * 0x11) * (-parseInt(p(0x111)) / (0xd * -0x1b5 + 0x1 * -0x1894 + 0x2eca)) + parseInt(o(0xed)) / (0x2 * -0x1291 + 0x1d5 * -0x11 + 0x444d) + parseInt(o(0x104)) / (0x1cc3 + 0xf5f + -0x2c1b) * (-parseInt(o(0xfe)) / (-0x1 * 0x32f + 0x2229 + -0x1 * 0x1ef2)) + -parseInt(o(0x100)) / (-0x2490 + 0x1f65 + 0x534) * (parseInt(p(0xfd)) / (0x281 * -0x1 + 0x487 + -0x1fc)) + parseInt(p(0xfa)) / (0x1 * -0x1ae2 + -0x15 * 0x121 + 0x32a2) * (parseInt(o(0xf7)) / (-0x5e6 + 0xdd2 + -0x6 * 0x150));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14da2 + 0x1fba1 + 0x1ee24));
var __importDefault = this && this[q(0x108) + q(0x10b)] || function (c) {
    const s = r;
    return c && c[s(0xfb)] ? c : { 'default': c };
};
const k = {};
k[q(0xf1)] = !![], Object[q(0xf6) + q(0xf4)](exports, r(0xfb), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17aa * 0x1 + -0x1988 + 0x321f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'XnorH',
        '373933YGxwIa',
        '14vdrtkv',
        'email',
        'profile',
        '__importDe',
        'rs/AppErro',
        'findOne',
        'fault',
        'R_FOUND',
        'ERR_NO_USE',
        'where',
        'VSIZL',
        'update',
        '5teIOQa',
        'uIsJK',
        '../../mode',
        '1956336BMMjSt',
        '162349tBiOiT',
        'InKCX',
        'ls/User',
        'value',
        '207897eipsPd',
        'attributes',
        'erty',
        'tenantId',
        'defineProp',
        '7534812jUssfB',
        'name',
        'hHmdf',
        '22NfHvMf',
        '__esModule',
        '../../erro',
        '30ugqFbm',
        '56wtXLcg',
        '2630804lDIzLO',
        '1593315AqTJQe',
        'default',
        'configs'
    ];
    a = function () {
        return v;
    };
    return a();
}
const AppError_1 = __importDefault(require(q(0xfc) + q(0x109) + 'r')), User_1 = __importDefault(require(q(0x113) + r(0xf0))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = r, u = q, i = {};
        i[t(0xf9)] = t(0xf8), i[u(0xef)] = t(0x106), i[t(0x112)] = t(0x107), i[t(0x103)] = t(0x102), i[t(0x10f)] = t(0x10d) + u(0x10c);
        const j = i, l = {};
        l['id'] = g, l[u(0xf5)] = h;
        const m = {};
        m[u(0x10e)] = l, m[u(0xf3)] = [
            j[u(0xf9)],
            'id',
            j[u(0xef)],
            j[u(0x112)],
            j[t(0x103)]
        ];
        const n = await User_1[u(0x101)][t(0x10a)](m);
        if (!n)
            throw new AppError_1[(u(0x101))](j[t(0x10f)], 0x1b0f + 0x15d * 0xf + -0x2dee);
        await n[u(0x110)]({
            'configs': {
                ...n[t(0x102)],
                ...f
            }
        });
    };
exports[r(0x101)] = UpdateUserConfigsService;