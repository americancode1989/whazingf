'use strict';
function a() {
    const D = [
        'erty',
        'default',
        '1127739xboHaz',
        'sessionId',
        'token',
        'value',
        '151290zcRxGI',
        'urlMessage',
        '730d',
        'expiresIn',
        'lOYCI',
        'authToken',
        'sign',
        'ig/auth',
        'ls/ApiConf',
        'name',
        '../../mode',
        '__importDe',
        '9768510kYzWLV',
        'Status',
        '__esModule',
        'jsonwebtok',
        '8vRZOea',
        'profile',
        'fault',
        'tenantId',
        '8UqEJpw',
        '235UwimBk',
        'create',
        '2149240AlUGSc',
        'rLMcz',
        '../../conf',
        'userId',
        'urlService',
        'admin',
        '660003MAzNtN',
        '1982323VhNZOv',
        'defineProp',
        '434490HnFmQO'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x202)) / (-0x94 + -0x91 * -0x3f + 0x231a * -0x1) + parseInt(w(0x1f6)) / (-0x1 * -0x4a4 + -0x20c9 + 0x1c27) + -parseInt(w(0x1fc)) / (-0x243c + 0x6 * -0x5db + 0x1 * 0x4761) * (-parseInt(w(0x1ef)) / (0x1 * 0x2655 + 0xc * -0x76 + -0x4d * 0x6d)) + -parseInt(w(0x1f4)) / (-0x218a * -0x1 + -0x1675 * 0x1 + -0xb10) * (parseInt(x(0x206)) / (0x463 * -0x1 + -0x1 * -0x161 + 0xc2 * 0x4)) + -parseInt(w(0x1fd)) / (-0xc3d * -0x1 + -0x1a03 + 0xdcd) * (-parseInt(x(0x1f3)) / (0x1e2c + -0x17f * -0x15 + -0x3d8f)) + parseInt(x(0x1eb)) / (-0x3 * 0x3a0 + -0x6 * 0x5c9 + 0xe5 * 0x33) + parseInt(x(0x1ff)) / (0x2619 + 0x2352 + 0x451 * -0x11);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x74749 + 0x1381 * 0x30 + -0xcfcc7 * -0x1));
var __importDefault = this && this[y(0x1ea) + y(0x1f1)] || function (c) {
    const A = y;
    return c && c[A(0x1ed)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x239b + -0x1b7c + 0x40f8);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0x205)] = !![], Object[z(0x1fe) + z(0x200)](exports, y(0x1ed), k);
const jsonwebtoken_1 = require(z(0x1ee) + 'en'), ApiConfig_1 = __importDefault(require(z(0x1e9) + z(0x1e7) + 'ig')), auth_1 = __importDefault(require(z(0x1f8) + y(0x1e6))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = y, o = {};
        o[B(0x1e3)] = C(0x1fb), o[B(0x1f7)] = B(0x1e1);
        const p = o, {secret: q} = auth_1[C(0x201)], r = {};
        r[B(0x1f2)] = n, r[B(0x1f0)] = p[C(0x1e3)], r[B(0x203)] = h;
        const s = {};
        s[B(0x1e2)] = p[C(0x1f7)];
        const t = (-0x1 * 0xa67 + 0x4 * 0x7f4 + -0x1569, jsonwebtoken_1[B(0x1e5)])(r, q, s), u = {};
        u[C(0x1e8)] = g, u[B(0x203)] = h, u[C(0x204)] = t, u[B(0x1e4)] = m, u[C(0x1fa) + B(0x1ec)] = i, u[C(0x207) + C(0x1ec)] = j, u[C(0x1f9)] = l, u[B(0x1f2)] = n;
        const v = await ApiConfig_1[B(0x201)][B(0x1f5)](u);
        return v;
    };
exports[z(0x201)] = CreateApiConfigService;