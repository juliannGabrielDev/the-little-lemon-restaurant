export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
        console.error("Invalid date:", date);
        return [];
    }

    let result = [];
    let random = seededRandom(parsedDate.getFullYear() + parsedDate.getMonth() + parsedDate.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }

    console.log('Generated times for', parsedDate, result);
    return result;
};

export const submitAPI = function(formData) {
    console.log('Submitting:', formData);
    return true;
};