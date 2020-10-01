const fs = require("fs");
const yaml = require("js-yaml");

let fileContents = fs.readFileSync("./sites.yaml");
let data = yaml.safeLoad(fileContents);

function createHtmlFile(title, url) {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Refresh" content="0; url=${url}" />
          <title>YURS | ${title}</title>
        
        </head>
        
        </html>`
    );
}

for (let key in data) {
    fs.writeFileSync(`./website/${key}.html`, createHtmlFile(data[key]["title"], data[key]["url"]));
}