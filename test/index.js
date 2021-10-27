import assert from 'assert'
import config, { createConfig } from '../index.js'

describe("index", function () {

	it("config", function() {
		assert.deepEqual(config, {})
	})

	it("createConfig", function() {
		assert.deepEqual(createConfig("./test/examples/.env.json", "./test/examples/config.json"), {
			"MY_TITLE": "HELLO WORLD",
			"FOO": true,
			"BAR": false
		})
	})

})
