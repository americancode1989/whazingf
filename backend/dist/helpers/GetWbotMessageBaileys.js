'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xbe)) / (-0x6ba + 0x519 + 0x26 * 0xb) * (-parseInt(m(0xaf)) / (0x6d0 * -0x1 + -0x15d8 + -0x4c7 * -0x6)) + parseInt(m(0xab)) / (0x5 * 0x20e + -0xc18 + -0x1d5 * -0x1) * (-parseInt(l(0xc4)) / (-0x1 * 0x220f + -0xd * 0x285 + -0x292 * -0x1a)) + parseInt(l(0xc8)) / (0x1a73 + -0x2 * 0x7cd + -0xad4) * (parseInt(m(0xb7)) / (-0x1235 + 0xd4f + 0x2d * 0x1c)) + -parseInt(l(0xb1)) / (-0xa77 + 0xdc8 + -0x34a) * (-parseInt(l(0xbd)) / (-0x133a + 0x2444 + 0x1 * -0x1102)) + -parseInt(l(0xaa)) / (0x144e + -0x1 * -0x1c09 + 0x3 * -0x101a) + -parseInt(l(0xce)) / (-0x1 * -0x1eb8 + -0xa33 + -0x147b) + parseInt(l(0xc6)) / (0xefb + 0x2 * -0x211 + -0xace);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11 * -0xde22 + 0x488e8 + -0x35537 * 0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xce7 + -0x835 * 0x1 + -0x1 * 0x409);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'nd\x20message',
        '14181390fevkYP',
        '63213qvDBzh',
        '__esModule',
        'SsSZn',
        'Cannot\x20fou',
        '6bzAEhV',
        './../model',
        '290353xVpIdZ',
        'default',
        'GetWbotMes',
        'defineProp',
        'NgONz',
        's/Message',
        '336jBcVjL',
        'findByPk',
        'AppError',
        'ERR_FETCH_',
        'oDscG',
        '\x20within\x2010',
        '280xtuehf',
        '295933ZQRrSX',
        '../errors/',
        'erty',
        'WAPP_MSG',
        'tWbotBaile',
        'value',
        '260tRiCog',
        'sages',
        '45234805vvncDq',
        '__importDe',
        '41725yitycq',
        'fault',
        'log',
        '0\x20last\x20mes',
        './GetTicke',
        'sage',
        '13711480HizYQd'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0xc7) + o(0xc9)] || function (c) {
    const p = o;
    return c && c[p(0xac)] ? c : { 'default': c };
};
const k = {};
k[n(0xc3)] = !![], Object[n(0xb4) + o(0xc0)](exports, n(0xac), k), exports[n(0xb3) + n(0xcd)] = void (0x869 * -0x3 + -0x142a + 0x2d65);
const AppError_1 = __importDefault(require(o(0xbf) + n(0xb9))), GetTicketWbotBaileys_1 = __importDefault(require(o(0xcc) + o(0xc2) + 'ys')), Message_1 = __importDefault(require(o(0xb0) + o(0xb6))), GetWbotMessage = async (c, d) => {
        const q = o, r = o, e = {
                'NgONz': function (i) {
                    return i();
                },
                'SsSZn': q(0xae) + q(0xa9) + q(0xbc) + q(0xcb) + r(0xc5),
                'oDscG': q(0xba) + q(0xc1)
            }, f = await (-0x23b2 + 0x4 * 0x17c + 0xee1 * 0x2, GetTicketWbotBaileys_1[q(0xb2)])(c);
        let g = -0x82b + -0x401 + 0xc40;
        const h = async () => {
            const s = q, t = q, i = await Message_1[s(0xb2)][t(0xb8)](d);
            return i;
        };
        try {
            const i = await e[r(0xb5)](h);
            if (!i)
                throw new Error(e[q(0xad)]);
            return i;
        } catch (j) {
            console[q(0xca)](j);
            throw new AppError_1[(r(0xb2))](e[r(0xbb)]);
        }
    };
exports[n(0xb3) + o(0xcd)] = GetWbotMessage, exports[n(0xb2)] = exports[n(0xb3) + n(0xcd)];