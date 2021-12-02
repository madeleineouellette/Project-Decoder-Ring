// Write your tests here!
const { expect } = require("chai");
const caesarModule= require("../src/caesar");

describe ("shiftValue", () => {
    it ("should return false if the shift amount is 0", () => {
        const expected = false;
        const actual = caesarModule.caesar("thinkful", 0, encode = true);
        expect(actual).to.eql(expected);
    })
    it ("should return false if the shift amount is above 25", () => {
        const expected = false;
        const actual = caesarModule.caesar("thinkful", 26, encode = true);
        expect(actual).to.eql(expected);
    })
    it ("should return false if the shift amount is less than -25", () => {
        const expected = false;
        const actual = caesarModule.caesar("thinkful", -26, encode = true);
        expect(actual).to.eql(expected);
    })
})

describe ("messageEncoding", () => {
    it ("should encode a message by shifting the letters", () => {
        const expected = "uijolgvm"
        const actual = caesarModule.caesar("thinkful", 1, encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should leaves spaces and other symbols as is", () => {
        const expected = "b uijolgvm"
        const actual = caesarModule.caesar("a thinkful", 1, encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should ignore capital letters", () => {
        const expected = "uijolgvm"
        const actual = caesarModule.caesar("THINKFUL", 1, encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should appropriately handle letters at the end of the alphabet", () => {
        const expected = "bkrrgtu"
        const actual = caesarModule.caesar("zippers", 2, encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should allow for a negative shift that will shift to the left", () => {
        const expected = "rfglidsj"
        const actual = caesarModule.caesar("thinkful", -2, encode = true)
        expect(actual).to.eql(expected);
    })
})

describe ("messageDecoding", () => {
    it ("should decode a message by shifting the letters in the opposite direction", () => {
        const expected = "thinkful"
        const actual = caesarModule.caesar("uijolgvm", 1, encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should leaves spaces and other symbols as is", () => {
        const expected = "a thinkful"
        const actual = caesarModule.caesar("b uijolgvm", 1, encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should ignore capital letters", () => {
        const expected = "thinkful"
        const actual = caesarModule.caesar("UIJOLGVM", 1, encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should appropriately handle letters at the end of the alphabet", () => {
        const expected = "zippers"
        const actual = caesarModule.caesar("bkrrgtu", 2, encode = false)
        expect(actual).to.eql(expected);
        })
    it ("should allow for a negative shift that will shift to the left", () => {
        const expected = "thinkful"
        const actual = caesarModule.caesar("rfglidsj", -2, encode = false)
        expect(actual).to.eql(expected);
    })
})

