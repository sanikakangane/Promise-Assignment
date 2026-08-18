function technicalInterviewCheck(marks, cutoff) {

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
                reject("Sorry, you have not cleared the Technical Interview.");
            }

        }, 2000);
    });
}


technicalInterviewCheck([80, 75, 85, 70], 70)
    .then((average) => {
        console.log("Technical Interview Cleared");
        console.log("Average Score:", average);
    })
    .catch((error) => {
        console.log(error);
    });