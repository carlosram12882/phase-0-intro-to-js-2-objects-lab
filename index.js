const employee = {
    name:"Sam",
    streetAddress:"11 Broadway"
}

function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee, ...{[key]: value} };
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee
}
    
function deleteFromEmployeeByKey (employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey (employee, key, value){
    employee[key] = value;
    return employee
}

