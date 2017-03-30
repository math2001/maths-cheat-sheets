"use strict";

class Data {

    constructor(...data) {
        this.data = data
    }

    get average() {
        return this.mean()
    }

    get mean() {
        return this.data.reduce((sum, val) => sum + val, 0) / this.data.length
    }

    get median() {
        let length = this.data.length
        if (length % 2 == 0) {
            return (new Data(...this.data.slice(length / 2 - 1, (length / 2) + 1))).mean
        } else {
            return this.data[parseInt(length / 2)]
        }
    }
}
