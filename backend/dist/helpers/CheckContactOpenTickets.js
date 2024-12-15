'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1eb)) / (0x13d + 0x112a * 0x1 + -0x1266) * (parseInt(o(0x1e4)) / (-0x11 * 0x52 + -0x121d + 0x1791)) + -parseInt(o(0x1e2)) / (0x7b6 + -0x3 * -0x27c + -0xf27) * (parseInt(p(0x1f2)) / (-0x889 + 0x65a + 0x233)) + -parseInt(o(0x1e1)) / (0xf27 + 0x2579 + 0x3 * -0x1189) * (parseInt(o(0x1ed)) / (-0x1c13 + -0x56e + 0x2187)) + parseInt(o(0x1de)) / (-0xdbf + -0x39 * 0x47 + -0x1d95 * -0x1) * (-parseInt(o(0x1e6)) / (-0x251 * 0xf + -0x181a + 0x3ae1 * 0x1)) + -parseInt(p(0x1dd)) / (0x18eb + 0xeb9 + -0x279b) + -parseInt(p(0x1f1)) / (0xa6d + -0x1180 * 0x2 + 0x189d) * (-parseInt(p(0x1e3)) / (-0x1f * -0xba + -0x2 * 0xa94 + -0x153 * 0x1)) + parseInt(o(0x1d5)) / (-0x1 * 0x7ed + 0x2f * 0xad + -0x17ca);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x95782 + 0xb3c8d + 0x44396));
function a() {
    const v = [
        'pending',
        '../models/',
        'defineProp',
        '1AOaKsA',
        '__importDe',
        '7974OomEGl',
        'where',
        'findOne',
        'value',
        '3054650aOtrgW',
        '5416hsDCtL',
        'open',
        'ePMmD',
        'status',
        '9290196OXsfNo',
        'Ticket',
        'fault',
        'stringify',
        'erty',
        'contactId',
        'DTPFh',
        '../errors/',
        '698166hbUTrs',
        '56DwvQNJ',
        '__esModule',
        'AppError',
        '395anqIbL',
        '579XtdqXN',
        '11fgSuzu',
        '168704afdqtn',
        'sequelize',
        '147792KsrskT',
        'default'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1ec) + q(0x1d7)] || function (c) {
    const s = q;
    return c && c[s(0x1df)] ? c : { 'default': c };
};
const k = {};
k[r(0x1f0)] = !![], Object[q(0x1ea) + r(0x1d9)](exports, r(0x1df), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1de5 * -0x1 + 0xa * 0x101 + -0x19 * -0xde);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(q(0x1e5)), AppError_1 = __importDefault(require(q(0x1dc) + q(0x1e0))), Ticket_1 = __importDefault(require(q(0x1e9) + r(0x1d6))), CheckContactOpenTickets = async g => {
        const t = q, u = r, h = {};
        h[t(0x1db)] = t(0x1f3), h[u(0x1d3)] = t(0x1e8);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[u(0x1db)],
                    i[u(0x1d3)]
                ]
            }, l = {};
        l[u(0x1da)] = g, l[t(0x1d4)] = j;
        const m = {};
        m[u(0x1ee)] = l;
        const n = await Ticket_1[t(0x1e7)][u(0x1ef)](m);
        if (n)
            throw new AppError_1[(u(0x1e7))](JSON[t(0x1d8)](n), 0x182d + 0x5 * 0x1df + -0x19 * 0x147);
    };
exports[q(0x1e7)] = CheckContactOpenTickets;