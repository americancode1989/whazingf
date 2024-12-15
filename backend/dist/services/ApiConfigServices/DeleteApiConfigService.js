'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x9a)) / (-0x19aa + -0x22 * 0xfd + 0x3b45) + parseInt(o(0xa4)) / (-0x3d5 * 0x7 + 0x25d4 + -0xaff * 0x1) + parseInt(n(0x90)) / (0x1d19 + -0x112b + -0xbeb) * (parseInt(n(0x98)) / (0x145b + -0x19 * 0x169 + 0xeea)) + -parseInt(o(0x93)) / (0x1772 + -0x1 * 0x1e5d + 0x6f0) + -parseInt(n(0xa2)) / (-0x613 * -0x4 + -0xe68 + -0x2 * 0x4ef) * (-parseInt(o(0x9c)) / (0x1 * -0x1f46 + -0x916 + 0x2863)) + parseInt(o(0xa0)) / (-0x9 * 0x67 + -0xdf6 * 0x1 + -0x1f5 * -0x9) + -parseInt(n(0x9d)) / (-0xab9 + -0x3b2 * 0x5 + 0x1d3c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x72f92 + 0x86b8c + 0x9 * 0x5a0a));
var __importDefault = this && this[p(0x92) + q(0xa6)] || function (c) {
    const r = q;
    return c && c[r(0x8b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a7c + 0x6f7 * -0x3 + 0x2fec);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '3711uSBJzy',
        'NFIG_NOT_F',
        '__importDe',
        '2277320qbJRxu',
        'findOne',
        'where',
        'default',
        'value',
        '872MUYikE',
        '../../erro',
        '281535dbMFkE',
        'AyBkw',
        '145887AGAtRs',
        '5525451FNzQts',
        'OUND',
        'defineProp',
        '161424JhJkjR',
        'rs/AppErro',
        '108RPeuQf',
        'erty',
        '822452edVKIz',
        'ERR_API_CO',
        'fault',
        '__esModule',
        'ls/ApiConf',
        'tenantId',
        'destroy',
        '../../mode'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[p(0x97)] = !![], Object[p(0x9f) + p(0xa3)](exports, p(0x8b), k);
const AppError_1 = __importDefault(require(q(0x99) + q(0xa1) + 'r')), ApiConfig_1 = __importDefault(require(p(0x8f) + q(0x8c) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = p, h = {};
        h[s(0x9b)] = s(0xa5) + t(0x91) + t(0x9e);
        const i = h, j = {};
        j['id'] = f, j[s(0x8d)] = g;
        const l = {};
        l[s(0x95)] = j;
        const m = await ApiConfig_1[s(0x96)][s(0x94)](l);
        if (!m)
            throw new AppError_1[(t(0x96))](i[t(0x9b)], -0x21b5 + 0xd * -0x1fd + 0x5 * 0xc3a);
        await m[t(0x8e)]();
    };
exports[q(0x96)] = DeleteApiConfigService;