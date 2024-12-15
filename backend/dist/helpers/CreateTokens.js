'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x65)) / (-0x166f + 0x1 * -0x5e3 + 0x1c53) * (-parseInt(p(0x7a)) / (0x207 * -0xd + -0x43a * -0x2 + 0x11e9)) + parseInt(q(0x70)) / (0xc8c * 0x2 + -0x9c8 + -0xf4d) * (-parseInt(q(0x6f)) / (-0xfad * 0x1 + 0xcce + 0x2e3)) + parseInt(q(0x75)) / (-0x4a9 * -0x5 + 0x6a6 + 0x6 * -0x4fd) * (parseInt(q(0x7b)) / (0x18b5 + 0x1949 + -0x31f8)) + parseInt(q(0x81)) / (-0x89e + -0xdc5 + 0x166a) * (-parseInt(q(0x66)) / (-0x5 * 0x14d + 0x34 * 0x81 + -0x13ab)) + -parseInt(q(0x64)) / (-0xac7 + 0x1b45 + 0x17f * -0xb) * (parseInt(p(0x76)) / (-0x1 * 0x179 + -0x233f + 0x24c2)) + -parseInt(q(0x7e)) / (0x1485 + 0x6b6 * 0x4 + 0x542 * -0x9) * (parseInt(p(0x6e)) / (-0x59 * 0x5a + -0x1455 + -0x3 * -0x1139)) + -parseInt(q(0x67)) / (-0xceb * 0x1 + 0x22a9 + -0x15b1) * (-parseInt(q(0x77)) / (0x9f2 + 0xa * -0x36d + 0x185e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x142959 + -0x53c85 + 0x26ac51));
function a() {
    const y = [
        'defineProp',
        'fault',
        'tenantId',
        '__esModule',
        '10088820DwLGCK',
        '2215GyEdjv',
        '8HPbWhA',
        '13ANXWCu',
        'ssToken',
        'usarname',
        'expiresIn',
        'eshToken',
        'erty',
        'createAcce',
        '39336mkoSxf',
        '60udZCZN',
        '245361NrKtUs',
        '__importDe',
        'default',
        '../config/',
        'value',
        '1830NTThzJ',
        '10XHOYHe',
        '59991218vSsSWm',
        'createRefr',
        'jsonwebtok',
        '1052yjHSCc',
        '18030uoLTGY',
        'tokenVersi',
        'sign',
        '1199mdOpfx',
        'name',
        'profile',
        '4513159qGawjT',
        'auth'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[r(0x71) + r(0x84)] || function (c) {
    const t = s;
    return c && c[t(0x86)] ? c : { 'default': c };
};
const o = {};
o[r(0x74)] = !![], Object[s(0x83) + s(0x6c)](exports, s(0x86), o), exports[s(0x78) + s(0x6b)] = exports[r(0x6d) + s(0x68)] = void (0x1b3e + -0x1 * -0xa9d + 0x371 * -0xb);
const jsonwebtoken_1 = require(r(0x79) + 'en'), auth_1 = __importDefault(require(r(0x73) + r(0x82))), createAccessToken = e => {
        const u = r, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x72)], h = {};
        h[u(0x69)] = e[u(0x7f)], h[v(0x85)] = e[u(0x85)], h[v(0x80)] = e[v(0x80)], h['id'] = e['id'];
        const i = {};
        return i[v(0x6a)] = g, (0x2 * -0x4ff + 0x1288 * -0x2 + -0x1 * -0x2f0e, jsonwebtoken_1[v(0x7d)])(h, f, i);
    };
exports[s(0x6d) + s(0x68)] = createAccessToken;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f80 + -0x1851 + 0x3835);
        let h = e[f];
        return h;
    }, b(c, d);
}
const createRefreshToken = e => {
    const w = s, x = r, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x72)], h = {};
    h['id'] = e['id'], h[w(0x7c) + 'on'] = e[w(0x7c) + 'on'];
    const i = {};
    return i[x(0x6a)] = g, (-0x19b5 + -0x3a1 * -0x5 + -0xf2 * -0x8, jsonwebtoken_1[w(0x7d)])(h, f, i);
};
exports[s(0x78) + r(0x6b)] = createRefreshToken;