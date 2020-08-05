#! /usr/bin/env node

const fs = require('fs');

var colors = require('colors');
console.log('hello'.green);
// colors.enable();
// colors.disable();
// colors.setTheme({
// 	custom: ['red', 'underline'],
// });
// console.log('test'.custom);

fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data.trap);
		return data;
	}
});
