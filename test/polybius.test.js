// Write your tests here!
const { expect } = require("chai");
const polybiusModule= require("../src/polybius");


describe ("messageEncoding", () => {
    it ("should encode a message by translating each letter to number pairs", () => {
        const expected = "4432423352125413"
        const actual = polybiusModule.polybius("thinkful", encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should translate both 'i' and 'j' to 42", () => {
        const expected = "4242"
        const actual = polybiusModule.polybius("ij", encode = true)
        expect(actual).to.eql(expected);
    })
    it ("should leave spaces as is", () => {
        const expected = "3251131343 2543241341"
        const actual = polybiusModule.polybius("hello world", encode = true)
        expect(actual).to.eql(expected);
    })
})

describe ("messageDecoding", () => {
    it ("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "thi/jnkful"
        const actual = polybiusModule.polybius("4432423352125413", encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should translate 42 to both 'i' and 'j'", () => {
        const expected = "i/j"
        const actual = polybiusModule.polybius("42", encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should leave spaces as is", () => {
        const expected = "hello world"
        const actual = polybiusModule.polybius("3251131343 2543241341", encode = false)
        expect(actual).to.eql(expected);
    })
    it ("should return false if the length of all numbers is odd", () => {
        const expected = false
        const actual = polybiusModule.polybius("32511313435", encode = false)
        expect(actual).to.eql(expected);
        })
})