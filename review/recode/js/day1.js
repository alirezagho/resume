// function sayHi(name) {
//     console.log('hello ' + name + " !")
 
// }
// sayHi('李华')

// const type=(args)=>{
//     console.log(args+"  "+"is "+typeof args)
// }
// type(1)
// type('s')
// type(true)
// type(undefined)
// type(null)
// type([])
// type({})
// type(function(){})


// console.log(Object.prototype.toString.call(type) === '[object Array]')


// var obj = {x : 1};
// function foo(o) {
//     o = 100;
// }
// foo(obj);
// console.log(obj.x); 


// // a>10?(b=a):(b=a-2)
// var d = (a = 3, b = 4)
// console.log("tt"+(a = 3, b = 4))
// var d = a = 3, b = 4
// console.log(d)
// var a = typeof 3 + 4
// console.log(a)
// var a = typeof  typeof 4+4
// console.log(a)


// var a=10
// var b=2
// // console.log(b=a++)
// // console.log("c"+(b=++a))

// console.log("sanm"+(a>10?(b=a):(b=a-2)))


// let c = 1;  
// // c+++c; 
// console.log(c+++c) 
// console.log(typeof c+2);


// console.log(1+1);    
// console.log("2"+"4");  
// console.log(2+"4"); 
// console.log(+"4");

// type(NaN)

// if(NaN===NaN){
//     console.log('nna')
// }else{
//     console.log('ff')
// }

// console.log(undefined==null)//true
// console.log(undefined===null)//false
// type(undefined)
// type(null)


// const test={a:1}

// function g(test){

//     console.log(test)
// }
// g(test)

// var obj = {x : 1};
// function foo(o) {
//     o = 100;
// }
// foo(obj);
// console.log(obj.x);


// console.log({}==={})

// for(var i = 0; i< 6; i++){
//     if(i % 4 === 0){
//         break;
//     }
//     console.log(i);
// }

for(var i = 0; i< 6; i++){
    if(i % 4 === 0){
        continue;
    }
    console.log(i);
}
var user = '小花'
switch (user) {
    case '小花':
       console.log('满分')
    case  '小明':
        console.log('优秀')
        break
    case  '小刚':
        console.log('良好')
    default:
        console.log('不及格') 
}
var a = 2
if(a = 1) {
console.log('a等于1')
}else{
console.log('a不等于1')
}


var result = sum(3, 4)
console.log(result)
function sum(a, b){
    return console.log(a + b)
    // return a + b
}



