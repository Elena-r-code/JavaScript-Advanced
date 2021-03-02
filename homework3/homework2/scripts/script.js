$(document).ready(function(){


    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
        success: function (response) {
            
            let parsed = JSON.parse(response);

            console.log("Students with an average grade higher than 3:")
             function fullName(student) {
               console.log(student.firstName + " " + student.lastName);
             }

             function checkAverage(student) {
                 return student.averageGrade > 3;
             }

             let studentsAbove3 = parsed.filter(checkAverage);
             studentsAbove3.forEach(fullName);




             console.log("All female students with an average grade of 5: ");

             function averageFive(student){
                 if(student.averageGrade === 5 && student.gender ==="Female"){
                     return student;
                 }
                 
             }            
             let femaleWithAverageFive = parsed.filter(averageFive);
             femaleWithAverageFive.forEach(student => console.log(student.firstName));




             console.log("All male student full names who live in Skopje and are over 18 years old:");

             let maleSkopjeOverEighteen = parsed.filter(student => student.city === "Skopje" && student.age > 18);
             maleSkopjeOverEighteen.forEach(fullName);




             console.log("The average grades of all female student over the age of 24: ");

             let femaleAverageOver24 = parsed.filter(student => student.gender === "Female" && student.age > 24);
             femaleAverageOver24.forEach(student => console.log(student.averageGrade));


             

             console.log("All male students with a name starting with B and average grade over 2: ");

             let maleBoverTwo = parsed.filter(student => student.averageGrade > 2 && student.firstName[0] == "B");
             maleBoverTwo.forEach(fullName)

        },
        error: function (err) {
            console.log(err);
        }
    })
})
