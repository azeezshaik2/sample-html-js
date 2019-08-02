function callAlert() {
    alert('why you bother me');
}

let x;
console.log('value of x: ' + x);
x = 6;

console.log('value of a: ' + a);
let a = 8;

/*function hoisting*/
myFun();
function  myFun() {
    console.log('inside my fun');
};

/*variable hoisting*/
y();
let y = myFun2()
{
    console.log('inside my fun 222');
};