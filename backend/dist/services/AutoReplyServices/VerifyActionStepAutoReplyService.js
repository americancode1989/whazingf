'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x19e)) / (-0x6d1 * -0x3 + 0x2412 * -0x1 + 0xfa0) + parseInt(n(0x197)) / (0x1c9d + -0x1 * -0x1101 + -0x2d9c) + parseInt(m(0x1a8)) / (-0x119 + 0x4 * 0x70b + -0x1b10) + parseInt(m(0x191)) / (-0x2 * 0x10c2 + -0x35d * -0x9 + 0x343) + -parseInt(n(0x1a1)) / (-0x114c + 0x1 * -0x8b + -0x3 * -0x5f4) + -parseInt(m(0x1a5)) / (0x1942 * -0x1 + 0x2594 + -0xc4c) + parseInt(n(0x192)) / (0x1 * -0x4bf + -0x24e3 * -0x1 + -0x1 * 0x201d) * (parseInt(n(0x1a6)) / (0x1 * 0x2612 + -0x1d * -0x16 + -0x4 * 0xa22));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8c11 + 0x1722c + -0x59d9));
var __importDefault = this && this[o(0x19d) + o(0x19c)] || function (c) {
    const q = p;
    return c && c[q(0x193)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'defineProp',
        'fault',
        '__importDe',
        '22199fWlMfE',
        'erty',
        'default',
        '917125XftemU',
        'dyAoJ',
        'MFYEy',
        'ls/StepsRe',
        '1006284SONPBP',
        '8MbrBBD',
        'autoReply',
        '324336ypoFCK',
        'col',
        '../../mode',
        'sequelize',
        'plyAction',
        'ls/AutoRep',
        'where',
        'ipBkM',
        'words',
        'stepsReply',
        '466680YclXnE',
        '462665JOnslU',
        '__esModule',
        'DqEXV',
        'value',
        'findOne',
        '291366hLtAeA',
        'tenantId',
        'lower',
        'ply'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x195)] = !![], Object[p(0x19b) + o(0x19f)](exports, o(0x193), k);
const sequelize_1 = require(o(0x18a)), AutoReply_1 = __importDefault(require(p(0x189) + p(0x18c) + 'ly')), StepsReply_1 = __importDefault(require(o(0x189) + o(0x1a4) + o(0x19a))), StepsReplyAction_1 = __importDefault(require(p(0x189) + p(0x1a4) + p(0x18b))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = p, s = o, h = {};
        h[r(0x1a2)] = r(0x199), h[s(0x1a3)] = s(0x18f), h[s(0x18e)] = s(0x190), h[s(0x194)] = s(0x1a7);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[s(0x198)] = g;
        const l = await StepsReplyAction_1[r(0x1a0)][r(0x196)]({
            'where': {
                'stepReplyId': e,
                'words': (-0x1 * 0x543 + -0x3d * -0x4d + 0x68b * -0x2, sequelize_1[s(0x18d)])((-0x1abc + -0x267e + 0x413a, sequelize_1['fn'])(i[s(0x1a2)], (-0xff1 * 0x1 + 0xc61 + 0x390, sequelize_1[s(0x188)])(i[r(0x1a3)])), (0x8a5 + 0x7fc * 0x1 + 0x183 * -0xb, sequelize_1['fn'])(i[r(0x1a2)], f))
            },
            'include': [{
                    'model': StepsReply_1[r(0x1a0)],
                    'as': i[s(0x18e)],
                    'include': [{
                            'model': AutoReply_1[s(0x1a0)],
                            'as': i[s(0x194)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2661 + -0x250f * 0x1 + 0x3 * 0x19a8);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x1a0)] = VerifyActionStepAutoReplyService;