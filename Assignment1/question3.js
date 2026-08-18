function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let finalAverage = (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }

        }, 2000);
    });
}


finalSelectionCheck(75, 77.5, 70)
    .then((average) => {
        console.log("Final Selection Cleared");
        console.log("Final Average:", average);
    })
    .catch((error) => {
        console.log(error);
    });