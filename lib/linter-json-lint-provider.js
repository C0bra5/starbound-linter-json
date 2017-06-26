"use babel"

import JSONLint from 'json-lint'

export default {

	name: "json-lint",

	grammarScopes: [
		'source.achievement',
		'source.event',
		'source.aimission',
		'source.config',
		'source.frames',
		'source.animation',
		'source.biome',
		'source.nodes',
		'source.behavior',
		'source.behavior-project',
		'source.configfunctions',
		'source.cinematic',
		'source.codex',
		'source.collection',
		'source.cursor',
		'source.damage',
		'source.dungeon',
		'source.effectsource',
		'source.tooltip',
		'source.activeitem',
		'source.weaponability',
		'source.combofinisher',
		'source.back',
		'source.chest',
		'source.head',
		'source.legs',
		'source.augment',
		'source.currency',
		'source.item',
		'source.consumable',
		'source.instrument',
		'source.liqitem',
		'source.matitem',
		'source.unlock',
		'source.thrownitem',
		'source.inspectiontool',
		'source.beamaxe',
		'source.miningtool',
		'source.harvestingtool',
		'source.flashlight',
		'source.tillingtool',
		'source.painttool',
		'source.wiretool',
		'source.functions',
		'source.2functions',
		'source.liquid',
		'source.monsterpart',
		'source.monstertype',
		'source.partparams',
		'source.monsterskill',
		'source.namesource',
		'source.npctype',
		'source.object',
		'source.parallax',
		'source.particle',
		'source.particlesource',
		'source.bush',
		'source.grass',
		'source.modularfoliage',
		'source.modularstem',
		'source.projectile',
		'source.questtemplate',
		'source.radiomessage',
		'source.recipe',
		'source.structure',
		'source.spawntypes',
		'source.species',
		'source.stagehand',
		'source.statuseffect',
		'source.tech',
		'source.tenant',
		'source.terrain',
		'source.material',
		'source.matmod',
		'source.treasurepools',
		'source.vehicle',
		'source.weather',
		'source.patch',
		'source.disabled',
		'source.json'
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
