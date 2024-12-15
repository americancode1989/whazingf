'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xeb)) / (-0xba5 + -0x31c * 0x5 + 0x1b32) * (parseInt(m(0xe7)) / (-0x7 * -0x2e9 + 0x23 * -0x117 + 0x11c8)) + -parseInt(m(0xdf)) / (0x2a + -0x1d2 + 0x1ab * 0x1) + parseInt(m(0xf4)) / (0x1 * 0x131c + 0x187c + -0x2b94 * 0x1) * (parseInt(n(0xec)) / (-0x18b4 + -0x55 + 0x2 * 0xc87)) + -parseInt(m(0xf6)) / (-0x115f + 0x3a9 * 0x7 + -0x83a) * (parseInt(m(0xe1)) / (0x1 * -0x1141 + 0x6bb * -0x1 + 0x1803)) + -parseInt(m(0xe6)) / (-0x16 * -0x8d + -0x168d + 0xa77) + -parseInt(n(0xf2)) / (-0x1fbf + 0x152 * 0xd + 0xe9e) * (parseInt(m(0xe9)) / (0x1be5 + 0x1943 + -0x416 * 0xd)) + parseInt(n(0xde)) / (-0x130a + 0x4 * -0x1a5 + -0x19a9 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1180ea + -0x1 * 0x9cfc1 + 0x1e2df));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x201d + 0xa * 0x382 + -0x21b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xf5) + o(0xf8)] || function (c) {
    const q = o;
    return c && c[q(0xe2)] ? c : { 'default': c };
};
const k = {};
k[o(0xf7)] = !![], Object[p(0xe8) + o(0xf1)](exports, p(0xe2), k);
function a() {
    const t = [
        'erty',
        '9ODUxso',
        'sODop',
        '1035560TQnnEH',
        '__importDe',
        '1398cFYJsE',
        'value',
        'fault',
        'findOne',
        '../../mode',
        '37827416nCUkxJ',
        '1649316AKhoeo',
        'ls/QueueIn',
        '9023BjacYU',
        '__esModule',
        'ERR_NO_DIA',
        '../../erro',
        'rs/AppErro',
        '3229936emNvur',
        '5548pwqmdw',
        'defineProp',
        '11698330ffsoUr',
        'tegrations',
        '233AsikVI',
        '5bMDjqW',
        'destroy',
        'LOG_FOUND',
        'where',
        'default'
    ];
    a = function () {
        return t;
    };
    return a();
}
const QueueIntegrations_1 = __importDefault(require(o(0xdd) + p(0xe0) + p(0xea))), AppError_1 = __importDefault(require(p(0xe4) + p(0xe5) + 'r')), DeleteQueueIntegrationService = async f => {
        const r = o, s = p, g = {};
        g[r(0xf3)] = s(0xe3) + r(0xee);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0xef)] = i;
        const l = await QueueIntegrations_1[s(0xf0)][r(0xdc)](j);
        if (!l)
            throw new AppError_1[(r(0xf0))](h[r(0xf3)], -0x4 * -0x8f3 + -0x1 * 0xb35 + -0x1703);
        await l[r(0xed)]();
    };
exports[o(0xf0)] = DeleteQueueIntegrationService;