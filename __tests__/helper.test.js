const assert = require("power-assert")

const {
    isPC
} = require("../src/shared/libs/browser")

/*eslint-disable */
describe('Helper.tests',()=>{
    describe('#isPc()', () => {
        it('should return a boolean', () => {
            assert(isPC())
        })
    });
})