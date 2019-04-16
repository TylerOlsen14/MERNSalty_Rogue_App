
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Tucker:Tucker@cluster0-tihhu.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = {
    mongoURI: 'mongodb+srv://Tucker:Tucker@cluster0-tihhu.mongodb.net/test?retryWrites=true'
}
