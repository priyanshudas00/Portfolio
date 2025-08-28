var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/view-count.js
var view_count_exports = {};
__export(view_count_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(view_count_exports);
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
};
var handler = async function(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "OK"
    };
  }
  let viewCountFilePath;
  if (process.env.NETLIFY) {
    viewCountFilePath = import_path.default.join(process.cwd(), "dist", "server", "viewCount.json");
  } else {
    viewCountFilePath = import_path.default.join(process.cwd(), "server", "viewCount.json");
  }
  try {
    if (event.httpMethod === "GET") {
      const data = import_fs.default.readFileSync(viewCountFilePath, "utf8");
      const viewCount = JSON.parse(data);
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(viewCount)
      };
    } else if (event.httpMethod === "POST") {
      const data = import_fs.default.readFileSync(viewCountFilePath, "utf8");
      const viewCount = JSON.parse(data);
      viewCount.totalViews += 1;
      viewCount.lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
      import_fs.default.writeFileSync(viewCountFilePath, JSON.stringify(viewCount, null, 2));
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ success: true, totalViews: viewCount.totalViews })
      };
    } else {
      return {
        statusCode: 405,
        headers: corsHeaders,
        body: JSON.stringify({ message: "Method Not Allowed" })
      };
    }
  } catch (error) {
    console.error("Error handling view count:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        message: "Error handling view count",
        error: process.env.NODE_ENV === "development" ? error.message : void 0
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=view-count.js.map
