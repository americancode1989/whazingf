'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x10b)) / (-0x61e + 0x3c7 + -0x19 * -0x18) + parseInt(n(0x11b)) / (0x2043 + 0x26f * -0xb + -0x57c) * (parseInt(m(0x116)) / (-0x25ab * -0x1 + -0x1 * -0x1c08 + -0x41b0)) + parseInt(m(0x111)) / (0x38 * -0x6f + -0x1b25 + 0x3371) + -parseInt(n(0x108)) / (0x39b + 0x2c * -0x43 + 0x7ee) * (-parseInt(n(0x113)) / (0x477 * 0x3 + 0x24d1 + -0x16 * 0x248)) + -parseInt(m(0x10e)) / (-0x20af + -0x1 * 0x79a + 0x2850) * (parseInt(n(0x11f)) / (0x792 + 0x2c4 * -0x1 + -0x4c6)) + -parseInt(m(0x119)) / (0x4 * -0x8ba + 0xdc7 * 0x2 + 0x763) + -parseInt(n(0x120)) / (-0x11ff + 0x1 * 0x180e + -0x605);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa2807 * 0x1 + 0x10fe3 + 0xa18f * 0x1));
function a() {
    const t = [
        '__esModule',
        '4105952xaAeHn',
        '../../mode',
        '6BammmF',
        'ERR_NO_PLA',
        '__importDe',
        '39VwEjxD',
        'ls/Invoice',
        'XNRVK',
        '1337472dsJcle',
        'erty',
        '93174ufoAMT',
        'fault',
        '../../erro',
        'default',
        '432872EuCxFh',
        '25525300QSLYOI',
        'rs/AppErro',
        'update',
        '3321905lchczW',
        'defineProp',
        'status',
        '1235316gqsRLp',
        'N_FOUND',
        'value',
        '7VkIKwe',
        'findByPk'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x115) + p(0x11c)] || function (c) {
    const q = p;
    return c && c[q(0x110)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x204f + -0x19ab * -0x1 + 0xda * 0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x10d)] = !![], Object[p(0x109) + p(0x11a)](exports, o(0x110), k);
const AppError_1 = __importDefault(require(o(0x11d) + p(0x106) + 'r')), Invoices_1 = __importDefault(require(p(0x112) + p(0x117) + 's')), UpdateInvoiceService = async e => {
        const r = p, s = o, f = {};
        f[r(0x118)] = r(0x114) + s(0x10c);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[s(0x11e)][s(0x10f)](h);
        if (!j)
            throw new AppError_1[(s(0x11e))](g[s(0x118)], -0x1451 + -0x7ba + -0x1 * -0x1d9f);
        const l = {};
        return l[r(0x10a)] = i, await j[r(0x107)](l), j;
    };
exports[p(0x11e)] = UpdateInvoiceService;