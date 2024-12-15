'use strict';
const r = b, s = b;
function a() {
    const w = [
        '../../erro',
        '106640wXZRxk',
        'rs/AppErro',
        'findOne',
        'XISTS',
        'fault',
        '1458oYTmyD',
        'ERR_NO_CAM',
        'GN_NOT_IN_',
        'where',
        'canceled',
        'ERR_NO_UPD',
        'hXXiu',
        'tenantId',
        'erty',
        '2761172zvbmdr',
        'ATE_CAMPAI',
        'value',
        '3783900uUBEeK',
        '1777180qKovOL',
        '5FRJJit',
        '9532866wvcwIv',
        'defineProp',
        'destroy',
        'stjOW',
        'PAIGN_FOUN',
        'pending',
        'fGlvH',
        'CUezQ',
        'status',
        'ENDING',
        'ERROR_CAMP',
        'ybBkk',
        'XjiBg',
        'CANCELED_P',
        'AIGN_NOT_E',
        '../../mode',
        '2396402DgPtew',
        'ls/Campaig',
        'default',
        '__importDe',
        '10313415NEBmnn',
        '__esModule'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1da)) / (0xa9e + 0x144d + -0x1eea) + -parseInt(q(0x1c1)) / (-0x1f5e + 0xa8 * -0x21 + 0x3508) + -parseInt(p(0x1d9)) / (0x25db * 0x1 + -0x1956 + 0x1 * -0xc82) + parseInt(q(0x1d6)) / (0x1669 + 0x1c4 * 0x5 + -0x1 * 0x1f39) * (parseInt(q(0x1b0)) / (-0x931 + 0x473 * 0x1 + -0x17 * -0x35)) + parseInt(p(0x1b1)) / (0x9 * 0x266 + -0x1b55 + 0x5c5) + parseInt(q(0x1c5)) / (0x2112 + -0x13 * -0x12e + -0x3775) + parseInt(q(0x1c8)) / (-0x686 + 0x1242 + 0x1c * -0x6b) * (-parseInt(p(0x1cd)) / (-0xa * 0x313 + -0x4c * 0x65 + 0x131 * 0x33));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfb * -0x16a + -0x1488ef + 0x1 * 0x210b4d));
var __importDefault = this && this[r(0x1c4) + s(0x1cc)] || function (c) {
    const t = r;
    return c && c[t(0x1c6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2bf * -0x7 + -0x1a80 + -0x87 * -0x11);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x1d8)] = !![], Object[s(0x1b2) + s(0x1d5)](exports, r(0x1c6), k);
const Campaign_1 = __importDefault(require(s(0x1c0) + r(0x1c2) + 'n')), AppError_1 = __importDefault(require(r(0x1c7) + s(0x1c9) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0x1bd)] = u(0x1ce) + v(0x1b5) + 'D', h[v(0x1bc)] = function (n, o) {
            return n !== o;
        }, h[u(0x1b7)] = v(0x1b6), h[u(0x1d3)] = u(0x1d1), h[u(0x1b8)] = u(0x1d2) + v(0x1d7) + u(0x1cf) + u(0x1be) + u(0x1ba), h[u(0x1b4)] = u(0x1bb) + v(0x1bf) + u(0x1cb);
        const i = h, j = {};
        j['id'] = f, j[u(0x1d4)] = g;
        const l = {};
        l[u(0x1d0)] = j;
        const m = await Campaign_1[u(0x1c3)][u(0x1ca)](l);
        if (!m)
            throw new AppError_1[(u(0x1c3))](i[u(0x1bd)], 0x1e32 + -0x1 * -0x1e33 + -0x3ad1);
        if (i[u(0x1bc)](m?.[u(0x1b9)], i[v(0x1b7)]) && i[u(0x1bc)](m?.[u(0x1b9)], i[u(0x1d3)]))
            throw new AppError_1[(u(0x1c3))](i[v(0x1b8)], -0x6e6 + -0x1087 + -0x1901 * -0x1);
        try {
            await m[v(0x1b3)]();
        } catch (n) {
            throw new AppError_1[(v(0x1c3))](i[u(0x1b4)], 0x21d4 + 0x1ed8 + 0x1508 * -0x3);
        }
    };
exports[r(0x1c3)] = DeleteCampaignService;