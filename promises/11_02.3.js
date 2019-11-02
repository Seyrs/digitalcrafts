function addNumbers(x, y) {
    return new Promise((resolve, reject) => {
        try {
            if (isNaN(x) && isNaN(y)) {
                throw new Error('both inputs are not numbers');
            }
            if (isNaN(x)) {
                throw new Error('x is not a number');
            }
            if (isNaN(y)) {
                throw new Error('y is not a number');
            }
            const answer = x + y;
            resolve(answer);
        } catch (error) {
            reject(error);
        }
    })
}

addNumbers(1, 2)
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.log(error);
    });

addNumbers('word', '2')
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.log(error);
    });

addNumbers('word', 'two')
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.log(error);
    });

addNumbers(2, 'potato')
    .then(function (answer) {
        console.log(answer);
    })
    .catch(function (error) {
        console.log(error);
    });