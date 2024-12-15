'use strict';
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Y(0x1d4)) / (-0x397 * -0x8 + 0xf35 + -0x752 * 0x6) + -parseInt(Y(0x1ba)) / (0x1f3 * -0x9 + -0x227b + -0x25 * -0x168) + parseInt(Y(0x19b)) / (0xddf + 0x1 * 0xedb + -0x1cb7) + -parseInt(Y(0x1bc)) / (0x14 * 0x1c1 + -0x5 * 0x1a3 + -0x3d7 * 0x7) * (parseInt(Z(0x198)) / (0x1 * -0x6f9 + -0x1fb5 * -0x1 + -0x25 * 0xab)) + -parseInt(Y(0x1d8)) / (-0x1fd + 0x16d6 + -0x14d3 * 0x1) * (-parseInt(Z(0x183)) / (-0x1b1f + -0x367 * 0x7 + 0x32f7)) + parseInt(Y(0x1b0)) / (0xd79 * -0x1 + -0xe49 + 0x1bca) * (parseInt(Y(0x1af)) / (-0x1 * -0x1254 + 0x5f2 * 0x1 + 0x49 * -0x55)) + parseInt(Z(0x1c3)) / (-0x882 * -0x1 + -0x1c31 + 0x13b9) * (-parseInt(Z(0x1b6)) / (-0xa * -0xc3 + 0xb30 + -0x12c3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x57942 + -0x151 * -0x971 + 0x84769 * -0x1));
var __importDefault = this && this[a0(0x1db) + a1(0x19c)] || function (c) {
    const a2 = a1;
    return c && c[a2(0x1c8)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xaa8 + 0x1 * 0x7eb + -0x13 * 0xe6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[a1(0x1c9)] = !![], Object[a0(0x1a7) + a1(0x1b2)](exports, a0(0x1c8), s);
const sequelize_1 = require(a1(0x18a)), date_fns_1 = require(a0(0x187)), Ticket_1 = __importDefault(require(a0(0x1ad) + a0(0x1ae))), UsersQueues_1 = __importDefault(require(a0(0x1ad) + a0(0x181) + a1(0x1c0))), User_1 = __importDefault(require(a1(0x1ad) + a1(0x1cb))), Contact_1 = __importDefault(require(a0(0x1ad) + a1(0x1ac))), Queue_1 = __importDefault(require(a1(0x1ad) + a0(0x199))), TicketsQueuesService = async ({
        dateStart: p,
        dateEnd: q,
        status: r,
        userId: t,
        queuesIds: u,
        tenantId: v,
        showAll: w
    }) => {
        const a3 = a1, a4 = a1, x = {};
        x[a3(0x1cd)] = a3(0x18d), x[a4(0x1a2)] = a3(0x1d2), x[a4(0x1bd)] = a4(0x1aa), x[a4(0x1a6)] = a3(0x19d), x[a4(0x197)] = a3(0x1c6), x[a4(0x1cc)] = a3(0x1ce) + a4(0x1e0), x[a4(0x1be)] = a3(0x1b5), x[a3(0x1a9)] = a3(0x191), x[a4(0x1a3)] = a4(0x1de), x[a3(0x1c4)] = function (K, L) {
            return K && L;
        }, x[a4(0x1b7)] = function (K, L) {
            return K === L;
        }, x[a3(0x1b9)] = a3(0x1c2), x[a3(0x1b8)] = a3(0x1dd), x[a3(0x1d6)] = function (K, L) {
            return K > L;
        }, x[a4(0x1a5)] = function (K, L) {
            return K !== L;
        }, x[a3(0x1c5)] = a4(0x1a8), x[a3(0x195)] = function (K, L) {
            return K !== L;
        }, x[a3(0x182)] = a4(0x1e5), x[a3(0x18c)] = a4(0x1e2), x[a3(0x1d5)] = function (K, L) {
            return K === L;
        }, x[a3(0x18b)] = a4(0x194), x[a4(0x1d7)] = a4(0x185), x[a4(0x1a0)] = a3(0x1c7), x[a3(0x196)] = a3(0x1e4), x[a3(0x1dc)] = function (K, L) {
            return K === L;
        }, x[a4(0x1bf)] = a3(0x1e1), x[a4(0x1b1)] = a3(0x1bb), x[a4(0x1e3)] = a4(0x1a1), x[a3(0x189)] = a4(0x1ca);
        const y = x, z = {};
        z[a4(0x1b3)] = v;
        const A = z, B = {};
        B[a3(0x19e)] = Contact_1[a3(0x1ab)], B['as'] = y[a4(0x1bd)], B[a3(0x18f)] = [
            'id',
            y[a4(0x1a6)],
            y[a4(0x197)],
            y[a3(0x1cc)]
        ];
        const C = {};
        C[a4(0x1df) + 'n'] = y[a4(0x1be)], C[a3(0x18f)] = [
            'id',
            y[a4(0x1a6)]
        ];
        const D = {};
        D[a3(0x19e)] = User_1[a3(0x1ab)], D['as'] = y[a3(0x1a9)], D[a4(0x18f)] = [
            'id',
            y[a3(0x1a6)],
            y[a3(0x1a3)]
        ];
        const E = [
                B,
                C,
                D
            ], F = {};
        F[a4(0x1b3)] = v;
        const G = {};
        G[a3(0x1a4)] = F;
        const H = await Queue_1[a4(0x1ab)][a4(0x1cf)](G);
        if (y[a3(0x1c4)](H, !w)) {
            if (y[a4(0x1b7)](y[a4(0x1b9)], y[a4(0x1b8)])) {
                const L = { [D['Op']['in']]: F };
                C[a3(0x192)] = L;
            } else {
                const L = {};
                L[a4(0x184)] = t;
                const M = {};
                M[a4(0x1a4)] = L;
                const N = await UsersQueues_1[a3(0x1ab)][a4(0x1c1)](M);
                let O = N[a4(0x1d9)](Q => Q[a3(0x1d1)]);
                u && y[a4(0x1d6)](u[a4(0x193)], -0x3 * 0x768 + 0x210e + -0x92 * 0x13) && (y[a4(0x1a5)](y[a4(0x1c5)], y[a4(0x1c5)]) ? C = D[a4(0x1b4)](R => G[a3(0x19a)](R[a3(0x18e)]())) : O = O[a3(0x1b4)](R => u[a4(0x19a)](R[a4(0x18e)]())));
                if (y[a3(0x1b7)](O[a3(0x193)], 0x198b + 0x6cc + 0x2057 * -0x1)) {
                    if (y[a4(0x195)](y[a4(0x182)], y[a3(0x18c)]))
                        return [];
                    else {
                        const S = {
                            [C['Op']['in']]: [
                                y[a3(0x1cd)],
                                y[a3(0x1a2)]
                            ]
                        };
                        B[a3(0x192)] = S;
                    }
                }
                const P = { [sequelize_1['Op']['in']]: O };
                A[a3(0x1d1)] = P;
            }
        }
        if (r && y[a4(0x1d6)](r[a3(0x193)], 0x1a82 + 0x25da + -0x405c)) {
            if (y[a4(0x1d5)](y[a3(0x18b)], y[a3(0x1d7)]))
                return [];
            else {
                const T = { [sequelize_1['Op']['in']]: r };
                A[a4(0x192)] = T;
            }
        } else {
            if (y[a4(0x1a5)](y[a4(0x1a0)], y[a3(0x196)])) {
                const U = {
                    [sequelize_1['Op']['in']]: [
                        y[a3(0x1cd)],
                        y[a3(0x1a2)]
                    ]
                };
                A[a4(0x192)] = U;
            } else
                k[a3(0x188)] = {
                    [l['Op'][a4(0x1d3)]]: [
                        +(0x1 * 0x10b4 + 0x1c17 + -0x2ccb, m[a3(0x19f)])((-0x1 * -0x1bbf + 0xb * -0x3 + -0x1b9e, n[a4(0x1d0)])(I)),
                        +(0x65 * -0x5d + -0xb95 + 0x3046, p[a3(0x1da)])((0x77c + -0xcf7 + 0x3d * 0x17, q[a4(0x1d0)])(r))
                    ]
                };
        }
        if (y[a4(0x1c4)](p, q)) {
            if (y[a3(0x1dc)](y[a3(0x1bf)], y[a4(0x1b1)])) {
                const X = {};
                return X[a3(0x1ab)] = j, D && F[a3(0x1c8)] ? G : X;
            } else
                A[a4(0x188)] = {
                    [sequelize_1['Op'][a4(0x1d3)]]: [
                        +(-0xc * -0x19c + -0xd3c * 0x1 + -0x614, date_fns_1[a4(0x19f)])((0x1e * -0x9d + -0x2350 + 0x35b6, date_fns_1[a3(0x1d0)])(p)),
                        +(0x256 * 0xd + 0x15 * 0x133 + -0x378d, date_fns_1[a4(0x1da)])((0x1e7b * 0x1 + -0x4d * 0x2a + -0x11d9, date_fns_1[a3(0x1d0)])(q))
                    ]
                };
        }
        const I = {};
        I[a4(0x1a4)] = A, I[a4(0x186)] = E, I[a4(0x190)] = [[
                y[a4(0x1e3)],
                y[a3(0x189)]
            ]];
        const J = await Ticket_1[a4(0x1ab)][a4(0x1c1)](I);
        return J;
    };
exports[a1(0x1ab)] = TicketsQueuesService;
function a() {
    const a5 = [
        'open',
        'toString',
        'attributes',
        'order',
        'user',
        'status',
        'length',
        'iNEdN',
        'BKapV',
        'pALIs',
        'wCvas',
        '45CCiIvT',
        'ls/Queue',
        'includes',
        '1969128niwPdA',
        'fault',
        'name',
        'model',
        'startOfDay',
        'cEgLr',
        'updatedAt',
        'IvEZd',
        'UNnaB',
        'where',
        'znEZK',
        'ftHiF',
        'defineProp',
        'jBIrd',
        'yvnHl',
        'contact',
        'default',
        'ls/Contact',
        '../../mode',
        'ls/Ticket',
        '18NBWdVB',
        '4571312dazpRF',
        'UmzGs',
        'erty',
        'tenantId',
        'filter',
        'whatsapp',
        '99vhlXLJ',
        'WoXwY',
        'jfxUX',
        'xqbjW',
        '1454274CsRxkq',
        'gdhfE',
        '276116bbHkJd',
        'cqsjA',
        'PmBdd',
        'GtgSM',
        'eues',
        'findAll',
        'NMWFb',
        '256210HCqLYH',
        'teIlc',
        'pZfQH',
        'number',
        'ATUix',
        '__esModule',
        'value',
        'DESC',
        'ls/User',
        'XuMZo',
        'LXHuF',
        'profilePic',
        'count',
        'parseISO',
        'queueId',
        'pending',
        'between',
        '762640gcLRCc',
        'qcIeu',
        'AMjiE',
        'Broiv',
        '5970WrlzcB',
        'map',
        'endOfDay',
        '__importDe',
        'hLyRh',
        'eCHOd',
        'profile',
        'associatio',
        'Url',
        'vtvDc',
        'cWUFY',
        'xvyYW',
        'tNgUE',
        'FCqhR',
        'ls/UsersQu',
        'Rfxvw',
        '8253hTHuls',
        'userId',
        'yzxkA',
        'include',
        'date-fns',
        'createdAt',
        'nVIvo',
        'sequelize',
        'reimM',
        'suTWw'
    ];
    a = function () {
        return a5;
    };
    return a();
}