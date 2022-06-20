module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined || matrix.length === 0) return [];
    if (typeof matrix[0] === "number") return matrix.sort((a, b) => a - b);
    matrix.forEach((arr, index) => {
        if (index % 2 === 0) arr.sort((a, b) => a - b);
        if (index % 2 !== 0) arr.sort((a, b) => b - a);
        arr.forEach((el) => result.push(el));
    });
    return result;
};
