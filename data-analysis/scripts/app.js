"use strict";

Array.prototype.remove = function(remove) {
    // to remove is a function
    var arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!remove(this[i])) {
            arr.push(this[i])
        }
    }
    return arr
}

Previewer.init()
