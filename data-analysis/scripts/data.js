"use strict";

class Data {

    constructor(...data) {
        this.numbers = data
    }

    get average() {
        return this.mean
    }

    get mean() {
        return this.numbers.reduce((sum, val) => sum + val, 0) / this.numbers.length
    }

    get median() {
        let length = this.numbers.length
        if (length % 2 == 0) {
            return (new Data(...this.numbers.slice(length / 2 - 1, (length / 2) + 1))).mean
        } else {
            return this.numbers[parseInt(length / 2)]
        }
    }

    get standardDeviation() {
        let mean = this.mean
        let squaredDiffs = []
        this.numbers.some((number) => {
            squaredDiffs.push(Math.pow(number - mean, 2))
            return false
        })
        return Math.sqrt(new Data(...squaredDiffs).average)
    }

    get range() {
        return Math.max(...this.numbers) - Math.min(...this.numbers)
    }
}
