'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7cf * 0x5 + 0x51b * 0x7 + -0x4 * -0x147);
        let h = e[f];
        return h;
    }, b(c, d);
}
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(L(0x1d1)) / (0x140b * -0x1 + -0x2c8 * 0x8 + 0x2a4c) + -parseInt(M(0x216)) / (0x1705 * 0x1 + 0xcaa + -0x23ad) + parseInt(L(0x1d6)) / (-0x226b + 0xd30 + 0x153e * 0x1) + -parseInt(L(0x1d0)) / (-0x22 * 0x7 + 0x1688 + 0x3 * -0x732) + -parseInt(L(0x203)) / (0xb12 * 0x2 + 0x13a8 + 0x1f * -0x159) * (parseInt(L(0x242)) / (-0x23d8 + 0x1 * 0xf3 + -0x22eb * -0x1)) + parseInt(L(0x20a)) / (-0x14b * -0x4 + 0xb * -0x377 + 0x20f8) + parseInt(M(0x224)) / (-0x1249 + 0x1 * -0xf5e + -0x21af * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8 * -0x7c66 + -0xfd * 0x54f + -0x4651d * -0x1));
var __importDefault = this && this[N(0x238) + N(0x226)] || function (c) {
    const P = N;
    return c && c[P(0x1e9)] ? c : { 'default': c };
};
const k = {};
k[N(0x249)] = !![], Object[N(0x1f7) + O(0x1da)](exports, N(0x1e9), k);
const axios_1 = __importDefault(require(O(0x20e))), Mustache_1 = __importDefault(require(O(0x211) + N(0x208) + 'he')), logger_1 = require(N(0x22b) + O(0x1e7)), Ticket_1 = __importDefault(require(N(0x1ed) + O(0x1f3))), Message_1 = __importDefault(require(O(0x1ed) + N(0x23b))), socketEmit_1 = __importDefault(require(O(0x211) + N(0x1d5) + O(0x20c))), queueValidation_1 = __importDefault(require(N(0x22b) + N(0x220) + O(0x1f1))), UpdateContactTagsBotService_1 = __importDefault(require(N(0x217) + N(0x1db) + O(0x215) + N(0x241) + N(0x24a))), delay = c => new Promise(d => setTimeout(d, c)), BuildSendMessageService = async ({
        msg: j,
        tenantId: l,
        ticket: m,
        userId: n
    }) => {
        const Q = O, R = O, o = {
                'WUHKA': Q(0x1f8) + Q(0x1ee) + Q(0x247),
                'iSSWs': Q(0x22a) + R(0x201) + Q(0x212),
                'zUtjy': R(0x225) + Q(0x219) + Q(0x207),
                'UJsQA': Q(0x1ef),
                'hgCkq': Q(0x21b),
                'ZmiUD': Q(0x24b),
                'XdmQw': function (q, r) {
                    return q === r;
                },
                'zDTXt': R(0x218) + 'ld',
                'lrPml': function (q, r) {
                    return q === r;
                },
                'EZAAR': Q(0x21a),
                'WqIUP': function (q, r) {
                    return q === r;
                },
                'GCinL': function (q, r) {
                    return q !== r;
                },
                'fIgvl': R(0x22f),
                'FfUyq': Q(0x1f9),
                'uMqxs': function (q, r) {
                    return q === r;
                },
                'abRmn': Q(0x221),
                'shevG': function (q, r) {
                    return q !== r;
                },
                'fZUYA': R(0x204),
                'MBeGA': Q(0x1cf),
                'EqfKT': R(0x1f0),
                'xtGHm': Q(0x1ff),
                'IClLq': function (q, r) {
                    return q === r;
                },
                'pgbKy': R(0x246),
                'ZrRWQ': R(0x1e1),
                'VNVGd': function (q, r) {
                    return q * r;
                },
                'OYzvT': function (q, r) {
                    return q(r);
                },
                'tbIfa': function (q, r) {
                    return q === r;
                },
                'WkYyM': Q(0x1e2),
                'HqrYI': function (q, r) {
                    return q === r;
                },
                'VvTWb': function (q, r) {
                    return q === r;
                },
                'yiVSZ': R(0x239),
                'xBSjJ': function (q, r) {
                    return q - r;
                },
                'rQTpi': R(0x205),
                'IrEjc': R(0x1f6),
                'IpfpG': R(0x1d7),
                'vXLmg': Q(0x227) + 'e'
            }, p = {
                'ticketId': m['id'],
                'body': '',
                'contactId': m[Q(0x206)],
                'fromMe': !![],
                'read': !![],
                'mediaType': o[Q(0x1e4)],
                'mediaUrl': undefined,
                'timestamp': new Date()[R(0x1fa)](),
                'quotedMsgId': undefined,
                'userId': n,
                'scheduleDate': undefined,
                'sendType': o[R(0x231)],
                'status': o[Q(0x1eb)],
                'tenantId': l
            };
        try {
            if (o[R(0x235)](j[R(0x22d)], o[Q(0x21f)]) && j[R(0x244)][Q(0x22c)]) {
                if (o[Q(0x1e6)](o[Q(0x230)], o[Q(0x230)])) {
                    if (o[Q(0x23c)](j[R(0x244)][R(0x22c)], ''))
                        return;
                    try {
                        if (o[Q(0x1d8)](o[Q(0x1dd)], o[Q(0x1ce)])) {
                            j[R(0x244)][Q(0x22c)] = await (0x13 * -0x52 + 0xccb + -0x6b5, Mustache_1[R(0x22e)])(j[Q(0x244)][Q(0x22c)], m[R(0x1f6)], m);
                            if (o[R(0x209)](typeof j[Q(0x244)][Q(0x22c)], o[R(0x240)])) {
                                if (o[R(0x1df)](o[Q(0x214)], o[R(0x20f)])) {
                                    await axios_1[Q(0x22e)][Q(0x1e5)](j[Q(0x244)][Q(0x22c)]);
                                    return;
                                } else
                                    e[Q(0x23a)][R(0x1f4)](o[Q(0x222)], f);
                            }
                        } else
                            throw new d(o[R(0x248)]);
                    } catch (s) {
                        if (o[Q(0x209)](o[Q(0x1e0)], o[Q(0x229)])) {
                            const u = {};
                            return u[Q(0x22e)] = j, g && h[Q(0x1e9)] ? i : u;
                        } else
                            logger_1[R(0x23a)][R(0x213)](o[R(0x21c)], s);
                    }
                } else
                    e[R(0x23a)][Q(0x213)](o[R(0x21c)], f);
            }
            if (o[Q(0x23e)](j[R(0x22d)], o[R(0x1e8)]) && j[R(0x244)][Q(0x1ec)]) {
                if (o[R(0x209)](o[R(0x1ea)], o[R(0x1ea)])) {
                    const v = o[R(0x1dc)](j[Q(0x244)][Q(0x1ec)], -0x18ee + -0x5 * -0x1a9 + 0x2ef * 0x7);
                    await o[Q(0x1fb)](delay, v);
                    return;
                } else
                    throw new d(o[R(0x248)]);
            }
            if (o[Q(0x1e3)](j[R(0x22d)], o[Q(0x21e)]) && j[R(0x244)][Q(0x200)]) {
                if (o[R(0x234)](j[Q(0x244)][Q(0x200)], null))
                    return;
                await (0x75 * 0x4d + -0x2 * 0x12d4 + 0x277 * 0x1, UpdateContactTagsBotService_1[Q(0x22e)])({
                    'tagId': j[Q(0x244)][R(0x200)],
                    'contactId': m[R(0x206)][R(0x1f2)](),
                    'tenantId': l
                });
                return;
            }
            if (o[R(0x236)](j[R(0x22d)], o[R(0x20b)]) && j[Q(0x244)][Q(0x23f)]) {
                const x = j[Q(0x244)][Q(0x23f)][Q(0x1d4)]('/'), y = {
                        ...p,
                        'body': '',
                        'mediaUrl': x[o[Q(0x21d)](x[R(0x23d)], -0x555 + 0x1b58 + -0x1602)],
                        'mediaType': j[R(0x244)][Q(0x22d)] ? j[Q(0x244)]?.[R(0x22d)][Q(0x233)](0xe05 + 0x17a7 + 0x12d6 * -0x2, j[R(0x244)][Q(0x22d)][R(0x223)]('/')) : o[Q(0x1e4)]
                    }, z = await Message_1[Q(0x22e)][Q(0x1d3)](y), A = {};
                A[R(0x1d2)] = l;
                const B = {};
                B[Q(0x202)] = Ticket_1[Q(0x22e)], B['as'] = o[Q(0x228)], B[R(0x232)] = A, B[R(0x1fc)] = [o[Q(0x20d)]];
                const C = await Message_1[Q(0x22e)][R(0x1fd)](z['id'], {
                    'include': [
                        B,
                        {
                            'model': Message_1[R(0x22e)],
                            'as': o[Q(0x210)],
                            'include': [o[R(0x20d)]]
                        }
                    ]
                });
                if (!C)
                    throw new Error(o[Q(0x248)]);
                await m[R(0x1d9)]({
                    'lastMessage': C[R(0x237)],
                    'lastMessageAt': new Date()[R(0x1fa)]()
                }), await (0x1 * -0x1f65 + 0x168f + 0x46b * 0x2, queueValidation_1[R(0x22e)])(m[Q(0x1f5)], m[Q(0x1d2)], [C]);
                const D = {};
                D[R(0x1d2)] = l, D[R(0x22d)] = o[R(0x1de)], D[Q(0x1fe)] = C, (0x6a0 + 0xb57 * -0x2 + 0x100e, socketEmit_1[R(0x22e)])(D);
            } else {
                j[Q(0x244)][Q(0x243)] = await (-0x2579 + -0x1 * 0x614 + 0x2b8d * 0x1, Mustache_1[R(0x22e)])(j[Q(0x244)][R(0x243)], m[Q(0x1f6)], m);
                const E = { ...p };
                E[Q(0x237)] = j[Q(0x244)][R(0x243)], E[Q(0x245)] = o[R(0x1e4)];
                const F = await Message_1[Q(0x22e)][R(0x1d3)](E), G = {};
                G[Q(0x1d2)] = l;
                const H = {};
                H[R(0x202)] = Ticket_1[R(0x22e)], H['as'] = o[R(0x228)], H[Q(0x232)] = G, H[Q(0x1fc)] = [o[R(0x20d)]];
                const I = await Message_1[Q(0x22e)][Q(0x1fd)](F['id'], {
                    'include': [
                        H,
                        {
                            'model': Message_1[R(0x22e)],
                            'as': o[Q(0x210)],
                            'include': [o[Q(0x20d)]]
                        }
                    ]
                });
                if (!I)
                    throw new Error(o[Q(0x248)]);
                await m[Q(0x1d9)]({
                    'lastMessage': I[Q(0x237)],
                    'lastMessageAt': new Date()[R(0x1fa)](),
                    'answered': !![]
                }), await (-0xffd + 0x180e * -0x1 + 0x280b, queueValidation_1[Q(0x22e)])(m[R(0x1f5)], m[R(0x1d2)], [I]);
                const J = {};
                J[Q(0x1d2)] = l, J[Q(0x22d)] = o[R(0x1de)], J[R(0x1fe)] = I, (0x1d1f + -0x1ab7 + -0x268, socketEmit_1[R(0x22e)])(J);
            }
        } catch (K) {
            logger_1[Q(0x23a)][R(0x1f4)](o[Q(0x222)], K);
        }
    };
function a() {
    const S = [
        '../../help',
        '_SYSTEM',
        'info',
        'fZUYA',
        'pdateConta',
        '312132aAvODi',
        '../Contact',
        'WebhookFie',
        'endMessage',
        'jAZbX',
        'bot',
        'zUtjy',
        'xBSjJ',
        'WkYyM',
        'zDTXt',
        's/queueVal',
        'string',
        'WUHKA',
        'indexOf',
        '256240zBBSuu',
        ':::\x20BuildS',
        'fault',
        'chat:creat',
        'rQTpi',
        'xtGHm',
        'ERR_CREATI',
        '../../util',
        'webhook',
        'type',
        'default',
        'wyGsq',
        'EZAAR',
        'hgCkq',
        'where',
        'substr',
        'HqrYI',
        'XdmQw',
        'VvTWb',
        'body',
        '__importDe',
        'MediaField',
        'logger',
        'ls/Message',
        'WqIUP',
        'length',
        'IClLq',
        'mediaUrl',
        'abRmn',
        'ctTagsBotS',
        '30GFCqNU',
        'message',
        'data',
        'mediaType',
        'DelayField',
        'ice',
        'iSSWs',
        'value',
        'ervice',
        'pending',
        'FfUyq',
        'RSfQa',
        '128956IfLVqj',
        '82419ghWpcw',
        'tenantId',
        'create',
        'split',
        'ers/socket',
        '260793HgUOMJ',
        'quotedMsg',
        'GCinL',
        'update',
        'erty',
        'Services/U',
        'VNVGd',
        'fIgvl',
        'vXLmg',
        'shevG',
        'EqfKT',
        'ERpIr',
        'TagField',
        'tbIfa',
        'UJsQA',
        'get',
        'lrPml',
        's/logger',
        'pgbKy',
        '__esModule',
        'ZrRWQ',
        'ZmiUD',
        'time',
        '../../mode',
        'essageServ',
        'chat',
        'AnJvp',
        'idation',
        'toString',
        'ls/Ticket',
        'error',
        'whatsappId',
        'contact',
        'defineProp',
        'BuildSendM',
        'Zocku',
        'getTime',
        'OYzvT',
        'include',
        'findByPk',
        'payload',
        'zrxQG',
        'tag',
        'NG_MESSAGE',
        'model',
        '189985qwFroV',
        'XAPrd',
        'ticket',
        'contactId',
        'Service',
        'ers/Mustac',
        'uMqxs',
        '2631160SXGqho',
        'yiVSZ',
        'Emit',
        'IrEjc',
        'axios',
        'MBeGA',
        'IpfpG'
    ];
    a = function () {
        return S;
    };
    return a();
}
exports[N(0x22e)] = BuildSendMessageService;