// Write your solution in this file!
const employee = {
    name:'Andres', StreetAddress: '16520 Evolve Dr.'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj };

    newObj[key] = value;

    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    
    obj[key]=value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    
    delete newObj.name;

    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key){
    
    delete obj.name;

    return obj;
}

