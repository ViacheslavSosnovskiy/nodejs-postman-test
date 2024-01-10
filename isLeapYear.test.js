const isLeapYear = require("./isLeapYear")

describe("test isLeapYear function", () => {
    test("2008 - true", () => {
        const result = isLeapYear(2008)
        expect(result).toBe(true)
    })
    test("2003 - false", () => {
        expect(isLeapYear(2003)).toBe(false)
    })
    it("1900 - false", () => {
        expect(isLeapYear(1900)).toBe(false)
    })
    test("41 - error 'year must 42 or more'", () => {
        expect(() => isLeapYear(41)).toThrow("year must 42 or more")
    })
    it("2008.4 - error 'year must be integer'", () => {
        expect(() => isLeapYear(2008.4)).toThrow("year must be integer")
    })
    test("() - error 'year must be exist'", () => {
        expect(() => isLeapYear()).toThrow("year must be exist")
    })
    test("'2008' - error 'year must be a number'", () => {
        expect(() => isLeapYear('2008')).toThrow("year must be a number")
    })
    test("null - error 'year must be a number'", () => {
        expect(() => isLeapYear(null)).toThrow("year must be a number")
    })
    test("false - error 'year must be a number'", () => {
        expect(() => isLeapYear(false)).toThrow("year must be a number")
    })
    test("true - error 'year must be a number'", () => {
        expect(() => isLeapYear(true)).toThrow("year must be a number")
    })
    test("()=>{} - error 'year must be a number'", () => {
        expect(() => isLeapYear(()=>{})).toThrow("year must be a number")
    })
    test("{} - error 'year must be a number'", () => {
        expect(() => isLeapYear({})).toThrow("year must be a number")
    })
    test("[] - error 'year must be a number'", () => {
        expect(() => isLeapYear([])).toThrow("year must be a number")
    })
})

const date = new Date(2020, 2, 0)
console.log(date)
console.log(date.getDate())