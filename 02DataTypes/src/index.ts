//  Primitive Data Types

let age: number = 20;
let username: string = 'DarkSoul';
let isAdult: boolean = true;

// any type
let college;
college = 'Don Bosco';
college = 123

function fetch(api: any) {
   console.log(api);
}

// arrays
let numbers: number[] = [1, 2, 3, 4];
numbers.forEach(num => num.toLocaleString);

// tuples
let user: [number, string] = [124, 'DarkSoul'];
// user.
// user[0].
// user[1].

// enums
enum Size { Small = 0, Medium, Large };
const mySize: Size = Size.Large;
console.log(mySize);


// union types 
function kgToLbs(weight: number | string) {
   //code
}
kgToLbs(10);
kgToLbs('10');

// type intersection
type Drag = {
   drag: () => void
}
type Resize = {
   resize: () => void
}
type window = Drag & Resize;

const UiWindow: window = {
   drag: () => { },
   resize: () => { }
}