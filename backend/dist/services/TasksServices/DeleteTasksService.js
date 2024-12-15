'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1e9)) / (-0x824 + 0xb8d + -0x368) * (-parseInt(n(0x1d4)) / (-0xe01 + 0x222c + -0x1429)) + parseInt(m(0x1db)) / (0x7e4 + 0x23a5 + -0x2b86) * (-parseInt(m(0x1d0)) / (0x2 * -0x43a + -0x3c0 + -0x1 * -0xc38)) + parseInt(n(0x1e3)) / (-0x8d1 + 0x9b * 0x1b + -0x783) + parseInt(m(0x1de)) / (-0x3f * 0x2d + 0x1 * 0x1db2 + -0x1299) * (parseInt(m(0x1e1)) / (-0x1f19 + -0x1653 + 0x3573)) + -parseInt(m(0x1d2)) / (0x25 * 0x63 + 0x1 * -0x1a7b + 0xc34) * (parseInt(n(0x1d5)) / (-0xc0d + -0x29 * 0x32 + 0x1418)) + -parseInt(m(0x1df)) / (-0x1bc4 + 0x3 * -0x676 + -0x8 * -0x5e6) + parseInt(n(0x1e5)) / (0xe68 + 0x1a41 + -0x289e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xc6645 + 0xc57bd + -0xe89c5));
function a() {
    const t = [
        '../../mode',
        'defineProp',
        'ls/Tasks',
        '33IeLOmj',
        'rs/AppErro',
        '__esModule',
        '12akIkRA',
        '4354670Sjzcrr',
        'default',
        '2508737JKBnkk',
        'fault',
        '1595190apvOGv',
        '__importDe',
        '22796785PzsRKv',
        'BqAnK',
        'value',
        'findOne',
        '89397UwsLmb',
        'where',
        '../../erro',
        '464840cwSeaW',
        'K_FOUND',
        '8NhMPXD',
        'erty',
        '6WfnUis',
        '8945424ehoHPL',
        'ERR_NO_TAS',
        'destroy'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x1e4) + p(0x1e2)] || function (c) {
    const q = p;
    return c && c[q(0x1dd)] ? c : { 'default': c };
};
const k = {};
k[p(0x1e7)] = !![], Object[o(0x1d9) + o(0x1d3)](exports, o(0x1dd), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x479 * 0x2 + 0x12bb + 0xd * -0x9d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tasks_1 = __importDefault(require(p(0x1d8) + p(0x1da))), AppError_1 = __importDefault(require(o(0x1eb) + p(0x1dc) + 'r')), DeleteTasksService = async f => {
        const r = o, s = o, g = {};
        g[r(0x1e6)] = s(0x1d6) + r(0x1d1);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x1ea)] = i;
        const l = await Tasks_1[s(0x1e0)][r(0x1e8)](j);
        if (!l)
            throw new AppError_1[(r(0x1e0))](h[r(0x1e6)], -0xb3 * -0x15 + 0x2102 + -0x2e1d);
        await l[s(0x1d7)]();
    };
exports[p(0x1e0)] = DeleteTasksService;