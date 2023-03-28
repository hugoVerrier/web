

const body = document.querySelector('body')



console.log('date')
console.log('')


// for (let pas = 0; pas < 404; pas++) {
//     body.innerHTML+='hello world<br>'
// }

// const showtime = (int) =>{
//     if(int<=9){
//         return '0'+int
//     }else{
//         return int
//     }

// }

// const getTime = () => {const date = new Date()
//     const minute = showtime(date.getMinutes())
//     const hours = showtime(date.getHours())
//     const seconds = showtime(date.getSeconds())
//     const mili = date.getMilliseconds()

//     // body.innerHTML = hours + ':' + minute + ':' + seconds
    
//     body.innerHTML = `${hours} : ${minute} : ${seconds} : ${mili}`
    
//     body.innerHTML(time) }




// setInterval(() => {
//         getTime()
// }, 1000);

// var div = document.getElementById("full");

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function changeColor(){
//   div.style.backgroundColor= getRandomColor();
// }

// setInterval(changeColor,100000);

function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const test = generateRandomNumber();

body.innerHTML=(test)