const isLeapYear = (year) => {
    if (year < 42) {
        throw new Error("year must 42 or more")
    }
    if (!Number.isInteger(year)) {
        throw new Error("year must be integer")
    }
    if (year === undefined) {
        throw new Error("year must be exist")
    }
    if (typeof year !== "number") {
        throw new Error("year must be a number")
    }
    const date = new Date(year, 2, 0)
    const days = date.getDate()
    return (29 === days)
}

module.exports = isLeapYear