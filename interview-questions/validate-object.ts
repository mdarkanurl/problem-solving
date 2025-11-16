// Write a function that validate an object.


function validate(obj: Record<string, any>, schemas: Record<string, any>) {
  const objKeys = Object.keys(obj);
  const schemaKeys = Object.keys(schemas);

  if(objKeys.length !== schemaKeys.length) return false;

  for(let key in schemas) {

    if(!objKeys.includes(key)) return false

    const expected = schemas[key];
    const actual = obj[key];

    console.log("Expected", expected);
    console.log("Actual", actual);

    const expectedType = Array.isArray(expected) ? "array" : typeof expected;
    const actualType = Array.isArray(actual) ? "array" : typeof actual;

    if(expectedType !== actualType) return false;
  }
  return true;
}


console.log(validate(
  { age: 18, name: "Mohammad", isMarryed: false },
  { name: "Ali", isMarryed: false, age: 17 }
)); // true

console.log(validate(
  {name: "", isMarred: "Don't know"},
  {name: "string", isMarred: false}
)); // false

console.log(validate(
  { age: 18, name: "", isMarryed: false, languages: ["English", "Bangladesh"] },
  { name: "", isMarryed: false, age: 17 }
)); // false

console.log(validate(
  { age: 18, name: "", isMarryed: false, languages: ["English", "Bangladesh"] },
  { name: "", isMarryed: false, age: 17, languages: ["English", "Bangladesh"] }
)); // true
