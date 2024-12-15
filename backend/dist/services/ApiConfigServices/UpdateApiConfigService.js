'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x197)) / (-0x898 + 0xd * 0x82 + 0x1ff) * (parseInt(x(0x192)) / (-0x8ff + 0x18 * 0x155 + 0x16f7 * -0x1)) + -parseInt(x(0x17d)) / (0x64b * 0x5 + -0x1acb + 0x4a9 * -0x1) + parseInt(x(0x1a1)) / (-0x294 + 0x1 * 0x1e3d + -0x1ba5) * (-parseInt(y(0x18c)) / (-0xe2 * 0x20 + 0x2 * -0x8bf + 0x2dc3)) + -parseInt(y(0x191)) / (0x9fe + -0x1 * -0xeb7 + -0x47 * 0x59) + parseInt(x(0x18a)) / (-0x8bf * 0x4 + 0x16bd + 0xc46) + parseInt(y(0x18f)) / (0x150 + -0x1 * 0x14a6 + -0x25 * -0x86) * (parseInt(y(0x18b)) / (-0x19f5 + 0x1 * 0x2fb + 0x1703)) + -parseInt(x(0x19f)) / (-0x8 * -0x1cd + -0x1 * -0x255f + -0x33bd) * (-parseInt(x(0x19e)) / (0x14 * -0x79 + 0x6e8 + -0x27 * -0x11));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8d7 * 0xdf + 0x62 * 0xf85 + -0x1 * -0x909e5));
var __importDefault = this && this[z(0x19d) + A(0x182)] || function (c) {
    const B = A;
    return c && c[B(0x195)] ? c : { 'default': c };
};
const k = {};
k[z(0x196)] = !![], Object[z(0x1a2) + A(0x199)](exports, z(0x195), k);
function a() {
    const E = [
        'rs/AppErro',
        '301294oxnhMm',
        '9eDvnJe',
        '15kAopzn',
        '../../erro',
        'ERR_API_CO',
        '7562008yhdpLI',
        'urlService',
        '3002886FiUxKA',
        '2yqjzVT',
        'where',
        'ZWsxx',
        '__esModule',
        'value',
        '406579EdVSla',
        '../../mode',
        'erty',
        'update',
        'OUND',
        'isActive',
        '__importDe',
        '429maMnBQ',
        '459080BMcBUJ',
        'sessionId',
        '732236wYPmRK',
        'defineProp',
        'tenantId',
        '2536218pCkZwk',
        'urlMessage',
        'default',
        'Status',
        'reload',
        'fault',
        'NFIG_NOT_F',
        'name',
        'userId',
        'authToken',
        'ls/ApiConf',
        'findOne'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(z(0x18d) + A(0x189) + 'r')), ApiConfig_1 = __importDefault(require(A(0x198) + z(0x187) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = z, D = A, j = {};
        j[C(0x194)] = C(0x18e) + D(0x183) + D(0x19b);
        const l = j, m = {};
        m['id'] = h, m[C(0x17c)] = i;
        const n = {};
        n[C(0x193)] = m;
        const o = await ApiConfig_1[C(0x17f)][D(0x188)](n);
        if (!o)
            throw new AppError_1[(C(0x17f))](l[C(0x194)], 0x138b * 0x1 + 0xba2 + -0x1d99);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[C(0x184)] = p, w[D(0x1a0)] = q, w[D(0x190) + C(0x180)] = r, w[D(0x17e) + C(0x180)] = s, w[D(0x185)] = t, w[C(0x186)] = u, w[D(0x19c)] = v, await o[D(0x19a)](w), await o[D(0x181)](), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21e6 + 0x18a0 + -0x390a);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[z(0x17f)] = UpdateApiConfigService;