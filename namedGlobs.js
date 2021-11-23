"use strict";

// @future Simplify this. 
// @future Include comments that explains what each of these does.
// @future Consider using glob-intersection to simplify patterns.
// @future Consider converting this to XML.
module.exports = [{
		// @future Couldn't this including files it shouldn't include?
		name: "laravelFiles",
		globSet: [
			"./src/laravel/**/*",
		]
	},
	// @future Isn't this including folders it shouldn't include?
	{
		name: "staticAssetFiles",
		globSet: [
			"./build/laravel/public/css/**/*.css",
			"./build/laravel/public/img/**/*",
			"./build/laravel/public/lib/**/*",
			"./build/laravel/public/fonts/**/*",
			"./build/laravel/public/*"
		]
	},
	{
		name: "srcRootDestFile",
		globSet: [
			"./build/laravel/public/**/*"
		]
	},
	{
		name: "cssDestFiles",
		globSet: [
			"./build/laravel/public/css/**/*.css"
		]
	},
	{
		name: "imgDestFiles",
		globSet: [
			"./build/laravel/public/img/**/*"
		]
	},
	{
		name: "fontDestFiles",
		globSet: [
			"./build/laravel/public/fonts/**/*"
		]
	},
	{
		name: "audioDestFiles",
		globSet: [
			"./build/laravel/public/audio/**/*"
		]
	},
	{
		name: "libDestFiles",
		globSet: [
			"./build/laravel/public/lib/**/*"
		]
	},
	{
		name: "jsDestFiles",
		globSet: [
			"./build/laravel/public/js/**/*.js"
		]
	},
	{
		name: "laravelDestFiles",
		globSet: [
			"./build/laravel/**/*"
		]
	},
	{
		name: "htmlDestFiles",
		globSet: [
			"./build/laravel/public/*.htm",
			"./build/laravel/public/*.html",
			"./build/laravel/public/*.xhtm",
			"./build/laravel/public/*.xhtml",
			"./build/laravel/public/*.mhtm",
			"./build/laravel/public/*.mhtml",
			"./build/laravel/public/*.shtm",
			"./build/laravel/public/*.shtml"
		]
	},
	{
		name: "minDestDirectories",
		globSet: [
			"./build/laravel/public/"
		]
	},
	{
		name: "laravelDestDirectories",
		globSet: [
			"./build/laravel/"
		]
	},
	{
		name: "phpDestDirectories",
		globSet: [
			"./build/laravel/public/php/"
		]
	},
	{
		name: "destDirectories",
		globSet: [
			"./build/laravel/public/"
		]
	}
];
