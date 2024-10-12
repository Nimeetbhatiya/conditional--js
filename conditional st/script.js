
let marks = Number(prompt("Enter your marks: ")); 
let grade;

function gradef() {
    grade = (marks >= 0 && marks <= 100) ?
        (marks >= 90 ? "A" :
            marks >= 80 ? "B" :
                marks >= 70 ? "C" :
                    marks >= 60 ? "D" :
                        marks >= 50 ? "E" : "F")
        : "Invalid Marks";
}

gradef();

function check() {
    let comment;
    switch (grade) {
        case "A":
         comment = "Excellent work!";
            break;
        case "B":
         comment = "Well done";
            break;
        case "C":
         comment = "Good job";
            break;
        case "D":
         comment = "You passed, but you could do better";
            break;
        case "E":
         comment = "Just Passed";
            break;
        case "F":
         comment = "Sorry, you failed";
            break;
        default:
        comment  = "Invalid Marks";
            break;
    }
    return comment;
}

let feedback = check();

function final() {
    if (grade == "A" || grade == "B" || grade == "C" || grade == "D" || grade == "E") {
        return "Congratulations! You are eligible for the next level.";
    } else {
        return "Sorry, you failed. Please try again next time.";
    }
}

let complimantry = final();

console.log(`Your grade is: ${grade}. ${feedback}. ${complimantry}`);