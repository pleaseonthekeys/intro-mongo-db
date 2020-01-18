const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/gabe");
};

//once we connect, create data, shapes that we want data for:
//these are our collections
//doesn't do anything, just instructions for a collection
//you canuse JS native types!
const student = new mongoose.Schema({
  firstName: String,
  cohort: String
});

//convert over to a mongo model:
//don't pluralize, because mongo will pluralize for us
const Student = mongoose.model("student", student);
//this returns a model (convention use capitals to name models)
//We now have a reference to a model called Student, which is going to represent a collection
//we can now save students using this Student model against the student collection

//inserts and queries

//let's actually connect to the db then add students
connect() //calling mongoose.connect which returns a promise
  .then(async connection => {
    //now write operations against DB: create 1 student...
    const student = await Student.create(
      /*pass an object that fulfills schema */ {
        firstName: "Gabe",
        cohort: "HRNYC27"
      }
    );
    console.log(student);
  }) //we could potentially not pass anything, just an empty object, and nothing would happen, we would just get a document with an ID

  .catch(err => console.error(err));
//will almost never use __v (version) its the version of the schema, in production often stripped out, handle version yourself, not Mongo
//logged object is not a regualr JS object, its a mongoose document
//has methods that we can use to operate on it
//can be converted to JSON to pass around regular JS objects
//mongo vs mongoose: mongo just spits out JSON, mongoose sits on top and provides tools, methods, helpers that virtualize that

//we can validate our models like this:
/* firstName: {
  type: String,
  required: true
},
favFoods: [{type: String}]
info: {
  school: {
    type: String
  },
  shoeSize: {
    type: number
  }
}*/
