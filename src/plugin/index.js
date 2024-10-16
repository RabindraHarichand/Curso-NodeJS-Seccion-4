const { getUUID } = require("../plugin/get-uuid.plugin");
const { getAge } = require("../plugin/get-age.plugin");

const { http } = require("../plugin/http-client.plugin");
const buildLogger = require("../plugin/logger.plugin");
module.exports = {
  getUUID,
  getAge,
  http,
  buildLogger,
};
