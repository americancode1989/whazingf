'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc5 * 0x15 + 0x105 * 0x26 + -0x1 * 0x155d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
function a() {
    const y = [
        'default',
        '882468aNIAqo',
        '8904bWxRna',
        '6rXwmeD',
        '1590zGucRm',
        '__esModule',
        'erty',
        'ls/Tenant',
        'attributes',
        'inessHours',
        'where',
        'messageBus',
        'defineProp',
        '5152007WKdNGh',
        '44181htamPs',
        'fault',
        'reload',
        'update',
        '301zwaKln',
        '4196064miPwdg',
        '6oThSiO',
        'findOne',
        'urs',
        'rs/AppErro',
        '2264480PIgSCi',
        'businessHo',
        '__importDe',
        'value',
        'pQwWR',
        'BHAMn',
        'ERR_NO_TEN',
        '541612rzXqTC',
        '../../mode',
        '../../erro',
        '99lqGEKh',
        'ANT_FOUND',
        'zTEEn'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x154)) / (-0x2 * 0x6a + 0x2471 + -0x239c) * (parseInt(s(0x144)) / (0x1c43 * 0x1 + 0x1bd4 + -0x1 * 0x3815)) + parseInt(r(0x156)) / (-0x4aa * 0x6 + -0x796 + 0x2395 * 0x1) * (parseInt(s(0x13c)) / (0x924 + 0x1748 + -0x1e8 * 0x11)) + parseInt(s(0x15a)) / (-0x1455 * -0x1 + 0xa * -0x3f + -0x1c9 * 0xa) + parseInt(s(0x145)) / (0x1 * -0x1567 + -0x1d62 + 0x32cf) * (parseInt(r(0x14f)) / (-0x1d85 + -0x260d + 0x4399)) + -parseInt(r(0x155)) / (0x19 * 0x2 + -0x26e4 + 0x26ba) + parseInt(r(0x150)) / (0x1b7b + 0x253e + -0x40b0) * (-parseInt(r(0x146)) / (-0x41 * -0xd + 0x9 * 0x38b + 0x2326 * -0x1)) + -parseInt(r(0x13f)) / (0x87 * -0x2d + -0x5 * -0x6ad + -0x99b * 0x1) * (parseInt(s(0x143)) / (0x1660 + 0x23b4 * 0x1 + -0x3a08 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xe1fd + 0x593dd + 0x63f87));
var __importDefault = this && this[t(0x15c) + t(0x151)] || function (c) {
    const v = t;
    return c && c[v(0x147)] ? c : { 'default': c };
};
const k = {};
k[t(0x138)] = !![], Object[u(0x14e) + t(0x148)](exports, u(0x147), k);
const AppError_1 = __importDefault(require(t(0x13e) + t(0x159) + 'r')), Tenant_1 = __importDefault(require(u(0x13d) + t(0x149))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = t, j = {};
        j[w(0x139)] = x(0x13b) + w(0x140), j[x(0x13a)] = x(0x15b) + w(0x158), j[w(0x141)] = x(0x14d) + x(0x14b);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0x14c)] = m;
        const o = await Tenant_1[w(0x142)][w(0x157)](n);
        if (!o)
            throw new AppError_1[(w(0x142))](l[x(0x139)], 0x24 * -0xc5 + 0xdb + -0x1 * -0x1c6d);
        const p = {};
        p[w(0x14d) + x(0x14b)] = h, await o[x(0x153)](p);
        const q = {};
        return q[w(0x14a)] = [
            l[x(0x13a)],
            l[w(0x141)]
        ], await o[x(0x152)](q), o;
    };
exports[u(0x142)] = UpdateMessageBusinessHoursService;