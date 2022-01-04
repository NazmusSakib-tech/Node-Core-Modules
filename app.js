const mongoose = require("mongoose");
// connection creation and creation a new DB 
mongoose.connect("mongodb://localhost:27017/kukd", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connecty successfull...."))
    .catch((err) => console.log(err));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));