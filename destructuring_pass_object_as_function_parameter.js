const stats={
    max:56.78,
    standard:4.34,
    median:34.54,
    mode:23.87,
    min:-0.75,
    average:35.85
}
const half=(function (){
    return function half({max,min}){
        return (max+min)/2;
    }
})();
console.log(half(stats))

// function half({max,min}){
//     console.log((max+min)/2);
    
// };
// half(stats);