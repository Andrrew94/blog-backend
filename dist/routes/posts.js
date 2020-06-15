"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_controller_1 = require("../controller/posts.controller");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("<html><form method='POST' action='/posts'><input type='text' name='title'><button type='submit'>go</button></form></html>");
});
router.post('/posts', posts_controller_1.getProducts);
router.get('/single', (req, res) => {
    res.send({ message: "Single post page, get request" });
});
exports.default = router;
//# sourceMappingURL=posts.js.map