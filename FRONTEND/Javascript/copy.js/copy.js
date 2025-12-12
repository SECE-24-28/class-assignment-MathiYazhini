//type of copy
//1. shallow copy
//2. deep copy

//shallow copy
let obj = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

let obj2 = obj;
obj2.name = "Jane";
console.log(obj);
console.log(obj2);

//deep copy
let obj3 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

let obj4 = JSON.parse(JSON.stringify(obj3));
obj4.name = "Jane";
obj4.address.city = "Los Angeles";
console.log(obj3);
console.log(obj4);

//deep copy using spread operator
let obj5 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

let obj6 = {...obj5};
obj6.name = "Jane";
obj6.address.city = "Los Angeles";
console.log(obj5);
console.log(obj6);

//deep copy using Object.assign
let obj7 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

let obj8 = Object.assign({}, obj7);
obj8.name = "Jane";
obj8.address.city = "Los Angeles";
console.log(obj7);
console.log(obj8);

//deep copy using structuredClone
let obj9 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

let obj10 = structuredClone(obj9);
obj10.name = "Jane";
obj10.address.city = "Los Angeles";
console.log(obj9);
console.log(obj10);

//deep copy using lodash
let obj11 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

let obj12 = _.cloneDeep(obj11);
obj12.name = "Jane";
obj12.address.city = "Los Angeles";
console.log(obj11);
console.log(obj12);

//rest operator
 