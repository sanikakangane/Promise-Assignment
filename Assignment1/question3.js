function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let average = (codingAverage + technicalAverage) / 2;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }

        }, 2000);
    });
}

let codingAverage = 80;
let technicalAverage = 77.5;
let cutoff = 60;

finalSelectionCheck(codingAverage, technicalAverage, cutoff)
.then((average) => {
    console.log("Final Selection Cleared");
    console.log("Final Average:", average);
})
.catch((error) => {
    console.log(error);
});
