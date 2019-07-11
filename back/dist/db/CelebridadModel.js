"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
exports.CelebridadSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String },
    catchPhrase: { type: String },
    creator: { type: String },
    created_at: { type: Date, default: Date.now }
});
exports.CelebridadModel = mongoose_1.default.model('receta', exports.CelebridadSchema);
//# sourceMappingURL=CelebridadModel.js.map