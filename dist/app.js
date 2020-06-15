"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const port = 3000;
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const posts_1 = __importDefault(require("./routes/posts"));
app.use(posts_1.default);
app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});
app.listen(port, () => console.log(`App listens to port ${port}`));
//# sourceMappingURL=app.js.map