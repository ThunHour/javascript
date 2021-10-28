// challenge_01
// console.log("Hello world")

// challenge_02
// console.log("Welcome to the Bootcamp\nGood luck and have fun!")

// challenge_03


// challenge_04
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("My name is BOT! what is your name?",name=>{
//     console.log(`Nice to meet your ${name}! Good luck for BOOTCAMP!`)
// })

// challenge_05
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter a number",num=>{
//     if (isNaN(num)==false){
//         if (Number(num)%2==0){
//             console.log("EVEN");
//         }
//         else{
//             console.log("ODD")
//         };
        
//     }
//     else{
//         console.log("Your input is not a number");
//     }
// })

// challenge_06
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter somthing",st=>{
//     if (st.length==0){
//         console.log("Nothing to display");
//     }
//     else{
//         console.log(st[0]);
//     }
// })

// challenge_07
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter somthing",st=>{
//     if (st.length==0){
//         console.log("Nothing to display");
//     }
//     else{
//         console.log(st[st.length-1]);
//     }
// })

// challenge_08
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter somthing",st=>{
//     console.log(st.toLowerCase(st))
// })

// challenge_09
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter somthing",st=>{
//     console.log(st.toUpperCase(st))
// })

// challenge_10
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter somthing",st=>{
//     if(st.length==0){
//         console.log("Nothing To display");
//     }
//     else{
//         console.log(st.split("").reverse().join(""));
//     }
    
// })

// challenge_11
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter Number",st=>{
//     for(var i=0;i<Number(st);i++){
//         console.log("Hello World!");
//     }
// })

// challenge_12

// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter Number",st=>{
//     for(var i=Number(st);i>=1;i--){
//         console.log(i);
//     }
//     console.log("BOOM!")
// })

// challenge_13
// const readline= require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
// readline.question("Enter a sentence:",st=>{
//     console.log(st.replace("OOP","Object Oriented Programming").replace("FP","Functional Programming").replace("AI","Artificial Intelligence"
//     ))
// })

// challenge_14
// console.log(Math.floor(Math.random(1,7)*(7-1)+1)); 

// challenge_15
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter a number",num=>{
//     for (var i=0;i<Number(num);i++){
//         console.log(Math.floor(Math.random(0,2)*(2-0)+0));
//     }
// })

// challenge_16

// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter a title",st=>{
//     console.log(`<h1>${st}</h1>`);
// })

// challenge_17
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// var list=[]
// function recorsive(){
// readline.question("Enter a sentence:",st=>{
//     if (st=='GENERATE'){
//         print();
//         return readline.close()
        
//     }
//     list.push(st);
//     recorsive();
// })
// }
// recorsive();
// function print(){
//     for (var i=0;i<list.length;i++){
//         console.log(`<P>${list[i]}</P>`);
//     }
// }

// challenge_18

// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter something:",st=>{
//     if (st.includes('#')){
//         console.log(st.slice(0,st.indexOf('#')));
//     }
//     else{
//         console.log(st);
//     }
// })

// challenge_19
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter something:",st=>{
//     if (st.length>2){
//         console.log(st.slice(0,2).split("").reverse().join("")
//         +st.slice(st.length-2,st.length).split("").reverse().join(""))
//     }
//     else if (st.length==2){
//         console.log(st+st)
//     }
//     else if(st.length==1){
//         console.log(st+st+st+st)
//     }
//     else if(st.length==0){
//         console.log("0000")
//     }
// })

// challenge_20
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter something:",st=>{
//      if (st.length==0){
//         console.log("EMPTY");
//     }
//     else{
//         var list_word=''
//         var st_split=st.split(" ").join("");
//         var check_length =st_split.length
//         for (var i=0; i<check_length; i++){
//             for (var x=0; x<i+1; x++){
//                 if (x==0){
//                     list_word+=st_split[i].toUpperCase(st_split[i]);
//                 }
//                 else if (x!=0){
//                     list_word+=st_split[i].toLowerCase(st_split[i]);
//                 }
//             }
//             if(i !=check_length-1){
//                 list_word+='-'
//             }
//         }
//         console.log(list_word);
//     }

// })

// challenge_21
// function Greeting(name){
//     return `Hello ${name}`
// }
// console.log(Greeting("World"));
// console.log(Greeting("Cambodia"));

// challenge_22
// function grade(number){
//     if (number<=100 && number>89){
//         console.log(`You are Grade A`);
//     }
//     else if(number>79 && number<90){
//         console.log("You are grade B");
//     }
//     else if(number>69 && number<80){
//         console.log("You are grade C");
//     }
//     else if (number>59 && number<70){
//         console.log("You are grade D");
//     }
//     else if (number>=0 && number<60){
//         console.log("You are grade F");
//     }
// }

// grade(100)
// grade(91)
// grade(89)
// grade(80) 
// grade(75) 
// grade(66) 
// grade(59) 
// grade(1) 

// challenge_23
// function fun_split(string){
//     if(string.length==0){
//         console.log(string.split(''))
//     }
//     else{
//         console.log(string.split(" "));
//     }
// }
// fun_split("") 
// fun_split("Hello")
// fun_split("Hello World!")
// fun_split("One Two Three Four Five")

// challenge_24
// function fun_sort(number){
//     console.log(number.sort(function(a,b){return a-b}));
// }
// function fun_sort_rev(number){
//     console.log(number.sort(function(a,b){return a-b}).reverse());
//     //When comparing 40 and 100, the sort() method calls the compare function(40,100).
//     //The function calculates 40-100, and returns -60 (a negative value).
//     //The sort function will sort 40 as a value lower than 100.
// }
// fun_sort([])
// fun_sort(['Hello'])
// fun_sort(['A', 'B', 'C', 'D', 'E']) 
// fun_sort([1, 5, 12, 5, 4])
// fun_sort_rev(['A', 'B', 'C', 'D', 'E']) 
// fun_sort_rev(['300', '100', '200', '400']) 
// fun_sort_rev([1, 5, 12, 5, 4]) 

// challenge_25
// function sort_set(num) {
//     var reduced_duplicates = Array.from(new Set(num));
//     var sort_num=reduced_duplicates.sort(function(a,b){return a-b})
//     console.log(sort_num);
// }
// function sort_set_rev(num) {
//     var reduced_duplicates = Array.from(new Set(num));
//     var sort_num=reduced_duplicates.sort(function(a,b){return a-b}).reverse();
//     console.log(sort_num);
// }
// sort_set([]) 
// sort_set(['Hello'])
// sort_set(['A', 'B', 'C', 'C', 'B']) 
// sort_set([1, 5, 12, 5, 4]) 
// sort_set_rev(['A', 'B', 'C', 'D', 'E']) 
// sort_set_rev(['100', '100', '200', '300']) 
// sort_set_rev([1, 5, 12, 5, 4]) 

// challenge_26
// function find_first(num,search) {
//     if (num.includes(search)) {
//         console.log(num.indexOf(search))
//     }
//     else{
//         console.log('None')
//     }
// }
// function find_all(num,search) {
//     if (num.includes(search)) {
//         var list_num=[];
//         for (var i=0;i<num.length;i++) {
//             if (num[i]==search) {
//                 list_num.push(i)
//             }
//         }
//         console.log(list_num);
//     }
//     else{
//         console.log('None');
//     }

// }

// find_all([], 1) 
// find_all(['Hello'], 'Bye') 
// find_all(['A', 'B', 'C', 'C', 'B', 'C', 'C'], 'C') 
// find_all([1, 5, 12, 5, 4], 5) 
// find_first(['A', 'B', 'B', 'B', 'A'], 'B') 
// find_first(['100', '100', '200', '300'], '100') \

// challenge_27
// function odd_even_list(num) {
//     var num_list =[]
//     for (var i = 0; i <num.length; i++) {
//         if (num[i]%2 ==0){
//             num_list.push('EVEN')
//         }
//         else if (num[i]%2 == 1){
//             num_list.push('ODD');
//         }
//     }
//     console.log(num_list);
// }
// odd_even_list([])
// odd_even_list([1, 22, 111, 444]) 
// odd_even_list([2, 11, 222, 333])
// odd_even_list([1, 2, 3, 4, 555]) 

// challenge_28
// function list_number(num,num2,reverse=false) {
//     var num_list =[]
//     for(var i=num;i<=num2;i++) {
//         num_list.push(Number(i));
//     }
//     if (reverse==true){
//         console.log(num_list.reverse());
//     }
//     else if(reverse==false){
//         console.log(num_list);
//     }
    
// }

// list_number(1, 10) 
// list_number(1, 10, reversed=true) 
// list_number(1, 10, reversed=false) 
// list_number(20, 25)
// list_number(20, 25, reversed=true)

// challenge_29
// function fun_add(num,num2){
//     console.log(num+num2)
// }
// function fun_sub(num,num2){
//     console.log(num-num2)
// }
// function fun_mul(num,num2){
//     console.log(num*num2)
// }
// function fun_div(num,num2){
//     console.log(num/num2)
// }
// fun_add(-1, 1001)
// fun_add(1.5, 1.5)
// fun_sub(-1, 1001)
// fun_sub(1.5, 1.5)
// fun_mul(4, 22) 
// fun_mul(1.5, 1.5)
// fun_div(1, 10) 
// fun_div(25, 5)

// challenge_30

// function int_list(num) {
//     var list_count=[]
//     for (var x of num) {
//         if (typeof x == 'number'){
//             if (Number.isInteger(x)){
//                 list_count.push(1)
//             }
//             else{
//                 list_count.push(0)
//             }
//         }
//         else{
//             list_count.push(0)
//         }
//     }
//     if (list_count.includes(0) || list_count.length==0){
//         console.log("False")
//     }
//     else{
//         console.log("True")
//     }
// }

// int_list([]) 
// int_list([1, 2, 3]) 
// int_list([1.5, 2, 2.0])
// int_list([100, 200, 300, 400, 500])
// int_list(['100', '100', '200', '300'])

// challenge_31
// function current_date(){
//     let date = new Date
//     return `${date.getFullYear()}/${Number(date.getMonth())+1}/${date.getDate()}`
// }
// function current_time() {
//     let hour = new Date
//     return `${hour.getHours()}:${hour.getMinutes()}:${hour.getSeconds()}`
// }
// console.log("Current date: " + current_date())
// console.log("Current hour:"+ current_time())

// challenge_32
// function dict_info(first_name,last_name,email,phone){
//     var dict = {"firstname":'',"lastname":'',"email":''};
//     dict['firstname']=first_name[0].toUpperCase()+first_name.slice(1,first_name.length);
//     dict['lastname']=last_name.toUpperCase(last_name);
//     dict['email']=email;
//     dict['phone']=phone;
//     console.log(dict)

// }
// dict_info('hour','seak','seakkimhour@kit.edu.kh','0964968911')
// dict_info ( " " , " " , " " , " " )

// challenge_33
// function dict_users(array){
//     var list_dict=[]
//     for (var i=0;i<array.length;i++){
//         var dict={'username':'','ID':''}
//         dict['username']=array[i];
//         dict['ID']=i+1;
//         list_dict.push(dict);
//     }
//     console.log(list_dict);
// }
// dict_users(["Akai", "Roger", "Fanny", "Diggie"])

// challenge_34
// function dict_search(dict,search){
//     if (dict.hasOwnProperty(search)){
//         console.log(dict[search]);
//     }
//     else{
//         console.log(`ERROR:${search} key not found.`);
//     }
   
// }
// info_students = {
//     "username": "sabbe_k",
//     "score": 100,
//     "comments": "Good job!"}
// dict_search(info_students, "username") 
// dict_search(info_students, "score") 
// dict_search(info_students, "comments")
// dict_search(info_students, "email") 
// dict_search(info_students, "phone_number")

// challenge_35
// function dict_shopping(info_shopping){
//     if (total_quan<=0||total<=0 || Object.keys(info_shopping[0]).length<=1){
//         console.log(`('Invalid JSON',0)`);
//     }
//     else{
//         var total=0;
//         var total_quan=0;
//         for (var i=0; i<info_shopping.length; i++){
//             total+=Number(info_shopping[i]['price'])*Number(info_shopping[i]['quantity']);
//             total_quan+=Number(info_shopping[i]['quantity']);
//         }    
//         console.log(`("${total}" ,${total_quan})`);
//     }
// }
// dict_shopping([{"price" : 123.49, "quantity" : 3}]) 
// dict_shopping([{"price" : 19.99, "quantity" : 3},
// {"price" : 99.99, "quantity" : 6}]) 
// dict_shopping([{"price" : 0.01, "quantity" : 999}]) 
// dict_shopping([{"price" : 123.49, "quantity" : 0}]) 
// dict_shopping([{"price" : -23.49, "quantity" : 2}]) 
// dict_shopping([{"quantity" : 2}]) 
// dict_shopping([{"price" : 99.99}]) 

// challenge_36
// function count(array_search,search) {
//     var counter=0
//     for (let i = 0; i < array_search.length; i++){
//         if (array_search[i]==search){
//             counter++;
//         }
//     }
//     return counter
// }
// function dict_count(array) {
//     if (array.length ==0){
//         console.log({})
//     }
//     else{
//         var list_item=[];
//         var dict_tional={};
//         for (var i=0; i<array.length; i++){
//             if(list_item.includes(array[i])==false){
//                 list_item.push(array[i]);
//             }
//         }
//         for (let k=0; k<list_item.length; k++) {
//             dict_tional[`${list_item[k]}`]=count(array,list_item[k]);
//         }
//         console.log(dict_tional);
//     }
// }
// dict_count([1,1,1,1,2,2,2,3,3,4,4,5]) ;
// dict_count(["hey", "hi", "hi", "hi"]) ;
// dict_count(["python", "python", "c++"]) ;
// dict_count(["a", "b", "c", "d", "e"]) ;
// dict_count([]) ;

// challenge_37
// function initials(array) {
//     var list_letter=[];
//     for(let i=0; i<array.length; i++) {
//         list_letter.push(array[i][0].toUpperCase());
//     }
//     console.log(list_letter);
// }

// initials(['World', 'Wide', 'Web'])
// initials(['South', 'East', 'Asia'])
// initials(['Good', 'luck', 'have', 'fun'])
// initials([]) 

// challenge_38
// function list_to_lists(array) {
//     var new_array = [];
//     for (var i = 0; i < array.length; i++) {
//         new_array.push(array[i].split('').reverse())
//     }
//     console.log(new_array);
// }
// list_to_lists(["Hello"]) 
// list_to_lists(['A', 'a', 'B', 'b']) 
// list_to_lists(["hello", "world"]) 
// list_to_lists([]) 

// challenge_39
// function gen_passwords(str,length,time) {
//     var list=[];
//     while(true){
//         var word=''
//         for (let x=0; x < length; x++) {
//             var ran_word=Math.floor(Math.random()*(length)+0);
//             if (ran_word>=str.length){
//                 let change_index=ran_word-str.length;
//                 word += str[change_index];
//             }
//             else if(ran_word<str.length) {
//                 word += str[ran_word];
//             }
            
//         }
//         if (list.length===time) {
//             break;
//         }
//         else if(list.includes(word)===false){
//             list.push(word);
//         }
//     }
//     return list;
// }

// console.log(gen_passwords('abc',3,2));
// console.log(gen_passwords("abc", 3, 6));
// console.log(gen_passwords("abc123", 5, 3));
// console.log(gen_passwords("abc123", 8, 2));
// console.log(gen_passwords("ABC_*&", 4, 4));

// challenge_40
// function all_passwords(str,length){
//     var list_all_po=[];
//     // var factorial=Math.pow(Array.from(new Set(str)).join("").length,length);
//     for(var i=0;i<str.length;i++){
//         for(let j=0;j<length;j++) {
//             list_all_po.push(str[i]+str[j]);
//         }
//         for(let t=length;t>=0;t--) {
//             list_all_po.push(str[i]+str[t]);
//         }
//     }

//     console.log(Array.from(new Set(list_all_po)));

// }

// all_passwords("abc", 2);
// all_passwords("ab12", 3);
// all_passwords("AAAABC6789", 3);
// function all_passwords(str,length) {
//     var list_ele=[];
//     for (var i=0;i<Math.pow(Array.from(new Set(str)).join("").length,length);i++){
//         for (var j=0;j<length;j++) {
            
//         }
//     }
// }




