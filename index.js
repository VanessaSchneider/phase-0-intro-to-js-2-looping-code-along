const { getNamespaceURI } = require("jsdom/lib/jsdom/browser/documentAdapter")


function writeCards(names, celebration){
    let messages = []
for (let i = 0; i < names.length; i++){
    messages.push (`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);}


    
    return messages;
}


writeCards(names, celebration);

function countDown(){
let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--); 

}}
