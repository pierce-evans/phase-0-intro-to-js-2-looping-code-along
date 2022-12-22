// Code your solutions in this file
let name = ["Guadalupe", "Ollie", "Aki"];
function writeCards(name, eventName) {
    let messages = [];
    for(let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown() {
let num = 10;
while(num > -1) {
    console.log(num--);
}
}