'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xdc)) / (0x1ca0 + -0x90e * 0x1 + -0x1391) * (parseInt(p(0xda)) / (0x1 * 0x2573 + 0x2a7 + -0x2818)) + parseInt(p(0xcf)) / (-0x168 * 0x8 + -0x233c + 0x1 * 0x2e7f) + -parseInt(o(0xc9)) / (-0xb8f + -0x191c + 0x24af) * (-parseInt(p(0xce)) / (0x6c2 + 0x42c + -0xae9)) + -parseInt(o(0xcb)) / (0x1053 * -0x1 + -0x23 * 0x5 + -0x14 * -0xda) * (-parseInt(o(0xc4)) / (0x1 * -0x1e52 + 0x2082 + -0x229)) + parseInt(p(0xca)) / (0x5be + 0x3eb * 0x1 + 0x5 * -0x1ed) * (parseInt(o(0xc3)) / (-0x10 * 0x235 + 0x1e63 + 0x27b * 0x2)) + parseInt(p(0xd2)) / (0xb85 * 0x3 + 0xf98 * 0x2 + 0x59 * -0xbd) + -parseInt(p(0xdd)) / (0x67c + 0xc3c + -0x12ad) * (parseInt(p(0xc8)) / (-0x1fda + 0x3 * -0x85 + -0xf * -0x23b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x38918 + 0x9 * 0x4c0d + -0x560c * 0xd));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1328 + 0x437 * -0x3 + -0x5c3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'ndMessages',
        'sendMessag',
        'default',
        'eBaileys',
        '__esModule',
        '2TJeRSB',
        '../service',
        '206291EljICl',
        '1354573raVKzF',
        'INZSN',
        's/Whatsapp',
        'whatsapp',
        'owWhatsApp',
        'xYROC',
        '396NfgUnz',
        '847DLnJcc',
        '__importDe',
        'fault',
        'Service/Sh',
        '36Mclawl',
        '868eVPeTW',
        '6088efzkYh',
        '4740KSACgt',
        'value',
        '../jobs/Se',
        '3890kYMuEr',
        '580989JBmtWG',
        'Service',
        'erty',
        '2047180cCqJkx',
        'type',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xc5) + r(0xc6)] || function (c) {
    const s = r;
    return c && c[s(0xd9)] ? c : { 'default': c };
};
const k = {};
k[q(0xcc)] = !![], Object[q(0xd4) + r(0xd1)](exports, q(0xd9), k);
const SendMessages_1 = require(r(0xcd) + r(0xd5)), ShowWhatsAppService_1 = __importDefault(require(q(0xdb) + r(0xdf) + r(0xc7) + q(0xc1) + r(0xd0)));
async function queueValidation(e, f, g = undefined) {
    const t = r, u = r, h = {};
    h[t(0xc2)] = function (m, n) {
        return m === n;
    }, h[t(0xde)] = t(0xc0);
    const i = h, j = {};
    j['id'] = e;
    const l = await (-0x39 * 0x90 + -0x10de + 0x30ee, ShowWhatsAppService_1[t(0xd7)])(j);
    i[t(0xc2)](l[t(0xd3)], i[u(0xde)]) && await (0x5 * 0x7a3 + -0x34 * -0x66 + -0x3ae7, SendMessages_1[u(0xd6) + t(0xd8)])(e, f, g);
}
exports[r(0xd7)] = queueValidation;