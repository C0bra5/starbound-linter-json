"use babel"

import LinterJsonLintProvider from './linter-json-lint-provider'
import { install } from 'atom-package-deps'

export default {

  config: {  },

  activate() {  },

  provideLinter: () => LinterJsonLintProvider
}
