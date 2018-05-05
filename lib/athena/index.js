const cheerio = require("cheerio");
const fs = require("fs");

const athena = (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(new Error(err));
    const html = content.toString();
    $ = cheerio.load(html);
    let rendered = '';
    if (typeof options.querySelector === "string") {
      console.log(options.querySelector);
      rendered = $.html(options.querySelector);
    } else {
      rendered = $.html();
    }
    return callback(null, rendered);
  });
};

module.exports = athena;