'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x18b)) / (0x2653 + 0x1cc * 0x7 + -0x32e6) * (-parseInt(m(0x183)) / (0xea1 * -0x2 + -0xefc + 0x2c40)) + -parseInt(l(0x19c)) / (-0x130c + 0x1e29 + -0xb1a) + -parseInt(m(0x1a9)) / (0x1542 + -0x231f + -0x1 * -0xde1) + -parseInt(l(0x17f)) / (0x8f7 + 0x1f49 * -0x1 + 0x1657) * (parseInt(l(0x187)) / (-0x24 * -0xc7 + -0x253a + 0x944)) + -parseInt(l(0x1ab)) / (0x7 * 0x4e1 + -0x9e1 * 0x1 + -0x815 * 0x3) + parseInt(m(0x1a8)) / (-0x2 * 0xa25 + -0x1 * -0x2d9 + 0x1179) + parseInt(l(0x180)) / (0x2 * -0x12af + -0x2634 + 0x4b9b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1661 * 0x3b + -0x11220c + 0x14eb36));
var __importDefault = this && this[n(0x196) + n(0x181)] || function (c) {
    const p = n;
    return c && c[p(0x1a3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0xad5 + 0x15b1 + -0x1 * -0x177);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x185)] = !![], Object[o(0x19f) + n(0x18d)](exports, n(0x1a3), k);
function a() {
    const s = [
        '470464dkeKOM',
        '\x22userId\x22\x20=',
        '930762iDgJIe',
        'sequelize',
        'type',
        '1327465AOFQsX',
        '14782338KAvIqe',
        'fault',
        '../../mode',
        '68942RcwxzL',
        '\x0a\x20\x20\x20\x20selec',
        'value',
        'replacemen',
        '18ahhJng',
        'ls/Group',
        'tId\x0a\x20\x20\x20\x20',
        '\x22UsersGrou',
        '5PzopnS',
        'userId',
        'erty',
        '\x0a\x20\x20\x20\x20and\x20q',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '\x20from\x20\x22Gro',
        'query',
        '=\x20:userId\x20',
        '.\x22groupId\x22',
        '__importDe',
        '\x22\x20=\x20:tenan',
        'tenantId',
        '.\x22tenantId',
        '\x20and\x20u.id\x20',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '2119797DkyeKF',
        '\x20\x20where\x20uq',
        '\x20,\x20\x22Users\x22',
        'defineProp',
        'QueryTypes',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'SELECT',
        '__esModule',
        't\x20q.*\x20\x0a\x20\x20\x20',
        'nest',
        'default',
        '\x20\x20\x20and\x20uq.',
        '6957200YhbljI'
    ];
    a = function () {
        return s;
    };
    return a();
}
const sequelize_1 = require(n(0x1ac)), Group_1 = __importDefault(require(o(0x182) + n(0x188))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = o, g = q(0x184) + r(0x1a4) + r(0x192) + q(0x19b) + q(0x19e) + r(0x18f) + r(0x18a) + q(0x191) + q(0x19d) + q(0x195) + q(0x190) + r(0x1a7) + q(0x1aa) + q(0x1a1) + r(0x19a) + q(0x194) + q(0x18e) + r(0x199) + r(0x197) + r(0x189), h = {};
        h[r(0x198)] = e, h[r(0x18c)] = f;
        const i = {};
        i[r(0x186) + 'ts'] = h, i[q(0x17e)] = sequelize_1[q(0x1a0)][r(0x1a2)], i[r(0x1a5)] = !![];
        const j = await Group_1[r(0x1a6)][q(0x1ac)]?.[r(0x193)](g, i);
        return j;
    };
exports[o(0x1a6)] = ListUserGroupService;