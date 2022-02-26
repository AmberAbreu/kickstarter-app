"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
//run the seed use CLI command: npx prisma db seed
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var alice, farah, bob, hank;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.upsert({
                        where: { email: "alice@alice.com" },
                        update: {},
                        create: {
                            email: "alice@alice.com",
                            name: "Alice",
                            password: "abc123efg",
                            campaigns: {
                                create: {
                                    title: "Lightbulb",
                                    photoUrl: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRidWxifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                                    description: "Help us kick off our new invention: the lightbulb! No more of those dangerous candles.",
                                    status: true
                                }
                            }
                        }
                    })];
                case 1:
                    alice = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "farah@farah.com" },
                            update: {},
                            create: {
                                email: "farah@farah.com",
                                name: "Farah",
                                password: "password",
                                campaigns: {
                                    create: {
                                        title: "Typewriter",
                                        photoUrl: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHlwZSUyMHdyaXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                                        description: "Put the pen down and pick up a typewriter. Funding this project will allow you and many others to get one step closer to minimizing the time it takes to complete your writing tasks by 50%.",
                                        status: true
                                    }
                                }
                            }
                        })];
                case 2:
                    farah = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "bob@bob.com" },
                            update: {},
                            create: {
                                email: "bob@bob.com",
                                name: "Bob",
                                password: "bobby1234",
                                campaigns: {
                                    create: [
                                        {
                                            title: "Wheel",
                                            photoUrl: "https://images.unsplash.com/photo-1609513441098-497a64298a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0b25lJTIwd2hlZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                                            description: "This brand new invention will get you where you need to go!",
                                            status: true
                                        },
                                        {
                                            title: "Sliced Bread",
                                            photoUrl: "https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpY2VkJTIwYnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                                            description: "We present to you: sliced bread! Now you can put the knife away, and spend more quality time enjoying your breakfast. ",
                                            status: true
                                        },
                                    ]
                                }
                            }
                        })];
                case 3:
                    bob = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "hank@hank.com" },
                            update: {},
                            create: {
                                email: "hank@hank.com",
                                name: "Hank",
                                password: "abc123",
                                campaigns: {
                                    create: [
                                        {
                                            title: "Fire",
                                            photoUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                                            description: "This new invention will help keep you and many others warm. Funding this revolutionary project will change your life.",
                                            status: true
                                        },
                                        {
                                            title: "Hourglass",
                                            photoUrl: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91cmdsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                                            description: "Shouldn't keeping time be easy? This invention makes it easier to keep track of an hour.",
                                            status: true
                                        },
                                    ]
                                }
                            }
                        })];
                case 4:
                    hank = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (e) {
    console.error(e);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=seed.js.map