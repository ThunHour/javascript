//exercise_1

// const { exit } = require("process");
// const { PassThrough } = require("stream");

// console.log("**Hello World! Welcome To Kit Javascript Bootcamp 2021**")

//exercise_2

// const readline=require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("Please input your name",name=>{
//     console.log(`Greating,${name} and welcome to the javascript Bootcamp`);
//     readline.close();
// });

//exercise_3

// const readline=require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("input your age",age=>{
//     if (Math.sign(age)==1){
//         if (age >= 18){
//             console.log("You are eligible to vote");
//         }
//         else if (age <18){
//             console.log("You aren't adult yet .... Sorry can't vote");
//         }
//         }
    
//     else{
//         console.log("Age must be a positive digit")
//     }
// })

//exercise_4

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("input your name",name=>{
//     readline.question("Enter number of time to display",time=>{
//     for(var i =1; i<=time;i++){
//         console.log(name);
//     }
//     readline.close
//     })
// })

//exercise_5

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("input a number",num=>{
//     if (isNaN(num)===false){
//         if (num%2 ==1){
//             console.log("The number you have entered is odd");
//         }
//         else{
//             console.log("The number you have entered is Even")
//         };
//     }
//     else{
//         console.log("Not a vaild number");
//     };
// })

//exercise_6 Not yet completed
// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output: process.stdout
// });
// var sum=0;
// function sum_num(){
//     readline.question("Input number:",answer=>{
//         if (answer === "stop"){
//             console.log(`Sum: ${sum}`);
//             return readline.close();
//         }
//         else if(answer.length ==0){
//             console.log("you was not input a number");
//         }
//         else if (isNaN(answer)){
//             console.log("The input must be a valid number!");
//         }
//         else{
//             sum += Number(answer);
//         }
//         sum_num()
//     })
// }
// sum_num()

//exercise_7

// const readline =require("readline").createInterface({
//     input: process.stdin,
//     output : process.stdout
// })
// var sum_even=0,sum_odd=0;
// readline.question("Input a number: ",num=>{
//     if (isNaN(num)==false){
//         for ( var i =0;i<=num;i++){
//             if (i%2==0){
//                 sum_even+=i;
//             }
//             else{
//                 sum_odd+=i;
//             };
//         };
//         console.log("Sum of odd number =",sum_odd);
//         console.log("Sum of even number =",sum_even);

//     }
//     else{
//         console.log("That is not a number")
//     }
    
// })

//exercise_8

// const readline =require("readline").createInterface({
//     input: process.stdin,
//     output : process.stdout
// })
// var sum_even=0,sum_odd=0,even_count=0,odd_count=0;
// readline.question("Input a number: ",num=>{
//     if (isNaN(num)==false){
//         for ( var i =0;i<=num;i++){
//             if (i%2==0){
//                 sum_even+=i;
//                 even_count+=1
//             }
//             else{
//                 sum_odd+=i;
//                 odd_count+=1
//             };
//         };
//         console.log("Average of odd number =",sum_odd/odd_count);
//         console.log("Average of even number =",sum_even/even_count);

//     }
//     else{
//         console.log("Invalid input");
//     };
    
// })

//exercise_9

// var random_number=Math.floor(Math.random()*(11-5)+5);
// console.log(`Random number ${random_number}`);

//exercise_10

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output: process.stdout
// });
// var sum_of_even=0;
// readline.question("Input a number",num=>{
//     if(isNaN(num)==false){
//         for (var i =0;i<=num;i++){
//             var random_num=Math.floor(Math.random()*(3001-2000)+2000)
//                 if (random_num%2==0){
//                     sum_of_even+=random_num;
//                 };
//         };
//         console.log(`Sum of even random number : ${sum_of_even}`)
//     }
//     else{
//         console.log("input is invalid");
//     }
// })

//exercise_11

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question("Enter a string :",st=>{
//     if (st.length==0){
//         console.log("The string is empty");
//     }
//     else{
//         var length_string=st.length;
//         console.log(length_string);
//     }
// })

//exercise_12

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question("Enter a string :",st=>{
//     if (st.length==0){
//         console.log("The string is empty");
//     }
//     else{
//         var half=st.length/2;
//         console.log(st.slice(0,half),st.slice(half,st.length));
//     }
// })

//exercise_13

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Input a string",st=>{
//     console.log(st.toLowerCase(st));
// })

//exercise_14

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output: process.stdout
// });
// readline.question("Input a sting :",st=>{
//     console.log(st.toUpperCase(st));
// })

//exercise_15

// const radline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// radline.question("Enter string",st=>{
//     var half = st.length/2
//     var first_half=st.slice(0,half)
//     var second_half=st.slice(half,st.length);
//     console.log(first_half.toLocaleUpperCase(first_half)+second_half);
// })

//exercise_16

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question("Input a string :",st=>{
//     var half = st.length/2;
//     var frist=st.slice(0,half);
//     var reverse_frist=frist.split("").reverse();
//     var join_frist=reverse_frist.join("");
//     var second_half=st.slice(half,st.length);
//     console.log(join_frist+second_half);
// })

//exercise_17

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question("Input a string :",st=>{
//     var last_cha=st.length
//     console.log(`first Character:${st[0]}`)
//     console.log(`Last Character:${st[last_cha-1]}`)
// })

//exercise_18
// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question("Input a String :",st=>{
//     for (var i=0;i<st.length;i++){
//         console.log(st[i],':',st[i].charCodeAt(0));
//     };
// })

//exercise_19
// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// var full_change="";
// readline.question("Enter a string",st=>{
//     for(let x of st){
//         if (x == x.toLowerCase(x)){
//             full_change+=x.toUpperCase(x);
           
//         }
//         else {
//               full_change += x.toLowerCase(st);
//         }
//         };
//         console.log(full_change);
//     }
    
// )

//exercise_20 

// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// function en_de_code(){
//     console.log("Press 1 to encode");
//     console.log("Press 2 to decode");
//     readline.question("Drop your choice: ",answer=>{
//         readline.question("Enter the string to encode",en_answer=>{
//                 var en_string="";
//                 for (x of en_answer){
//                     var plus_num=x.charCodeAt(0);
//                     if (plus_num >64 && plus_num<77 || plus_num>96 && plus_num<109){
//                         new_num=plus_num+13;
//                         en_string += String.fromCharCode(new_num);
        
//                     }
//                     else if (plus_num >76 && plus_num<91 || plus_num>108 && plus_num<123){
//                         new_num=plus_num-13;
//                         en_string += String.fromCharCode(new_num);
                        
//                     }
//                 }
//                 console.log(`Encode:${en_string}`);
//                 readline.question("Do you want to continue? [Y/N]",con_answer=>{
//                     if (con_answer =="Y" || con_answer=="y"){
//                         en_de_code()
//                     }
//                     else if (con_answer=="N"||con_answer=="n"){
//                         console.log("Thanks GoodBye");
//                         return readline.close();
//                     }
//                  })
//         })

//     })
// }
// en_de_code()

//exercise_21

// function fun_calc(num1,num2,opearator) {
//     var result = 0;
//     switch (opearator) {
//         case "*":
//             {
//             result += (num1 * num2)
//         }{break};
//         case "-":
//             {
//             result += (num1 - num2)
//         }{break};
//         case "+":
//             {
//             result += (num1 + num2)
//         }{break};
//         case "/":
//             {
//             result += (num1 / num2)
//         }{break};
//     }
//     return `result:${result}`;
// }

// console.log(fun_calc(50,2,"*"));
// console.log(fun_calc(50,2,"+"));
// console.log(fun_calc(50,2,"-"));
// console.log(fun_calc(50,2,"/"));

//exercise_22

// function fun_split(String_word){
//     return String_word.split(" ")
// }
// console.log(fun_split("Hello world welcome to python"));

//exercise_23
// function make_list(...args){
//     list=[]
//     for (x of args){
//         list.push(x);
//     }
//     console.log(list);
// };
// make_list('hello',12,5);


//exercise_24
// function random_tuple(num){
//     var tuple=[];
//     var sum =0;
//     for (var i = 1; i<=num;i++){
//         var random_num=Math.floor(Math.random(100)*(100-0)+0);
//         tuple.push(random_num);
//         console.log(`Random number ${i}:${random_num}`);
//         sum +=random_num;
//     }
//     console.log(`Tuple:(${tuple})`);
//     console.log(`Sum :${sum}`);
// }
// random_tuple(5);

//exercise_25

// function sum_of_list(element){
//     var sum_element = 0;
//     for (x of element){
//         sum_element += x;

//     }
//     console.log(`Sum of list :${sum_element}`)
// }
// sum_of_list([12,32,43,34,33,12]);

//exercise_26
// function search_tuple(element,num){
//    if (element.includes(num)){
//       console.log(`Element found at Index: ${element.indexOf(num)}`);
//    }
//    else{
//        console.log("Element not found in the tuple")
//    }
// }
// search_tuple([2,12,11,23,31],12)

//exercise_27
// function mean_of_list(element){
//     var num_element =0;
//     for (x of element){
//         num_element+=x;
//     }
//     var num=num_element/element.length;
//     console.log(`Average of list:${num}`);
// }
// mean_of_list([50,10,62,32]);

//exercise_28

// function slice_list(list_element,num){
//     console.log(list_element.slice(0,num+1))
// };

// slice_list([50,10,62,32,64,78,90],2);

//exercise_29

// function make_dictionary(list_element,list_word){
//     var list=[]
//     for (var i=0;i<list_element.length;i++){
//         list.push(list_element[i]+`:`+`${list_word[i]}`)
//     }
//     var new_list=new Set(list)
//     console.log(new_list)
// }

// make_dictionary([50,10,62],["borey","Thirak","dane"])

//exercise_30

// function dict_value(dict){
//     var list=[]
//     for (let i of Object.keys(dict)){
//         list.push(i);
//     }
//     for (let z=0;z<list.length;z++){
//         console.log(list[z]+":",dict[list[z]].toString().replace(/,/g,' '));
//         if (z<list.length-1){
//             console.log('*'.repeat(50));
//         }
//     }
// }
// dict_value({120:["Visal","Borey","Sovann"], 
//             130:["Hout","MouyLeng","pidor"], 
//             140:["Nary","Misora","masaaki"]})