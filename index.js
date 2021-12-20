const employee = Object; {
    name:[]
    streetAddress:[]
}

function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee, [key]: value };
}