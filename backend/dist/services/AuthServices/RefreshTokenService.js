'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x18c)) / (0xd * 0x2dd + 0xc * -0x8e + 0x10 * -0x1e9) * (-parseInt(s(0x1a5)) / (0x25f9 + 0x44 + -0x263b)) + -parseInt(s(0x19e)) / (0x6ba * -0x3 + -0x23bf + 0x37f0) + -parseInt(s(0x194)) / (-0x25cc + -0x199 * -0xa + 0x1 * 0x15d6) + parseInt(s(0x195)) / (-0x10b + 0xb6f * -0x1 + 0x1 * 0xc7f) + -parseInt(r(0x17a)) / (-0xe85 + 0x5 * 0x4ec + -0xa11) * (-parseInt(s(0x184)) / (0x4bd + 0x2 * 0xa + -0x4ca)) + -parseInt(r(0x1a0)) / (-0x1 * -0x1d1b + -0x2 * 0x1b7 + 0xd * -0x1f9) * (parseInt(s(0x1a2)) / (0xc46 + 0x209f + -0x2cdc)) + -parseInt(r(0x17c)) / (-0x1c + -0x123c + -0x1262 * -0x1) * (parseInt(s(0x18b)) / (-0x1c0f + 0x1973 * -0x1 + 0x1 * 0x358d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1be118 + 0x14b2 * 0x14e + -0x2844d9));
function a() {
    const y = [
        'refreshSec',
        'ret',
        'newToken',
        'defineProp',
        '../../conf',
        '7IbMNwH',
        '../UserSer',
        'rs/AppErro',
        'enService',
        'SdMmy',
        'default',
        'createAcce',
        '1682670Xojdkh',
        '39Ifqzlx',
        'UIZoO',
        'ers/Create',
        '__esModule',
        'N_EXPIRED',
        'eshToken',
        'refreshTok',
        'vices/Show',
        '6637860HjuLPx',
        '5232160DJPyjE',
        'fault',
        '__importDe',
        'createRefr',
        'ERR_SESSIO',
        'ig/auth',
        'value',
        'UserServic',
        'RefreshTok',
        '291501tLqYGX',
        'Tokens',
        '16UrpdmR',
        '../../erro',
        '1122327nOZGvg',
        'erty',
        'verify',
        '35474GyJZNr',
        'ssToken',
        '11023836TsAPoQ',
        'jsonwebtok',
        '40eQGnAP',
        'tokenVersi',
        '../../help'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25fd + -0x9a9 * 0x3 + 0x4472);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x197) + u(0x196)] || function (c) {
    const v = t;
    return c && c[v(0x18f)] ? c : { 'default': c };
};
const k = {};
k[u(0x19b)] = !![], Object[u(0x182) + u(0x1a3)](exports, u(0x18f), k), exports[t(0x19d) + t(0x187)] = void (-0xfb3 * 0x1 + -0x3b * -0xa3 + -0x15de);
const jsonwebtoken_1 = require(t(0x17b) + 'en'), AppError_1 = __importDefault(require(u(0x1a1) + t(0x186) + 'r')), ShowUserService_1 = __importDefault(require(t(0x185) + t(0x193) + t(0x19c) + 'e')), auth_1 = __importDefault(require(u(0x183) + t(0x19a))), CreateTokens_1 = require(u(0x17e) + t(0x18e) + u(0x19f)), RefreshTokenService = async e => {
        const w = u, x = t, f = {};
        f[w(0x188)] = w(0x199) + x(0x190), f[x(0x18d)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (-0x1 * -0x18f1 + 0x17 * 0x15c + -0x3835 * 0x1, jsonwebtoken_1[w(0x1a4)])(e, auth_1[w(0x189)][x(0x17f) + w(0x180)]);
        } catch (p) {
            throw new AppError_1[(x(0x189))](g[w(0x188)], 0x141d + -0xe * -0x21d + -0x3022);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (0x253b + -0x1 * -0x281 + -0x27bc, ShowUserService_1[x(0x189)])(i, -0x13 * -0xaf + -0x37d + 0xdd * -0xb);
        if (g[w(0x18d)](l[x(0x17d) + 'on'], j))
            throw new AppError_1[(w(0x189))](g[x(0x188)], -0xf3c + 0x649 + 0x2 * 0x542);
        const m = (-0x14ca + 0x268d + -0x1 * 0x11c3, CreateTokens_1[w(0x18a) + w(0x1a6)])(l), n = (0x7ef * 0x1 + 0x18 * 0xb9 + -0x1947, CreateTokens_1[x(0x198) + x(0x191)])(l), o = {};
        return o[w(0x181)] = m, o[w(0x192) + 'en'] = n, o;
    };
exports[u(0x19d) + t(0x187)] = RefreshTokenService;