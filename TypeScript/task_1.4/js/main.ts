interface StudentConstructor {
  firstName: string
  lastName: string
}

interface StudentClassInterface {
  firstName: string
  lastName: string
  workOnHomework(): string
  displayName(): string
}

class StudentClass implements StudentClassInterface {
  firstName: string
  lastName: string

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework(): string {
    return "Currently working"
  }

  displayName(): string {
    return this.firstName
  }
}

const student1 = new StudentClass({ firstName: "John", lastName: "Doe" })
const student2 = new StudentClass({ firstName: "Jane", lastName: "Smith" })

console.log(student1.displayName())
console.log(student1.workOnHomework())
console.log(student2.displayName())
console.log(student2.workOnHomework())
