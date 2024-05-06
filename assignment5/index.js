const express = require('express'), // load express module
 nedb = require("nedb-promises"); // load nedb module
const app = express(), // init app
 db = nedb.create('hits.jsonl'); // init db
 
app.use(express.static('public')); // static content

var hits = 0; // hit counter
db.findOne({hits: {$exists:true}}).then((doc) => {
    if (doc){
        hits= doc.hits; // set global var from database
    }
});


app.get('/hits', (req, res) => {
 hits += 1;
 // upsert (update doc if one exists; otherwise, create new doc)
db.updateOne(
    {hits: {$exists:true}},
    {hits },
    {upsert:true}
   );
 res.contentType('text/plain').send( (hits).toString() );
});

app.listen(3000);



