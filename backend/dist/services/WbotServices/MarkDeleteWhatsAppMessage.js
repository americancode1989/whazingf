'use strict';
function a() {
    const I = [
        '781nhNNVD',
        'Erro\x20ao\x20te',
        'ls/Ticket',
        'findAll',
        '../Integra',
        'ticketId',
        'em\x20com\x20exc',
        'value',
        'integratio',
        'replace',
        'ageWebHook',
        'tpdEG',
        'MessageWeb',
        'UETEI',
        '4170bFcqQX',
        'ntar\x20marca',
        'findByPk',
        'n8n',
        '178566TKgLhC',
        'defineProp',
        '505084HFgret',
        '__importDe',
        'm\x20Apagada_',
        '../../mode',
        'UAnVK',
        'IdVHs',
        'r\x20a\x20mensag',
        '865LgUDmw',
        'YsrDq',
        'nId',
        '421408Wmjjur',
        'contact',
        'update',
        'quotedMsg',
        '23570RGTeIQ',
        'HandleMess',
        'fault',
        '27ULSvLS',
        'isDeleted',
        'p.net',
        '../../help',
        'egrationsT',
        'luída',
        'NZhlw',
        'qLjhO',
        'ype',
        '10XxbVCW',
        'tion',
        'where',
        'findOne',
        'ers/GetInt',
        'erty',
        'lastMessag',
        '14191tbBbhC',
        'log',
        'ces/Handle',
        'Hook',
        'ls/Message',
        'default',
        '🚫\x20_Mensage',
        '__esModule',
        'tionsServi',
        'SWjTM',
        '602392TSDVcw',
        '@s.whatsap',
        'useIntegra',
        '@c.us',
        'messageId'
    ];
    a = function () {
        return I;
    };
    return a();
}
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x676 + -0x1 * -0x2544 + 0x4aa * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1d1)) / (0x2 * -0x54a + 0x1 * 0x1516 + -0xa81) + parseInt(C(0x1ca)) / (0x1 * -0xb7d + -0x1 * 0x3db + 0xf5a) * (parseInt(C(0x1f2)) / (-0x1e82 + 0xb5 * -0x13 + 0x2bf4)) + -parseInt(B(0x1f4)) / (0xf * -0x89 + 0x1 * 0x2449 + 0x1e * -0xf1) + parseInt(C(0x1fb)) / (0x257d + 0x26a7 * -0x1 + 0x12f) * (-parseInt(B(0x1ee)) / (0x1141 + -0xf * 0x117 + 0x2 * -0x71)) + parseInt(C(0x1db)) / (0x1 * -0x1dc1 + -0x16 * 0x112 + 0x3554) + -parseInt(B(0x1fe)) / (0x1502 + 0x256 + -0x1750) * (parseInt(B(0x1c1)) / (-0x23 * 0x8e + -0x1df0 + 0x3163)) + parseInt(C(0x202)) / (0x1aaa + -0x2440 + 0x9a0) * (parseInt(B(0x1e0)) / (-0xe7d * -0x2 + 0x1b9a + -0x3889 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x37979 + 0x1 * -0x3e8a9 + 0x9d5c0));
var __importDefault = this && this[D(0x1f5) + E(0x1c0)] || function (c) {
    const F = D;
    return c && c[F(0x1d8)] ? c : { 'default': c };
};
const k = {};
k[D(0x1e7)] = !![], Object[E(0x1f3) + D(0x1cf)](exports, E(0x1d8), k);
const Message_1 = __importDefault(require(D(0x1f7) + E(0x1d5))), Ticket_1 = __importDefault(require(E(0x1f7) + E(0x1e2))), HandleMessageWebHook_1 = require(D(0x1e4) + D(0x1d9) + D(0x1d3) + E(0x1ec) + E(0x1d4)), GetIntegrationsType_1 = __importDefault(require(D(0x1c4) + D(0x1ce) + D(0x1c5) + D(0x1c9))), MarkDeleteWhatsAppMessage = async (j, l, m) => {
        const G = E, H = E, n = {};
        n[G(0x1da)] = H(0x1de), n[G(0x1f9)] = H(0x1dc) + G(0x1c3), n[G(0x1c8)] = G(0x1ff), n[H(0x1c7)] = H(0x201), n[G(0x1fc)] = function (p, q) {
            return p === q;
        }, n[H(0x1ed)] = G(0x1f1), n[H(0x1f8)] = G(0x1d7) + H(0x1f6), n[H(0x1eb)] = G(0x1e1) + G(0x1ef) + G(0x1fa) + H(0x1e6) + G(0x1c6);
        const o = n;
        j = j[G(0x1e9)](o[G(0x1da)], '')[G(0x1e9)](o[G(0x1f9)], '');
        if (m) {
            const p = {};
            p[G(0x1df)] = m;
            const q = {};
            q[H(0x1cc)] = p;
            const r = await Message_1[G(0x1d6)][H(0x1e3)](q);
            try {
                const s = await Message_1[G(0x1d6)][H(0x1f0)](r[0x2239 + 0x1f6a + -0x41a3]['id'], {
                    'include': [
                        o[H(0x1c8)],
                        {
                            'model': Message_1[H(0x1d6)],
                            'as': o[H(0x1c7)],
                            'include': [o[G(0x1c8)]]
                        }
                    ]
                });
                if (s) {
                    const t = {};
                    t['id'] = s[G(0x1e5)];
                    const u = {};
                    u[H(0x1cc)] = t;
                    const v = await Ticket_1[G(0x1d6)][H(0x1cd)](u), w = {};
                    w[H(0x1c2)] = !![], await s[G(0x200)](w);
                    if (o[G(0x1fc)](v[H(0x1dd) + H(0x1cb)], !![])) {
                        const z = await (0x1 * 0x12fd + -0x1 * -0xf2b + -0x2228, GetIntegrationsType_1[H(0x1d6)])(v[G(0x1e8) + H(0x1fd)]);
                        o[G(0x1fc)](z, o[G(0x1ed)]) && await (0x2358 + -0x110c + 0x926 * -0x2, HandleMessageWebHook_1[G(0x203) + H(0x1ea)])(v[G(0x1e8) + H(0x1fd)], m);
                    }
                    const x = o[G(0x1f8)], y = {};
                    y[H(0x1d0) + 'e'] = x, await v[H(0x200)](y);
                }
            } catch (A) {
                console[G(0x1d2)](o[G(0x1eb)]);
            }
            return l;
        }
        ;
    };
exports[E(0x1d6)] = MarkDeleteWhatsAppMessage;