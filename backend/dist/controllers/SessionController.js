'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x1f9)) / (-0x2 * -0x12f8 + 0x1 * -0x25c4 + 0x1 * -0x2b) + parseInt(u(0x1d2)) / (0x253a + 0x83 * 0xd + -0x2bdf) + parseInt(u(0x1e7)) / (0x697 + 0x3f9 + -0xa8d) + -parseInt(v(0x1e4)) / (-0xb * 0x203 + -0x161 * 0x7 + 0x1fcc) + -parseInt(v(0x1e1)) / (0x8 * -0x3e7 + -0x8f3 + 0x2830) + parseInt(u(0x1d1)) / (0x1 * 0x24b1 + 0x1 * 0x21eb + -0x4696) * (parseInt(u(0x1d0)) / (-0x20 * 0x90 + 0x7 * 0x39e + -0x1 * 0x74b)) + -parseInt(u(0x1ef)) / (-0xc * 0x2a4 + -0x18a5 + 0x385d) * (parseInt(v(0x1bb)) / (-0x1841 * 0x1 + 0x10ba + 0x790));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x9de6e + -0x14b1e9 + 0xed9fb));
var __importDefault = this && this[w(0x1eb) + w(0x1f7)] || function (c) {
    const y = w;
    return c && c[y(0x1f8)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x108f + -0x25f6 + 0x1232 * 0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[x(0x1b8)] = !![], Object[x(0x1b9) + x(0x1be)](exports, x(0x1f8), k), exports[x(0x1f5)] = exports[w(0x1b7)] = exports[w(0x1cb)] = void (0x13e1 + 0x40 * -0x7f + -0xbdf * -0x1);
const AppError_1 = __importDefault(require(w(0x1c8) + x(0x1c0))), AuthUserSerice_1 = __importDefault(require(w(0x1c5) + w(0x1dd) + w(0x1d7) + x(0x1da))), SendRefreshToken_1 = require(w(0x1c3) + x(0x1c9) + x(0x1e3)), RefreshTokenService_1 = require(w(0x1c5) + x(0x1f2) + w(0x1e5) + x(0x1d3) + x(0x1fb)), socket_1 = require(w(0x1ba) + x(0x1de)), User_1 = __importDefault(require(w(0x1d6) + x(0x1ee))), store = async (f, g) => {
        const z = x, A = w, h = {};
        h[z(0x1c1)] = A(0x1b7);
        const i = h, j = (0x1999 + 0xb2d + -0x24c6, socket_1[z(0x1c2)])(), {
                email: l,
                password: m
            } = f[A(0x1b4)], n = {};
        n[z(0x1cc)] = l, n[z(0x1e9)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (0x2 * 0xa99 + -0x1 * 0x13ac + 0x5 * -0x4e, AuthUserSerice_1[A(0x1c6)])(n);
        (-0x1d * -0x18 + 0x19f5 + -0x1cad * 0x1, SendRefreshToken_1[z(0x1c7) + z(0x1ce)])(g, q);
        const s = {};
        s[A(0x1b5)] = o, s[A(0x1bc)] = p[A(0x1f0)], s[A(0x1cc)] = p[A(0x1cc)], s[z(0x1ec)] = p[z(0x1ec)], s[z(0x1f6)] = p[A(0x1f6)], s[A(0x1d4)] = p['id'], s[A(0x1f3)] = p[A(0x1f3)], s[z(0x1dc)] = p[z(0x1dc)], s[A(0x1e6) + z(0x1e8)] = r, s[A(0x1db)] = p[A(0x1db)];
        const t = s;
        return j[A(0x1ca)](t[A(0x1f3)] + A(0x1e0), {
            'action': i[z(0x1c1)],
            'data': {
                'username': t[A(0x1bc)],
                'email': t[z(0x1cc)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[z(0x1f6)](-0xda9 + -0x22e * -0x6 + 0x15d)[A(0x1df)](t);
    };
exports[w(0x1cb)] = store;
const update = async (e, f) => {
    const B = x, C = w, g = {};
    g[B(0x1d8)] = B(0x1f1) + C(0x1bd);
    const h = g, i = e[C(0x1cf)][C(0x1d5)];
    if (!i)
        throw new AppError_1[(C(0x1c6))](h[B(0x1d8)], 0x785 + -0xe63 + 0x7f * 0x11);
    const {
        newToken: j,
        refreshToken: l
    } = await (-0x93b + -0x275 * 0x7 + 0x22 * 0xc7, RefreshTokenService_1[B(0x1fa) + C(0x1c4)])(i);
    (-0x264b + 0x3 * 0x1c1 + 0x2108, SendRefreshToken_1[B(0x1c7) + C(0x1ce)])(f, l);
    const m = {};
    return m[B(0x1b5)] = j, f[C(0x1df)](m);
};
exports[w(0x1b7)] = update;
const logout = async (e, f) => {
    const D = w, E = x, g = {};
    g[D(0x1cd)] = E(0x1e2) + E(0x1ea), g[E(0x1b6)] = E(0x1b7), g[E(0x1bf)] = D(0x1f4) + 'T';
    const h = g, {userId: i} = e[D(0x1b4)];
    if (!i)
        throw new AppError_1[(E(0x1c6))](h[D(0x1cd)], -0x9 * 0x38b + -0xb12 + 0x2c89);
    const j = (0xf * 0xb1 + -0x1ccd + 0x126e, socket_1[E(0x1c2)])(), l = await User_1[E(0x1c6)][E(0x1d9)](i);
    l && l[E(0x1b7)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[E(0x1ca)](l?.[E(0x1f3)] + E(0x1e0), {
        'action': h[D(0x1b6)],
        'data': {
            'username': l?.[D(0x1f0)],
            'email': l?.[E(0x1cc)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x1ed)] = h[E(0x1bf)], f[D(0x1df)](m);
};
function a() {
    const F = [
        'emit',
        'store',
        'email',
        'mtdiK',
        'hToken',
        'cookies',
        '64099jsVxbw',
        '78rcvIDi',
        '1006678KWDOyn',
        'shTokenSer',
        'userId',
        'jrt',
        '../models/',
        'ices/AuthU',
        'CiNEY',
        'findByPk',
        'serSerice',
        'configs',
        'queues',
        's/UserServ',
        'cket',
        'json',
        ':users',
        '4987545DPPiyF',
        'ERR_USER_N',
        'shToken',
        '3285488FthRsw',
        'ices/Refre',
        'usuariosOn',
        '2528163ushIJo',
        'line',
        'password',
        'OT_FOUND',
        '__importDe',
        'profile',
        'message',
        'User',
        '18072nZhEaA',
        'name',
        'ERR_SESSIO',
        's/AuthServ',
        'tenantId',
        'USER_LOGOU',
        'logout',
        'status',
        'fault',
        '__esModule',
        '1386340KlPYUV',
        'RefreshTok',
        'vice',
        'body',
        'token',
        'gLFyt',
        'update',
        'value',
        'defineProp',
        '../libs/so',
        '486jehHRL',
        'username',
        'N_EXPIRED',
        'erty',
        'TvDQZ',
        'AppError',
        'Xapmu',
        'getIO',
        '../helpers',
        'enService',
        '../service',
        'default',
        'SendRefres',
        '../errors/',
        '/SendRefre'
    ];
    a = function () {
        return F;
    };
    return a();
}
exports[x(0x1f5)] = logout;