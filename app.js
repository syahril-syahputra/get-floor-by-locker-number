function getFloor(number) {
    let b = true
    let lantai = 1
    let start = 0
    while (b) {
        const countLoker = (lantai % 3 || 3) + 4
        start = start + countLoker
        const end = start;
        const startFrom = end - (countLoker - 1)

        if (number >= startFrom && number <= end) {
            break;
        }
        lantai++
    }
    return lantai
}

const result = getFloor(1000)
console.log(result)