//two types of export - 1) defualt export, 2) named export 
export const a = 1; // named export
export const b = 2; // named export
export const c = 3; // named export
export const d = 4; // named export
export const e = 5; // named export

export function avg(a, b) { // named export
 
    return a+b/2;
}

// let obj;
// export default obj = {
//     x: 6,
//     y: 8
// }

let obj = {
   x: 6,
   y: 8 
}

export default obj; // default export - kisi bhi name se export kr skate hai