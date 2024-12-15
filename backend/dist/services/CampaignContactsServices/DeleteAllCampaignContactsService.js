'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1e4)) / (0x1172 + -0x42 * 0x4 + -0x1069) + parseInt(s(0x1c2)) / (-0x12 * 0x216 + -0x25 * 0xc0 + 0x414e) * (parseInt(t(0x1cb)) / (-0x95f + 0x6d0 + 0x5e * 0x7)) + -parseInt(s(0x1ce)) / (-0xd39 + -0x1 * 0x1d07 + 0xa * 0x43a) * (parseInt(s(0x1df)) / (-0xfbd + 0xfa5 + 0x1d)) + -parseInt(t(0x1d2)) / (0x133 * 0x1 + -0x1 * 0x1c53 + 0x19 * 0x116) + parseInt(t(0x1dc)) / (0x1fe2 + -0x7 * -0x26f + -0xc39 * 0x4) * (parseInt(s(0x1cf)) / (0x26 * -0xfa + -0xdf8 + 0x331c)) + -parseInt(t(0x1dd)) / (0xd77 + 0x136a + 0x2 * -0x106c) + -parseInt(s(0x1c5)) / (0x3b * 0x95 + -0x103 + -0x2 * 0x10a5) * (-parseInt(s(0x1d9)) / (-0x143 * 0x9 + 0x3 * 0x7a9 + -0xb95));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x87732 + 0x21204 + 0xe * 0xcc16));
function a() {
    const z = [
        '16086tojxtl',
        '4934187mtGOpy',
        'nContacts',
        '8165JqYRBH',
        'campaignId',
        'fault',
        'rs/AppErro',
        '../../erro',
        '516585kmtYSi',
        '6qqTXon',
        'ERR_CAMPAI',
        '../../mode',
        '40IVkmMa',
        'zIxZl',
        'ACESSIBLE',
        'defineProp',
        'oAqxu',
        'destroy',
        '67176wLoXqA',
        '__esModule',
        'tenantId',
        '260ptFbTG',
        '1752VvMjUz',
        'erty',
        'findOne',
        '2315130FbyTGh',
        'ls/Campaig',
        'TS_OR_NOT_',
        'where',
        'GN_CONTACT',
        'S_NOT_EXIS',
        'default',
        '3571469AIZeEL',
        'value',
        '__importDe'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[u(0x1db) + u(0x1e1)] || function (c) {
    const w = v;
    return c && c[w(0x1cc)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xab7 + -0x86 * -0x4 + -0xb0d);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[v(0x1da)] = !![], Object[u(0x1c8) + v(0x1d0)](exports, u(0x1cc), k);
const CampaignContacts_1 = __importDefault(require(u(0x1c4) + v(0x1d3) + u(0x1de))), AppError_1 = __importDefault(require(u(0x1e3) + u(0x1e2) + 'r')), Campaign_1 = __importDefault(require(v(0x1c4) + u(0x1d3) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0x1c9)] = x(0x1c3) + x(0x1d6) + x(0x1d7) + y(0x1d4) + y(0x1c7), j[y(0x1c6)] = x(0x1c3) + y(0x1d6) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[y(0x1cd)] = i;
            const n = {};
            n[x(0x1d5)] = m;
            const o = await Campaign_1[x(0x1d8)][x(0x1d1)](n);
            if (o?.['id']) {
                const p = {};
                p[x(0x1e0)] = h;
                const q = {};
                q[x(0x1d5)] = p, await CampaignContacts_1[x(0x1d8)][y(0x1ca)](q);
            } else
                throw new AppError_1[(y(0x1d8))](l[x(0x1c9)], 0x2279 + -0x2 * -0xf3f + 0x1521 * -0x3);
        } catch (r) {
            throw new AppError_1[(x(0x1d8))](l[x(0x1c6)], -0x982 + -0x6bd + 0x75 * 0x27);
        }
    };
exports[v(0x1d8)] = DeleteAllCampaignContactsService;