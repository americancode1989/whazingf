'use strict';
const q = b, r = b;
function a() {
    const v = [
        'erty',
        './ShowTick',
        'default',
        '1040264afJekg',
        '36WpUhrk',
        '1155067IbgaLn',
        '28122413fjhvtq',
        'tenantId',
        'ticketId',
        './CreateLo',
        '__importDe',
        'value',
        '1375868hclaGk',
        '5zLlVLM',
        '370083spYUZu',
        '__esModule',
        '2mFzFtg',
        'KET_FOUND',
        '../../erro',
        'vice',
        '10043480AVjdtA',
        'LCWMX',
        'delete',
        'gTicketSer',
        'SNczk',
        'rs/AppErro',
        'fault',
        '342876OEBdQl',
        'type',
        '3BOUOeG',
        'userId',
        'etService',
        'ERR_NO_TIC',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1a0)) / (-0x7 * 0x14b + -0xde1 + 0x39 * 0x67) * (parseInt(o(0x1ab)) / (0x15bd + 0x9 * -0x252 + -0x1f * 0x7)) + parseInt(p(0x1b8)) / (-0xf42 + 0x264a + 0x1705 * -0x1) * (-parseInt(o(0x1a7)) / (-0x8 * -0x2c + 0x1684 + -0x2fc * 0x8)) + -parseInt(o(0x1a8)) / (-0x9ae + 0x353 * -0x4 + 0x16ff) * (-parseInt(p(0x1b6)) / (-0x254 * -0xb + -0x41 * 0x6b + 0x195 * 0x1)) + -parseInt(o(0x1a9)) / (-0x818 * -0x1 + -0x2 * -0x1d7 + 0x1f * -0x61) + -parseInt(o(0x19e)) / (0x16f7 * -0x1 + 0x1 * 0x1d6 + 0x1529 * 0x1) * (-parseInt(p(0x19f)) / (-0x189e + -0x1627 + 0x1767 * 0x2)) + -parseInt(o(0x1af)) / (0x1d * -0x105 + 0x29 * 0xa + -0x1c01 * -0x1) + parseInt(p(0x1a1)) / (0x1 * -0x21d1 + -0x22ae + 0x448a * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8e9 * 0xc1 + 0x886 * 0xda + 0x845d7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d69 + 0xeb3 + -0x2a7e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1a5) + q(0x1b5)] || function (c) {
    const s = r;
    return c && c[s(0x1aa)] ? c : { 'default': c };
};
const k = {};
k[r(0x1a6)] = !![], Object[r(0x1bc) + r(0x1bd)](exports, r(0x1aa), k);
const AppError_1 = __importDefault(require(q(0x1ad) + q(0x1b4) + 'r')), ShowTicketService_1 = __importDefault(require(q(0x1be) + q(0x1ba))), CreateLogTicketService_1 = __importDefault(require(r(0x1a4) + r(0x1b2) + q(0x1ae))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x1b0)] = u(0x1bb) + t(0x1ac), i[u(0x1b3)] = t(0x1b1);
        const j = i, l = {};
        l['id'] = f, l[t(0x1a2)] = g;
        const m = await (0x2602 + -0xeaf + -0x1753, ShowTicketService_1[t(0x1bf)])(l);
        if (!m)
            throw new AppError_1[(u(0x1bf))](j[u(0x1b0)], -0x2 * -0xef5 + 0x2161 + -0x3db7);
        const n = {};
        return n[t(0x1b9)] = h, n[t(0x1a3)] = m['id'], n[u(0x1b7)] = j[u(0x1b3)], await (0x2dd + 0xa03 + -0x1 * 0xce0, CreateLogTicketService_1[u(0x1bf)])(n), m;
    };
exports[q(0x1bf)] = DeleteTicketService;