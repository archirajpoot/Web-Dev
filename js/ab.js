let a=10
function sum(){
    console.log(a);
}
export {a,sum};


function sum(a){
    return function(b){
        if(b){
        return sum(a+b);
        }
        return a;
    }
}
console.log(sum(2)(3)(7)());
