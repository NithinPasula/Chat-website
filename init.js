const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("MongoDb Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "amit",
    to: "sumit",
    message: "teach me HTML",
    created_at: new Date(),
  },

  {
    from: "ramu",
    to: "laxman",
    message: "teach me CSS",
    created_at: new Date(),
  },
  {
    from: "Tulsi",
    to: "Nithin",
    message: "I love Nithin",
    created_at: new Date(),
  },
  {
    from: "Nithin",
    to: "Tulsi",
    message: "I love Tulsi",
    created_at: new Date(),
  },
  {
    from: "Niharika",
    to: "Nithin",
    message: "I too Love Nithin",
    created_at: new Date(),
  },
  {
    from: "preeti",
    to: "swathi",
    message: "teach me React",
    created_at: new Date(),
  },
  {
    from: "anitha",
    to: "sunitha",
    message: "teach me EJS",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
