function codingScoreCheck(marks, cutoff) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let sum = 0;

            for (let i = 0; i < marks.length; i++) {
                sum = sum + marks[i];
            }

            let average = sum / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }

        }, 2000);
    });
}


codingScoreCheck([80, 70, 90, 60], 70)

    .then((average) => {
        console.log("Coding Assessment Cleared");
        console.log("Average Score:", average);
    })

    .catch((error) => {
        console.log(error);
    });