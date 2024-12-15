'use strict';
function a() {
    const F = [
        'port',
        's/Statisti',
        'true',
        'userId',
        '__importDe',
        'map',
        'startDate',
        '1007316zZEZIh',
        'jDmBM',
        'tenantId',
        '__esModule',
        '15868HKzbHk',
        'fANiw',
        'wallets',
        '11074230ttZPUw',
        'query',
        'profile',
        'fault',
        'tags',
        'vice',
        'admin',
        'campaign',
        '1632531ytKBnY',
        'sReportSer',
        'value',
        'defineProp',
        '5nNwAFe',
        '2820041nAUanw',
        'json',
        'default',
        'cs/Contact',
        'cs/Tickets',
        'ContactsRe',
        '44oCaLkW',
        'ddds',
        'erty',
        'DashTicket',
        'ice',
        'user',
        '../service',
        'searchPara',
        'sQueues',
        '8CWuyEU',
        '829924oFrlTr',
        'JMCzK',
        'endDate',
        '406818vtqiRZ',
        'QueuesServ',
        'nzcRO',
        'status'
    ];
    a = function () {
        return F;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0xa4)) / (0x41f * 0x1 + 0x21 * -0xf4 + 0x1b56) * (parseInt(w(0x8e)) / (-0x1505 + 0x319 + 0x11ee)) + parseInt(w(0x99)) / (0x133 * 0x3 + -0xb9c + 0x1 * 0x806) + -parseInt(x(0xae)) / (-0x2d * -0x5 + 0x2bb * -0x3 + -0x1 * -0x754) * (-parseInt(w(0x9d)) / (-0x60b * 0x5 + 0x759 + 0x16e3)) + -parseInt(x(0x8a)) / (0x7e1 * -0x1 + -0x2119 + -0x52 * -0x80) + parseInt(x(0x9e)) / (-0x1c8f * -0x1 + 0x1050 + -0x2cd8) * (parseInt(w(0xad)) / (-0x21a9 + -0x1e8d + -0x403e * -0x1)) + parseInt(x(0xb1)) / (-0x5 * -0x4b2 + 0x3b * -0x8f + 0x984) + -parseInt(x(0x91)) / (0xc * 0x7c + 0x735 + -0xcfb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5d0b * 0x2 + 0x1b1 * -0x7c + 0x4440c));
var __importDefault = this && this[y(0xb9) + y(0x94)] || function (c) {
    const A = z;
    return c && c[A(0x8d)] ? c : { 'default': c };
};
const k = {};
k[y(0x9b)] = !![], Object[y(0x9c) + y(0xa6)](exports, z(0x8d), k), exports[z(0xa3) + z(0xb5)] = exports[z(0xa7) + y(0xac)] = void (0x4bb * 0x5 + -0x2 * -0x4a1 + 0x1 * -0x20e9);
const TicketsQueuesService_1 = __importDefault(require(y(0xaa) + y(0xb6) + y(0xa2) + z(0xb2) + y(0xa8))), ContactsReportService_1 = __importDefault(require(y(0xaa) + z(0xb6) + z(0xa1) + z(0x9a) + z(0x96))), DashTicketsQueues = async (d, e) => {
        const B = y, C = y, f = {};
        f[B(0xb3)] = function (r, s) {
            return r === s;
        }, f[C(0xaf)] = C(0x97);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[B(0xa9)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[C(0x92)], q = await (0x2e3 + -0x5 * 0x511 + 0x1 * 0x1672, TicketsQueuesService_1[C(0xa0)])({
                'showAll': g[C(0xb3)](i, g[C(0xaf)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[B(0xb4)](0xb94 + -0x47 * -0x2 + -0xb5a)[B(0x9f)](q);
    };
exports[y(0xa7) + z(0xac)] = DashTicketsQueues;
const ContactsReport = async (e, f) => {
    const D = y, E = z, g = {};
    g[D(0x8b)] = function (u, v) {
        return u === v;
    }, g[E(0x8f)] = E(0xb7);
    const h = g, {tenantId: i} = e[D(0xa9)], j = e[E(0x92)], l = j[D(0xbb)], m = j[D(0xb0)], n = j[E(0x95)] ? j[D(0x95)][E(0xba)](u => parseInt(u)) : undefined, o = j[D(0xa5)] ? j[D(0xa5)][E(0xba)](u => parseInt(u)) : undefined, p = j[D(0xab) + 'm'], q = j[E(0x90)] ? j[E(0x90)][E(0xba)](u => parseInt(u)) : undefined, r = h[E(0x8b)](j[E(0x98)], h[D(0x8f)]), s = {};
    s[D(0xbb)] = l, s[D(0xb0)] = m, s[D(0x95)] = n, s[D(0xa5)] = o, s[D(0x90)] = q, s[E(0x8c)] = i, s[D(0x93)] = e[E(0xa9)][E(0x93)], s[D(0xb8)] = +e[E(0xa9)]['id'], s[D(0xab) + 'm'] = p, s[E(0x98)] = r;
    const t = await (0x13ae + 0x8a4 * 0x4 + -0x363e, ContactsReportService_1[E(0xa0)])(s);
    return f[D(0xb4)](0x56b * -0x1 + -0x76a * 0x1 + 0xd9d)[D(0x9f)](t);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x2605 + -0x1a4f + -0x17 * -0x2d2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[z(0xa3) + z(0xb5)] = ContactsReport;