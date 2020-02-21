
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }

    const array = []

    for (let i = 0; i < matrix.length; i++) {
        let value = [...matrix[i]];

        if (i % 2) {
            value.reverse();
        }

        array.push(...value);
    }

    return array;
}
