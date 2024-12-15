'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x18d)) / (-0x131e + 0x12b5 + 0x6a) + -parseInt(M(0x187)) / (0x1 * -0x1958 + 0xbb * 0x1a + 0x65c) + -parseInt(L(0x15b)) / (0x4 * -0x50e + 0x35 * 0xb3 + -0x10d4) + parseInt(L(0x185)) / (-0x12 * -0x158 + 0x20b1 + -0x38dd) * (-parseInt(L(0x15c)) / (0x554 * -0x4 + -0x1 * -0xcb + 0x148a)) + -parseInt(L(0x159)) / (0x2a * -0x83 + -0x1 * -0x215f + -0xbdb) * (-parseInt(L(0x184)) / (-0x158e + 0x1 * 0x2477 + 0x2 * -0x771)) + parseInt(M(0x180)) / (-0x49c + -0x4db * -0x7 + -0x1d59) + -parseInt(M(0x195)) / (0xb8 * -0x5 + 0x2 * -0x9b + 0x4d7) * (-parseInt(M(0x19a)) / (0x1 * 0xdd5 + -0x1346 + 0x57b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x159b8e + 0x39 * 0x4bc8 + -0x1b8746));
var __importDefault = this && this[N(0x18f) + N(0x19c)] || function (c) {
    const P = O;
    return c && c[P(0x15f)] ? c : { 'default': c };
};
const k = {};
function a() {
    const S = [
        'LBPxo',
        './ShowTick',
        'ckkhO',
        '8990144XnfJzY',
        'ers/socket',
        '../../help',
        'warn',
        '10005275ZMEuhk',
        '292AwxaZl',
        'lastMessag',
        '811052kEIcez',
        'findAll',
        'update',
        'jdPaW',
        'NpEJn',
        'FjkTO',
        '1400211Evjbeh',
        'floor',
        '__importDe',
        'type',
        'findOne',
        'answered',
        'ls/Tenant',
        'order',
        '27dGdacN',
        'open',
        'key',
        'ao\x20realiza',
        'NONpV',
        '2450150HLoAbW',
        'etService',
        'fault',
        'vqtaL',
        'oPjzF',
        's/logger',
        'mbnHE',
        'value',
        'tenantId',
        'upcGw',
        'Emit',
        'QxCVy',
        'name',
        'r\x20atualiza',
        'default',
        'ls/Ticket',
        '6PCyRnj',
        'erty',
        '963669jMyqHX',
        '30370CQjmdZ',
        'ls/Setting',
        'defineProp',
        '__esModule',
        'kilkU',
        'r:\x20',
        'stringify',
        'dKpNQ',
        'xIXtT',
        'status',
        'wkfKG',
        'kvyCz',
        'ticket:upd',
        'eAt',
        'enabled',
        '../../mode',
        'aYRKI',
        'autoPendin',
        'payload',
        'ASC',
        'ate',
        'nPuAk',
        'now',
        'wpQpa',
        'ket:\x20',
        'ção\x20do\x20tic',
        'where',
        ':::\x20Error\x20',
        '../../util',
        'pending',
        'ctWvb',
        'gTime',
        'logger'
    ];
    a = function () {
        return S;
    };
    return a();
}
k[N(0x1a1)] = !![], Object[N(0x15e) + N(0x15a)](exports, O(0x15f), k);
const logger_1 = require(O(0x178) + N(0x19f)), Ticket_1 = __importDefault(require(O(0x16b) + N(0x158))), Setting_1 = __importDefault(require(N(0x16b) + N(0x15d))), Tenant_1 = __importDefault(require(O(0x16b) + O(0x193))), ShowTicketService_1 = __importDefault(require(O(0x17e) + N(0x19b))), socketEmit_1 = __importDefault(require(N(0x182) + O(0x181) + N(0x1a4))), FindUpdateTicketsautoPending = async () => {
        const Q = N, R = N, n = {
                'nPuAk': Q(0x155),
                'wpQpa': R(0x16f),
                'aYRKI': R(0x16d) + 'g',
                'kvyCz': Q(0x16d) + Q(0x17b),
                'kilkU': function (o, p) {
                    return o === p;
                },
                'QxCVy': Q(0x16a),
                'ckkhO': Q(0x196),
                'oPjzF': function (o, p) {
                    return o === p;
                },
                'NONpV': function (o, p) {
                    return o / p;
                },
                'jdPaW': function (o, p) {
                    return o / p;
                },
                'FjkTO': function (o, p) {
                    return o * p;
                },
                'xIXtT': function (o, p) {
                    return o(p);
                },
                'ctWvb': function (o, p) {
                    return o > p;
                },
                'wkfKG': function (o, p) {
                    return o - p;
                },
                'LBPxo': R(0x179),
                'vqtaL': R(0x168) + Q(0x170),
                'upcGw': function (o, p) {
                    return o + p;
                },
                'NpEJn': Q(0x177) + R(0x198) + R(0x156) + R(0x175) + Q(0x174),
                'dKpNQ': function (o, p) {
                    return o + p;
                },
                'mbnHE': Q(0x177) + R(0x198) + R(0x161)
            };
        try {
            const o = {};
            o[R(0x194)] = [[
                    n[R(0x171)],
                    n[Q(0x173)]
                ]];
            const p = await Tenant_1[R(0x157)][R(0x188)](o);
            for (const q of p) {
                const r = q['id'], s = {};
                s[R(0x197)] = n[Q(0x16c)], s[R(0x1a2)] = r;
                const t = {};
                t[Q(0x176)] = s;
                const u = await Setting_1[R(0x157)][Q(0x191)](t), v = {};
                v[R(0x197)] = n[R(0x167)], v[R(0x1a2)] = r;
                const w = {};
                w[R(0x176)] = v;
                const x = await Setting_1[Q(0x157)][R(0x191)](w);
                if (n[R(0x160)](u?.[R(0x1a1)], n[Q(0x154)])) {
                    const y = {};
                    y[Q(0x1a2)] = r, y[R(0x165)] = n[Q(0x17f)];
                    const z = {};
                    z[R(0x176)] = y;
                    const A = await Ticket_1[Q(0x157)][R(0x188)](z);
                    for (const B of A) {
                        if (n[Q(0x19e)](B[R(0x192)], !![]))
                            continue;
                        const C = Math[R(0x18e)](n[Q(0x199)](Date[R(0x172)](), 0x326 * 0x5 + 0x261b + -0x31f1)), D = Math[R(0x18e)](n[Q(0x18a)](B[Q(0x186) + Q(0x169)], -0x106f + -0x2c5 * -0x7 + 0x3d * 0x4)), E = x ? n[Q(0x18c)](n[R(0x164)](parseInt, x[R(0x1a1)]), 0x61 * 0x17 + -0x26e * 0x1 + 0x1 * -0x60d) : -0x18ea + -0x19ba + 0x32a4;
                        if (n[R(0x17a)](n[Q(0x166)](C, D), E))
                            try {
                                const F = {};
                                F[Q(0x165)] = n[Q(0x17d)], await B[Q(0x189)](F);
                                const G = {};
                                G['id'] = B['id'], G[Q(0x1a2)] = B[R(0x1a2)];
                                const H = await (-0x37 * 0xa + 0x7 * 0x3d6 + -0x18b4, ShowTicketService_1[R(0x157)])(G), I = {};
                                I[Q(0x1a2)] = B[R(0x1a2)], I[R(0x190)] = n[Q(0x19d)], I[R(0x16e)] = H, (-0x12fd * 0x1 + 0x3 * -0x789 + 0x2998, socketEmit_1[R(0x157)])(I);
                            } catch (J) {
                                logger_1[Q(0x17c)][R(0x183)](n[Q(0x1a3)](n[Q(0x18b)], JSON[R(0x162)](J)));
                            }
                    }
                }
            }
        } catch (K) {
            logger_1[Q(0x17c)][Q(0x183)](n[Q(0x163)](n[R(0x1a0)], JSON[Q(0x162)](K)));
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5c1 * 0x3 + -0xcf1 + -0x2fe);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[O(0x157)] = FindUpdateTicketsautoPending;