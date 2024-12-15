'use strict';
function a() {
    const w = [
        '8cXShjo',
        '285084lXXuPR',
        'istProtoco',
        'json',
        'erty',
        '536186qbKUWC',
        '77264aCberq',
        'lService',
        '__esModule',
        'default',
        'fault',
        '../service',
        '1885950GCEKiO',
        'defineProp',
        '6NYoYKT',
        'hasMore',
        '1297107LdTgPu',
        'count',
        'listProtoc',
        '1756855lbPJDN',
        's/Protocol',
        'pageNumber',
        '__importDe',
        'value',
        'Services/L',
        'searchPara',
        'query',
        '789668HxXgEm',
        'protocols',
        'tenantId',
        'user'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xe1)) / (-0x1259 + -0x1d8e * -0x1 + 0x1de * -0x6) + parseInt(q(0xf6)) / (0x9 * -0x3f9 + 0x1fde * 0x1 + 0x1 * 0x3e5) + -parseInt(q(0xe7)) / (0x7 * -0x2f1 + 0x4a3 + 0xff7) + -parseInt(p(0xfb)) / (0x27 * 0x28 + -0x2 * 0x1256 + 0x1e98) + -parseInt(q(0xee)) / (0x2 * -0x219 + -0x1 * -0x26da + -0x22a3) * (-parseInt(q(0xe9)) / (-0x2398 + 0x1eb5 + 0x3 * 0x1a3)) + parseInt(p(0xe0)) / (0x3d * 0x83 + 0x28f * 0xf + -0x4591 * 0x1) * (parseInt(p(0xfa)) / (-0xca6 + -0x103f * -0x1 + 0x1 * -0x391)) + parseInt(q(0xeb)) / (0x1d86 + 0x1a55 + -0x37d2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x65b35 + -0x65d1 * 0xb + 0x34593));
var __importDefault = this && this[r(0xf1) + s(0xe5)] || function (c) {
    const t = r;
    return c && c[t(0xe3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x43 * -0x46 + 0x123 + 0x118 * -0x11);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0xf2)] = !![], Object[r(0xe8) + r(0xdf)](exports, r(0xe3), k), exports[r(0xed) + 'ol'] = void (-0x4fc + -0x15fc + 0x1af8);
const ListProtocolService_1 = __importDefault(require(r(0xe6) + s(0xef) + s(0xf3) + s(0xdd) + s(0xe2))), listProtocol = async (e, f) => {
        const u = r, v = s, {tenantId: g} = e[u(0xf9)], {
                searchParam: h,
                pageNumber: i
            } = e[u(0xf5)], j = {};
        j[v(0xf4) + 'm'] = h, j[v(0xf0)] = i, j[u(0xf8)] = g;
        const {
                protocols: l,
                count: m,
                hasMore: n
            } = await (-0x20a1 + 0x1 * -0x1471 + -0x1a89 * -0x2, ListProtocolService_1[v(0xe4)])(j), o = {};
        return o[v(0xf7)] = l, o[v(0xec)] = m, o[u(0xea)] = n, f[v(0xde)](o);
    };
exports[s(0xed) + 'ol'] = listProtocol;