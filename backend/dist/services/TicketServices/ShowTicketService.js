'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x127)) / (0x2590 + 0x462 + -0x29f1) * (parseInt(t(0x120)) / (0x2335 * -0x1 + -0x211d + 0x4454)) + -parseInt(t(0x12f)) / (0x250d + 0x1575 + -0x3a7f) + parseInt(t(0x124)) / (-0x1b41 + -0x173b + -0x40 * -0xca) * (parseInt(u(0x109)) / (-0x10b3 + 0xbc4 + 0x4f4)) + -parseInt(t(0x117)) / (-0x1f7a * 0x1 + 0x70a + 0x1876) * (-parseInt(u(0x131)) / (0xb3 * -0x37 + 0x1 * 0x22e3 + 0x399 * 0x1)) + parseInt(t(0x134)) / (0x1ec0 + -0x1 * -0x18d7 + -0x378f) + parseInt(u(0x12b)) / (-0x6d3 + -0x3b * 0x72 + -0x1 * -0x2122) + parseInt(u(0x12c)) / (-0x1 * 0x6c5 + 0xa16 + -0x347) * (-parseInt(t(0x123)) / (0x17ac + 0xfdd + 0xa * -0x3f3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc16f + 0x3b * -0x787 + -0x176b * -0x27));
var __importDefault = this && this[v(0x11c) + w(0x139)] || function (c) {
    const x = w;
    return c && c[x(0x126)] ? c : { 'default': c };
};
function a() {
    const A = [
        'McJcf',
        'fault',
        'isDeleted',
        'erty',
        'DIuSE',
        '5aDYxmp',
        'xeFmf',
        'associatio',
        'default',
        'color',
        'ls/User',
        'RrIGO',
        'rxhqE',
        'ls/Ticket',
        'tenantId',
        'ERR_NO_TIC',
        'value',
        'contact',
        '../../mode',
        '58668Gidipd',
        'tags',
        'include',
        'eJjMV',
        'wallets',
        '__importDe',
        'ls/Contact',
        'whatsapp',
        '../../erro',
        '278ffPpZB',
        'extraInfo',
        'UXTQz',
        '110pPuoLE',
        '368580yJShYy',
        'user',
        '__esModule',
        '809NVOsjb',
        'esJcu',
        'rs/AppErro',
        'gvuLv',
        '2906019qOwqRX',
        '545070geRLeh',
        'name',
        'jxEiS',
        '22158EnoCwy',
        'wXptq',
        '161dtKeKa',
        'KET_FOUND',
        'attributes',
        '1556864DqemrA',
        'model',
        'findByPk',
        'defineProp'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[w(0x114)] = !![], Object[w(0x137) + w(0x13b)](exports, v(0x126), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e9 * 0xc + 0x1 * -0x925 + 0xe9 * -0xe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Ticket_1 = __importDefault(require(v(0x116) + w(0x111))), AppError_1 = __importDefault(require(v(0x11f) + w(0x129) + 'r')), Contact_1 = __importDefault(require(w(0x116) + v(0x11d))), User_1 = __importDefault(require(v(0x116) + w(0x10e))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = w, z = w, j = {};
        j[y(0x122)] = y(0x115), j[y(0x110)] = z(0x121), j[z(0x128)] = y(0x118), j[z(0x12a)] = y(0x11b), j[z(0x11a)] = y(0x12d), j[y(0x10a)] = y(0x125), j[z(0x138)] = y(0x11e), j[z(0x13c)] = y(0x13a), j[z(0x10f)] = y(0x10d), j[z(0x12e)] = function (r, s) {
            return r !== s;
        }, j[z(0x130)] = y(0x113) + z(0x132);
        const l = j, m = {};
        m[z(0x135)] = Contact_1[z(0x10c)], m['as'] = l[z(0x122)], m[z(0x119)] = [
            l[y(0x110)],
            l[z(0x128)],
            {
                'association': l[z(0x12a)],
                'attributes': [
                    'id',
                    l[y(0x11a)]
                ]
            }
        ];
        const n = {};
        n[y(0x135)] = User_1[y(0x10c)], n['as'] = l[y(0x10a)], n[z(0x133)] = [
            'id',
            l[z(0x11a)]
        ];
        const o = {};
        o[z(0x10b) + 'n'] = l[y(0x138)], o[z(0x133)] = [
            'id',
            l[z(0x11a)],
            l[z(0x13c)],
            l[z(0x10f)]
        ];
        const p = {};
        p[z(0x119)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[y(0x10c)][y(0x136)](h, p);
        if (!q || l[y(0x12e)](q[z(0x112)], i))
            throw new AppError_1[(z(0x10c))](l[y(0x130)], 0x1 * -0x8c5 + 0xc23 + -0x1ca);
        return q;
    };
exports[w(0x10c)] = ShowTicketService;