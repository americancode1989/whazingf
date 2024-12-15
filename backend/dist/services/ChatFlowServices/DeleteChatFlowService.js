'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1c2)) / (-0x222a + 0x1db0 + 0x47b) * (parseInt(s(0x1c6)) / (0x2121 + -0x21b3 + 0x94)) + -parseInt(r(0x1dd)) / (-0xcb2 + -0x7d2 + 0x1487) + -parseInt(r(0x1c9)) / (0x21d * 0x7 + 0x956 + 0x181d * -0x1) + -parseInt(s(0x1db)) / (-0x1ed7 + -0x25a6 * 0x1 + 0x4482) * (-parseInt(r(0x1d3)) / (0x16d9 + -0x1 * 0x1800 + 0x12d)) + parseInt(r(0x1c0)) / (-0x1c19 * 0x1 + 0x1cf8 + 0x12 * -0xc) + parseInt(r(0x1d7)) / (-0x19 * 0x16d + -0x1 * 0x1471 + 0x381e) * (-parseInt(r(0x1df)) / (0x1d88 + -0x154f + 0x10 * -0x83)) + parseInt(r(0x1e1)) / (0x1881 + -0x17e4 + -0x7 * 0x15);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc53 * 0xb9 + 0x42631 + -0x26269));
function a() {
    const y = [
        '5479686dFjunt',
        'promisify',
        'oGMAy',
        'rs/AppErro',
        '24vLGUlQ',
        'defineProp',
        'attributes',
        'isDeleted',
        '5RlHwNE',
        'value',
        '2111574FJYvLf',
        'reload',
        '4098438rzynLa',
        'T_FLOW_FOU',
        '1417100RtFfEr',
        'writeFile',
        '__esModule',
        '../../mode',
        '6906501KuswJp',
        'erty',
        '3iFBwRx',
        'fault',
        'vvmxF',
        'tenantId',
        '546230OgYVxX',
        'ls/ChatFlo',
        '../../erro',
        '366576XDEFIw',
        'ERR_NO_CHA',
        'mpXhB',
        'findOne',
        'update',
        'isActive',
        'where',
        'util',
        '__importDe',
        'default'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1e2f + 0xa98 + -0xaab * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x1d1) + t(0x1c3)] || function (c) {
    const v = t;
    return c && c[v(0x1e3)] ? c : { 'default': c };
};
const k = {};
k[t(0x1dc)] = !![], Object[t(0x1d8) + t(0x1c1)](exports, u(0x1e3), k);
const util_1 = require(u(0x1d0)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x1bf) + u(0x1c7) + 'w')), AppError_1 = __importDefault(require(t(0x1c8) + u(0x1d6) + 'r')), writeFileAsync = (0x1f11 + -0xe * -0x97 + 0x2753 * -0x1, util_1[t(0x1d4)])(fs_1[t(0x1e2)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = u, x = t, j = {};
        j[w(0x1cb)] = x(0x1ca) + x(0x1e0) + 'ND', j[x(0x1d5)] = w(0x1ce), j[w(0x1c4)] = w(0x1da);
        const l = j, m = {};
        m['id'] = h, m[x(0x1c5)] = i;
        const n = {};
        n[w(0x1cf)] = m;
        const o = await ChatFlow_1[w(0x1d2)][w(0x1cc)](n);
        if (!o)
            throw new AppError_1[(w(0x1d2))](l[w(0x1cb)], -0x1 * -0x17cd + 0x6ad * -0x1 + -0xc7 * 0x14);
        const p = {};
        p[x(0x1ce)] = ![], p[x(0x1da)] = !![], await o[w(0x1cd)](p);
        const q = {};
        q[w(0x1d9)] = [
            l[w(0x1d5)],
            l[x(0x1c4)]
        ], await o[w(0x1de)](q);
    };
exports[u(0x1d2)] = DeleteChatFlowService;