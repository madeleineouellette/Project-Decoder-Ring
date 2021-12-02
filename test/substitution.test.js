// Write your tests here!
const { expect } = require("chai");
const substitutionModule= require("../src/substitution");

describe ("error handling", () => {
    it ("should return false if the substitution alphabet is missing", () => {
        const expected = false
        const actual = substitutionModule.substitution("thinkful", encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const expected = false
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibe", encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should return false if the substitution alphabet does not contain unique characters", () => {
        const expected = false
        const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz", encode = true)
        expect(actual).to.eql(expected);
    })
})

describe ("encoding a message", () => {
    it ("should encode a message by using the given substitution alphabet", () => {
        const expected = "jrufscpw"
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev", encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should work with any kind of key with unique characters", () => {
        const expected = "$rufscpw"
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthd$pzibev", encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should preserve spaces", () => {
        const expected = "x jrufscpw"
        const actual = substitutionModule.substitution("a thinkful", "xoyqmcgrukswaflnthdjpzibev", encode = true)
        expect(actual).to.eql(expected);
    })
})

describe ("decoding a message", () => {
    it ("should decode a message by using the given substitution alphabet", () => {
        const expected = "thinkful"
        const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should work with any kind of key with unique characters", () => {
        const expected = "thinkful"
        const actual = substitutionModule.substitution("$rufscpw", "xoyqmcgrukswaflnthd$pzibev", encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should preserve spaces", () => {
        const expected = "a thinkful"
        const actual = substitutionModule.substitution("x jrufscpw", "xoyqmcgrukswaflnthdjpzibev", encode = false)
        expect(actual).to.eql(expected);
    })
})