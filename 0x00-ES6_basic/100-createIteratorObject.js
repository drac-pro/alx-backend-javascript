export default function createIteratorObject(report) {
  function* employeeGenarator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenarator();
}
