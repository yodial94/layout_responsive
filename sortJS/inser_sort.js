Array.prototype.insertionsort = function(compare) {
    if ("function" != typeof compare) {
        var desc = compare || false;
        compare = function(a, b) {
            return desc ? a < b : a > b;
        }
    }

    var that = this;
    /**
     * Swap two elements by the given index within the current array
     * 
     * @since 1.0
     * @param {int}
     *            i - The first item's index
     * @param {int}
     *            j - The second item's index
     * 
     */
    function swap(i, j) {
        var temp = that[i];
        that[i] = that[j];
        that[j] = temp;
    }

    // sort the array
    for (var i = 1; i < this.length; i += 1) {
        var j = i;
        while (j > 0 && compare(this[j - 1], this[j])) {
            swap(j - 1, j);
            j -= 1;
        }
    }

    return this;
}
