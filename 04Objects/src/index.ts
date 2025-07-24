
let employee: {
   id: number,
   name: string
} = { id: 123, name: 'DS' }


// type aliasing

type Emp = {
   readonly id: number,
   name: string
}

let emp: Emp = { id: 123, name: 'ds' };