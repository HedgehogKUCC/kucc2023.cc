"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ROUTER = express_1.default.Router();
/* GET home page. */
ROUTER.get('/', function (_req, res, _next) {
    const DATA = {
        title: 'Express',
        users: [
            {
                avatar: "https://fakeimg.pl/40x40/?text=ICON",
                name: "Kristen Ramos",
                email: "kristen.ramos@example.com"
            },
            {
                avatar: "https://fakeimg.pl/40x40/?text=ICON",
                name: "Floyd Miles",
                email: "floyd.miles@example.com"
            },
            {
                avatar: "https://fakeimg.pl/40x40/?text=ICON",
                name: "Courtney Henry",
                email: "courtney.henry@example.com"
            },
            {
                avatar: "https://fakeimg.pl/40x40/?text=ICON",
                name: "Ted Fox",
                email: "ted.fox@example.com"
            }
        ],
        people: [
            {
                name: "Jane Cooper",
                title: "Regional Paradigm Technician",
                email: "jane.cooper@example.com"
            },
            {
                name: "Cody Fisher",
                title: "Product Directives Officer",
                email: "cody.fisher@example.com"
            },
            {
                name: "Leonard Krasner",
                title: "Senior Designer",
                email: "leonard.krasner@example.com"
            },
            {
                name: "Emily Selman",
                title: "VP, Hardware Engineering",
                email: "emily.selman@example.com"
            },
            {
                name: "Anna Roberts",
                title: "Chief Strategy Officer",
                email: "anna.roberts@example.com"
            }
        ]
    };
    res.render('index', DATA);
});
exports.default = ROUTER;
