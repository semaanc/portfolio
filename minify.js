const axios = require('axios');
const querystring = require('querystring');
const fs = require('fs');
const replace = require('replace-in-file');
const postcss = require('postcss');
const nested = require('postcss-nested');
const cssnano = require('cssnano');

// Function to minify JavaScript and HTML files using API
async function minifyFile(inputFile, outputFile, fileType) {
  let url;
  if (fileType === 'js') {
    url = 'https://www.toptal.com/developers/javascript-minifier/api/raw';
  } else if (fileType === 'html') {
    url = 'https://www.toptal.com/developers/html-minifier/api/raw';
  } else {
    console.error('Unsupported file type for API minification');
    return;
  }

  const headers = {'Content-Type': 'application/x-www-form-urlencoded'};

  // Read the content of the file
  let fileContent;
  try {
    fileContent = fs.readFileSync(inputFile, 'utf8');
  } catch (err) {
    console.error(`Error reading the file ${inputFile}:`, err);
    return;
  }

  const data = querystring.stringify({'input': fileContent});

  try {
    const response = await axios.post(url, data, {headers});
    if (response.status === 200) {
      // Save the minified content to the output file
      fs.writeFileSync(outputFile, response.data, 'utf8');
      console.log(`Minified ${fileType.toUpperCase()} saved to ${outputFile}`);
      // Replace references in the minified file
      await replaceReferences(outputFile);
    } else {
      console.error('Error:', response.status);
      console.error(response.data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to minify and unnest CSS files using PostCSS
async function minifyAndUnnestCSS(inputFile, outputFile) {
  // Read the content of the file
  let fileContent;
  try {
    fileContent = fs.readFileSync(inputFile, 'utf8');
  } catch (err) {
    console.error(`Error reading the file ${inputFile}:`, err);
    return;
  }

  // Process the CSS using PostCSS with nested and cssnano plugins
  try {
    const result = await postcss([
                     nested, cssnano
                   ]).process(fileContent, {from: inputFile, to: outputFile});
    fs.writeFileSync(outputFile, result.css, 'utf8');
    console.log(`Minified and un-nested CSS saved to ${outputFile}`);
    // Replace references in the minified file
    await replaceReferences(outputFile);
  } catch (error) {
    console.error('Error processing CSS:', error);
  }
}

// Function to replace references in the minified file
async function replaceReferences(outputFile) {
  const options = {
    files: outputFile,
    from: [/script\.js/g, /styles\.css/g, /home\.html/g],
    to: ['script.min.js', 'styles.min.css', 'index.html'],
  };

  try {
    const results = await replace(options);
    console.log('Replacement results:', results);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Usage
const inputFileJS = 'script.js';
const outputFileJS = 'script.min.js';
minifyFile(inputFileJS, outputFileJS, 'js');

const inputFileCSS = 'styles.css';
const outputFileCSS = 'styles.min.css';
minifyAndUnnestCSS(inputFileCSS, outputFileCSS);

const inputFileHTML = 'home.html';
const outputFileHTML = 'index.html';
minifyFile(inputFileHTML, outputFileHTML, 'html');