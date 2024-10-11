const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../dista/index.html'), 'utf-8');

const dom = new JSDOM(html);
global.document = dom.window.document;
global.window = dom.window;
global.location = dom.window.location; // Add this line

