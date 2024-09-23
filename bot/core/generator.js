const FdyConvertor = require("fdy-convertor");
const settings = require("../config/config");
const logger = require("../utils/logger");
const path = require("path");
const _ = require("lodash");

class Generator {
  /**@type {FdyConvertor} */
  #fdyCovertor = null;
  constructor() {
    this.#fdyCovertor = new FdyConvertor({
      path: process.cwd() + "/sessions",
      savePath: process.cwd() + "/convertedSessions",
      fileExt: ".sessions",
    });
  }

  async convert(files, all = false) {
    try {
      if (_.size(files) > 0 && all == false) {
        const converted = await this.#fdyCovertor.convert(files);
        const results = converted.save({
          apiHash: settings.API_HASH,
          apiId: settings.API_ID,
        });

        logger.paragraph(
          `<gr>Sessions converted successfully</gr>\n<br /><u>Converted sessions</u><br /><la>${results?.new.join(
            "<br />"
          )}</la>\n\n<u>Location</u>\n<ye>${path.join(
            process.cwd(),
            "convertedSessions"
          )}`
        );
      } else if (all == true) {
        const converted = await this.#fdyCovertor.convert();
        const results = converted.save({
          apiHash: settings.API_HASH,
          apiId: settings.API_ID,
        });

        logger.paragraph(
          `<gr>Sessions converted successfully</gr>\n<br /><u>Converted sessions</u><br /><la>${results?.new.join(
            "<br />"
          )}</la>\n\n<u>Location</u>\n<ye>${path.join(
            process.cwd(),
            "convertedSessions"
          )}`
        );
      }
    } catch (error) {
      logger.error(`Error while converting sessions: ${error}`);
      process.exit(1);
    }
  }
}

module.exports = Generator;
