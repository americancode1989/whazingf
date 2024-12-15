'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1f3)) / (0x50c + 0x81d + -0xd28 * 0x1) + parseInt(m(0x208)) / (-0x1 * 0x10ff + -0x7ce + 0x18cf) + -parseInt(m(0x1f5)) / (0x2180 + -0x9e8 + -0x1795) * (parseInt(n(0x20c)) / (-0x392 * -0x9 + -0x1 * 0x61e + -0x1a00)) + -parseInt(m(0x1f0)) / (-0x1 * -0x350 + -0xb1 * 0x2f + 0x1d34) * (parseInt(m(0x1f6)) / (0xec8 + -0x1b63 * -0x1 + -0x2a25)) + -parseInt(m(0x1f2)) / (0x1 * 0xe8d + 0x17d3 + 0x2659 * -0x1) + -parseInt(m(0x1fb)) / (0x6b * 0x1 + -0xa73 + -0x17 * -0x70) * (parseInt(m(0x202)) / (-0x7 * -0x247 + 0x1ddd + 0x1 * -0x2dc5)) + parseInt(m(0x209)) / (0x2 * 0x77e + -0x580 + 0x3 * -0x326) * (parseInt(n(0x201)) / (0x12 * 0x17d + 0x4ee * 0x4 + -0x2e77));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1e07 * 0x3 + 0x6df8e + 0xb178 * 0x5));
function a() {
    const t = [
        'destroy',
        '3VmMuTe',
        '437946ZrWyml',
        '../../../m',
        'erty',
        'P_AUTO_REP',
        'fault',
        '2536gNsgnq',
        'LY_FOUND',
        'odels/Step',
        'default',
        'where',
        'findOne',
        '121JemQoB',
        '21717kZBJVF',
        '__esModule',
        'sReply',
        'FwhnJ',
        '../../../e',
        'value',
        '217964iYoVQn',
        '3734210wNblPa',
        '__importDe',
        'rror',
        '1987184eciLaX',
        'rrors/AppE',
        'defineProp',
        '45mPvMtk',
        'ERR_NO_STE',
        '8665034eSZLfp',
        '405570hWAfID'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x20a) + o(0x1fa)] || function (c) {
    const q = o;
    return c && c[q(0x203)] ? c : { 'default': c };
};
const k = {};
k[p(0x207)] = !![], Object[o(0x1ef) + p(0x1f8)](exports, p(0x203), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xd3 + 0x18b0 + -0x3 * 0x709);
        let h = e[f];
        return h;
    }, b(c, d);
}
const StepsReply_1 = __importDefault(require(p(0x1f7) + o(0x1fd) + o(0x204))), AppError_1 = __importDefault(require(o(0x206) + p(0x20d) + p(0x20b))), DeleteStepsReplyService = async f => {
        const r = o, s = o, g = {};
        g[r(0x205)] = r(0x1f1) + s(0x1f9) + s(0x1fc);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x1ff)] = i;
        const l = await StepsReply_1[r(0x1fe)][r(0x200)](j);
        if (!l)
            throw new AppError_1[(s(0x1fe))](h[r(0x205)], 0x1 * 0x11fd + -0x233 + -0xe36);
        await l[s(0x1f4)]();
    };
exports[o(0x1fe)] = DeleteStepsReplyService;