class Person{
    constructor(fName, lName, age, address){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.address = address;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(fName){
        fName.length > 1 ? this._firstName = fName : (() => {throw new Error ("The name you entered is too short!")})();
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lName){
        lName.length > 1 ? this._lastName = lName : (() => {throw new Error ("The name you entered is too short!")})();
    }
    get age(){
        return this._age;
    }
    set age(years){
        years > 0 ? this._age : (() => {throw new Error ("ERROR! Please enter your age!")})();
    }
    get address(){
        return this._address;
    }
    set address(street){
        street.length > 5 ? this._address = street : (() => {throw new Error ("Please enter a valid address!")})();
    }


    fullName(){
        return console.log(this.firstName, this.lastName);
       
    }
}

class Student extends Person{
    constructor(fName, lName, age, address, academy, subjects){
        super(fName, lName, age, address)
        this.academy = academy;
        this.subjects = subjects;
    }

    static checkSubjects(student, subject){
        if(student instanceof Student){
            for(let i=0; i < student.subjects.length; i++){
                if(subject === student.subjects[i]){
                    console.log(`${student.firstName} ${student.lastName} studies the following subject: ${subject}`);
                    return;
                }
                else{
                    console.log(`The student ${student.firstName} doesn't study ${subject}`);
                    return;
                }
            }
        }
        else {
            throw new Error("Error");
        }       
    }
}

let studentsArray = [new Student("Marija", "Maledenovska", 22, "bul.Asnom", "SEDC", ["JavaScript", "C#"]), new Student("Elena", "Betinska", 21, "Third Street", "SEDC", ["HTML", "CSS"])];

Student.checkSubjects(studentsArray[0], "JavaScript");
Student.checkSubjects(studentsArray[1], "JavaScript");
studentsArray[0].fullName();
studentsArray[1].fullName();
