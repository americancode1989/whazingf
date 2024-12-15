'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x11f)) / (0x1bfa + -0x5f * -0x60 + -0x3f99) * (-parseInt(s(0x136)) / (0x226 + -0x2d3 * 0x1 + 0xaf)) + -parseInt(t(0x120)) / (-0x861 + 0xfa4 + -0x740) + parseInt(s(0x127)) / (0x25bb + 0x1860 + -0x55 * 0xbb) + parseInt(t(0x139)) / (-0x20d3 + -0xc49 + 0x3 * 0xf0b) * (-parseInt(s(0x137)) / (0x6ae + -0x1 * 0x14f6 + 0x1 * 0xe4e)) + parseInt(s(0x12e)) / (-0x2e8 + -0x6f5 * 0x5 + 0x25b8) * (parseInt(t(0x11d)) / (-0x1958 + 0x436 * 0x5 + 0x452)) + parseInt(s(0x121)) / (0x19b8 + 0x5 * 0x22c + -0x248b) + -parseInt(t(0x118)) / (0x539 + -0x150b + 0x14 * 0xcb) * (parseInt(t(0x11a)) / (0x2687 + 0x1b6c + -0xc * 0x57e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x27e2c + 0x1 * 0x1232b + -0xf78a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x425 + -0x4bb + 0x1b * 0xad);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        '__esModule',
        '2315hSTmdw',
        'sessionId',
        'ivwBa',
        '../../conf',
        'jsonwebtok',
        'defineProp',
        'tenantId',
        'PoPMb',
        '730d',
        '898570txXlEy',
        '../../erro',
        '33LnBckq',
        'ig/auth',
        'default',
        '328OwrGTG',
        'erty',
        '1dvsLtp',
        '430416bYCWbJ',
        '1268145wxnbVJ',
        'reload',
        'VzBeI',
        'ERR_API_CO',
        'update',
        'rs/AppErro',
        '1141960NJRdBu',
        'admin',
        'sign',
        'fault',
        'token',
        'expiresIn',
        'OUND',
        '29407YHdhpC',
        '__importDe',
        'profile',
        '../../mode',
        'NFIG_NOT_F',
        'ls/ApiConf',
        'value',
        'findByPk',
        '162170QgRBEc',
        '1194ipuzWp'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[u(0x12f) + u(0x12a)] || function (c) {
    const w = v;
    return c && c[w(0x138)] ? c : { 'default': c };
};
const k = {};
k[u(0x134)] = !![], Object[v(0x13e) + v(0x11e)](exports, u(0x138), k);
const jsonwebtoken_1 = require(u(0x13d) + 'en'), ApiConfig_1 = __importDefault(require(v(0x131) + u(0x133) + 'ig')), auth_1 = __importDefault(require(u(0x13c) + v(0x11b))), AppError_1 = __importDefault(require(u(0x119) + u(0x126) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = u, y = u, j = {};
        j[x(0x13b)] = x(0x124) + y(0x132) + y(0x12d), j[x(0x116)] = y(0x128), j[x(0x123)] = x(0x117);
        const l = j, {secret: m} = auth_1[y(0x11c)], n = await ApiConfig_1[x(0x11c)][y(0x135)](g);
        if (!n)
            throw new AppError_1[(y(0x11c))](l[y(0x13b)], -0x11 * -0x72 + 0x1b76 + 0x1 * -0x2174);
        const o = {};
        o[y(0x115)] = i, o[y(0x130)] = l[y(0x116)], o[y(0x13a)] = h;
        const p = {};
        p[y(0x12c)] = l[x(0x123)];
        const q = (0x5b4 * -0x4 + 0x7 * 0x2e9 + 0x271, jsonwebtoken_1[y(0x129)])(o, m, p), r = {};
        return r[y(0x12b)] = q, n[y(0x125)](r), n[x(0x122)](), n;
    };
exports[v(0x11c)] = RenewApiConfigTokenService;