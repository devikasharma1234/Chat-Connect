const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() =>{
    console.log("connection successful");
})
.catch(() =>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),      //UTC format
    },
    {
    from: "amit",
    to: "anita",
    msg: "nice meeting you",
    created_at: new Date(),      //UTC format
    },
    {
    from: "aneh",
    to: "riya",
    msg: "all the best",
    created_at: new Date(),      //UTC format
    },
    {
    from: "rocky",
    to: "rani",
    msg: "how are you?",
    created_at: new Date(),      //UTC format
    },
   
];

Chat.insertMany(allChats);
