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
  console.log("NETLIFY environment:", process.env.NETLIFY);
  console.log("CONTEXT environment:", process.env.CONTEXT);
  console.log("SITE_URL environment:", process.env.URL);
  console.log("DEPLOY_URL environment:", process.env.DEPLOY_URL);
  console.log("Current working directory:", process.cwd());
  const isNetlify = process.env.NETLIFY === "true" || process.env.CONTEXT === "production" || process.env.CONTEXT === "deploy-preview" || process.env.URL?.includes("netlify.app") || process.env.DEPLOY_URL?.includes("netlify.app");
  const distServerPath = import_path.default.join(process.cwd(), "dist", "server", "viewCount.json");
  const serverPath = import_path.default.join(process.cwd(), "server", "viewCount.json");
  if (isNetlify && import_fs.default.existsSync(distServerPath)) {
    viewCountFilePath = distServerPath;
    console.log("Using Netlify path:", viewCountFilePath);
  } else if (import_fs.default.existsSync(serverPath)) {
    viewCountFilePath = serverPath;
    console.log("Using local path:", viewCountFilePath);
  } else {
    viewCountFilePath = distServerPath;
    console.log("Using fallback path:", viewCountFilePath);
    if (!import_fs.default.existsSync(viewCountFilePath)) {
      const initialData = {
        totalViews: 100,
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      };
      import_fs.default.writeFileSync(viewCountFilePath, JSON.stringify(initialData, null, 2));
      console.log("Created initial view count file");
    }
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
