interface Teacher {

    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [key: string]: any
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

console.log(teacher1)
console.log(teacher2)
