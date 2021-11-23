"use strict";

module.exports = function genericFileCopier(options) {
	var taskDefinitions = [
		// @future Consider reducing scope of rootAssetFiles since it duplicates functionality.
		{
			name: "cleanLaravel",
			options: {
				srcFiles: "laravelDestFiles",
				globOptions: options.defaultGlobOptions
			}
		}
	];

	return taskDefinitions;
};
