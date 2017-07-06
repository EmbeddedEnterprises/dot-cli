#! /usr/bin/env node

const dot = require ("dot");
const fs = require ("fs");

if (process.argv.length != 4) {
    console.log ("Usage: dotjs template-file json-data-string");
    console.log ("");
    console.log ("dotjs is a simple cli for the doT.js library.");
    console.log ("");
    console.log ("Authors:");
    console.log ("   Fin Christensen");
    console.log ("");
    console.log ("dotjs - Copyright (c) 2017  EmbeddedEnterprises");
    return;
}

fs.readFile (process.argv[2], "utf8", (err, snippet) => {
    if (err) {
        console.err ("Failed to read template: " + err);
        return;
    }

    dot.templateSettings.strip = false;

    let data = JSON.parse (process.argv[3]);
    console.log (dot.template (snippet) (data));
});
