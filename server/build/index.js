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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const resend_1 = require("resend");
const cors_1 = __importDefault(require("cors"));
const resend = new resend_1.Resend('re_daAuRZjZ_88riw8mnWw2siRm13tdtAJBW');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.post("/send", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { from, to, subject, html } = req.body;
    try {
        const { data, error } = yield resend.emails.send({ from, to, subject, html });
        console.log(data);
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
            return;
        }
        res.status(200).json({ message: 'Email sent successfully', data });
    }
    catch (error) {
        console.error(error);
    }
}));
app.get("/", (req, res) => {
    res.send({
        name: "get is working"
    });
});
app.listen(8001, () => console.log('Example app listening on port 8001!'));
