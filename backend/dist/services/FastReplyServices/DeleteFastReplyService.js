'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1c2)) / (0x2 * 0xcc1 + -0x18a3 + -0xde) * (-parseInt(o(0x1b5)) / (-0x1c3 * 0xa + -0x1 * 0xf98 + 0x2 * 0x109c)) + -parseInt(o(0x1c1)) / (0x2c * 0x7b + 0x2463 + -0x3984) * (-parseInt(p(0x1c7)) / (-0x25da + 0x15da + 0x1004)) + parseInt(o(0x1bf)) / (-0x14 * 0x28 + 0x7 * -0x541 + 0x27ec) * (-parseInt(o(0x1a8)) / (0x5 * -0x703 + 0x1b91 + 0x784)) + parseInt(p(0x1bd)) / (-0x1 * -0xfd5 + 0xdf * 0x19 + -0x2595 * 0x1) + parseInt(p(0x1b1)) / (-0x2639 + -0x1948 + -0x1 * -0x3f89) * (-parseInt(o(0x1c6)) / (0x646 + -0x57d + -0xc0)) + -parseInt(o(0x1b7)) / (0x2643 * -0x1 + -0x83 * 0x2b + -0x53 * -0xba) * (-parseInt(o(0x1b0)) / (-0x120f + -0x1d * 0xb + -0x7f * -0x27)) + -parseInt(o(0x1c3)) / (-0x1 * 0x1c44 + -0x1344 + 0xcb * 0x3c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf * -0x15f05 + -0x45d14 + -0x27c864 * -0x1));
var __importDefault = this && this[q(0x1ae) + r(0x1ad)] || function (c) {
    const s = q;
    return c && c[s(0x1ab)] ? c : { 'default': c };
};
const k = {};
k[r(0x1bc)] = !![], Object[r(0x1b4) + q(0x1b6)](exports, q(0x1ab), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2e * 0x72 + -0x21d3 * -0x1 + -0x1 * 0xbb1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(r(0x1b2) + q(0x1c4) + 'r')), FastReply_1 = __importDefault(require(q(0x1a6) + q(0x1af) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x1ac)] = u(0x1ba) + t(0x1aa) + u(0x1be), h[u(0x1b9)] = t(0x1c0) + u(0x1c5) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x1a9)] = g;
        const l = {};
        l[t(0x1b3)] = j;
        const m = await FastReply_1[u(0x1bb)][u(0x1b8)](l);
        if (!m)
            throw new AppError_1[(t(0x1bb))](i[u(0x1ac)], 0x2 * -0xc1e + 0x1698 + -0x8 * -0x67);
        try {
            await m[u(0x1a7)]();
        } catch (n) {
            throw new AppError_1[(t(0x1bb))](i[u(0x1b9)], 0x11fc + -0x1b7 * 0x2 + -0xcfa);
        }
    };
exports[r(0x1bb)] = DeleteFastReplyService;
function a() {
    const v = [
        'ERR_NO_FAS',
        'default',
        'value',
        '9760163fDMhho',
        'UND',
        '45cCYohV',
        'ERR_FAST_R',
        '628248PNHMum',
        '507119rVzzoi',
        '6402168xSQmMS',
        'rs/AppErro',
        'EPLY_EXIST',
        '153027siarYa',
        '20VUoetc',
        '../../mode',
        'destroy',
        '923982WRYajz',
        'tenantId',
        'T_REPLY_FO',
        '__esModule',
        'YUYzp',
        'fault',
        '__importDe',
        'ls/FastRep',
        '121laYPKh',
        '632YJnkqz',
        '../../erro',
        'where',
        'defineProp',
        '6StnlRD',
        'erty',
        '248450jOltdG',
        'findOne',
        'kobvf'
    ];
    a = function () {
        return v;
    };
    return a();
}