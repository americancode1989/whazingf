'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1d6)) / (-0x19a9 + 0x3b4 + 0x15f6) * (parseInt(q(0x1ea)) / (0x25f8 + 0x1985 + -0x3f7b)) + -parseInt(r(0x1d1)) / (0x166f * 0x1 + -0x3f4 + -0x1278) * (-parseInt(r(0x1e2)) / (-0x65e * 0x4 + 0x1 * 0x2089 + 0x5f * -0x13)) + -parseInt(r(0x1e5)) / (-0x3 * 0x593 + 0x4 * -0x2e2 + 0xe * 0x205) + parseInt(r(0x1d5)) / (-0x827 * 0x1 + 0x12fe + -0xad1) * (-parseInt(q(0x1e0)) / (-0x12e4 + 0x547 + -0x3 * -0x48c)) + parseInt(r(0x1e3)) / (-0x1b86 + 0xbb * 0x1 + -0x8f1 * -0x3) * (-parseInt(r(0x1e6)) / (0x1eaa + 0xa * 0xfe + -0x7 * 0x5cb)) + -parseInt(q(0x1d8)) / (-0x6 * 0x486 + -0x1ba9 + -0x65 * -0x8b) * (parseInt(r(0x1ef)) / (0xf8 + 0x1d0e + 0x1dfb * -0x1)) + parseInt(r(0x1db)) / (-0x229f + 0x1e8a + 0x421);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc1b18 + -0x2998f + 0x4baf6 * 0x5));
function a() {
    const x = [
        '1232dPNDeD',
        '3746576UzZBIQ',
        'isPublic',
        '5192135emmmFI',
        '9wuhwrd',
        'ERR_NO_PLA',
        '../../mode',
        '__esModule',
        '2124554asgJku',
        'findByPk',
        'ions',
        'ls/Plan',
        'defineProp',
        '11OxhpvE',
        'value',
        'name',
        '459YLIZRe',
        'default',
        'update',
        'maxUsers',
        '6SDCccT',
        '1OUpuiI',
        '__importDe',
        '9018680hDqphP',
        'N_FOUND',
        '../../erro',
        '55289256dHcsaT',
        'rs/AppErro',
        'maxConnect',
        'fault',
        'wUkxK',
        '4181723AXXfgM',
        'erty'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a05 * 0x1 + 0xaa4 + -0x22da);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x1d7) + s(0x1de)] || function (c) {
    const u = t;
    return c && c[u(0x1e9)] ? c : { 'default': c };
};
const k = {};
k[t(0x1cf)] = !![], Object[t(0x1ee) + t(0x1e1)](exports, s(0x1e9), k);
const AppError_1 = __importDefault(require(s(0x1da) + s(0x1dc) + 'r')), Plan_1 = __importDefault(require(t(0x1e8) + s(0x1ed))), UpdatePlanService = async e => {
        const v = t, w = t, f = {};
        f[v(0x1df)] = v(0x1e7) + v(0x1d9);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x1d2)][v(0x1eb)](h);
        if (!o)
            throw new AppError_1[(v(0x1d2))](g[v(0x1df)], 0x2084 + -0x3 * -0x1dd + -0x2487);
        const p = {};
        return p[w(0x1d0)] = i, p[w(0x1d4)] = j, p[w(0x1dd) + v(0x1ec)] = l, p[w(0x1cf)] = m, p[w(0x1e4)] = n, await o[v(0x1d3)](p), o;
    };
exports[s(0x1d2)] = UpdatePlanService;