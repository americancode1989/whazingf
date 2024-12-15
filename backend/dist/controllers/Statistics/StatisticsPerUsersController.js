'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x172)) / (-0x91f + 0x1cac + -0x138c) + parseInt(m(0x16e)) / (-0x2478 + 0x225c * -0x1 + 0x1 * 0x46d6) * (parseInt(m(0x173)) / (0x2067 + -0x5af + -0x1ab5)) + parseInt(l(0x177)) / (-0x29 * 0x45 + -0x2f * 0x59 + 0x2 * 0xdb4) * (parseInt(m(0x17c)) / (0xb * -0x382 + 0x69e + 0x1ffd)) + -parseInt(l(0x16d)) / (-0x2089 + 0x1b7 * -0x10 + 0x3bff) * (parseInt(m(0x175)) / (-0x1415 + 0x1025 * -0x1 + 0x2441)) + parseInt(l(0x182)) / (0x21bf + 0x2f * -0x1a + 0x1 * -0x1cf1) + -parseInt(l(0x176)) / (0xc73 + 0x6d4 + 0x1 * -0x133e) + parseInt(l(0x179)) / (-0x1 * 0x242 + 0x2ca * 0xc + -0x1f2c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x4eac3 + 0x2 * 0x62deb + -0x586e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16 * 0x17f + 0xf92 + -0x2f10);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'erty',
        'tenantId',
        '__importDe',
        '792956gheHmO',
        '591plqOPu',
        'default',
        '651021OJpiVJ',
        '3828150KwILHn',
        '3267788pdrBau',
        'index',
        '1102240xYkJyS',
        'query',
        'fault',
        '5KZRTLn',
        'json',
        'value',
        'user',
        'isticsPerU',
        '__esModule',
        '4257808WctzRT',
        'endDate',
        '../../serv',
        'startDate',
        'ices/Stati',
        'sers',
        'stics/Stat',
        'defineProp',
        '6TRKpNA',
        '3218YwiPip'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x171) + n(0x17b)] || function (c) {
    const p = n;
    return c && c[p(0x181)] ? c : { 'default': c };
};
const k = {};
k[o(0x17e)] = !![], Object[n(0x16c) + n(0x16f)](exports, o(0x181), k), exports[n(0x178)] = void (-0x27 + -0x23f8 + -0x7 * -0x529);
const StatisticsPerUsers_1 = __importDefault(require(n(0x184) + o(0x186) + n(0x188) + o(0x180) + n(0x187))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0x17f)], {
                startDate: g,
                endDate: h
            } = d[r(0x17a)], i = {};
        i[r(0x185)] = g, i[r(0x183)] = h, i[q(0x170)] = f;
        const j = await (0x1f9 * 0x7 + 0x1724 + -0xc51 * 0x3, StatisticsPerUsers_1[r(0x174)])(i);
        return e[q(0x17d)](j);
    };
exports[o(0x178)] = index;