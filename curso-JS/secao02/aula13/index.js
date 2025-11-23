let va = 'A'; //B
let vb = 'B'; //C
let vc = 'C'; //A

const varA = va;

va = vb;
vb = vc;
vc = varA;

console.log(va, vb, vc);