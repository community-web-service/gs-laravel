"use strict";

// @future Determine if  gitIgnore should be passed as a filter or extension. It shouldn't be baked in.
module.exports = function genericFileCopier(globSetGetter, options) {
	// @future Should some requirements, such as gulp, be injected via options?
	var gulp = require("gulp");
	var excludeGitignore = require("gulp-exclude-gitignore");
	var multiDest = require("gulp-multi-dest");
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;
	var destDirectories = options.destDirectories;

	var taskFunction = function () {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);
		var destDirectoriesGlobSet = globSetGetter.getGlobSet(destDirectories);

		return gulp.src(srcFilesGlobSet, globOptions)
			.pipe(excludeGitignore())
			.pipe(multiDest(destDirectoriesGlobSet));
	};

	return taskFunction;
};
