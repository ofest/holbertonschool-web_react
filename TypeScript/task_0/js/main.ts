interface Student {

    firstName: string
    lastName: string
    age: number
    location: string
    }

const student1: Student = {
    firstName: "Yiyo",
    lastName: "Ole",
    age: 102,
    location: "cagliari",
}

const student2: Student = {
    firstName: "Yayo",
    lastName: "Mont",
    age: 40,
    location: "Miami",
}

// Store them in an array
const studentsList: Student[] = [student1, student2]

// Create table elements
const table: HTMLTableElement = document.createElement("table")
const tbody: HTMLTableSectionElement = document.createElement("tbody")

// Loop
studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement("tr")

    const firstNameCell: HTMLTableCellElement = document.createElement("td")
    firstNameCell.textContent = student.firstName

    const locationCell: HTMLTableCellElement = document.createElement("td")
    locationCell.textContent = student.location

    row.appendChild(firstNameCell)
    row.appendChild(locationCell)
    tbody.appendChild(row)
})

//table
table.appendChild(tbody)
document.body.appendChild(table)
