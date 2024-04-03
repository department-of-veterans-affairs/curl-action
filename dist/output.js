"use strict";
const fs = require('fs');

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var requestconf_1 = require("./requestconf");
var core = __importStar(require("@actions/core"));
var util = __importStar(require("./util"));
var setOutput = function (res) {
    if (!res) {
        throw new Error("No response from request");
    }
    if (requestconf_1.INPUT_LOG_RESPONSE) {
        core.info("Response: " + util.buildOutput(res));
    }
    const outputValue = util.buildOutput(res);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `response=${outputValue}\n`);
};
exports.default = setOutput;
//# sourceMappingURL=output.js.map
