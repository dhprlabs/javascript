// seeing prototype in detail
let heroNames = ["thor", "ironMan", "spiderMan", "captainAmerica"]

let heroPower = {
    thor: "hammer",
    ironMan: "suit", 
    spiderMan: "webShooter",
    captainAmerica: "sheild",

    getSpideyPower: () => {
        console.log(`${this.spiderMan} activated`);
    }
}

// when add method in object, it is added in all datatypes like array, string etc
Object.prototype.proficiency = function () {
    console.log("got powered up :)");
}

heroPower.proficiency()
heroNames.proficiency()

// checking for reverse by adding method in array
Array.prototype.heyProf = function () {
    console.log("prof says hello :)");
}

heroNames.heyProf()
heroPower.heroProf() // error here 

// inheritance
const User = {
    name: "proficiencyhub95",
    mail: "proficiencyhub@yahoo.co.in"
}

const Teacher = {
    makeVideos: false
}

const TeachingSupport = {
    isAvailable: false
}

const TeacherAssistant = {
    makeAssignment: "C++",
    fullTime: true,
    __proto__: Teacher
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeacherAssistant, TeachingSupport)