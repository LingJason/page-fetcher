const request =require('request');
const fs = require('fs');
const link = process.argv[2];
const path = process.argv[3];
console.log(path);
request(link, (error, response, body) => {
//console.log('error:', error);
//console.log('statusCode:', response && response.statusCode);
//console.log('body:', body);

    fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    // file written successfully
  });
});


