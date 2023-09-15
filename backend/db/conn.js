const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://arthurkunz:43tHNpTlChahmueM@cluster0.e1buhlr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log(`ERRO : ${error}`);
  }
}

module.exports = main;
