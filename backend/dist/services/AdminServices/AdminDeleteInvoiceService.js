'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xff)) / (-0x2223 + -0x1 * -0x1079 + -0x1 * -0x11ab) * (parseInt(m(0x105)) / (0x9 * 0x450 + 0xfbb * -0x1 + -0x1713)) + parseInt(m(0xfd)) / (0x2af * 0x1 + 0xfbe + -0x126a) * (parseInt(m(0x108)) / (-0x1862 + 0x13 * -0x1b3 + 0x38af)) + parseInt(n(0xf4)) / (0x3a7 + -0x26a4 + 0x1181 * 0x2) * (parseInt(m(0x107)) / (0xd3c + -0x14f9 + 0x1 * 0x7c3)) + parseInt(n(0xfb)) / (-0x20ec + 0x333 + 0x1dc0) + -parseInt(m(0xf6)) / (-0x769 * 0x1 + -0x8 * 0x2c2 + -0x1 * -0x1d81) + parseInt(n(0xfc)) / (0x1 * -0x215f + 0x6 * -0x2a5 + 0x35 * 0xee) + -parseInt(m(0xf5)) / (-0x1 * -0x1921 + 0x1c2e + 0xd * -0x419);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe615 + 0x44059 * 0x1 + 0x7f28 * 0x2));
var __importDefault = this && this[o(0xfa) + p(0x103)] || function (c) {
    const q = p;
    return c && c[q(0xf7)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa53 + -0x34 * 0x35 + -0x75 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const t = [
        '5Ytbwbu',
        'destroy',
        'HzHxc',
        'findOne',
        'fault',
        'where',
        '294770RPncxv',
        'ls/Invoice',
        '1556358RFgubX',
        '55876JZByRD',
        '../../erro',
        '../../mode',
        'rs/AppErro',
        'OICE_FOUND',
        'value',
        'defineProp',
        '5nBiCVe',
        '11959520ZPxyTa',
        '154456WTWXaZ',
        '__esModule',
        'ERR_NO_INV',
        'default',
        '__importDe',
        '364154CpbFAP',
        '2360007DorfWl',
        '66dIYmKX',
        'erty'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0xf2)] = !![], Object[o(0xf3) + o(0xfe)](exports, o(0xf7), k);
const AppError_1 = __importDefault(require(p(0xee) + p(0xf0) + 'r')), Invoices_1 = __importDefault(require(p(0xef) + o(0x106) + 's')), AdminDeleteInvoiceService = async ({invoiceId: f}) => {
        const r = p, s = p, g = {};
        g[r(0x101)] = s(0xf8) + s(0xf1);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x104)] = i;
        const l = await Invoices_1[s(0xf9)][s(0x102)](j);
        if (!l)
            throw new AppError_1[(s(0xf9))](h[s(0x101)], -0xcb5 + -0x49 * -0x3b + -0x28a);
        await l[r(0x100)]();
    };
exports[o(0xf9)] = AdminDeleteInvoiceService;