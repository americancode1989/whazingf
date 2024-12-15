'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * -0x1 + -0x6d * -0x5 + -0x114);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x116)) / (-0x5da + -0x13a7 + 0x1982) + parseInt(l(0x115)) / (-0x209 * 0x1 + 0x96e * -0x1 + 0xb79) + -parseInt(m(0x11a)) / (0x1 * 0xfd1 + -0x2703 + -0x1 * -0x1735) + -parseInt(m(0x123)) / (-0x798 + 0x409 * -0x2 + -0xdf * -0x12) * (parseInt(l(0x113)) / (0x1 * 0x1c93 + -0xb5b + 0x1133 * -0x1)) + parseInt(m(0x11c)) / (0x1 * -0x3fb + 0x26f7 + 0x6fe * -0x5) + parseInt(l(0x120)) / (-0x3d * 0x5b + 0x1 * 0x12ff + -0x2b7 * -0x1) + parseInt(l(0x114)) / (-0x1be0 + 0x1 * 0xfd7 + 0xc11);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xd5b35 + 0xe86c + -0x500c0));
function a() {
    const s = [
        'value',
        '395034HBWOdP',
        '../../mode',
        '3669978YkfTzf',
        'fault',
        'name',
        '__esModule',
        '669620mxExAh',
        'tenantId',
        'erty',
        '21016nCkmDL',
        '__importDe',
        'create',
        'userId',
        'default',
        'ls/AutoRep',
        '590PkZmEX',
        '1058504ehWsiE',
        '2230086yKBCmy',
        '596084BlCulU',
        'defineProp',
        'action'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x124) + n(0x11d)] || function (c) {
    const p = o;
    return c && c[p(0x11f)] ? c : { 'default': c };
};
const k = {};
k[n(0x119)] = !![], Object[n(0x117) + n(0x122)](exports, o(0x11f), k);
const AutoReply_1 = __importDefault(require(o(0x11b) + o(0x112) + 'ly')), CreateAutoReplyService = async ({
        name: d,
        action: e,
        userId: f,
        tenantId: g
    }) => {
        const q = o, r = o, h = {};
        h[q(0x11e)] = d, h[r(0x118)] = e, h[q(0x110)] = f, h[q(0x121)] = g;
        const i = await AutoReply_1[r(0x111)][q(0x125)](h);
        return i;
    };
exports[n(0x111)] = CreateAutoReplyService;