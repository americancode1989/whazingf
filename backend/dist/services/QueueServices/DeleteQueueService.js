'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x10a)) / (-0x1 * -0x27 + 0x144a + -0x1470) + -parseInt(p(0x10b)) / (0xb55 + -0x4a3 * 0x2 + 0x20d * -0x1) * (parseInt(p(0x104)) / (-0x23fa + -0x1313 + 0x4 * 0xdc4)) + -parseInt(o(0x10f)) / (0x694 * 0x4 + -0x1 * 0x1b59 + -0x10d * -0x1) * (parseInt(p(0x11c)) / (0xaa2 + 0x2bd * 0xb + 0x2c * -0xed)) + parseInt(p(0x111)) / (-0x1d64 + -0x7 * 0xe9 + -0x1 * -0x23c9) * (-parseInt(o(0x119)) / (-0xe40 + 0x1ef0 + -0x10a9)) + parseInt(o(0x106)) / (-0x1 * 0x811 + -0x74 * 0x31 + 0x1e4d) * (parseInt(o(0x109)) / (-0xc97 + -0x260e + 0x32ae)) + -parseInt(p(0x115)) / (0xaaa + 0x8f * 0x39 + -0x2a77) + parseInt(o(0x107)) / (-0x19 * 0xc9 + 0x1808 + -0x45c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9c348 + 0x179cc * -0x6 + -0x33 * -0x8a8f));
var __importDefault = this && this[q(0x11b) + r(0x10e)] || function (c) {
    const s = q;
    return c && c[s(0x110)] ? c : { 'default': c };
};
const k = {};
k[r(0x101)] = !![], Object[r(0x103) + r(0x116)](exports, q(0x110), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x22f6 + -0x1f * 0x1b + -0x1 * -0x273a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Queue_1 = __importDefault(require(r(0x11a) + r(0x11f))), AppError_1 = __importDefault(require(q(0x10d) + q(0x102) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x105)] = t(0x11d) + u(0x113), h[t(0x11e)] = u(0x114) + u(0x117) + t(0x100);
        const i = h, j = {};
        j['id'] = f, j[u(0x112)] = g;
        const l = {};
        l[t(0x108)] = j;
        const m = await Queue_1[t(0x118)][u(0x10c)](l);
        if (!m)
            throw new AppError_1[(u(0x118))](i[u(0x105)], 0x22de + 0xa * 0xc7 + -0x2910);
        try {
            await m[u(0xff)]();
        } catch (n) {
            throw new AppError_1[(t(0x118))](i[u(0x11e)], 0x131b + 0x14e7 * 0x1 + -0x1 * 0x266e);
        }
    };
exports[r(0x118)] = DeleteQueueService;
function a() {
    const v = [
        '9pzgLxB',
        '221968ysbonB',
        '2319258nCABqD',
        'findOne',
        '../../erro',
        'fault',
        '2960224pCePMq',
        '__esModule',
        '18VQYyav',
        'tenantId',
        'UE_FOUND',
        'ERR_QUEUE_',
        '8426080PQQPJb',
        'erty',
        'TICKET_EXI',
        'default',
        '178444WtIpit',
        '../../mode',
        '__importDe',
        '5QILYmJ',
        'ERR_NO_QUE',
        'xtvuR',
        'ls/Queue',
        'destroy',
        'STS',
        'value',
        'rs/AppErro',
        'defineProp',
        '3FWUDTJ',
        'wBucX',
        '2247704iJnAiQ',
        '31952217vSLRQO',
        'where'
    ];
    a = function () {
        return v;
    };
    return a();
}