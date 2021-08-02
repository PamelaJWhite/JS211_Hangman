//Classes
//does a class have a constructor or not?? YES. he was just starting without for demonstration
//can it have  more than one constructor?
//like a template, blueprint, or form
let counter = 0
class License {
    // name
    // gender
    // dob
    // height
    // number 
//how do you fill out this template?
//one way is the constructor
    print(){
         console.log("This is a license")
    }

    constructor(iName, iGender, iDob, iHeight){
        //this is the function that will run when you tell it to make a new member of this class
        console.log("Inside the license constructor")
        console.log("Name passed in is", iName)
        console.log("Gender passed in is", iGender)
        console.log("DOB passed in is", iDob)
        console.log("Height passed in is", iHeight)

        this.name = iName;
        this.gender = iGender;
        this.dob = iDob;
        this.height = iHeight;
        this.number = counter +1;
        counter ++ //not the real way this is done; would reset when program is reset, what if two at the same time, etc.
    }
}

//instantiate a new License object; for some reason the example in class console logged Name Passed is John Doe, etc. Mine console logs as undefined
let x = new License("John Doe", "Male", "8/12/1990", "5'5");
//call the print method for that instance
x.print();
//print out the name property for that instance
console.log("Name from x.name", x.name)
console.log("john's height from the constructor: ", x.height)

let y = new License()

//what about the license number, which you don't fill out, but is assigned
//create global counter (at top)

//if you have a method inside an object, how can the method access other properties of that object? keyword, this 

//JS doesn't have anything private in classes. What would those be used for?

//This is sample documentation (everything indented)
    //This class represents a square (as in geometry math class)
    //and provides some utility methods
class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
    //calculates the area of the square
    //@returns the perimeter
    getArea() {
      return this.sideLength * this.sideLength;
    }
    //calculates the perimeter of the square
    //@returns the perimeter
    getPerimeter() {
        return this.sideLength*4
    }
    //provides a description of this square; gives side length
    //@returns a string description
    getDescription() {
        return `A square with side length of ${this.sideLength}`
    }
    
  }

  const square1 = new Square(10);
 
  console.log(`Area of square 1: ${square1.getArea()}`)
  console.log(`Perimeter of square 1: ${square1.getPerimeter()}`)
  console.log(`Description of square 1: ${square1.getDescription()}`)


  

  class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height*this.width
    }
    getPerimeter() {
        return (this.height*2)+(this.width*2)
    }
    getDescription() {
        return `A rectangle with height ${this.height} and width ${this.width}`
    }
  }

const rectangle2 = new Rectangle(8, 7)
console.log(`Area of rectangle 2: ${rectangle2.getArea()}`)
console.log(`Perimeter of rectangle 2: ${rectangle2.getPerimeter()}`)
console.log(`Description of rectangle 2: ${rectangle2.getDescription()}`)


class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return (this.height*this.width)/2
    }
    getPerimeter() {
        return Math.sqrt((this.height*this.height)+(this.width*this.width))+this.height+this.width
    }
}

const myRightTriangle = new Triangle(5, 8)
console.log(myRightTriangle.getArea())
console.log(`Please be the perimeter of the triangle: ${myRightTriangle.getPerimeter()}`)