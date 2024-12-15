'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x70)) / (0x1 * 0x8b3 + -0x6bc + -0x1f6) + parseInt(r(0x6b)) / (0x3a6 + -0x1b87 + 0x17e3) + -parseInt(s(0x83)) / (-0x353 * 0xb + 0x1211 * 0x2 + 0x72) + -parseInt(r(0x71)) / (0x721 * 0x2 + 0x1 * -0x1fd3 + 0x283 * 0x7) + parseInt(r(0x7f)) / (0x3 * 0xb8 + -0x1f3b + 0x1d18) * (parseInt(r(0x6a)) / (-0xbea + -0x1 * 0x188f + 0x247f * 0x1)) + parseInt(r(0x74)) / (-0x12e7 * -0x2 + 0x1 * -0x15c0 + -0xb * 0x175) + -parseInt(s(0x69)) / (0x222d + -0x86 * 0x11 + 0x119 * -0x17);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb2 * 0xe6a + 0x6 * -0x25eed + 0xb7824));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x640 + -0x47d + 0xb23);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x87) + u(0x67)] || function (c) {
    const v = t;
    return c && c[v(0x68)] ? c : { 'default': c };
};
const k = {};
function a() {
    const y = [
        'IrVXT',
        'hkSOz',
        'rs/AppErro',
        'AmkMz',
        'open',
        'rOpenTicke',
        'DeletedUse',
        'tsStatus',
        'ZOSiw',
        '../../help',
        '435vDqoUx',
        '$get',
        'erty',
        'ls/User',
        '2417652BZDhHT',
        'R_FOUND',
        'ers/Update',
        '../../erro',
        '__importDe',
        '../../mode',
        'findOne',
        'value',
        'zurzN',
        'tickets',
        'defineProp',
        'fault',
        '__esModule',
        '1343632GHCHeh',
        '45636fXPGFR',
        '1055828jEUgoG',
        'default',
        'length',
        'where',
        'tenantId',
        '123849VWWCsg',
        '356480ElOeDB',
        'ERR_NO_USE',
        'destroy',
        '1579949Giqqtv'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[u(0x8a)] = !![], Object[t(0x66) + u(0x81)](exports, u(0x68), k);
const User_1 = __importDefault(require(u(0x88) + u(0x82))), AppError_1 = __importDefault(require(u(0x86) + t(0x77) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(u(0x7e) + u(0x85) + u(0x7b) + u(0x7a) + u(0x7c))), DeleteUserService = async (f, g, h) => {
        const w = u, x = t, i = {};
        i[w(0x7d)] = function (p, q) {
            return p !== q;
        }, i[x(0x75)] = w(0x72) + w(0x84), i[w(0x78)] = x(0x8c), i[x(0x8b)] = x(0x79), i[x(0x76)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[w(0x6f)] = g;
        const m = {};
        m[x(0x6e)] = l;
        const n = await User_1[w(0x6c)][x(0x89)](m);
        if (!n || j[x(0x7d)](g, n[x(0x6f)]))
            throw new AppError_1[(w(0x6c))](j[w(0x75)], -0x8a * -0x17 + 0x2 * -0x1097 + 0x6c * 0x35);
        const o = await n[w(0x80)](j[w(0x78)], {
            'where': {
                'status': j[w(0x8b)],
                'tenantId': g
            }
        });
        j[x(0x76)](o[x(0x6d)], 0x617 + 0x1105 * 0x1 + -0x171c) && (-0x25 * 0x14 + 0x19f4 + 0x48 * -0x52, UpdateDeletedUserOpenTicketsStatus_1[w(0x6c)])(o, g, h), await n[x(0x73)]();
    };
exports[t(0x6c)] = DeleteUserService;