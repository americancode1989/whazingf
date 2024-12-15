'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1aad * 0x1 + 0x729 + -0xaf3 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x10a)) / (0x22c3 + -0x13 + -0x22af) * (-parseInt(m(0x105)) / (-0x1a8e + 0x6c8 + 0x13c8)) + parseInt(m(0x115)) / (0x78d * 0x5 + -0x15 * 0x77 + 0xd * -0x227) * (-parseInt(m(0x10f)) / (-0x1424 * -0x1 + -0xf3e * -0x2 + -0x329c)) + -parseInt(m(0x111)) / (-0x25 * 0xd3 + 0xd * 0x22c + 0x248) * (parseInt(m(0x10d)) / (-0x2 * 0xfc8 + -0xc02 + -0x117 * -0x28)) + -parseInt(n(0x10b)) / (0x1 * -0x683 + -0x1d8 * 0x8 + 0x6d * 0x32) * (parseInt(n(0x106)) / (0xb + -0x1b5 + 0x1 * 0x1b2)) + parseInt(n(0x119)) / (-0xb29 * -0x2 + -0xf72 + -0x6d7) + parseInt(n(0x10e)) / (0xf * 0x54 + 0x492 + 0xdc * -0xb) + parseInt(n(0x101)) / (0x1895 + -0x2671 + 0xde7) * (parseInt(m(0x110)) / (0xbb3 + -0x1633 * -0x1 + -0x26b * 0xe));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5f011 + 0x1 * -0x4a2e3 + 0x109de4));
function a() {
    const t = [
        '28uIdXeW',
        '398436fPPjdI',
        '19555FWYXsT',
        'userId',
        'defineProp',
        'erty',
        '34395UFcRIl',
        '__esModule',
        'color',
        'default',
        '1057275PagoUs',
        'tenantId',
        'isActive',
        'queue',
        'create',
        '11nDCFdl',
        'integratio',
        'value',
        'nId',
        '454uhfSnw',
        '16xxaNKu',
        'fault',
        '__importDe',
        '../../mode',
        '190AfTVlE',
        '1223047jpHBeI',
        'ls/Queue',
        '186YGuUiF',
        '7531460ratRxo'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x108) + p(0x107)] || function (c) {
    const q = p;
    return c && c[q(0x116)] ? c : { 'default': c };
};
const k = {};
k[p(0x103)] = !![], Object[p(0x113) + o(0x114)](exports, p(0x116), k);
const Queue_1 = __importDefault(require(p(0x109) + o(0x10c))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        color: g,
        tenantId: h,
        integrationId: i
    }) => {
        const r = p, s = p, j = {};
        j[r(0xff)] = d, j[r(0xfe)] = e, j[r(0x112)] = f, j[s(0x117)] = g, j[r(0xfd)] = h, j[r(0x102) + r(0x104)] = i;
        const l = await Queue_1[s(0x118)][s(0x100)](j);
        return l;
    };
exports[p(0x118)] = CreateQueueService;