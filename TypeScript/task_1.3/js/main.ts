
interface Teacher {

    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [key: string]: any
    }

interface Director extends Teacher{
    numOfReports: number
}    

const teacher1: Teacher = {
    firstName: "Yiyo",
    lastName: "Ole",
    fullTimeEmployee: true,
    location: "cagliari",
    yearsOfExperience: 5,
    contract: true
}

const teacher2: Teacher = {
    firstName: "Yayo",
    lastName: "Mont",
    fullTimeEmployee: true,
    location: "Miami",
    yearsOfExperience: 3,
    contract: false
    
}

const director1: Director = {
    firstName: "Al",
    lastName: "Pa",
    fullTimeEmployee: true,
    location: "New York",
    yearsOfExperience: 1000,
    numOfReports: 5934,
    contract: true
}

console.log(teacher1)
console.log(teacher2)
console.log(director1)

interface printTeacherFunction {
(firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher("Carl", "Lars"))
console.log(printTeacher("Mors","Olcs"))
