const cities = require("../index.json");
const assert = require("assert");
describe('Cities list', function () {
	it('Length', function () {
		assert.equal(Object.keys(cities).length>79000,true);
		this.test.title = `Length: ${Object.keys(cities).length}`;
	});
	it('look up', function () {
		assert.equal(cities["Leeds"],true);
		assert.equal(cities["Reading"],true);
	});
});