'use strict';
const x = b, y = b;
function a() {
    const E = [
        'planId',
        'create',
        '3461640tWWDsm',
        'name',
        '40875lSQOqB',
        '9174847pIckwW',
        'createdAt',
        'Invoices',
        'ogger',
        '30CqychP',
        'tenantId',
        '10kQeKuW',
        'lLYBw',
        '104kdtmoo',
        '../models/',
        'ate',
        'noSnH',
        '10807DQEoTt',
        'count',
        'open',
        'status',
        '__importDe',
        'logger',
        'Plan',
        'Error\x20Veri',
        'format',
        'InvoiceCre',
        'Finalized\x20',
        'duration',
        'Tgldp',
        'asDays',
        'erty',
        'updatedAt',
        'dueDate',
        'diff',
        '4226895RaofTa',
        'Tenant',
        'removeOnCo',
        '7312077XcZxGK',
        'findAll',
        'detail',
        'every',
        '389557eTaDaS',
        'jobId',
        '28YQqYmh',
        'iated',
        'oices\x20Init',
        'fy\x20Invoice',
        'findByPk',
        'RzKcq',
        'error',
        'Ryhne',
        'removeOnFa',
        '../utils/l',
        'RXwUW',
        'moment',
        'ZSDkl',
        'defineProp',
        'Verify\x20Inv',
        'message',
        'sequelize',
        'info',
        'map',
        'repeat',
        'JmAEa',
        'like',
        'DD/MM/yyyy',
        'mplete',
        'default',
        'value',
        'fault',
        'GsBKg',
        'YYYY-MM-DD',
        '__esModule'
    ];
    a = function () {
        return E;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x183)) / (-0xbda + -0x217 + 0xdf2) * (parseInt(v(0x17f)) / (-0x1db * -0xe + 0x1230 + -0x2c28)) + -parseInt(v(0x176)) / (-0x5f * -0x2b + 0xb0b + -0x1afd) * (-parseInt(w(0x19e)) / (-0x644 + 0xb3 * -0x2e + 0x4a * 0x85)) + -parseInt(w(0x195)) / (0x132f + -0x2aa + -0x1080) + -parseInt(w(0x17b)) / (0x1a82 + 0x1 * 0x180b + -0x3287) * (parseInt(v(0x19c)) / (0x23f8 + 0x26ca + -0x1 * 0x4abb)) + parseInt(w(0x174)) / (0x7 * 0x135 + 0x6 * -0x46 + -0x6c7) + parseInt(w(0x198)) / (0x2038 + -0x1bdc + 0x9 * -0x7b) * (parseInt(v(0x17d)) / (0x249b + 0x1e4 + 0x2675 * -0x1)) + parseInt(w(0x177)) / (-0x15da + 0x28 * 0x80 + 0x5 * 0x61);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb9f0 + -0xa434c + -0x1 * -0x10ff90));
var __importDefault = this && this[x(0x187) + y(0x16e)] || function (c) {
    const z = x;
    return c && c[z(0x171)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x239f + -0x3b0 * -0x8 + -0x111 * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0x16d)] = !![], Object[y(0x161) + y(0x191)](exports, y(0x171), k);
const Tenant_1 = __importDefault(require(y(0x180) + x(0x196))), Plan_1 = __importDefault(require(x(0x180) + y(0x189))), logger_1 = require(x(0x15d) + y(0x17a)), moment_1 = __importDefault(require(x(0x15f))), Invoices_1 = __importDefault(require(y(0x180) + y(0x179))), sequelize_1 = require(y(0x164)), l = {};
l[x(0x19b)] = (-0x254b + 0xd8d + -0x365 * -0x7) * (-0x54a + -0x1965 + 0x1 * 0x1eeb) * (-0x69 + -0xb * 0x20f + -0x3a * -0x77);
const m = {};
m[y(0x197) + x(0x16b)] = !![], m[y(0x15c) + 'il'] = ![], m[y(0x19d)] = y(0x18c) + y(0x181), m[x(0x167)] = l, exports[y(0x16c)] = {
    'key': x(0x18c) + y(0x181),
    'options': m,
    async 'handle'() {
        const A = y, B = x, e = {};
        e[A(0x16f)] = A(0x16a), e[B(0x15e)] = function (g, h) {
            return g < h;
        }, e[A(0x18f)] = function (g, h) {
            return g + h;
        }, e[B(0x182)] = A(0x170), e[A(0x168)] = function (g, h) {
            return g === h;
        }, e[A(0x15b)] = A(0x185), e[B(0x159)] = A(0x162) + B(0x1a0) + B(0x19f), e[B(0x17e)] = A(0x18d) + A(0x179), e[B(0x160)] = B(0x18a) + A(0x1a1) + 's';
        const f = e;
        try {
            logger_1[A(0x188)][B(0x165)](f[A(0x159)]);
            const g = await Tenant_1[B(0x16c)][A(0x199)]();
            g[B(0x166)](async h => {
                const C = A, D = B, {dueDate: i} = h, j = (-0xbcf + -0x376 + -0x517 * -0x3, moment_1[C(0x16c)])(i)[D(0x18b)](), n = (0x20bb + 0x1f02 + -0x3fbd, moment_1[C(0x16c)])()[C(0x18b)](), o = (-0x7ad * -0x3 + -0x28 * 0x20 + -0x1207, moment_1[C(0x16c)])((0x21a + -0x237c + 0x2162, moment_1[D(0x16c)])())[C(0x18b)](f[D(0x16f)]), p = (0x1 * 0x143e + -0x1146 + -0x13 * 0x28, moment_1[C(0x16c)])(i)[C(0x18b)](f[C(0x16f)]), q = (-0xdf * 0x17 + -0xb3b * 0x1 + -0x17 * -0x15c, moment_1[C(0x16c)])(p, f[C(0x16f)])[D(0x194)]((0x810 + -0xab9 + 0x2a9, moment_1[D(0x16c)])(o, f[C(0x16f)])), r = moment_1[D(0x16c)][D(0x18e)](q)[C(0x190)]();
                if (f[C(0x15e)](r, -0x836 + -0x1a3f + 0x2289)) {
                    const s = await Plan_1[C(0x16c)][C(0x158)](h[D(0x172)]), t = await Invoices_1[C(0x16c)][D(0x184)]({
                            'where': {
                                'tenantId': h['id'],
                                'dueDate': { [sequelize_1['Op'][C(0x169)]]: f[C(0x18f)]((-0x2 * -0x1196 + -0x7 * 0xcc + -0x3b3 * 0x8, moment_1[D(0x16c)])(i)[D(0x18b)](f[D(0x182)]), '%') }
                            }
                        });
                    if (f[C(0x168)](t, -0x1790 + 0x222d + -0x8f * 0x13)) {
                        const u = {};
                        u[D(0x19a)] = s[D(0x175)], u[D(0x186)] = f[C(0x15b)], u[D(0x16d)] = s[D(0x16d)], u[C(0x192)] = n, u[D(0x178)] = n, u[D(0x193)] = j, u[D(0x17c)] = h['id'], await Invoices_1[C(0x16c)][D(0x173)](u);
                    }
                }
            }), logger_1[A(0x188)][B(0x165)](f[B(0x17e)]);
        } catch (h) {
            const i = {};
            i[B(0x163)] = f[B(0x160)], i[A(0x15a)] = h, logger_1[B(0x188)][A(0x15a)](i);
            throw new Error(h);
        }
    }
};