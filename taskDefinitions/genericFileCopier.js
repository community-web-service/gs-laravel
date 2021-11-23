"use strict";

module.exports = function genericFileCleaner(options) {
	var taskDefinitions = [{
			name: "copyLaravel",
			options: {
				srcFiles: "laravelFiles",
				destDirectories: "laravelDestDirectories",
				globOptions: options.defaultGlobOptions
			}
		}
	];

	return taskDefinitions;
};
