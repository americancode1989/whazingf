'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c02 + -0x53c + 0x15a9 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x132)) / (-0x91 * -0x1b + -0x14ea + -0x48 * -0x14) * (parseInt(I(0x11d)) / (-0x5 * -0x337 + 0x26f1 + 0x3702 * -0x1)) + -parseInt(H(0x141)) / (0x1 * 0x26c5 + -0xb0 * -0x16 + -0x35e2) * (parseInt(I(0x15c)) / (-0x2597 + -0x1 * 0xc9d + 0x3238)) + -parseInt(I(0x13e)) / (-0xbee + -0x14 * 0x179 + 0x2967) + parseInt(I(0x167)) / (0x12c7 * 0x1 + -0x197e + 0x6bd) * (parseInt(I(0x162)) / (-0x1635 + -0x1b7f + 0x31bb)) + parseInt(H(0x126)) / (-0x22 * -0xa6 + 0xc75 + -0x2279) * (parseInt(H(0x133)) / (0x2b3 + -0x1bb0 + -0x1906 * -0x1)) + -parseInt(I(0x14c)) / (0x1 * 0x15ab + -0xa3 + -0x14fe) + parseInt(I(0x122)) / (-0xa3 * 0x9 + -0x5c6 * -0x1 + 0x0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb4e5 * 0x2 + 0x13a9f + 0x9 * 0x36c1));
var __importDefault = this && this[J(0x13b) + J(0x159)] || function (c) {
    const L = K;
    return c && c[L(0x127)] ? c : { 'default': c };
};
const k = {};
k[J(0x172)] = !![], Object[K(0x136) + K(0x161)](exports, K(0x127), k), exports[K(0x168) + K(0x14d)] = void (0x1ecc + -0x1b2e + 0x1 * -0x39e);
const sequelize_1 = require(J(0x11f)), Ticket_1 = __importDefault(require(K(0x12a) + J(0x154))), CreateLogTicketService_1 = __importDefault(require(K(0x123) + J(0x160) + K(0x12b))), socketEmit_1 = __importDefault(require(J(0x170) + J(0x16b) + J(0x144))), closeTicketsService = async ({
        status: j,
        startDate: l,
        endDate: m,
        whatsappId: n,
        isGroup: o,
        userId: p,
        tenantId: q
    }) => {
        const M = J, N = J, r = {
                'rHexh': function (s, t) {
                    return s(t);
                },
                'gnOix': M(0x163) + N(0x12e) + M(0x158) + M(0x146),
                'JHTJw': function (s, t) {
                    return s === t;
                },
                'PRDmy': N(0x139) + M(0x125) + M(0x155) + N(0x156) + M(0x131),
                'fmOdO': M(0x130),
                'Wmpuw': N(0x15e),
                'HlfdU': N(0x14a) + N(0x14b),
                'xiOrK': N(0x15b) + N(0x13a) + 'ts'
            };
        try {
            const s = new Date(l + (N(0x129) + M(0x138))), t = new Date(m + (N(0x148) + N(0x152)));
            if (r[M(0x14f)](isNaN, s[M(0x13c)]()) || r[M(0x14f)](isNaN, t[M(0x13c)]()))
                throw new Error(N(0x166) + M(0x135) + N(0x13d) + l + N(0x165) + m);
            const u = {
                    [sequelize_1['Op'][N(0x15f)]]: {
                        [sequelize_1['Op'][M(0x15a)]]: s,
                        [sequelize_1['Op'][M(0x143)]]: t
                    }
                }, v = {};
            v[M(0x150)] = j, v[N(0x13f)] = u, v[N(0x14e)] = n, v[M(0x120)] = o;
            const w = {};
            w[N(0x11e)] = v;
            const x = await Ticket_1[N(0x128)][M(0x137)](w), y = {};
            y[N(0x15d)] = x[M(0x134)], console[M(0x149)](r[M(0x142)], y);
            if (r[N(0x147)](x[M(0x134)], 0x1ce9 + -0x1 * 0x13b8 + -0x931)) {
                console[M(0x16c)](r[M(0x151)]);
                return;
            }
            const z = Date[N(0x121)]();
            for (const A of x) {
                const B = r[M(0x12d)][N(0x171)]('|');
                let C = -0x4 * -0x4f3 + -0x23d5 * 0x1 + -0x5 * -0x335;
                while (!![]) {
                    switch (B[C++]) {
                    case '0':
                        A[M(0x153)] = z;
                        continue;
                    case '1':
                        await A[M(0x16a)]();
                        continue;
                    case '2':
                        const D = {};
                        D[N(0x140)] = p, D[N(0x12f)] = A['id'], D[N(0x157)] = r[M(0x164)], await (-0x115b * -0x1 + 0xebc + -0x2017 * 0x1, CreateLogTicketService_1[M(0x128)])(D);
                        continue;
                    case '3':
                        A[N(0x150)] = r[M(0x164)];
                        continue;
                    case '4':
                        const E = {};
                        E[M(0x12c)] = q, E[M(0x157)] = r[M(0x124)], E[N(0x16e)] = A, (-0x18cf + -0x1f15 + 0x37e4, socketEmit_1[N(0x128)])(E);
                        continue;
                    }
                    break;
                }
            }
        } catch (F) {
            const G = {};
            G[N(0x169)] = F, console[M(0x169)](r[M(0x16d)], G);
            throw new Error(N(0x15b) + M(0x13a) + N(0x145) + F[N(0x16f)]);
        }
    };
function a() {
    const O = [
        'getTime',
        'ida:\x20',
        '472725ciKCPX',
        'createdAt',
        'userId',
        '53205frjTnx',
        'gnOix',
        'lte',
        'Emit',
        'ts:\x20',
        'ização',
        'JHTJw',
        'T23:59:59.',
        'log',
        'ticket:upd',
        'ate',
        '933560bHqiWQ',
        'tsService',
        'whatsappId',
        'rHexh',
        'status',
        'PRDmy',
        '999Z',
        'closedAt',
        'ls/Ticket',
        'rado\x20com\x20o',
        's\x20filtros\x20',
        'type',
        'para\x20atual',
        'fault',
        'gte',
        'Erro\x20ao\x20fe',
        '28TMoScx',
        'count',
        'closed',
        'and',
        'gTicketSer',
        'erty',
        '112427JPiEGT',
        'Tickets\x20en',
        'Wmpuw',
        '\x20ou\x20',
        'Data\x20invál',
        '66mvECzQ',
        'closeTicke',
        'error',
        'save',
        'ers/socket',
        'warn',
        'xiOrK',
        'payload',
        'message',
        '../../help',
        'split',
        'value',
        '1126ARoANK',
        'where',
        'sequelize',
        'isGroup',
        'now',
        '782166GJtEBi',
        './CreateLo',
        'HlfdU',
        'ket\x20encont',
        '8xSPsdj',
        '__esModule',
        'default',
        'T00:00:00.',
        '../../mode',
        'vice',
        'tenantId',
        'fmOdO',
        'contrados\x20',
        'ticketId',
        '3|0|1|2|4',
        'fornecidos',
        '67rgdfHl',
        '1265634gNerTi',
        'length',
        'ida\x20fornec',
        'defineProp',
        'findAll',
        '000Z',
        'Nenhum\x20tic',
        'char\x20ticke',
        '__importDe'
    ];
    a = function () {
        return O;
    };
    return a();
}
exports[J(0x168) + K(0x14d)] = closeTicketsService;