"use babel"

import JSONLint from 'json-lint'

export default {

	name: "json-lint",

	grammarScopes: [
		'source.json',
		'source.config',
		'source.legs',
		'source.head',
		'source.chest',
		'source.back',
		'source.animation',
		'source.frames',
		'source.tenant',
		'source.projectile',
		'source.treasurepools',
		'source.patch',
		'source.tech',
		'source.statuseffect',
		'source.species',
		'source.structure',
		'source.recipe',
		'source.questtemplate',
		'source.particle',
		'source.object',
		'source.item',
		'source.npctype',
		'source.activeitem',
		'source.consumable',
		'source.gun',
		'source.sword',
		'source.thrownitem',
		'source.itemdescription',
		'source.tooltip',
		'source.codex',
		'source.cinematic',
		'source.weaponability',
		'source.stagehand'
	],

	scope: 'file',

	lintOnFly: true,

	lint(textEditor) {

		return new Promise((resolve, reject) => {

			var lint = JSONLint(textEditor.getText(), {
				comments: true
			})

			const messages = []

			if (lint.error) {

				let lineIdx = lint.line - 1
				let columnIdx = Math.max(0, lint.character - 1)
				messages.push({
					type: 'Error',
					text: lint.error,
					filePath: textEditor.getPath(),
					range: [[lineIdx, columnIdx], [lineIdx, columnIdx + 1]]
				})
			}

			resolve(messages)
		})
	}
}
