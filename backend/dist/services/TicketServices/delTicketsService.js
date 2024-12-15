'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xae)) / (-0x1 * -0x1fff + -0x6e2 * -0x4 + -0x3b86) + parseInt(y(0xb7)) / (-0xec7 + 0x20c3 + -0x11fa) + -parseInt(y(0xa8)) / (-0x7 * 0x257 + -0x5 * 0x635 + 0xab * 0x47) * (-parseInt(y(0x99)) / (0x132 + -0x1 * 0x23b9 + 0xef * 0x25)) + parseInt(x(0xc2)) / (0x7aa * -0x4 + 0x16e * -0x12 + -0x7 * -0x80f) + -parseInt(x(0x8f)) / (-0xa * -0xa + 0xfe * 0x10 + -0x103e) + -parseInt(y(0x9b)) / (0x1fb1 + 0x95 * -0x39 + 0x183) + parseInt(x(0x9d)) / (0x1ed8 * 0x1 + 0xd3 * 0x5 + -0x22ef) * (-parseInt(y(0xbd)) / (0xe5d * 0x1 + 0x5 * -0x141 + -0x80f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11b7c * -0x5 + -0x63735 + 0x4db5f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d8f + 0x121 * -0x9 + 0x2843);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0xb6) + z(0xad)] || function (c) {
    const B = z;
    return c && c[B(0xba)] ? c : { 'default': c };
};
function a() {
    const E = [
        '../../mode',
        'rado\x20com\x20o',
        'agados',
        'ida\x20fornec',
        'kPDew',
        'and',
        '4zsavVl',
        'delTickets',
        '2370970PMyiip',
        'qvnSU',
        '96568oqCKfT',
        'deletedCou',
        'ida:\x20',
        'warn',
        'status',
        '000Z',
        'isGroup',
        'createdAt',
        'T23:59:59.',
        'ouuJK',
        's\x20filtros\x20',
        '1034502SpPOSw',
        'QyZBY',
        'fornecidos',
        'defineProp',
        'ls/Ticket',
        'fault',
        '468851RdAUza',
        'value',
        'agar\x20ticke',
        'default',
        'destroy',
        'ts:\x20',
        'getTime',
        '\x20ou\x20',
        '__importDe',
        '1030066UUwEXG',
        '999Z',
        'Tickets\x20ap',
        '__esModule',
        'log',
        'message',
        '603jcVnUB',
        'whatsappId',
        'Erro\x20ao\x20ap',
        'T00:00:00.',
        'Service',
        '2042080wBhtHq',
        'where',
        'bPOGS',
        'Nenhum\x20tic',
        'gte',
        'Data\x20invál',
        'sequelize',
        'error',
        '1895118szZQkY',
        'ket\x20encont',
        'lte',
        'erty'
    ];
    a = function () {
        return E;
    };
    return a();
}
const k = {};
k[z(0xaf)] = !![], Object[z(0xab) + z(0x92)](exports, A(0xba), k), exports[A(0x9a) + A(0xc1)] = void (-0x1083 + -0xd * 0x17f + 0x1 * 0x23f6);
const sequelize_1 = require(A(0x8d)), Ticket_1 = __importDefault(require(A(0x93) + z(0xac))), delTicketsService = async ({
        status: h,
        startDate: i,
        endDate: j,
        whatsappId: l,
        isGroup: m
    }) => {
        const C = A, D = A, n = {
                'qvnSU': function (o, p) {
                    return o(p);
                },
                'kPDew': C(0xb9) + D(0x95),
                'ouuJK': function (o, p) {
                    return o === p;
                },
                'QyZBY': C(0xc5) + C(0x90) + C(0x94) + D(0xa7) + D(0xaa),
                'bPOGS': C(0xbf) + C(0xb0) + 'ts'
            };
        try {
            const o = new Date(i + (D(0xc0) + D(0xa2))), p = new Date(j + (C(0xa5) + D(0xb8)));
            if (n[D(0x9c)](isNaN, o[D(0xb4)]()) || n[C(0x9c)](isNaN, p[D(0xb4)]()))
                throw new Error(D(0x8c) + C(0x96) + D(0x9f) + i + D(0xb5) + j);
            const q = {
                    [sequelize_1['Op'][D(0x98)]]: {
                        [sequelize_1['Op'][D(0x8b)]]: o,
                        [sequelize_1['Op'][D(0x91)]]: p
                    }
                }, r = {};
            r[D(0xa1)] = h, r[C(0xa4)] = q, r[C(0xbe)] = l, r[D(0xa3)] = m;
            const s = {};
            s[D(0xc3)] = r;
            const t = await Ticket_1[C(0xb1)][C(0xb2)](s), u = {};
            u[C(0x9e) + 'nt'] = t, console[C(0xbb)](n[C(0x97)], u), n[C(0xa6)](t, -0x4f5 + 0x4 * 0x505 + -0xf1f) && console[C(0xa0)](n[C(0xa9)]);
        } catch (v) {
            const w = {};
            w[C(0x8e)] = v, console[D(0x8e)](n[C(0xc4)], w);
            throw new Error(C(0xbf) + D(0xb0) + C(0xb3) + v[D(0xbc)]);
        }
    };
exports[A(0x9a) + A(0xc1)] = delTicketsService;