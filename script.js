/*Question-1 */
const parentObj = {
    calAge: function () {
        console.log(`${this.fname} ${this.lname} ${this.age}`)
    }
}

/*this key word are gng to refer the parent object-method of object */
const childObj = Object.create(parentObj);
childObj.fname = "Ainan";
childObj.lname = "Salaha";
childObj.age = 18;

childObj.calAge();

/*Question -2 */
function Person() {
    this.name = 'Salaha'
}

// adding property 
Person.prototype.name = 'Ainan';
Person.prototype.age = 23

const person1 = new Person();

console.log(person1.name); // Salaha
console.log(person1.age); // 23

/*Question-3 */

const CalSum ={
    returnSum:function(arr){
        let sum=0;
        for(let i=0; i<arr.length; i++){
            sum += arr[i]; //for add the array
            // sum=sum*arr[i] //for multiply the array
        }
        console.log(sum)
    }
}

CalSum.returnSum([1,2,3,4,5])
CalSum.returnSum([1,2,3,4,5,6])
CalSum.returnSum([1,2,3,4,5,6,7])
CalSum.returnSum([1,2,3,4,5,6,7,8])


/*Question-4 */
const user = {
    name: 'Jonh',
    age: 25
}
const prop = Object.getOwnPropertyNames(user)

console.log(prop)





