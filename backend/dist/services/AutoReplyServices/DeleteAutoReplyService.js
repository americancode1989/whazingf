'use strict';
const u = b, v = b;
function a() {
    const z = [
        'EPLY_RELAT',
        '../../erro',
        'defineProp',
        '__importDe',
        '334889gZwNmv',
        'ERR_NO_AUT',
        'fault',
        '3948655XEaJWv',
        'tenantId',
        'ERR_AUTO_R',
        'ls/Ticket',
        '__esModule',
        'SxVpJ',
        'default',
        '2730770WsKrQy',
        'where',
        'autoReplyI',
        'rs/AppErro',
        '2428149wCVIJz',
        'destroy',
        'erty',
        'UND',
        'zQRie',
        'value',
        'O_REPLY_FO',
        '../../mode',
        'findOne',
        '1322610KAtwkA',
        '15602616LAhJTz',
        '2xcgsgi',
        'ls/AutoRep',
        '806552isbRby',
        'IONED_TICK'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xb6)) / (-0x25d9 + -0x7a3 + -0x1 * -0x2d7d) * (-parseInt(t(0xae)) / (-0x2565 + 0x24 * 0x3 + 0x24fb * 0x1)) + -parseInt(s(0xc4)) / (-0x1 * 0x1431 + 0x2 * -0x1187 + -0x283 * -0x16) + -parseInt(t(0xb0)) / (0x1 * 0xa5d + 0x71a + -0x5d1 * 0x3) + -parseInt(t(0xb9)) / (0xc6f * -0x1 + -0x6a5 + 0x1319) + parseInt(s(0xcd)) / (0x5 * 0x1d + 0x9e6 + -0xa71) + parseInt(t(0xc0)) / (-0x1 * 0x2414 + -0x10b3 + 0x34ce) + parseInt(s(0xce)) / (0x33 * -0x31 + -0x65 * -0x3d + -0xe46);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xaafa * -0xe + -0x334c1 * 0x2 + -0x21 * -0xac9d));
var __importDefault = this && this[u(0xb5) + u(0xb8)] || function (c) {
    const w = u;
    return c && c[w(0xbd)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc77 * -0x2 + 0xd5e * -0x1 + -0xae2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0xc9)] = !![], Object[v(0xb4) + v(0xc6)](exports, v(0xbd), k);
const AutoReply_1 = __importDefault(require(v(0xcb) + v(0xaf) + 'ly')), AppError_1 = __importDefault(require(u(0xb3) + v(0xc3) + 'r')), Ticket_1 = __importDefault(require(v(0xcb) + v(0xbc))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0xc8)] = y(0xbb) + x(0xb2) + x(0xb1) + 'ET', j[x(0xbe)] = y(0xb7) + x(0xca) + x(0xc7);
        const l = j, m = {};
        m['id'] = h, m[y(0xba)] = i;
        const n = {};
        n[x(0xc1)] = m;
        const o = await AutoReply_1[y(0xbf)][y(0xcc)](n), p = {};
        p[y(0xc2) + 'd'] = h;
        const q = {};
        q[y(0xc1)] = p;
        const r = await Ticket_1[x(0xbf)][x(0xcc)](q);
        if (r)
            throw new AppError_1[(y(0xbf))](l[y(0xc8)], 0xa85 + 0x7 * 0x174 + -0x131d);
        if (!o)
            throw new AppError_1[(y(0xbf))](l[x(0xbe)], -0x149d + -0x1a53 + 0x73 * 0x6c);
        await o[x(0xc5)]();
    };
exports[u(0xbf)] = DeleteAutoReplyService;