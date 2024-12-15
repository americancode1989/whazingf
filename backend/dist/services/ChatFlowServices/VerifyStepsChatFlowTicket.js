'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x143e + 0x11d9 + -0x1 * -0x377);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x136)) / (0x1e94 + 0x27 * 0x12 + -0x2151 * 0x1) + -parseInt(z(0x1e8)) / (-0x2176 * 0x1 + -0x103 * -0x1f + 0x21b) * (-parseInt(z(0x139)) / (0x37 * 0x6b + 0x1 * -0x2643 + -0xf49 * -0x1)) + parseInt(A(0x112)) / (-0x2f * -0x1 + 0xffd * -0x2 + 0x1fcf) + -parseInt(z(0x170)) / (0x6ea * 0x3 + -0x1 * 0x1129 + -0x390) * (-parseInt(A(0x1e6)) / (-0xc1 * 0x16 + -0x2 * -0xa4f + 0x1 * -0x402)) + -parseInt(z(0x130)) / (-0x1bd * -0x11 + -0x10 * 0xad + -0x12b6) + -parseInt(z(0x1af)) / (0x1 * -0x61 + -0x1 * -0x574 + -0x50b) * (parseInt(A(0x12f)) / (-0x1472 + -0xffb * 0x2 + -0xb3 * -0x4b)) + -parseInt(A(0x1ec)) / (0x1 * -0x1edd + -0x2a0 + 0x2187) * (parseInt(z(0x11f)) / (-0x111f + -0x2054 + 0x317e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x93a4a * 0x1 + 0xc5456 + 0x8c9b7));
var __importDefault = this && this[B(0x1e5) + B(0x1e2)] || function (c) {
    const D = C;
    return c && c[D(0x162)] ? c : { 'default': c };
};
const p = {};
p[C(0x15d)] = !![], Object[C(0x153) + B(0x1c6)](exports, B(0x162), p);
const socketEmit_1 = __importDefault(require(B(0x1a5) + B(0x14c) + C(0x142))), CreateMessageSystemService_1 = __importDefault(require(C(0x125) + C(0x1ce) + C(0x16c) + B(0x117) + C(0x13f))), CreateLogTicketService_1 = __importDefault(require(B(0x190) + C(0x144) + B(0x181) + B(0x122))), BuildSendMessageService_1 = __importDefault(require(C(0x180) + C(0x161) + B(0x13f))), DefinedUserBotService_1 = __importDefault(require(B(0x119) + C(0x1a9) + C(0x146))), IsContactTest_1 = __importDefault(require(B(0x167) + C(0x133))), VerifyContactBaileys_1 = require(B(0x14b) + C(0x17a) + C(0x1e0) + C(0x13b) + C(0x1db)), SetTicketMessagesAsRead_1 = __importDefault(require(B(0x1a5) + B(0x1cf) + C(0x1bb) + B(0x115))), GetIntegrationsID_1 = __importDefault(require(C(0x1a5) + B(0x1a2) + B(0x126) + 'D')), isNextSteps = async (e, f, g, h) => {
        const E = B, F = B, i = {};
        i[E(0x175)] = function (k, l) {
            return k === l;
        }, i[F(0x1c3)] = function (k, l) {
            return k !== l;
        }, i[F(0x191)] = E(0x182), i[F(0x189)] = E(0x138), i[E(0x15a)] = F(0x14a);
        const j = i;
        if (j[E(0x175)](h[E(0x1e1)], -0xe * -0xe5 + 0x16d1 + -0x2357)) {
            if (j[F(0x1c3)](j[F(0x191)], j[E(0x191)]))
                e = f[F(0x121) + 'te'][E(0x1dd)](/\s/g, '');
            else {
                await e[F(0x123)]({
                    'stepChatFlow': h[E(0x1bf)],
                    'botRetries': 0x0,
                    'lastInteractionBot': new Date()
                });
                const l = [...f[F(0x197)][F(0x1ed)]], m = l[F(0x1c2)](o => o['id'] === h[F(0x1bf)]);
                if (!m)
                    return;
                for (const n of m[F(0x1d5) + 'ns']) {
                    if (j[F(0x175)](j[F(0x189)], j[E(0x15a)]))
                        e[F(0x1dc) + E(0x1de)] = ![], f[F(0x1cc) + F(0x1d1)] = null;
                    else {
                        const q = {};
                        q[F(0x1b0)] = n, q[E(0x16b)] = e[E(0x16b)], q[F(0x1a8)] = e, await (0x6 * 0x63e + 0x1f42 + -0x44b6, BuildSendMessageService_1[F(0x12a)])(q);
                    }
                }
                await (0x1e99 * 0x1 + -0x1028 + -0xe71 * 0x1, SetTicketMessagesAsRead_1[F(0x12a)])(e);
            }
        }
    }, isQueueDefine = async (h, i, j, k) => {
        const G = C, H = C, l = {};
        l[G(0x1bd)] = function (n, o) {
            return n === o;
        }, l[G(0x187)] = function (n, o) {
            return n === o;
        }, l[G(0x151)] = G(0x1b1), l[H(0x17d)] = G(0x1c1), l[G(0x13a)] = function (n, o) {
            return n === o;
        }, l[H(0x18e)] = G(0x1ae), l[H(0x1a1)] = function (n, o) {
            return n === o;
        }, l[H(0x16d)] = function (n, o) {
            return n === o;
        }, l[G(0x157)] = G(0x177), l[H(0x1d3)] = H(0x1a3), l[H(0x16e)] = H(0x12e), l[H(0x145)] = G(0x185), l[G(0x1c8)] = function (n, o) {
            return n !== o;
        }, l[G(0x11d)] = G(0x173), l[H(0x154)] = G(0x116) + G(0x11a);
        const m = l;
        if (m[G(0x1bd)](k[H(0x1e1)], 0x22a * -0x7 + -0xd * 0x53 + 0x4a * 0x43)) {
            if (m[H(0x187)](m[G(0x151)], m[G(0x17d)]))
                return ![];
            else {
                const o = await (0xae5 * -0x1 + 0x1cb9 + 0x28c * -0x7, GetIntegrationsID_1[G(0x12a)])(k[H(0x1ac)]);
                h[G(0x123)]({
                    'queueId': k[H(0x1ac)],
                    'chatFlowId': null,
                    'stepChatFlow': null,
                    'botRetries': 0x0,
                    'lastInteractionBot': new Date(),
                    'useIntegration': m[G(0x13a)](typeof o, m[G(0x18e)]),
                    'integrationId': m[G(0x1a1)](typeof o, m[G(0x18e)]) ? o : null
                });
                if (k[H(0x1ba) + 'ge'] && k[G(0x1ba) + 'ge'][G(0x158)]()) {
                    if (m[G(0x16d)](m[G(0x157)], m[H(0x157)])) {
                        const s = {};
                        s[G(0x129)] = k[G(0x1ba) + 'ge'], s[H(0x1c9)] = !![], s[G(0x1a7)] = !![], s[H(0x132)] = m[G(0x1d3)];
                        const t = s, u = {};
                        u[G(0x1b0)] = t, u[H(0x16b)] = h[G(0x16b)], u[G(0x1a8)] = h, u[H(0x132)] = t[H(0x132)], u[G(0x1c7)] = m[H(0x16e)], await (0x92 * -0x28 + 0x1e * 0xe4 + 0x32 * -0x14, CreateMessageSystemService_1[H(0x12a)])(u);
                    } else
                        q[G(0x1dc) + H(0x1de)] = !![], r[G(0x1cc) + G(0x1d1)] = h;
                }
                const q = {};
                q[H(0x1d8)] = h['id'], q[H(0x113)] = m[G(0x145)], q[H(0x1ac)] = k[H(0x1ac)], await (-0x1168 + -0x9a7 + 0x905 * 0x3, CreateLogTicketService_1[H(0x12a)])(q);
                if (i?.[G(0x1ca) + G(0x1cb)]?.[G(0x1ab) + H(0x172) + 's']) {
                    if (m[H(0x1c8)](m[G(0x11d)], m[G(0x11d)])) {
                        const x = {};
                        return x[G(0x12a)] = j, x && h[H(0x162)] ? i : x;
                    } else
                        await (-0x7ab * 0x2 + 0x891 + 0x1 * 0x6c5, DefinedUserBotService_1[H(0x12a)])(h, k[G(0x1ac)], h[G(0x16b)], i?.[G(0x1ca) + G(0x1cb)]?.[H(0x1ab) + H(0x172) + 's']), h[H(0x18b)]();
                }
                const r = {};
                r[H(0x16b)] = h[G(0x16b)], r[G(0x113)] = m[G(0x154)], r[G(0x160)] = h, (0x48d + 0x11 * 0x1df + -0x245c, socketEmit_1[G(0x12a)])(r);
            }
        }
    }, isUserDefine = async (g, h, i) => {
        const I = C, J = B, j = {
                'tWtpN': function (k, l) {
                    return k === l;
                },
                'xqeBQ': function (k, l) {
                    return k(l);
                },
                'tZxMk': function (k, l) {
                    return k !== l;
                },
                'losIV': I(0x164),
                'LbsXa': I(0x163),
                'KZGbz': I(0x19b),
                'mnCfT': J(0x1a3),
                'IfzZE': J(0x12e),
                'rFmqa': J(0x1b5),
                'LVDlU': J(0x116) + J(0x11a)
            };
        if (j[I(0x1b8)](i[I(0x1e1)], -0x152e * -0x1 + -0x1745 + 0x219)) {
            if (j[I(0x137)](j[J(0x1d7)], j[I(0x1d7)]))
                g[I(0x15c)] = h, i[J(0x15c)] = j;
            else {
                await g[I(0x123)]({
                    'userId': i[I(0x11c) + I(0x171)],
                    'chatFlowId': null,
                    'stepChatFlow': null,
                    'botRetries': 0x0,
                    'lastInteractionBot': new Date()
                });
                if (i[I(0x1a4) + 'e'] && i[I(0x1a4) + 'e'][I(0x158)]()) {
                    if (j[J(0x137)](j[J(0x114)], j[J(0x17f)])) {
                        const n = {};
                        n[I(0x129)] = i[I(0x1a4) + 'e'], n[I(0x1c9)] = !![], n[J(0x1a7)] = !![], n[I(0x132)] = j[J(0x135)];
                        const o = n, q = {};
                        q[I(0x1b0)] = o, q[J(0x16b)] = g[J(0x16b)], q[I(0x1a8)] = g, q[J(0x132)] = o[J(0x132)], q[I(0x1c7)] = j[I(0x1ea)], await (0x197d + -0x26fc + -0x5 * -0x2b3, CreateMessageSystemService_1[J(0x12a)])(q);
                    } else {
                        if (j[I(0x1b8)](h[I(0x113)], 'US'))
                            return !![];
                        const s = i[I(0x199)][J(0x1ad)](u => s(u)[J(0x11b) + 'e']()[J(0x158)]()), t = j[I(0x14d)](k, l)[I(0x11b) + 'e']()[I(0x158)]();
                        return s[J(0x1a0)](t);
                    }
                }
                await g[J(0x18b)]();
                const l = {};
                l[I(0x15c)] = i[I(0x11c) + I(0x171)], l[I(0x1d8)] = g['id'], l[I(0x113)] = j[I(0x1e4)], await (0x10e2 + -0x1e01 + -0x1 * -0xd1f, CreateLogTicketService_1[J(0x12a)])(l);
                const m = {};
                m[J(0x16b)] = g[I(0x16b)], m[J(0x113)] = j[I(0x193)], m[I(0x160)] = g, (-0xb * -0x1c9 + 0x195a + -0x15d * 0x21, socketEmit_1[J(0x12a)])(m);
            }
        }
    }, isCloseDefine = async (g, h, i) => {
        const K = C, L = C, j = {
                'UxmUn': function (k, l) {
                    return k === l;
                },
                'PKmnx': function (k, l) {
                    return k(l);
                },
                'AUdne': function (k, l) {
                    return k === l;
                },
                'iOEeo': K(0x1e7),
                'zYItr': L(0x148),
                'kXbGt': L(0x1a3),
                'aJbun': K(0x12e),
                'DWYcN': L(0x166),
                'oSIpG': K(0x186),
                'oVtyA': K(0x116) + K(0x11a)
            };
        if (j[L(0x178)](i[K(0x1e1)], -0x9f3 + 0x10b3 + -0x6bd)) {
            if (j[L(0x155)](j[L(0x184)], j[L(0x14f)]))
                return j[K(0x155)](j[K(0x12b)](g, h)[K(0x11b) + 'e']()[K(0x158)](), j[L(0x12b)](i, j)[K(0x11b) + 'e']()[K(0x158)]());
            else {
                const l = {};
                l[K(0x129)] = i[K(0x1d6) + 't'], l[L(0x1c9)] = !![], l[L(0x1a7)] = !![], l[K(0x132)] = j[L(0x1e3)];
                const m = l, n = {};
                n[K(0x1b0)] = m, n[L(0x16b)] = g[K(0x16b)], n[K(0x1a8)] = g, n[L(0x132)] = m[K(0x132)], n[K(0x1c7)] = j[K(0x17e)], await (0x1 * 0x2411 + 0x1 * -0x1421 + -0x44 * 0x3c, CreateMessageSystemService_1[K(0x12a)])(n), await g[K(0x123)]({
                    'status': j[L(0x1df)],
                    'chatFlowId': null,
                    'stepChatFlow': null,
                    'botRetries': 0x0,
                    'lastInteractionBot': new Date()
                });
                const o = {};
                o[L(0x1d8)] = g['id'], o[K(0x113)] = j[L(0x198)], await (-0x2578 + 0x24a9 + 0xcf, CreateLogTicketService_1[K(0x12a)])(o);
                const q = {};
                q[K(0x16b)] = g[L(0x16b)], q[L(0x113)] = j[L(0x13c)], q[K(0x160)] = g, (-0xaa5 * 0x3 + 0xd6 * 0x5 + -0x3f7 * -0x7, socketEmit_1[L(0x12a)])(q);
            }
        }
    }, sendWelcomeMessage = async (f, g) => {
        const M = C, N = C, h = {};
        h[M(0x12d)] = N(0x1a3), h[N(0x1be)] = N(0x12e);
        const i = h;
        if (g?.[M(0x1ca) + M(0x1cb)]?.[M(0x13e) + M(0x152)]?.[N(0x17b)]) {
            const j = {};
            j[M(0x129)] = g[N(0x1ca) + N(0x1cb)]?.[M(0x13e) + M(0x152)][N(0x17b)], j[N(0x1c9)] = !![], j[M(0x1a7)] = !![], j[N(0x132)] = i[N(0x12d)];
            const k = j, l = {};
            l[M(0x1b0)] = k, l[M(0x16b)] = f[M(0x16b)], l[N(0x1a8)] = f, l[M(0x132)] = k[N(0x132)], l[N(0x1c7)] = i[M(0x1be)], await (0x53 * -0x76 + -0x1fce + 0x4610, CreateMessageSystemService_1[N(0x12a)])(l);
        }
    }, isRetriesLimit = async (d, e) => {
        const O = B, P = B, f = {
                'rJeBz': function (h, i) {
                    return h >= i;
                },
                'eQyBC': function (h, i) {
                    return h - i;
                },
                'HnVld': function (h, i) {
                    return h === i;
                },
                'GtwOj': O(0x1b2) + O(0x183),
                'hjFBw': P(0x1b2) + P(0x19a) + 'ne',
                'xexJw': function (h, i) {
                    return h === i;
                },
                'hkaRe': O(0x1ae),
                'dQGNy': function (h, i) {
                    return h === i;
                },
                'UBsoV': O(0x116) + O(0x11a),
                'bTOEw': function (h, i, j) {
                    return h(i, j);
                }
            }, g = e?.[P(0x1ca) + P(0x1cb)]?.[O(0x124) + O(0x1b4)]?.[O(0x1ae)];
        if (e?.[P(0x1ca) + P(0x1cb)]?.[O(0x124) + O(0x1b4)] && g && f[P(0x13d)](d[P(0x1b6)], f[O(0x1cd)](g, 0xf7 * -0xb + 0x157 * 0x13 + 0xed7 * -0x1))) {
            const h = e[O(0x1ca) + P(0x1cb)][P(0x124) + P(0x1b4)][O(0x113)], {destiny: i} = e[O(0x1ca) + O(0x1cb)][P(0x124) + P(0x1b4)], j = {
                    'chatFlowId': null,
                    'stepChatFlow': null,
                    'botRetries': 0x0,
                    'lastInteractionBot': new Date()
                }, k = {
                    'ticketId': d['id'],
                    'type': f[P(0x1a6)](h, 0x1f2d + 0x1 * -0x23a3 + -0x477 * -0x1) ? f[P(0x131)] : f[P(0x159)]
                };
            if (f[P(0x1a6)](h, -0xf76 + 0x910 + 0x667)) {
                j[P(0x1ac)] = i, k[P(0x1ac)] = i;
                const m = await (0x1a * 0x122 + -0x529 + -0x184b, GetIntegrationsID_1[O(0x12a)])(i);
                f[O(0x147)](typeof m, f[O(0x1e9)]) ? (j[O(0x1dc) + P(0x1de)] = !![], j[P(0x1cc) + O(0x1d1)] = m) : (j[P(0x1dc) + O(0x1de)] = ![], j[P(0x1cc) + P(0x1d1)] = null);
            }
            f[P(0x14e)](h, -0x2 * -0x1312 + 0xd4c + 0x336e * -0x1) && (j[O(0x15c)] = i, k[O(0x15c)] = i);
            d[O(0x123)](j);
            const l = {};
            return l[P(0x16b)] = d[O(0x16b)], l[O(0x113)] = f[P(0x141)], l[O(0x160)] = d, (-0xd81 + -0x2 * -0x91 + 0xc5f * 0x1, socketEmit_1[O(0x12a)])(l), await (0x1c15 * 0x1 + 0x213f + 0x4 * -0xf55, CreateLogTicketService_1[O(0x12a)])(k), await f[O(0x16a)](sendWelcomeMessage, d, e), !![];
        }
        return ![];
    }, isAnswerCloseTicket = async (e, f, g) => {
        const Q = C, R = C, h = {
                'DHNPW': function (j, k) {
                    return j === k;
                },
                'dlTVo': function (j, k) {
                    return j(k);
                },
                'RVOJH': function (j, k) {
                    return j(k);
                },
                'eJtgf': function (j, k) {
                    return j < k;
                },
                'brIEz': Q(0x166),
                'BfANP': Q(0x186),
                'tpqyO': R(0x116) + R(0x11a)
            };
        if (!e?.[Q(0x1ca) + Q(0x1cb)]?.[R(0x19c) + Q(0x127)] || h[R(0x12c)](e?.[R(0x1ca) + R(0x1cb)]?.[R(0x19c) + Q(0x127)]?.[R(0x134)], -0x15f7 * -0x1 + -0x7 * -0x297 + -0x2817))
            return ![];
        const i = e[R(0x1ca) + R(0x1cb)][Q(0x19c) + R(0x127)][Q(0x1c2)](j => {
            const S = Q, T = Q;
            return h[S(0x194)](h[T(0x1d0)](String, j)[S(0x11b) + 'e']()[S(0x158)](), h[T(0x1d4)](String, g)[S(0x11b) + 'e']()[T(0x158)]());
        });
        if (i) {
            await f[R(0x123)]({
                'chatFlowId': null,
                'stepChatFlow': null,
                'botRetries': 0x0,
                'lastInteractionBot': new Date(),
                'unreadMessages': 0x0,
                'answered': ![],
                'status': h[R(0x19e)]
            });
            const j = {};
            j[R(0x1d8)] = f['id'], j[Q(0x113)] = h[Q(0x165)], await (0x1 * 0x23ad + -0xfc8 + -0x13e5, CreateLogTicketService_1[R(0x12a)])(j);
            const k = {};
            return k[Q(0x16b)] = f[R(0x16b)], k[Q(0x113)] = h[R(0x18d)], k[Q(0x160)] = f, (-0x1 * -0x795 + 0x2525 + -0x1ca * 0x19, socketEmit_1[Q(0x12a)])(k), !![];
        }
        return ![];
    }, VerifyStepsChatFlowTicket = async (g, h) => {
        const U = C, V = B, i = {
                'vKXiu': function (l, m) {
                    return l === m;
                },
                'wtnrO': function (l, m) {
                    return l(m);
                },
                'dzepZ': U(0x12e),
                'aUfVJ': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'rqWsq': V(0x168) + V(0x1d9),
                'XDdGv': function (l, m, n, o, q) {
                    return l(m, n, o, q);
                },
                'Loauy': V(0x116) + U(0x11a),
                'XIrbR': function (l, m) {
                    return l === m;
                },
                'YpJUX': function (l, m) {
                    return l === m;
                },
                'vSKlq': function (l, m, n) {
                    return l(m, n);
                },
                'nLwqw': function (l, m, n, o, q) {
                    return l(m, n, o, q);
                },
                'MXbgZ': V(0x1d2) + V(0x179) + U(0x18f) + U(0x18c) + V(0x1b3) + U(0x1b7) + U(0x1da) + V(0x19d) + V(0x17c),
                'XkWnw': U(0x1a3),
                'wOfIv': function (l, m) {
                    return l + m;
                }
            };
        let j;
        const k = g[U(0x1bc)]?.[V(0x1c9)] ?? g[U(0x1c9)];
        if (h[U(0x140)] && i[V(0x176)](h[U(0x1c7)], i[U(0x1c4)]) && !k && !h[U(0x1b9)] && !h[V(0x188)]) {
            if (h[U(0x140)]) {
                const l = await h[U(0x174) + 'w']();
                l[V(0x121) + 'te'] && (j = l[U(0x121) + 'te'][U(0x1dd)](/\s/g, ''));
                const m = l[V(0x197)][V(0x1ed)][U(0x1c2)](r => r['id'] === h[U(0x149) + 'ow']), n = l[V(0x197)][V(0x1ed)][V(0x1c2)](r => r[V(0x113)] === V(0x1ca) + U(0x1cb)), o = await (0xc13 + 0x13e9 + -0x1ffc, VerifyContactBaileys_1[U(0x120) + U(0x152)])(g), q = m[U(0x196)][V(0x1c2)](r => {
                        const W = V, X = U;
                        if (i[W(0x176)](r[W(0x113)], 'US'))
                            return !![];
                        const s = r[W(0x199)][X(0x1ad)](u => String(u)[X(0x11b) + 'e']()[X(0x158)]()), t = i[W(0x1c5)](String, o)[X(0x11b) + 'e']()[W(0x158)]();
                        return s[W(0x1a0)](t);
                    });
                if (!h[U(0x150)] && await i[U(0x16f)](isAnswerCloseTicket, n, h, o))
                    return;
                if (q && !h[V(0x150)]) {
                    const r = i[U(0x15b)][V(0x15f)]('|');
                    let s = 0x23 * 0xaf + -0x152 * -0x7 + -0x212b;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            await i[U(0x192)](isQueueDefine, h, n, m, q);
                            continue;
                        case '1':
                            const t = {};
                            t[V(0x16b)] = h[V(0x16b)], t[U(0x113)] = i[V(0x1aa)], t[V(0x160)] = h, (-0x14d3 + 0x6b * -0x19 + 0x1f46, socketEmit_1[U(0x12a)])(t);
                            continue;
                        case '2':
                            await i[V(0x16f)](isCloseDefine, h, m, q);
                            continue;
                        case '3':
                            if (await (-0xcf8 + -0x209 * 0x5 + 0x1725, IsContactTest_1[V(0x12a)])(h[V(0x169)][U(0x1ae)], j, h[V(0x1eb)]))
                                return;
                            continue;
                        case '4':
                            (i[V(0x11e)](q[U(0x1e1)], 0xd38 + -0x1d86 + 0x104f) || i[U(0x11e)](q[U(0x1e1)], 0x1 * 0x439 + -0xead + 0xce * 0xd) || i[V(0x18a)](q[U(0x1e1)], 0xf19 + -0x1 * -0x2697 + 0x7 * -0x7ab)) && await i[V(0x1c0)](sendWelcomeMessage, h, n);
                            continue;
                        case '5':
                            await i[U(0x128)](isNextSteps, h, l, m, q);
                            continue;
                        case '6':
                            await i[U(0x16f)](isUserDefine, h, m, q);
                            continue;
                        }
                        break;
                    }
                } else {
                    if (await (0x4 * 0x503 + 0x17 * -0x9b + 0x61f * -0x1, IsContactTest_1[V(0x12a)])(h[U(0x169)][U(0x1ae)], j, h[U(0x1eb)]))
                        return;
                    if (!h[V(0x150)]) {
                        if (await i[V(0x1c0)](isRetriesLimit, h, n))
                            return;
                        const u = {};
                        u[U(0x129)] = n[U(0x1ca) + V(0x1cb)][V(0x156) + V(0x19f) + U(0x195)][U(0x17b)] || i[U(0x143)], u[U(0x1c9)] = !![], u[U(0x1a7)] = !![], u[U(0x132)] = i[U(0x15e)];
                        const v = u, w = {};
                        w[V(0x1b0)] = v, w[V(0x16b)] = h[V(0x16b)], w[U(0x1a8)] = h, w[U(0x132)] = v[U(0x132)], w[U(0x1c7)] = i[U(0x1c4)], await (-0x2517 + 0x148 + 0x23cf, CreateMessageSystemService_1[U(0x12a)])(w), await h[U(0x123)]({
                            'botRetries': i[U(0x118)](h[V(0x1b6)], 0x1b77 + -0x1 * 0x2477 + 0x901),
                            'lastInteractionBot': new Date()
                        });
                    }
                    for (const x of m[U(0x1d5) + 'ns']) {
                        const y = {};
                        y[U(0x1b0)] = x, y[U(0x16b)] = h[U(0x16b)], y[U(0x1a8)] = h, await (0x252f + 0x128c + 0x37bb * -0x1, BuildSendMessageService_1[U(0x12a)])(y);
                    }
                }
                await (0xdd8 + -0x16d1 + -0x1 * -0x8f9, SetTicketMessagesAsRead_1[V(0x12a)])(h);
            }
        }
    };
exports[C(0x12a)] = VerifyStepsChatFlowTicket;
function a() {
    const Y = [
        'interactio',
        'closeTicke',
        'losIV',
        'ticketId',
        '1|4',
        'Escolha\x20um',
        'leys',
        'useIntegra',
        'replace',
        'tion',
        'DWYcN',
        'ers/Verify',
        'action',
        'fault',
        'kXbGt',
        'rFmqa',
        '__importDe',
        '4627314JhYQHL',
        'gsSio',
        '28AlunLQ',
        'hkaRe',
        'IfzZE',
        'channel',
        '51150TIVlji',
        'nodeList',
        '993036ZzpLvV',
        'type',
        'LbsXa',
        'sAsRead',
        'ticket:upd',
        'geSystemSe',
        'wOfIv',
        './DefinedU',
        'ate',
        'toLowerCas',
        'userIdDest',
        'Wsnty',
        'XIrbR',
        '462AiCnpD',
        'getBodyMes',
        'celularTes',
        'ketService',
        'update',
        'maxRetryBo',
        '../Message',
        'egrationsI',
        'eTicket',
        'nLwqw',
        'body',
        'default',
        'PKmnx',
        'eJtgf',
        'TGGqS',
        'pending',
        '9RPUbgH',
        '10623606bNcncc',
        'GtwOj',
        'sendType',
        'tTest',
        'length',
        'mnCfT',
        '337669GdOhFK',
        'tZxMk',
        'ZHSXt',
        '255381fWkmSn',
        'TZieu',
        'ContactBai',
        'oVtyA',
        'rJeBz',
        'welcomeMes',
        'rvice',
        'chatFlowId',
        'UBsoV',
        'Emit',
        'MXbgZ',
        'ervices/Cr',
        'Ntwge',
        'ice',
        'xexJw',
        'JaSUU',
        'stepChatFl',
        'rTINd',
        '../WbotSer',
        'ers/socket',
        'xqeBQ',
        'dQGNy',
        'zYItr',
        'isCreated',
        'PofWj',
        'sage',
        'defineProp',
        'FyAtL',
        'UxmUn',
        'notOptions',
        'aqSSM',
        'trim',
        'hjFBw',
        'YXKHt',
        'rqWsq',
        'userId',
        'value',
        'XkWnw',
        'split',
        'payload',
        'dMessageSe',
        '__esModule',
        'xYFor',
        'wSdAw',
        'BfANP',
        'closed',
        './IsContac',
        '3|5|0|6|2|',
        'contact',
        'bTOEw',
        'tenantId',
        'reateMessa',
        'eoIyF',
        'tpRLG',
        'aUfVJ',
        '5kAwsjz',
        'ination',
        'buteTicket',
        'HvzwD',
        'getChatFlo',
        'QiwMV',
        'vKXiu',
        'MxmFQ',
        'AUdne',
        'Não\x20entend',
        'vices/help',
        'message',
        'lida.',
        'fvLRN',
        'aJbun',
        'KZGbz',
        './BuildSen',
        'eateLogTic',
        'sDzKo',
        'itQueue',
        'iOEeo',
        'queue',
        'autoClose',
        'Yqaky',
        'answered',
        'fkcUo',
        'YpJUX',
        'reload',
        'osta.\x20Vamo',
        'tpqyO',
        'Nlonb',
        'i\x20sua\x20resp',
        '../TicketS',
        'qkSKQ',
        'XDdGv',
        'LVDlU',
        'DHNPW',
        'age',
        'conditions',
        'flow',
        'oSIpG',
        'condition',
        'itUserDefi',
        'BYGEF',
        'answerClos',
        'a\x20opção\x20vá',
        'brIEz',
        'SelectMess',
        'includes',
        'Irgdx',
        'ers/GetInt',
        'bot',
        'userMessag',
        '../../help',
        'HnVld',
        'read',
        'ticket',
        'serBotServ',
        'Loauy',
        'autoDistri',
        'queueId',
        'map',
        'number',
        '297872bbWsqg',
        'msg',
        'hBjyl',
        'retriesLim',
        's\x20tentar\x20n',
        'tMessage',
        'userDefine',
        'botRetries',
        'ovamente!\x20',
        'tWtpN',
        'isGroup',
        'queueMessa',
        'ketMessage',
        'key',
        'qvXcF',
        'efvEN',
        'nextStepId',
        'vSKlq',
        'sQXKO',
        'find',
        'DNICB',
        'dzepZ',
        'wtnrO',
        'erty',
        'status',
        'ZVRZp',
        'fromMe',
        'configurat',
        'ions',
        'integratio',
        'eQyBC',
        'Services/C',
        'ers/SetTic',
        'dlTVo',
        'nId',
        'Desculpe!\x20',
        'aBheP',
        'RVOJH'
    ];
    a = function () {
        return Y;
    };
    return a();
}