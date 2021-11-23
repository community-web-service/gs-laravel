"use strict";

module.exports = function genericFileCleaner(globSetGetter, options) {
	var del = require("del");
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;
	
	var taskFunction = function () {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);

		return del(srcFilesGlobSet, globOptions);
	};

	return taskFunction;
};
