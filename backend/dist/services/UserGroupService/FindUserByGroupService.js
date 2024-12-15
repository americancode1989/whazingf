'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xa6)) / (-0x2a * -0x9f + 0x227b + -0x286 * 0x18) + -parseInt(n(0xad)) / (-0x6d9 * 0x5 + 0x133 * -0x5 + 0x283e) + parseInt(o(0xb2)) / (-0x1953 + -0x9cd + 0x707 * 0x5) + parseInt(n(0xb0)) / (0x13a3 + -0xe * -0x3e + 0x1 * -0x1703) * (-parseInt(n(0x9f)) / (-0x184e + -0x486 * 0x8 + 0x3c83)) + parseInt(o(0xa8)) / (-0x65a * 0x4 + 0x1537 * 0x1 + 0x437 * 0x1) + parseInt(n(0x9d)) / (0x1ab3 + -0x5 * -0x158 + -0x2164) + -parseInt(n(0xa2)) / (0xc19 + -0x1244 + -0x633 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x66227 + -0x2ed1d * 0x1 + 0x8d * 0x41));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x107f + -0xc32 + -0x3b3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'erty',
        '1618085eXsDbC',
        'where',
        '8545HDGEfu',
        '../../mode',
        'value',
        '2461704qFhUpz',
        'oups',
        '__esModule',
        'groupId',
        '324596yuhDfb',
        'raXQX',
        '2108292xjCBnl',
        'fault',
        'findAll',
        'user',
        'model',
        '658742bANahi',
        'ls/UsersGr',
        'ls/User',
        '444YnAEib',
        '__importDe',
        '466155DSKnYs',
        'default',
        'defineProp',
        'include'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xb1) + p(0xa9)] || function (c) {
    const r = q;
    return c && c[r(0xa4)] ? c : { 'default': c };
};
const k = {};
k[p(0xa1)] = !![], Object[q(0x9a) + p(0x9c)](exports, p(0xa4), k);
const User_1 = __importDefault(require(p(0xa0) + q(0xaf))), UsersGroups_1 = __importDefault(require(p(0xa0) + p(0xae) + p(0xa3))), FindUserByGroupService = async g => {
        const s = p, t = p, h = {};
        h[s(0xa7)] = t(0xab);
        const i = h, j = {};
        j[t(0xa5)] = g;
        const l = {};
        l[t(0xac)] = User_1[t(0xb3)], l['as'] = i[t(0xa7)];
        const m = {};
        return m[t(0x9e)] = j, m[s(0x9b)] = [l], await UsersGroups_1[s(0xb3)][t(0xaa)](m);
    };
exports[q(0xb3)] = FindUserByGroupService;