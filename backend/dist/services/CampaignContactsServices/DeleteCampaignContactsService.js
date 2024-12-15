'use strict';
function a() {
    const A = [
        '10285173lmycXk',
        'model',
        'campaignId',
        '3037015RtgERt',
        '258890ZVCeYM',
        'destroy',
        '351404PSmQPL',
        '6ewSUNZ',
        '__importDe',
        '1204005kNBWXD',
        'GN_CONTACT',
        'tenantId',
        'zqtJV',
        '8puWQDY',
        'nContacts',
        'S_NOT_EXIS',
        'fault',
        'OUND',
        'defineProp',
        '8567482uiaQrE',
        'ERR_NO_CAM',
        'ERR_CAMPAI',
        'where',
        '__esModule',
        'include',
        'ACTS_NOT_F',
        '../../mode',
        'rs/AppErro',
        'default',
        'findOne',
        '4947188vbqKZY',
        'contactId',
        'erty',
        'required',
        'value',
        'PAIGN_CONT',
        '../../erro',
        'ls/Campaig',
        'ZTHjP',
        '3tYUlMz'
    ];
    a = function () {
        return A;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x169)) / (-0x15a0 + -0xe35 + -0x116 * -0x21) + parseInt(t(0x166)) / (-0x1665 + -0x1b1 * 0x3 + 0x1b7a) * (parseInt(t(0x15f)) / (-0x4 * -0x2f6 + -0x665 * -0x1 + -0x1 * 0x123a)) + -parseInt(u(0x17e)) / (-0xf31 + -0xa15 + 0x194a) + parseInt(t(0x163)) / (0xb3c * 0x2 + 0x45 + 0x2 * -0xb5c) * (parseInt(t(0x167)) / (-0x27e + 0x9f + -0x5 * -0x61)) + -parseInt(u(0x173)) / (-0x19ee + -0x1151 + 0x2b46) + -parseInt(u(0x16d)) / (0x1e03 * -0x1 + 0x1 * 0x692 + 0x7d3 * 0x3) * (-parseInt(t(0x160)) / (0x131 * 0x15 + 0x2 * 0x103f + -0x397a)) + -parseInt(u(0x164)) / (0x113e * -0x2 + -0xa0e + -0x12 * -0x27a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x129480 + -0x5 * 0x2366e + -0x25235 * -0x11));
var __importDefault = this && this[v(0x168) + v(0x170)] || function (c) {
    const x = v;
    return c && c[x(0x177)] ? c : { 'default': c };
};
const k = {};
k[w(0x182)] = !![], Object[v(0x172) + v(0x180)](exports, w(0x177), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b25 + -0x1 * 0x7b5 + -0x1211);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CampaignContacts_1 = __importDefault(require(v(0x17a) + v(0x185) + v(0x16e))), AppError_1 = __importDefault(require(v(0x184) + w(0x17b) + 'r')), Campaign_1 = __importDefault(require(w(0x17a) + w(0x185) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = v, z = w, l = {};
        l[y(0x186)] = z(0x174) + z(0x183) + z(0x179) + y(0x171), l[y(0x16c)] = y(0x175) + z(0x16a) + z(0x16f) + 'TS';
        const m = l, n = {};
        n[y(0x162)] = h, n[z(0x17f)] = i;
        const o = {};
        o['id'] = h, o[z(0x16b)] = j;
        const p = {};
        p[y(0x161)] = Campaign_1[y(0x17c)], p[y(0x181)] = !![], p[z(0x176)] = o;
        const q = {};
        q[y(0x176)] = n, q[z(0x178)] = [p];
        const r = await CampaignContacts_1[y(0x17c)][z(0x17d)](q);
        if (!r)
            throw new AppError_1[(z(0x17c))](m[z(0x186)], 0x2543 * -0x1 + 0x1 * -0x22f3 + -0x1 * -0x49ca);
        try {
            await r[z(0x165)]();
        } catch (s) {
            throw new AppError_1[(y(0x17c))](m[y(0x16c)], -0xf * 0x223 + -0xae2 + 0x2c83);
        }
    };
exports[v(0x17c)] = DeleteCampaignContactsService;