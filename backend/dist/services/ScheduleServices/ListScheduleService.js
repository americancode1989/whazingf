'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a3c + -0x26a4 + 0xdef);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x1b4)) / (0x2086 + 0x169c + -0x1 * 0x3721) + -parseInt(y(0x1b0)) / (-0x3cf + 0x1826 + -0x1455) * (parseInt(x(0x198)) / (-0x1f2b * -0x1 + 0xf0 * 0x1 + -0x8 * 0x403)) + -parseInt(x(0x188)) / (-0xe2b + 0x13de + -0x5af * 0x1) + parseInt(y(0x1ad)) / (-0x4 * 0x700 + -0x21c1 + 0x3dc6) * (parseInt(y(0x1a2)) / (-0x1 * 0x8e0 + 0x1 * -0x12ce + -0x1bb4 * -0x1)) + parseInt(x(0x1b3)) / (-0x13f2 + 0x1 * -0xba9 + 0x1fa2) + -parseInt(x(0x191)) / (0xb50 + -0xa * 0xf2 + 0x75 * -0x4) * (-parseInt(x(0x1a8)) / (-0x19c8 + -0xb1 * -0x29 + -0x288)) + -parseInt(x(0x1a0)) / (0x1af9 + -0x78a + -0x1365);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x49f8 + 0x356c6 + 0xbc36 * 0x5));
var __importDefault = this && this[z(0x196) + A(0x190)] || function (c) {
    const B = A;
    return c && c[B(0x1af)] ? c : { 'default': c };
};
const m = {};
function a() {
    const E = [
        'limit',
        'KSjcx',
        'default',
        'qkcUV',
        'value',
        'fault',
        '19416GazIgB',
        'and',
        'ls/Message',
        'nZsSC',
        'findAndCou',
        '__importDe',
        'Qcxnd',
        '9ZkBlVg',
        'mediaUrl',
        'length',
        'attributes',
        'gte',
        'DESC',
        'AiFXI',
        'lte',
        '7266250aDLotU',
        'sequelize',
        '192WiquBg',
        'eLxrn',
        'status',
        'order',
        'tenantId',
        'ZMrzT',
        '2871vvxPbr',
        'distinct',
        'createdAt',
        'body',
        'ieZQr',
        '60475SvQFCI',
        'hasMore',
        '__esModule',
        '49436TOdCKs',
        'userId',
        'mdORQ',
        '4214658lQITfT',
        '232756ErbLMq',
        'count',
        'where',
        'scheduleDa',
        'between',
        'defineProp',
        'pending',
        'ticketId',
        'ayBSQ',
        'ntAll',
        'XBVtD',
        'messages',
        'erty',
        'trdqh',
        'xOtLy',
        '../../mode',
        '1156064lazdzS',
        'offset',
        'push'
    ];
    a = function () {
        return E;
    };
    return a();
}
m[A(0x18f)] = !![], Object[A(0x1b9) + z(0x1c0)](exports, z(0x1af), m);
const sequelize_1 = require(z(0x1a1)), Message_1 = __importDefault(require(z(0x187) + A(0x193))), ListScheduleService = async ({
        pageNumber: pageNumber = '1',
        tenantId: g,
        startDate: h,
        endDate: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x1a7)] = D(0x1ba), j[D(0x18c)] = function (v, w) {
            return v && w;
        }, j[C(0x194)] = function (v, w) {
            return v * w;
        }, j[C(0x1ac)] = function (v, w) {
            return v - w;
        }, j[C(0x1bc)] = D(0x1b7) + 'te', j[D(0x1c1)] = C(0x1bb), j[C(0x197)] = D(0x1b1), j[C(0x1be)] = C(0x1aa), j[C(0x18e)] = C(0x1ab), j[C(0x1a3)] = D(0x199), j[D(0x1c2)] = C(0x19d), j[D(0x1b2)] = function (v, w) {
            return v > w;
        }, j[C(0x19e)] = function (v, w) {
            return v + w;
        };
        const k = j, l = { [sequelize_1['Op'][C(0x192)]]: [{ 'scheduleDate': { [sequelize_1['Op']['ne']]: null } }] };
        l[D(0x1a6)] = g, l[D(0x1a4)] = k[C(0x1a7)];
        const n = l;
        if (k[D(0x18c)](h, i))
            n[sequelize_1['Op'][D(0x192)]][C(0x18a)]({
                'scheduleDate': {
                    [sequelize_1['Op'][D(0x1b8)]]: [
                        h,
                        i
                    ]
                }
            });
        else {
            if (h)
                n[sequelize_1['Op'][D(0x192)]][D(0x18a)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x19c)]]: h } });
            else
                i && n[sequelize_1['Op'][D(0x192)]][D(0x18a)]({ 'scheduleDate': { [sequelize_1['Op'][C(0x19f)]]: i } });
        }
        const o = -0x1159 + 0x16da + -0x559, p = k[D(0x194)](o, k[C(0x1ac)](+pageNumber, -0x1 * -0x206d + 0xd25 + -0x2d91 * 0x1)), q = {};
        q[D(0x1b6)] = n, q[D(0x19b)] = [
            'id',
            k[D(0x1bc)],
            k[C(0x1c1)],
            k[D(0x197)],
            k[D(0x1be)],
            k[C(0x18e)],
            k[D(0x1a3)]
        ], q[D(0x18b)] = o, q[D(0x189)] = p, q[D(0x1a9)] = !![], q[D(0x1a5)] = [[
                k[C(0x1bc)],
                k[C(0x1c2)]
            ]];
        const {
                count: r,
                rows: s
            } = await Message_1[D(0x18d)][C(0x195) + D(0x1bd)](q), t = k[D(0x1b2)](r, k[C(0x19e)](p, s[C(0x19a)])), u = {};
        return u[C(0x1bf)] = s, u[C(0x1b5)] = r, u[D(0x1ae)] = t, u;
    };
exports[A(0x18d)] = ListScheduleService;