"use babel"

const JSONLint = require('json-lint')

module.exports = {

	name: "sb-json-lint",



	grammarScopes: [
		'source.sbjson',
		'source.json'
	],

	scope: 'file',

	lintsOnChange: true,

	activate : function(){
		console.dir(this);
	},

	lint : function(textEditor) {

		return new Promise((resolve, reject) => {

			var lint = JSONLint(textEditor.getText(), {
				comments: true
			})

			const messages = []

			if (lint.error) {

				let lineIdx = lint.line - 1
				let columnIdx = Math.max(0, lint.character - 1)
				messages.push({
					severity: 'error',
					excerpt: lint.error,
					location:{
						file: textEditor.getPath(),
						position: [[lineIdx,columnIdx],[lineIdx,columnIdx+1]]
					},
					linterName: "jslint"
				})
			}

			resolve(messages)
		})
	}
}
