module.exports = {
	env: {
		browser: true,
		es6: true,
		jquery: true
	},
	extends: "eslint:recommended",
	rules: {
		eqeqeq: "error",
		camelcase: "error",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": "off"
	},
	parserOptions: {
		sourceType: "module"
	}
};
