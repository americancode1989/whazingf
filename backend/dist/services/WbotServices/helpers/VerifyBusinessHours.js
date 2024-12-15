'use strict';
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Y(0x1fb)) / (0xd * 0xe3 + -0x11 * 0x40 + -0x746) * (-parseInt(Y(0x196)) / (-0x17 * -0x197 + 0x1660 + -0x3aef)) + parseInt(Y(0x17c)) / (0x1c2 + 0x129e + 0x145d * -0x1) + -parseInt(Z(0x1e3)) / (-0xc8 * -0x5 + 0x131 * 0x19 + -0x21ad) * (parseInt(Y(0x16e)) / (-0x3 * -0xa1 + -0x192a * -0x1 + -0x15a * 0x14)) + parseInt(Y(0x1de)) / (0x1 * 0x1777 + -0x3 * 0x28c + -0x1 * 0xfcd) + parseInt(Z(0x18c)) / (0x80 + 0x1ede + -0x71 * 0x47) + -parseInt(Z(0x173)) / (-0x51 * 0x6f + -0x57c * -0x1 + 0x1dab) * (parseInt(Z(0x1d1)) / (-0x26c8 + -0x1275 + 0x3946 * 0x1)) + parseInt(Y(0x184)) / (-0x25bb + 0x26a6 + -0x2d * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8e704 + 0x74fe7 + -0x122f1 * 0x1));
var __importDefault = this && this[a0(0x1a7) + a1(0x19b)] || function (c) {
    const a2 = a0;
    return c && c[a2(0x1af)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x2f6 + -0x1 * 0x15c1 + 0xd00 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[a1(0x19d)] = !![], Object[a1(0x1a0) + a1(0x1a6)](exports, a1(0x1af), k);
const date_fns_1 = require(a0(0x187)), ShowBusinessHoursAndMessageService_1 = __importDefault(require(a1(0x166) + a1(0x19f) + a1(0x1c6) + a0(0x1e8) + a1(0x17f) + a0(0x16d))), CreateMessageSystemService_1 = __importDefault(require(a1(0x195) + a1(0x16f) + a0(0x193) + a1(0x158) + a1(0x18a))), database_1 = __importDefault(require(a1(0x17a) + a0(0x18e))), sequelize_1 = require(a0(0x1a4)), Setting_1 = __importDefault(require(a0(0x197) + a0(0x16b) + a1(0x1d4))), CreateLogTicketService_1 = __importDefault(require(a0(0x1e9) + a0(0x1e6) + a1(0x1f8) + a1(0x1f7) + a0(0x167))), socketEmit_1 = __importDefault(require(a1(0x1a8) + a1(0x152) + a1(0x200))), ShowTicketService_1 = __importDefault(require(a0(0x1e9) + a1(0x1e6) + a0(0x182) + a0(0x175))), ChatFlow_1 = __importDefault(require(a0(0x197) + a1(0x1d7) + a1(0x18f))), GetIntegrationsID_1 = __importDefault(require(a0(0x1a8) + a0(0x1da) + a1(0x1be) + a1(0x1b5))), verifyBusinessHours = async (l, m) => {
        const a3 = a1, a4 = a0, n = {
                'UJXfV': function (p, q) {
                    return p !== q;
                },
                'MiPYt': a3(0x161),
                'EsaBP': function (p, q) {
                    return p === q;
                },
                'EIzvg': a3(0x151),
                'SZsqu': function (p, q) {
                    return p === q;
                },
                'qoUCQ': function (p, q) {
                    return p && q;
                },
                'MEEsX': function (p, q) {
                    return p === q;
                },
                'pLumr': function (p, q) {
                    return p !== q;
                },
                'wkrQn': a4(0x194),
                'ifHBC': a4(0x1f3),
                'OpyLP': function (p, q) {
                    return p !== q;
                },
                'ARBxx': function (p, q) {
                    return p !== q;
                },
                'KfEHa': a4(0x163),
                'FyeTN': a4(0x1ad) + a3(0x14c),
                'aUlnT': a3(0x1ad) + a3(0x171) + 'ne',
                'RDgeS': function (p, q) {
                    return p === q;
                },
                'ntipf': function (p, q) {
                    return p === q;
                },
                'KQiUB': a3(0x1f4),
                'maUzY': a3(0x1ce),
                'CXgIt': a4(0x1ba),
                'WdvTI': a4(0x180),
                'RQUGL': a4(0x1dd),
                'qUvEQ': a4(0x1e1),
                'WWLtd': a3(0x1c7),
                'TBWQL': a3(0x1a2) + a3(0x150),
                'HidIF': function (p, q) {
                    return p > q;
                },
                'mXkBl': function (p, q) {
                    return p == q;
                },
                'NzwQu': a3(0x1bd),
                'EeVrD': a3(0x1fc) + a3(0x1ef) + a3(0x1c2),
                'PQZvU': function (p, q, r) {
                    return p(q, r);
                },
                'wnpql': function (p, q) {
                    return p < q;
                },
                'xTKoj': function (p, q) {
                    return p + q;
                },
                'hUfke': a4(0x1b3),
                'rUvXu': a4(0x19c)
            };
        let o = !![];
        if (n[a3(0x1fd)](m[a4(0x1d8)], n[a3(0x1f1)]) && !l[a3(0x1fe)] && !m[a3(0x1dc)]) {
            const p = {};
            p[a3(0x1ea)] = m[a3(0x1ea)];
            const q = await (0x12 * 0x24 + 0x1955 + -0x1bdd, ShowBusinessHoursAndMessageService_1[a4(0x178)])(p), r = (-0x2173 * -0x1 + -0x1f0f * -0x1 + 0x2e * -0x167, date_fns_1[a4(0x1cb) + 'me'])(l[a3(0x168) + a3(0x157)]), s = q[a4(0x1ee) + a4(0x1c2)][a3(0x1c3)](v => v[a3(0x192)] === r[a3(0x156)]());
            if (!s)
                return o;
            if (n[a3(0x1ed)](s[a4(0x15a)], 'O'))
                return o;
            const t = (0xd41 * -0x1 + -0x15da + -0xd1 * -0x2b, date_fns_1[a4(0x14f) + a3(0x159)])(r, {
                    'start': (0x181 * -0x13 + 0x2 * -0x1193 + -0x1 * -0x3fb9, date_fns_1[a4(0x1b2)])(s[a4(0x1d9)], n[a3(0x1e5)], new Date()),
                    'end': (0xf0f + 0x208c + 0x1 * -0x2f9b, date_fns_1[a4(0x1b2)])(s[a4(0x1c8)], n[a3(0x1e5)], new Date())
                }), u = (-0x9 * -0x2e7 + 0xb59 + -0x2578, date_fns_1[a4(0x14f) + a4(0x159)])(r, {
                    'start': (0xbb3 * -0x1 + 0xa12 + 0x3 * 0x8b, date_fns_1[a4(0x1b2)])(s[a3(0x198)], n[a3(0x1e5)], new Date()),
                    'end': (0x1b90 + -0x2 * 0x305 + 0x44e * -0x5, date_fns_1[a4(0x1b2)])(s[a3(0x1cf)], n[a4(0x1e5)], new Date())
                });
            if (n[a3(0x177)](s[a4(0x15a)], 'C') || n[a4(0x14a)](!t, !u)) {
                o = ![];
                if (n[a4(0x1ed)](m[a3(0x155)], null) || n[a3(0x14e)](m[a3(0x16a)], null))
                    try {
                        const D = await ChatFlow_1[a3(0x178)][a4(0x1c0)](m[a4(0x1fa)]);
                        if (D) {
                            const E = D[a4(0x1c4)][a4(0x15d)][a4(0x1c3)](F => F[a3(0x15a)] === a4(0x1c1) + a4(0x162));
                            if (E) {
                                if (n[a3(0x1e0)](n[a4(0x18b)], n[a3(0x1b0)])) {
                                    const {outOpenHours: F} = E[a4(0x1c1) + a4(0x162)], G = F[a3(0x15a)], {destiny: H} = F;
                                    if (n[a3(0x1e2)](H, null)) {
                                        if (n[a3(0x1b1)](n[a4(0x201)], n[a3(0x201)]))
                                            z[a4(0x155)] = A, i[a4(0x155)] = j;
                                        else {
                                            const J = {
                                                    'botRetries': 0x0,
                                                    'lastInteractionBot': new Date()
                                                }, K = {
                                                    'ticketId': m['id'],
                                                    'type': n[a4(0x1ed)](G, -0x21a9 + 0x247 + 0x1f63) ? n[a3(0x1db)] : n[a4(0x1f6)]
                                                };
                                            if (n[a3(0x1d5)](G, 0x1d73 + -0xd * -0x83 + -0x2419)) {
                                                if (n[a3(0x186)](n[a4(0x1aa)], n[a3(0x1d6)])) {
                                                    const P = {};
                                                    return P[a3(0x178)] = j, z && A[a4(0x1af)] ? i : P;
                                                } else {
                                                    J[a4(0x16a)] = H, K[a3(0x16a)] = H;
                                                    const P = await (0x14f7 + 0x13 * -0x1bf + -0x3 * -0x412, GetIntegrationsID_1[a4(0x178)])(H);
                                                    if (n[a3(0x186)](typeof P, n[a4(0x1ae)]))
                                                        n[a4(0x186)](n[a3(0x19a)], n[a3(0x19a)]) ? (J[a3(0x14b) + a3(0x1e7)] = !![], J[a3(0x1d0) + a4(0x170)] = P) : (w[a4(0x14b) + a4(0x1e7)] = !![], z[a3(0x1d0) + a3(0x170)] = A);
                                                    else {
                                                        if (n[a3(0x1fd)](n[a3(0x1bf)], n[a4(0x1bf)]))
                                                            return ![];
                                                        else
                                                            J[a4(0x14b) + a3(0x1e7)] = ![], J[a4(0x1d0) + a3(0x170)] = null;
                                                    }
                                                }
                                            }
                                            n[a4(0x14e)](G, 0x22ff + 0x268d * -0x1 + 0x390) && (n[a4(0x1ed)](n[a3(0x1ab)], n[a3(0x189)]) ? N[a3(0x183)](w) : (J[a3(0x155)] = H, K[a3(0x155)] = H));
                                            await m[a4(0x181)](J);
                                            const L = {};
                                            L['id'] = m['id'], L[a3(0x1ea)] = m[a4(0x1ea)];
                                            const M = await (-0x1641 + 0xa70 + 0x1 * 0xbd1, ShowTicketService_1[a3(0x178)])(L), N = {};
                                            N[a3(0x1ea)] = m[a4(0x1ea)], N[a3(0x15a)] = n[a3(0x1a5)], N[a3(0x17b)] = M, (0x189f + 0x46 * 0x64 + -0x33f7, socketEmit_1[a4(0x178)])(N), await (0xd3 * 0x2c + -0x1 * -0x70a + -0x2b4e, CreateLogTicketService_1[a4(0x178)])(K);
                                        }
                                    }
                                } else
                                    e[a3(0x14b) + a3(0x1e7)] = ![], w[a4(0x1d0) + a3(0x170)] = null;
                            }
                        }
                    } catch (U) {
                        console[a4(0x183)](U);
                    }
                let v = a3(0x1a1) + a3(0x1ff) + a3(0x1a9) + a3(0x1d3) + a3(0x1cc) + a4(0x1df) + a4(0x176) + a3(0x14d) + a4(0x15e) + a4(0x1b4) + a3(0x17e) + a3(0x1c5) + a3(0x15f) + a3(0x1ac) + a4(0x165) + m['id'] + (a3(0x1ac) + a4(0x18d) + a4(0x1f9) + a3(0x1bb) + a4(0x179) + a3(0x15b) + a4(0x164) + a4(0x1b7) + a4(0x1ec) + a3(0x1a3) + a4(0x1f5) + a3(0x15c) + a3(0x1eb)) + m['id'] + (a4(0x16c) + a4(0x172) + '\x20)');
                const w = {};
                w[a3(0x15a)] = sequelize_1[a3(0x185)][a3(0x1f2)];
                const x = await database_1[a3(0x178)][a3(0x191)](v, w), y = '' + q[a3(0x1c9) + a4(0x19e)];
                if (n[a3(0x1cd)](x[a3(0x1bc)], 0xa6 * -0x27 + -0xf * 0x1d1 + -0x3489 * -0x1) && n[a3(0x1e4)](x[-0xdbf + -0x1b9 * 0x2 + 0x1 * 0x1131][n[a4(0x188)]], y))
                    return ![];
                o = ![];
                const z = {};
                z[a3(0x149)] = n[a4(0x199)], z[a4(0x1ea)] = m[a3(0x1ea)];
                const A = {};
                A[a3(0x1f0)] = z;
                const B = await Setting_1[a4(0x178)][a4(0x169)](A), C = B ? n[a4(0x154)](parseInt, B[a3(0x19d)], -0xb26 * -0x3 + -0xa92 + -0x16d6) : 0x2212 + -0x13d * -0x1e + -0x13 * 0x38b;
                if (n[a4(0x1b6)](m[a3(0x160) + a3(0x174) + 's'], C)) {
                    await m[a4(0x181)]({ 'BussinessHoursRetries': n[a4(0x153)](m[a4(0x160) + a3(0x174) + 's'], -0xfc2 + 0xf53 * -0x2 + -0x1 * -0x2e69) });
                    const V = {};
                    V[a4(0x1bd)] = q[a4(0x1c9) + a3(0x19e)], V[a3(0x1fe)] = !![], V[a3(0x1b9)] = !![], V[a4(0x17d)] = n[a4(0x190)], V[a4(0x1ea)] = m[a3(0x1ea)];
                    const W = V, X = {};
                    X[a3(0x1d2)] = W, X[a3(0x1ea)] = m[a3(0x1ea)], X[a4(0x1b8)] = m, X[a4(0x17d)] = W[a3(0x17d)], X[a4(0x1d8)] = n[a4(0x1ca)], await (-0x26c7 + 0x1457 + -0x938 * -0x2, CreateMessageSystemService_1[a3(0x178)])(X);
                }
            }
        }
        return o;
    };
exports[a0(0x178)] = verifyBusinessHours;
function a() {
    const a5 = [
        'mService',
        'wkrQn',
        '598801loqRmE',
        '\x20m.\x22fromMe',
        'atabase',
        'Flow',
        'hUfke',
        'query',
        'day',
        's/CreateMe',
        'srcMh',
        '../../Mess',
        '192754CzAYlh',
        '../../../m',
        'hr3',
        'EeVrD',
        'WdvTI',
        'fault',
        'pending',
        'value',
        'inessHours',
        'ntServices',
        'defineProp',
        'select\x20m.b',
        'ticket:upd',
        'Messages\x22\x20',
        'sequelize',
        'TBWQL',
        'erty',
        '__importDe',
        '../../../h',
        'eatedAt\x22\x20,',
        'KQiUB',
        'qUvEQ',
        '\x0a\x20\x20\x20\x20\x20\x20and',
        'retriesLim',
        'CXgIt',
        '__esModule',
        'ifHBC',
        'ARBxx',
        'parse',
        'bot',
        'ets\x22\x20t\x20\x0a\x20\x20',
        'nsID',
        'wnpql',
        '.\x22createdA',
        'ticket',
        'read',
        'number',
        '\x20\x20\x20\x20\x20\x20and\x20',
        'length',
        'body',
        'Integratio',
        'RQUGL',
        'findByPk',
        'configurat',
        'urs',
        'find',
        'flow',
        't.id\x20=\x20m.\x22',
        '/ShowBusin',
        'gVBfL',
        'hr2',
        'messageBus',
        'rUvXu',
        'fromUnixTi',
        'dAt\x22\x20,\x20m.\x22',
        'HidIF',
        'fRnIO',
        'hr4',
        'integratio',
        '27603wzhSlQ',
        'msg',
        '\x20m.\x22update',
        'ing',
        'RDgeS',
        'maUzY',
        'odels/Chat',
        'status',
        'hr1',
        'elpers/Get',
        'FyeTN',
        'isGroup',
        'JuLdf',
        '1452048hrdlhF',
        'ticketId\x22\x0a',
        'pLumr',
        'HNLMx',
        'OpyLP',
        '394764yLPGkO',
        'mXkBl',
        'EIzvg',
        'etServices',
        'tion',
        'essHoursAn',
        '../../Tick',
        'tenantId',
        'd\x22\x20=\x20',
        't\x22)\x20from\x20\x22',
        'EsaBP',
        'businessHo',
        'BusinessHo',
        'where',
        'MiPYt',
        'SELECT',
        'RmJPt',
        'GBdAA',
        'm2\x20where\x20m',
        'aUlnT',
        'TicketServ',
        '/CreateLog',
        '\x22\x20=\x20true\x20\x0a',
        'chatFlowId',
        '11NIiDub',
        'maxRetries',
        'UJXfV',
        'fromMe',
        'ody,\x20m.\x22cr',
        'ketEmit',
        'KfEHa',
        'key',
        'qoUCQ',
        'useIntegra',
        'itQueue',
        '\x20\x22Messages',
        'MEEsX',
        'isWithinIn',
        'ate',
        'HH:mm',
        'elpers/soc',
        'xTKoj',
        'PQZvU',
        'userId',
        'getDay',
        'estamp',
        'ssageSyste',
        'terval',
        'type',
        'At\x22\x20=\x20(sel',
        '2.\x22ticketI',
        'nodeList',
        '\x22\x20m,\x20\x22Tick',
        'ticketId\x22\x20',
        'BussinessH',
        'closed',
        'ions',
        'kcRhM',
        'ect\x20max(m2',
        '\x20t.id\x20=\x20',
        '../../Tena',
        'ice',
        'messageTim',
        'findOne',
        'queueId',
        'odels/Sett',
        '\x20and\x20\x22from',
        'rvice',
        '60jOGSaa',
        'ageService',
        'nId',
        'itUserDefi',
        'Me\x22\x20=\x20true',
        '1112yVHDbN',
        'oursRetrie',
        'tService',
        '\x20\x20\x20\x20\x20\x20from',
        'SZsqu',
        'default',
        'm.\x22created',
        '../../../d',
        'payload',
        '3372000WVtkyV',
        'sendType',
        '\x20\x20\x20\x20where\x20',
        'dMessageSe',
        'oKYAV',
        'update',
        '/ShowTicke',
        'error',
        '870610PvCOPM',
        'QueryTypes',
        'ntipf',
        'date-fns',
        'NzwQu',
        'WWLtd'
    ];
    a = function () {
        return a5;
    };
    return a();
}