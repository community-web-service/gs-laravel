/**
 * @fileoverview Exports module:GsLaravel.
 * @copyright Robert Gaines 2020
 * @license Apache-2.0
 * @author Robert Gaines <rob@communitywebservice.com>
 */
 
"use strict";

/**
 * Gulp Swallower plugin for Laravel.
 * @module {Function} GsLaravel
 * @requires module:GulpSwallower
 * @requires module:GsDhtml
 * @implements {module:GulpSwallower.SwallowerPlugin}
 * @param {GulpSwallower} gulpSwallower Gulp Swallower.
 * @param {object} [templateOptions] Default Swallower task template options.
 * @future Lint all all modules
 * @future Beautify all modules
 * @future Consistent variable and file names. i.e. globSet instead of globs.
 * @future .gitignore is not always working.
 * @future dotFolders excluded by .gitignore are being copied.
 * @future Consider stream-combiner;
 * @future Consider gulp-wrap
 * @future Consider gulp-declare
 * @future Consider gulp-filter
 * @future Change var names to the following pattern: fileType + "Files" | Directories + Src | Dest
 * @future Convert ES5 classes to ES6 classes.
 */

module.exports = function GsLaravel(gulpSwallower, templateOptions) {

	var _this = {}; // Private scope.

	_this.gulpSwallower = gulpSwallower;
	_this.templateOptions = typeof templateOptions !== "undefined" ? templateOptions : {};
	_this.namedGlobs = [];

	/**
	 * Run the plugin. Usually called internally by Gulp Swallower.
	 * @method run
	 */

	this.run = function run() {
		_this.loadSettings();
		_this.loadGlobSets();
		_this.addGenericFileCleanersToGulp();
		_this.addGenericFileCopiersToGulp();
		_this.addBuildToGulp();
	};

	/**
	 * Get plugin ID.
	 * @method getId
	 * @returns {string} plugin ID.
	 */

	this.getId = function () {
		return "gs-laravel";
	};

	/**
	 * Get plugin requirements.
	 * @method getRequirements
	 * @returns {string} plugin ID.
	 */

	this.getRequirements = function () {
		return ["gs-dhtml"];
	};

	_this.loadSettings = function loadSettings() {
		var defaultTemplateOptions = require("./defaultSettings.js");

		_this.templateOptions = Object.assign(defaultTemplateOptions, templateOptions);

		_this.templateOptions.defaultGlobOptions.base = _this.templateOptions.wwwBase;
	}.bind(this);

	_this.loadGlobSets = function loadGlobSets() {
		_this.namedGlobs = require("./namedGlobs.js");

		_this.gulpSwallower.extendNamedGlobSets(_this.namedGlobs);
	}.bind(this);

	// @future Reduce boilerplate, but consider the dangers of loading files from arbitrary strings.
	_this.addGenericFileCleanersToGulp = function addGenericFileCleanersToGulp() {
		var taskTemplate = require("./taskTemplates/genericFileCleaner.js");
		var taskDefinitions = require("./taskDefinitions/genericFileCleaner.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addGenericFileCopiersToGulp = function addGenericFileCopiersToGulp() {
		var taskTemplate = require("./taskTemplates/genericFileCopier.js");
		var taskDefinitions = require("./taskDefinitions/genericFileCopier.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addBuildToGulp = function addBuildToGulp() {
		// @future extendTaskSet should take an options object so that this isn't needed.
		var errorCb = function(){};
		var orderPosition = {
			before: ["copyStaticAssets"], // These requirements must run before the task
			after: ["buildParallel"] // These requirements must run after the task
		};
		
		_this.gulpSwallower.extendTaskSet("build", "series", "copyLaravel", errorCb, orderPosition);

	}.bind(this);

};
