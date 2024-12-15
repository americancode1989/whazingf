'use strict';
function a() {
    const w = [
        'ownerId',
        'value',
        '3076640hDeOnN',
        '__importDe',
        'SSS\x20Z',
        'email',
        'moment',
        'add',
        '751446pQIaSA',
        'findByPk',
        'months',
        'isValid',
        'Invalid\x20du',
        '40285kzgVnn',
        'FWCkw',
        '70raOXUt',
        '204WtdpAw',
        '7331hErNxD',
        '69775YKGlbW',
        'status',
        'defineProp',
        '__esModule',
        'wsiob',
        '\x20found',
        'erty',
        '3994011mXuTHZ',
        'toISOStrin',
        '855162lIvzXu',
        'fault',
        'TFxLS',
        '../../mode',
        'eDate\x20form',
        'maxConnect',
        'ions',
        'update',
        'Tenant\x20not',
        'dueDate',
        'phone',
        '68hRNOSm',
        'ls/Tenant',
        '\x20HH:mm:ss.',
        'recurrence',
        'maxUsers',
        'default',
        'cnpj',
        'YYYY-MM-DD',
        '10zPfjqe',
        'mmnaQ',
        'name',
        'planId'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x7c)) / (-0x4 * -0x53b + -0x23cc + -0xd * -0x125) * (parseInt(q(0x99)) / (-0x1 * 0x1f81 + 0x11b * 0x1f + -0x2c2)) + parseInt(q(0x73)) / (0x1 * 0x204f + 0x1715 + 0x3761 * -0x1) + -parseInt(p(0x91)) / (-0x1517 + -0x402 + 0x85f * 0x3) * (-parseInt(p(0x7d)) / (-0x191e + -0x5c9 * 0x4 + 0x3047)) + -parseInt(q(0x7b)) / (-0x1d55 + -0x219b * 0x1 + 0x3ef6) * (-parseInt(q(0x78)) / (-0x1552 + 0x5 * -0x3f5 + -0x12 * -0x249)) + -parseInt(q(0x9f)) / (-0x150c + -0x107c + -0x8 * -0x4b2) + parseInt(q(0x84)) / (-0xdf * 0x2b + 0x17df + 0x1 * 0xd9f) + parseInt(p(0x7a)) / (-0x1b5 + -0x21d6 + 0x2395 * 0x1) * (-parseInt(q(0x86)) / (-0x11b2 * 0x1 + -0x41b * -0x1 + -0x5 * -0x2ba));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x52d82 + -0x56d1d + 0x1 * 0xe30c6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xada + 0x172a * -0x1 + -0x1 * -0x2273);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0xa0) + s(0x87)] || function (c) {
    const t = s;
    return c && c[t(0x80)] ? c : { 'default': c };
};
const k = {};
k[r(0x9e)] = !![], Object[s(0x7f) + r(0x83)](exports, s(0x80), k);
const Tenant_1 = __importDefault(require(s(0x89) + r(0x92))), moment_1 = __importDefault(require(r(0x71))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = r, v = s, g = {};
        g[u(0x81)] = u(0x8e) + u(0x82), g[u(0x79)] = u(0x98) + v(0x93) + v(0x6f), g[v(0x9a)] = u(0x77) + v(0x8a) + 'at', g[u(0x88)] = u(0x75);
        const h = g, i = await Tenant_1[u(0x96)][u(0x74)](f);
        if (!i)
            throw new Error(h[u(0x81)]);
        const j = (0x159b + 0x8 * -0x90 + -0x1d * 0x97, moment_1[u(0x96)])(i[v(0x8f)], h[u(0x79)]);
        if (!j[v(0x76)]())
            throw new Error(h[v(0x9a)]);
        const l = j[u(0x72)](-0x3 * 0xa58 + -0x1bbb + 0x2 * 0x1d62, h[v(0x88)])[u(0x85) + 'g'](), m = {};
        m[v(0x8f)] = l, await i[u(0x8d)](m);
        const n = {};
        n['id'] = i['id'], n[u(0x9b)] = i[v(0x9b)], n[v(0x97)] = i[u(0x97)], n[v(0x95)] = i[v(0x95)], n[u(0x8b) + v(0x8c)] = i[v(0x8b) + u(0x8c)], n[u(0x9c)] = i[v(0x9c)], n[u(0x90)] = i[u(0x90)], n[v(0x70)] = i[v(0x70)], n[u(0x8f)] = i[u(0x8f)], n[u(0x94)] = i[v(0x94)], n[u(0x7e)] = i[v(0x7e)], n[u(0x9d)] = i[u(0x9d)];
        const o = n;
        return o;
    };
exports[r(0x96)] = AdminAddmonthTenantService;