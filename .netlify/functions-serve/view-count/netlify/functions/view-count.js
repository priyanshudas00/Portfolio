var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/view-count.js
var view_count_exports = {};
__export(view_count_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(view_count_exports);
async function handler(event, context) {
  const VIEW_COUNT_KEY = "totalViews";
  const kv = context.env.VIEW_COUNT_KV;
  if (event.httpMethod === "GET") {
    try {
      const totalViewsStr = await kv.get(VIEW_COUNT_KEY);
      const totalViews = totalViewsStr ? parseInt(totalViewsStr) : 100;
      return {
        statusCode: 200,
        body: JSON.stringify({ totalViews })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: "Failed to read view count", error: error.message })
      };
    }
  } else if (event.httpMethod === "POST") {
    try {
      const totalViewsStr = await kv.get(VIEW_COUNT_KEY);
      let totalViews = totalViewsStr ? parseInt(totalViewsStr) : 100;
      totalViews += 1;
      await kv.put(VIEW_COUNT_KEY, totalViews.toString());
      return {
        statusCode: 200,
        body: JSON.stringify({ totalViews })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: "Failed to increment view count", error: error.message })
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" })
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=view-count.js.map
