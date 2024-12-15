'use strict';
function a() {
    const y = [
        'inessHours',
        '__esModule',
        '65daiGRS',
        '../../mode',
        '10953JuEjeR',
        'defineProp',
        'default',
        '36KlKxMw',
        'fault',
        'businessHo',
        'ANT_FOUND',
        'findOne',
        '__importDe',
        'urs',
        'ERR_NO_TEN',
        '167928fBqOBL',
        'update',
        'value',
        'attributes',
        'erty',
        '447755kBqzyD',
        'agJQD',
        'ls/Tenant',
        '372jlGpnj',
        'Kwuiu',
        '1052jOnWUc',
        'rs/AppErro',
        '1234384nBgfYk',
        '886410bdzSai',
        '../../erro',
        'reload',
        'where',
        'messageBus',
        '12583780MvUhjc',
        '362UnLVrI',
        'YPIid'
    ];
    a = function () {
        return y;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x186)) / (0x2ef + 0x3 * 0x1f6 + -0x8d0) * (-parseInt(s(0x18f)) / (0xb2f * 0x1 + -0x1c7 + 0x1 * -0x966)) + -parseInt(r(0x171)) / (-0x232f + 0x1 * 0x959 + 0x19d9) * (parseInt(s(0x184)) / (0x18ce + 0x13 * -0x18e + 0x10 * 0x4c)) + parseInt(r(0x193)) / (0x2530 + 0xc51 + -0x317c) * (-parseInt(s(0x17c)) / (0x7 * -0x143 + 0x7c1 + 0x11a)) + parseInt(r(0x181)) / (0x484 * 0x2 + -0x4 * 0x796 + 0x1557) + -parseInt(s(0x188)) / (0x614 * -0x4 + 0x1c20 + 0x4 * -0xf2) + -parseInt(s(0x174)) / (-0x1 * 0x2351 + 0x1e82 + 0x4d8) * (parseInt(s(0x189)) / (0x1ead + -0x1080 + -0xe23)) + parseInt(s(0x18e)) / (-0x23d * -0x5 + -0x25 * 0x87 + 0x85d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x56ede + 0x331b3 + 0x51427));
var __importDefault = this && this[t(0x179) + t(0x175)] || function (c) {
    const v = u;
    return c && c[v(0x192)] ? c : { 'default': c };
};
const k = {};
k[t(0x17e)] = !![], Object[u(0x172) + u(0x180)](exports, t(0x192), k);
const AppError_1 = __importDefault(require(u(0x18a) + u(0x187) + 'r')), Tenant_1 = __importDefault(require(t(0x194) + u(0x183))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x185)] = x(0x17b) + w(0x177), j[w(0x182)] = w(0x176) + x(0x17a), j[w(0x190)] = w(0x18d) + w(0x191);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0x18c)] = m;
        const o = await Tenant_1[w(0x173)][x(0x178)](n);
        if (!o)
            throw new AppError_1[(w(0x173))](l[x(0x185)], 0xffd * 0x1 + 0x4 * -0x62b + 0x1 * 0xa43);
        const p = {};
        p[x(0x176) + x(0x17a)] = h, await o[x(0x17d)](p);
        const q = {};
        return q[x(0x17f)] = [
            l[w(0x182)],
            l[x(0x190)]
        ], await o[w(0x18b)](q), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1144 + -0x9e * -0x10 + -0x2b * 0x99);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x173)] = UpdateBusinessHoursService;