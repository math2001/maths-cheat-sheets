class Previewer {

    static init() {
        this.cacheDOM()
        this.bindDOM()
    }

    static cacheDOM() {
        this.input = document.querySelector('#preview-input')
        this.median = document.querySelector('#median')
        this.mean = document.querySelector('#mean')
        this.range = document.querySelector('#range')
        this.standardDeviation = document.querySelector('#standard-deviation')
    }

    static bindDOM() {
        this.input.addEventListener('input', this.updateResults.bind(this))
    }

    static updateResults(e) {
        if (e.target.value === '') {
            return
        }
        let numbers = e.target.value.trim().replace(/\s+/g, ' ').split(' ').map(nb => parseFloat(nb))
        if (numbers.includes(NaN)) {
            this.input.classList.add('error')
            numbers = numbers.remove(item => isNaN(item))
            if (numbers.length === 0) {
                return
            }
        } else {
            this.input.classList.remove('error')
        }
        let data = new Data(...numbers)
        this.median.textContent = data.median
        this.mean.textContent = data.mean
        this.range.textContent = data.range
        this.standardDeviation.textContent = data.standardDeviation
    }

}
