'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1fe)) / (0x74 * 0x1d + 0x1fa8 + -0x2ccb) * (-parseInt(m(0x1e7)) / (-0x1 * 0xb09 + -0x1b92 + -0x1 * -0x269d)) + parseInt(n(0x1f8)) / (0x3 * 0x683 + -0x26 * 0x44 + -0x96e) * (-parseInt(n(0x1e3)) / (-0x15a * -0x15 + 0x5b6 + -0x2 * 0x110a)) + parseInt(n(0x20c)) / (0x3f8 * 0x2 + 0xb86 + -0x1371) + -parseInt(m(0x1f2)) / (0x118c * 0x2 + -0x1 * -0x1794 + -0x2 * 0x1d53) * (parseInt(n(0x1ff)) / (0x225b + 0x2095 + -0x42e9)) + parseInt(m(0x1e8)) / (-0x665 * 0x3 + -0x205 + -0x25c * -0x9) + parseInt(n(0x1e1)) / (0xc73 * -0x3 + -0x1acc + 0x402e) + -parseInt(n(0x1fb)) / (-0x12a6 + -0x195b * 0x1 + 0x2c0b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10714a + 0x93cae + -0x18 * 0xaa59));
var __importDefault = this && this[o(0x1f6) + p(0x207)] || function (c) {
    const q = p;
    return c && c[q(0x1e6)] ? c : { 'default': c };
};
const k = {};
k[o(0x1f3)] = !![], Object[p(0x204) + p(0x205)](exports, p(0x1e6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26b6 * -0x1 + -0x1931 * 0x1 + 0x1f1 * -0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'value',
        'sequelize',
        'default',
        '__importDe',
        'update',
        '12OAZmgJ',
        'watermark',
        'payload',
        '9311070lihMQc',
        'sended',
        'ers/socket',
        '96818BUGhpW',
        '21kugvcb',
        'AlhGw',
        'sender',
        'ack',
        'map',
        'defineProp',
        'erty',
        'findAll',
        'fault',
        'read',
        'ls/Message',
        'mediaUrl',
        'ls/Contact',
        '4189975LpMlmh',
        '../../help',
        'dataValues',
        '7489566NkxCma',
        'all',
        '95576XPTuSB',
        'ls/Ticket',
        'type',
        '__esModule',
        '2TFgnkY',
        '2059312MQOhIO',
        'lWgWj',
        'chat:ack',
        'messageId',
        'tenantId',
        'timestamp',
        '../../mode',
        'status',
        'Emit',
        'lte',
        '722796VogvQj'
    ];
    a = function () {
        return v;
    };
    return a();
}
const sequelize_1 = require(p(0x1f4)), socketEmit_1 = __importDefault(require(o(0x1df) + o(0x1fd) + o(0x1f0))), Contact_1 = __importDefault(require(o(0x1ee) + o(0x20b))), Message_1 = __importDefault(require(o(0x1ee) + o(0x209))), Ticket_1 = __importDefault(require(p(0x1ee) + o(0x1e4))), MessengerMarkRead = async (d, e) => {
        const r = o, s = p, f = {};
        f[r(0x200)] = s(0x1ea), f[s(0x1e9)] = r(0x1fc);
        const g = f, h = await Message_1[s(0x1f5)][r(0x206)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][s(0x1f1)]]: new Date(d[r(0x208)][r(0x1f9)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            0xb * 0x3b + 0xdc1 * -0x1 + 0xd * 0xdd,
                            -0x7 * -0x58a + -0x7a * 0x9 + -0x227a
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x1f5)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0x1f5)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x201)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1e2)](h[s(0x203)](async i => {
            const t = r, u = r, j = {};
            j[t(0x202)] = 0x3, await i[t(0x1f7)](j);
            const l = {};
            l[t(0x1ec)] = e, l[t(0x1e5)] = g[u(0x200)], l[u(0x1fa)] = { ...i[t(0x1e0)] }, l[u(0x1fa)][t(0x20a)] = i[t(0x20a)], l[u(0x1fa)]['id'] = i['id'], l[u(0x1fa)][u(0x1ed)] = i[t(0x1ed)], l[u(0x1fa)][t(0x1eb)] = i[u(0x1eb)], l[u(0x1fa)][u(0x1ef)] = g[t(0x1e9)], l[u(0x1fa)][u(0x202)] = 0x3, (0x7 * -0x161 + -0x44d * -0x4 + -0x78d, socketEmit_1[t(0x1f5)])(l);
        }));
    };
exports[p(0x1f5)] = MessengerMarkRead;