'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdce + 0x652 + 0xa * -0x1f2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
function a() {
    const v = [
        'ls/ApiConf',
        'fault',
        '114SvbUlR',
        'default',
        '../../mode',
        '8427353sTIfvn',
        'findAll',
        'name',
        '37971JPWNbj',
        '34223cflECb',
        'ASC',
        '4352825veJIDw',
        '649965ShMnLa',
        '348078ppQrCB',
        'order',
        'RBfOn',
        'value',
        'OsUmC',
        '10mfyOGu',
        '20oACDxp',
        'apis',
        '887600KGTdGK',
        'where',
        '__esModule',
        'erty',
        '__importDe',
        'tenantId',
        '824lhAoam',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xc1)) / (-0x199 + -0x1 * 0x14d5 + 0x166f) + parseInt(p(0xac)) / (-0x10c4 + -0x12b + 0x11f1) + parseInt(o(0xc0)) / (0xd7 * 0x4 + -0x235a + 0x2001) * (parseInt(o(0xc7)) / (0x1 * 0x1d53 + -0x1778 + -0x5 * 0x12b)) + parseInt(p(0xbf)) / (-0x52b + -0x262b + -0xb * -0x3f1) + parseInt(o(0xb6)) / (0x2 * 0x120d + -0x2687 + 0x3 * 0xd1) * (-parseInt(p(0xbd)) / (-0xc99 + 0x1486 + 0x3 * -0x2a2)) + -parseInt(p(0xb2)) / (0x1739 * -0x1 + -0xf8c + -0x2b * -0xe7) * (parseInt(p(0xbc)) / (-0x6a * -0x13 + -0x167 * -0x5 + -0x8 * 0x1db)) + -parseInt(p(0xc6)) / (-0x1b + -0x1287 + -0x12ac * -0x1) * (parseInt(o(0xb9)) / (0xa3 * 0x1 + 0xf8e + 0x813 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x167acf + -0x134279 + 0x2d9d * 0x12b));
var __importDefault = this && this[q(0xb0) + q(0xb5)] || function (c) {
    const s = r;
    return c && c[s(0xae)] ? c : { 'default': c };
};
const k = {};
k[q(0xc4)] = !![], Object[q(0xb3) + q(0xaf)](exports, r(0xae), k);
const ApiConfig_1 = __importDefault(require(q(0xb8) + q(0xb4) + 'ig')), ListApiConfigService = async ({tenantId: g}) => {
        const t = r, u = q, h = {};
        h[t(0xc3)] = t(0xbb), h[t(0xc5)] = t(0xbe);
        const i = h, j = {};
        j[u(0xb1)] = g;
        const l = {};
        l[t(0xad)] = j, l[u(0xc2)] = [[
                i[t(0xc3)],
                i[u(0xc5)]
            ]];
        const m = await ApiConfig_1[t(0xb7)][u(0xba)](l), n = {};
        return n[t(0xc8)] = m, n;
    };
exports[r(0xb7)] = ListApiConfigService;