'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf2 * 0x1 + -0x897 + 0x8d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
function a() {
    const A = [
        'protocol',
        'distinct',
        '7530UJgBjL',
        '162204KBcKJu',
        'hasMore',
        'length',
        'lAHNR',
        'toLowerCas',
        '8AkMwmx',
        '917938bhhpBM',
        'KQgDz',
        'LIKE',
        'UhvAe',
        'ls/Ticket',
        'sequelize',
        'JZBMg',
        'VyzvJ',
        'Sequelize',
        '__esModule',
        '3422421YPwRfZ',
        'fault',
        'erty',
        'HHzXz',
        'count',
        'tgKSS',
        'attributes',
        '__importDe',
        'kRpxK',
        'col',
        'protocols',
        '2835382KAApEI',
        'value',
        '2350BGkczG',
        'order',
        'and',
        'defineProp',
        'default',
        'EsUXW',
        'limit',
        '../../mode',
        '443378FAcLre',
        'MpEJo',
        'offset',
        '39Xbfyzg',
        'ntAll',
        'RBUdH',
        'userId',
        'where',
        'DESC',
        'LOWER',
        'contactId',
        '4408090VKoZZo',
        '1jeJpjA',
        'findAndCou',
        'createdAt'
    ];
    a = function () {
        return A;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x14c)) / (0xa * 0x339 + -0x5 * -0x1d7 + 0x1e2 * -0x16) * (-parseInt(u(0x140)) / (-0x2 * 0x443 + -0x8 * -0x5f + 0x590)) + parseInt(u(0x143)) / (-0x209f + 0x2175 + -0xd3) * (parseInt(u(0x152)) / (-0x22 * -0x112 + -0x17f5 + 0x121 * -0xb)) + -parseInt(t(0x138)) / (-0xb9b + 0x205 + 0x99b) * (parseInt(u(0x151)) / (0x292 + -0x329 + 0x9d)) + parseInt(t(0x158)) / (-0x1339 * -0x2 + -0x6b * -0xc + 0x2b6f * -0x1) + parseInt(t(0x157)) / (-0xc * -0x1f9 + 0x2532 * -0x1 + 0xd8e * 0x1) * (parseInt(u(0x162)) / (-0x68d + 0x562 + 0x1c * 0xb)) + parseInt(t(0x14b)) / (-0x1ad6 + -0x1 * -0x60d + 0x14d3) + -parseInt(u(0x136)) / (0xd06 * 0x1 + 0x7 * 0x187 + -0x17ac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa4af3 + -0x68daa + 0x28491));
var __importDefault = this && this[v(0x132) + w(0x12c)] || function (c) {
    const x = w;
    return c && c[x(0x161)] ? c : { 'default': c };
};
const k = {};
k[w(0x137)] = !![], Object[w(0x13b) + v(0x12d)](exports, v(0x161), k);
const sequelize_1 = require(v(0x15d)), Ticket_1 = __importDefault(require(w(0x13f) + v(0x15c))), ListProtocolService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: f
    }) => {
        const y = w, z = v, g = {};
        g[y(0x130)] = z(0x149), g[z(0x141)] = y(0x14f), g[y(0x12e)] = y(0x15a), g[z(0x133)] = function (r, s) {
            return r * s;
        }, g[y(0x13d)] = function (r, s) {
            return r - s;
        }, g[z(0x15b)] = y(0x14a), g[y(0x145)] = y(0x146), g[z(0x15e)] = z(0x14e), g[y(0x159)] = y(0x148), g[z(0x15f)] = function (r, s) {
            return r > s;
        }, g[z(0x155)] = function (r, s) {
            return r + s;
        };
        const h = g, i = {
                'tenantId': f,
                [sequelize_1['Op'][y(0x13a)]]: [
                    { 'protocol': { [sequelize_1['Op']['ne']]: null } },
                    { 'protocol': sequelize_1[y(0x160)][z(0x147)](sequelize_1[z(0x160)]['fn'](h[y(0x130)], sequelize_1[z(0x160)][y(0x134)](h[y(0x141)])), h[z(0x12e)], '%' + searchParam[y(0x156) + 'e']() + '%') }
                ]
            }, j = -0x3 * 0x5d5 + 0xacb + 0x6dc, l = h[y(0x133)](j, h[z(0x13d)](+pageNumber, 0x3e * 0x23 + 0x1816 + -0x683 * 0x5)), m = {};
        m[z(0x147)] = i, m[z(0x131)] = [
            'id',
            h[z(0x141)],
            h[y(0x15b)],
            h[y(0x145)],
            h[z(0x15e)]
        ], m[y(0x13e)] = j, m[y(0x142)] = l, m[z(0x150)] = !![], m[z(0x139)] = [[
                'id',
                h[y(0x159)]
            ]];
        const {
                count: n,
                rows: o
            } = await Ticket_1[z(0x13c)][y(0x14d) + z(0x144)](m), p = h[z(0x15f)](n, h[y(0x155)](l, o[z(0x154)])), q = {};
        return q[z(0x135)] = o, q[z(0x12f)] = n, q[z(0x153)] = p, q;
    };
exports[v(0x13c)] = ListProtocolService;