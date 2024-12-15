'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x9e)) / (-0x1c2 * -0x2 + 0x2686 + -0x2a09) * (-parseInt(q(0xb2)) / (-0x1525 + 0x1829 + -0x302)) + -parseInt(r(0xae)) / (0xf * -0x1f + 0xcf5 + -0xb21) * (-parseInt(q(0xa0)) / (-0x7 * 0xcb + -0x2dd * -0x1 + 0x2b4)) + parseInt(r(0x94)) / (-0x529 * -0x1 + 0x3dd + -0x901) + parseInt(r(0x90)) / (0x1a1f + 0x16f9 + 0x1889 * -0x2) + -parseInt(q(0x9a)) / (-0x1 * 0x48b + -0xb2d + 0xfbf) + -parseInt(r(0xa6)) / (0x2413 * -0x1 + 0xb37 + 0x6c * 0x3b) * (parseInt(q(0x8f)) / (-0xb44 + -0x3a * -0x76 + -0xf6f * 0x1)) + -parseInt(q(0x8e)) / (-0x1071 + -0x1865 + 0x28e0) * (-parseInt(r(0x86)) / (-0x2 * -0x913 + 0x80 * 0x6 + -0x151b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1b83 * -0x22 + -0x689 * -0x107 + 0x4d * -0x1169));
var __importDefault = this && this[s(0xa4) + s(0xb1)] || function (c) {
    const u = t;
    return c && c[u(0x8b)] ? c : { 'default': c };
};
const k = {};
k[s(0x8c)] = !![], Object[t(0x95) + t(0xb5)](exports, t(0x8b), k), exports[t(0x89) + s(0xad) + 'e'] = exports[s(0xaf)] = exports[s(0x93) + s(0xad) + 'e'] = exports[t(0xb4) + t(0x8d) + s(0xa7)] = exports[t(0xb4) + t(0x8d)] = void (-0x3 * 0x9fa + 0x2 * 0x1034 + 0x1 * -0x27a);
const ListFarewellMessageService_1 = __importDefault(require(s(0x98) + s(0xb3) + s(0x88) + t(0xab) + s(0xb0) + s(0x84) + 'ce')), CreateFarewellMessageService_1 = __importDefault(require(t(0x98) + s(0xb3) + t(0x88) + t(0xa3) + s(0x92) + t(0x88) + s(0xa2))), DeleteFarewellMessageService_1 = __importDefault(require(t(0x98) + s(0xb3) + t(0x88) + t(0x9b) + t(0x92) + t(0x88) + t(0xa2))), ListFarewellMessageServiceAll_1 = __importDefault(require(s(0x98) + s(0xb3) + t(0x88) + t(0xab) + t(0xb0) + t(0x84) + t(0x9d))), UpdateFarewellMessageService_1 = __importDefault(require(s(0x98) + t(0xb3) + t(0x88) + t(0x9c) + s(0x92) + t(0x88) + s(0xa2))), listFarewellMessages = async (e, f) => {
        const v = s, w = s, {
                tenantId: g,
                id: h
            } = e[v(0xa9)], i = {};
        i[w(0xa8)] = g, i[v(0x87)] = h;
        const {farewellMessages: j} = await (0x139 + -0x5f0 * 0x1 + -0x11 * -0x47, ListFarewellMessageService_1[w(0x8a)])(i), l = {};
        return l[w(0xaa) + v(0xa5)] = j, f[v(0x97)](l);
    };
exports[t(0xb4) + t(0x8d)] = listFarewellMessages;
const listFarewellMessagesAll = async (e, f) => {
    const x = s, y = s, {
            tenantId: g,
            id: h
        } = e[x(0xa9)], i = {};
    i[y(0xa8)] = g, i[x(0x87)] = h;
    const {farewellMessages: j} = await (-0x129e + 0x1 * -0x1fca + 0x3268, ListFarewellMessageServiceAll_1[y(0x8a)])(i), l = {};
    return l[y(0xaa) + y(0xa5)] = j, f[x(0x97)](l);
};
exports[s(0xb4) + s(0x8d) + t(0xa7)] = listFarewellMessagesAll;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe50 + 0xd30 + 0x1a4 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const createFarewellMessage = async (d, e) => {
    const z = s, A = s, {
            tenantId: f,
            id: g
        } = d[z(0xa9)], {
            message: h,
            global: i
        } = d[z(0xac)], j = {};
    j[z(0x85)] = h, j[z(0x96)] = i, j[A(0xa8)] = f, j[A(0x87)] = g;
    const l = await (-0x2b * 0xc2 + -0x1f6f + 0x4005, CreateFarewellMessageService_1[A(0x8a)])(j);
    return e[z(0xa1)](-0x5 * 0x530 + -0x1 * -0x1bf + -0xc7d * -0x2)[z(0x97)](l);
};
exports[t(0x93) + t(0xad) + 'e'] = createFarewellMessage;
const remove = async (d, e) => {
    const B = s, C = t, {id: f} = d[B(0x91)], {
            tenantId: g,
            id: h
        } = d[C(0xa9)], i = {};
    return i['id'] = f, i[C(0xa8)] = g, i[B(0x87)] = h, await (0x5 * -0xf2 + 0x39 * -0x14 + 0x92e, DeleteFarewellMessageService_1[B(0x8a)])(i), e[C(0xa1)](-0x1402 + 0x9da * -0x2 + 0x2882)[B(0x99)]();
};
exports[t(0xaf)] = remove;
const updateFarewellMessage = async (e, f) => {
    const D = s, E = t, {id: g} = e[D(0x91)], {
            tenantId: h,
            id: i
        } = e[E(0xa9)], {
            message: j,
            global: l
        } = e[E(0xac)];
    try {
        const m = {};
        m['id'] = g, m[D(0xa8)] = h, m[D(0x87)] = i, m[D(0x85)] = j, m[E(0x96)] = l;
        const n = await (-0x4a * -0x66 + 0x9ee + -0x276a, UpdateFarewellMessageService_1[E(0x8a)])(m);
        return f[E(0xa1)](0x1052 * -0x2 + 0x2 * -0x9d9 + 0xd * 0x416)[E(0x97)](n);
    } catch (o) {
        const p = {};
        return p[D(0x9f)] = o[D(0x85)], f[D(0xa1)](0x1 * -0x1777 + -0x1 * 0x296 + -0x1 * -0x1b9d)[D(0x97)](p);
    }
};
function a() {
    const F = [
        '227520fRtHtK',
        'params',
        'teFarewell',
        'createFare',
        '687160UJEYvc',
        'defineProp',
        'global',
        'json',
        '../service',
        'send',
        '2282595pZMOAo',
        'vices/Dele',
        'vices/Upda',
        'ceAll',
        '91369ZBQGhi',
        'error',
        '1425880mypRNi',
        'status',
        'vice',
        'vices/Crea',
        '__importDe',
        'ssages',
        '24PJXNTL',
        'All',
        'tenantId',
        'user',
        'farewellMe',
        'vices/List',
        'body',
        'wellMessag',
        '3JXgtFw',
        'remove',
        'FarewellMe',
        'fault',
        '6EJEMVU',
        's/Farewell',
        'listFarewe',
        'erty',
        'ssageServi',
        'message',
        '157333KKlKNI',
        'userId',
        'MessageSer',
        'updateFare',
        'default',
        '__esModule',
        'value',
        'llMessages',
        '670rSiGxn',
        '1660977kObRag'
    ];
    a = function () {
        return F;
    };
    return a();
}
exports[s(0x89) + s(0xad) + 'e'] = updateFarewellMessage;