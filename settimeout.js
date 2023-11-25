// setTimeout()= invokes a function  after a no of milliseconds
//                 asynchronous function(doesnt pause executin)




// function sum(){
//     console.log("hii");
// }


// const summ=function(){
//     console.log("hloo");
// }

// const  summm=()=>{
//     console.log("foo");
// }

// setTimeout(sum,3000);
// setTimeout(summ,6000);
// setTimeout(summm,9000);





//CLEAR TIMEOUT   and  PARAMETERS

// function sum(a){
//     console.log(` hi ${a}`);
// }


// const summ=function(){
//     console.log("hloo");
// }

// const  summm=()=>{
//     console.log("foo");
// }

// let a=setTimeout(sum,3000,3);
// let b=setTimeout(summ,6000);
// let c=setTimeout(summm,9000);

// document.getElementById("mybutton").onclick=function(){
//     clearTimeout(a);
//     clearTimeout(b);
//     clearTimeout(c);
//     console.log("thanks for  buying");
// }



//SET INTERVAL()=invokes a functtion repeatedly
            // after a no of milliseconds
          //asynchronous function(doesnt paause the execution)  

// let count=0;
// let max=window.prompt("upto ?");
// max=Number(max);

// const mytimer=setInterval(natural,2000);

// function natural(){
//     count+=1;
//     console.log(count);
//     if(count>=max){
//         clearInterval(mytimer);
//     }
// }






//synchronous code = in an ordered sequence,
                //step by step linear instructions
                //{start now ,finish now}

                // console.log("start");
                // console.log("syschronous");
                // console.log("end");

//asynchronous code = out of sequence,
                //example: axxess a database,fetcha file,tasks that  takes time
                //{start now ,finish sometime later}

                // console.log("start");
                // setTimeout(()=>console.log("asynchronous"),5000);
                // console.log("end");


//console.time()=tracks how long an opeartion takes

console.time("response time");
 console.log("hii");
 console.log("hii");
 alert("click");
setTimeout(()=>console.log("hiii"),3000); //doesnt count asyynchronous opeartions

console.timeEnd("response time");

