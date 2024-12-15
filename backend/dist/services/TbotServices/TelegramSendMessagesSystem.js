'use strict';
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(O(0x159)) / (-0x14 * -0x135 + -0x2f1 * 0x3 + -0xf50) + parseInt(O(0x11d)) / (0xec7 + -0x1164 + 0x29f) + parseInt(P(0x127)) / (-0x2 * 0xd13 + -0x2466 + 0x3e8f) + parseInt(O(0x13e)) / (-0xf96 + -0x65a + 0x2 * 0xafa) + parseInt(O(0x13f)) / (0x1 * -0x1bc5 + -0x3 * 0x1bf + 0x2107 * 0x1) * (-parseInt(P(0x12b)) / (-0x4 * 0x2e9 + 0x4f7 * 0x5 + -0xd29)) + -parseInt(P(0x115)) / (-0x2 * 0x6a1 + 0x904 + 0x445) * (-parseInt(P(0x15c)) / (0x1ae9 + -0x3 * 0xb8a + 0x7bd)) + -parseInt(O(0x13d)) / (0x2589 + -0x5c5 + -0x1 * 0x1fbb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5001e + 0x19eaa + -0xf2 * 0x443));
var __importDefault = this && this[Q(0xf4) + R(0xfb)] || function (c) {
    const S = R;
    return c && c[S(0x14b)] ? c : { 'default': c };
};
const q = {};
q[R(0x109)] = !![], Object[R(0x11c) + Q(0x11b)](exports, R(0x14b), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb7d * 0x1 + -0x1c1d * -0x1 + -0xfb5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const path_1 = require(Q(0x106)), sequelize_1 = require(R(0x123)), SetTicketMessagesAsRead_1 = __importDefault(require(Q(0x113) + Q(0xeb) + Q(0x118) + Q(0x116))), socketEmit_1 = __importDefault(require(R(0x113) + Q(0x14a) + Q(0x11f))), Message_1 = __importDefault(require(Q(0x125) + Q(0x15a))), Ticket_1 = __importDefault(require(R(0x125) + R(0x156))), logger_1 = require(Q(0x15d) + R(0xf2)), SendMessagesSystemWbot = async (m, n) => {
        const T = Q, U = R, o = {};
        o[T(0x133)] = U(0x110), o[U(0xf9)] = U(0x128), o[T(0x146)] = U(0x13c), o[T(0x102)] = U(0xf1), o[T(0x130)] = U(0x143), o[U(0x126)] = U(0x131), o[U(0xf0)] = U(0x119), o[T(0x144)] = T(0x11e), o[U(0x13b)] = T(0x101), o[T(0x108)] = T(0x124), o[U(0x14c)] = U(0x12d), o[U(0x12f)] = function (v, w) {
            return v === w;
        }, o[T(0x141)] = T(0x10c), o[U(0x134)] = function (v, w) {
            return v === w;
        }, o[U(0x10b)] = T(0x14d), o[T(0xf3)] = function (v, w) {
            return v === w;
        }, o[T(0x142)] = T(0xf8), o[T(0xfd)] = function (v, w) {
            return v === w;
        }, o[U(0x14e)] = U(0x155), o[U(0xef)] = U(0x154) + T(0x114), o[U(0xf5)] = T(0x154) + T(0xff), o[T(0x13a)] = function (v, w) {
            return v * w;
        }, o[T(0x105)] = T(0x112), o[T(0xfe)] = U(0x150), o[U(0x10f)] = T(0x11a) + T(0x145);
        const p = o, r = { [sequelize_1['Op']['is']]: null }, s = {
                'fromMe': !![],
                'messageId': r,
                'status': p[U(0x133)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][T(0x103)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, t = await Message_1[U(0x122)][U(0x137)]({
                'where': s,
                'include': [
                    p[U(0xf9)],
                    {
                        'model': Ticket_1[T(0x122)],
                        'as': p[T(0x146)],
                        'where': {
                            'tenantId': n,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: p[U(0x102)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': p[T(0x130)],
                            'whatsappId': m['id']
                        },
                        'include': [p[U(0xf9)]]
                    },
                    {
                        'model': Message_1[T(0x122)],
                        'as': p[T(0x126)],
                        'include': [p[U(0xf9)]]
                    }
                ],
                'order': [[
                        p[U(0xf0)],
                        p[T(0x144)]
                    ]]
            });
        let u;
        for (const v of t) {
            const w = v, {ticket: x} = w, y = x[T(0x128)][T(0x132)], z = {};
            w[T(0x131)] && (z[T(0x149) + T(0x152)] = w[T(0x131)][T(0x151)]);
            try {
                if (![
                        p[U(0x13b)],
                        p[U(0x108)]
                    ][U(0x100)](w[U(0x129)]) && w[U(0xfc)]) {
                    const F = (-0xb03 + -0x1 * -0x1fd8 + -0x14d5, path_1[U(0x10a)])(__dirname, '..', '..', '..', p[T(0x14c)]), G = (-0x1 * -0xf29 + 0x1 * -0x9f5 + -0x534, path_1[T(0x10a)])(F, w[U(0xfc)]);
                    if (p[U(0x12f)](w[U(0x129)], p[T(0x141)]) || p[U(0x134)](w[T(0x129)], p[T(0x10b)])) {
                        const H = {};
                        H[U(0xee)] = G, u = await m[T(0x143)][T(0x12c)](y, H, z);
                    } else {
                        if (p[U(0xf3)](w[T(0x129)], p[U(0x142)])) {
                            const I = {};
                            I[U(0xee)] = G, u = await m[T(0x143)][U(0x104)](y, I, z);
                        } else {
                            if (p[T(0xfd)](w[T(0x129)], p[T(0x14e)])) {
                                const J = {};
                                J[U(0xee)] = G, u = await m[U(0x143)][U(0xed)](y, J, z);
                            } else {
                                const K = {};
                                K[U(0xee)] = G, u = await m[T(0x143)][U(0x135) + 'nt'](y, K, z);
                            }
                        }
                    }
                    logger_1[U(0x12e)][U(0xfa)](p[U(0xef)]);
                } else
                    u = await m[U(0x143)][U(0x154) + 'e'](y, w[T(0x147)], z), logger_1[U(0x12e)][T(0xfa)](p[U(0xf5)]);
                const A = {
                        ...w,
                        ...u,
                        'id': w['id'],
                        'timestamp': p[U(0x13a)](u[U(0x15b)], -0x1213 + -0x1199 + 0x44 * 0x95),
                        'messageId': u[T(0xec)],
                        'status': p[U(0x105)],
                        'ack': 0x2
                    }, B = { ...A }, C = {};
                C['id'] = w['id'];
                const D = {};
                D[T(0x121)] = C, await Message_1[T(0x122)][T(0x136)](B, D);
                const E = {};
                E[U(0x153)] = x[U(0x153)], E[T(0x157)] = p[U(0xfe)], E[T(0x140)] = { ...w[T(0xf7)] }, E[T(0x140)]['id'] = w['id'], E[T(0x140)][T(0x14f)] = w[T(0x14f)], E[T(0x140)][U(0x10e)] = A[U(0x10e)], E[T(0x140)][U(0x151)] = u[T(0xec)], E[T(0x140)][U(0x148)] = p[U(0x105)], E[T(0x140)][T(0x139)] = 0x2, (0x1d93 + -0x8f8 * -0x2 + -0x1 * 0x2f83, socketEmit_1[U(0x122)])(E), logger_1[U(0x12e)][T(0xfa)](p[T(0x10f)]), await (0x7fb + 0x1600 + -0x1dfb * 0x1, SetTicketMessagesAsRead_1[U(0x122)])(x);
            } catch (L) {
                const M = w['id'], N = w[T(0x13c)]['id'];
                logger_1[T(0x12e)][U(0xf6)](U(0x107) + T(0x111) + T(0x117) + n + (U(0x138) + '\x20') + N + ')'), logger_1[T(0x12e)][T(0xf6)](U(0x12a) + U(0x120) + U(0x158) + M + T(0x10d) + L);
            }
        }
    };
exports[Q(0x122)] = SendMessagesSystemWbot;
function a() {
    const V = [
        'ptt',
        'mYgKA',
        'mediaUrl',
        'chat:ack',
        'messageId',
        'essage_id',
        'tenantId',
        'sendMessag',
        'video',
        'ls/Ticket',
        'type',
        'id:\x20',
        '176568qbThqR',
        'ls/Message',
        'date',
        '248EDVUnC',
        '../../util',
        'ers/SetTic',
        'message_id',
        'sendVideo',
        'source',
        'xzIHK',
        'xJrcj',
        'closed',
        's/logger',
        'gjgSz',
        '__importDe',
        'fyoot',
        'error',
        'dataValues',
        'image',
        'gSKSI',
        'info',
        'fault',
        'mediaName',
        'VQjRS',
        'PoiTg',
        'e\x20text',
        'includes',
        'chat',
        'IQXJC',
        'lte',
        'sendPhoto',
        'sOcJU',
        'path',
        'Error\x20mess',
        'qCVSa',
        'value',
        'join',
        'MJWjF',
        'audio',
        ')::\x20',
        'timestamp',
        'qCjmY',
        'pending',
        'age\x20is\x20(te',
        'sended',
        '../../help',
        'e\x20media',
        '49161XDRcGw',
        'sAsRead',
        'nant:\x20',
        'ketMessage',
        'createdAt',
        'Message\x20Up',
        'erty',
        'defineProp',
        '163620ShWGaI',
        'ASC',
        'Emit',
        '\x20message\x20(',
        'where',
        'default',
        'sequelize',
        'text',
        '../../mode',
        'OOwwt',
        '686775UpgbUf',
        'contact',
        'mediaType',
        'Error\x20send',
        '228dPpRjx',
        'sendVoice',
        'public',
        'logger',
        'IRZrj',
        'KXtyj',
        'quotedMsg',
        'telegramId',
        'yAPLm',
        'UBSld',
        'sendDocume',
        'update',
        'findAll',
        '\x20|\x20Ticket:',
        'ack',
        'JZABz',
        'YGzNe',
        'ticket',
        '6298308HuWcWR',
        '1004200dJwQey',
        '11370dhgZwE',
        'payload',
        'XwWLW',
        'KAFRe',
        'telegram',
        'NLABl',
        'date\x20ok',
        'rSGMP',
        'body',
        'status',
        'reply_to_m',
        'ers/socket',
        '__esModule',
        'iXJAt'
    ];
    a = function () {
        return V;
    };
    return a();
}