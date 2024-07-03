interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    location: 'Egypt'
}

const studentTwo: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Cameroon'
}

const studentsList: Student[] = [studentOne, studentTwo];

const table = document.createElement('table');

const headerRow = table.insertRow();
const headers = ['First Name', 'Location'];
headers.forEach(header => {
    const th = document.createElement('th');
    th.innerText = header;
    headerRow.appendChild(th);
});

studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
});

document.body.appendChild(table);
