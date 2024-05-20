const router = require('express').Router();
const pool = require('../modules/pool');




// recieved clients GET request and repsond with result.rows
router.get('/', (req, res) => {

 //Query text to send to the database (SELECT)
        // Using backticks will be easier since queries often have quotes in them
        // Needs to be the exact SQL that you would write in Postico

    
 let queryText = `SELECT * FROM "todos";`;

    // Use pool to make the transaction with the Database 
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
      }) 
        .catch(error => {
          console.log('error getting todo list', error);
          res.sendStatus(500);
        });
})

 



//POST route:
router.post('/', (req, res) => {
    console.log('req.body', req.body);

    let newTodo = req.body;
    console.log('adding new todo item', newTodo);

    console.log( "adding new todo:", newTodo)

    // ! Use parameterization ✅
 let queryText = `
    INSERT INTO "todos" ("text", "isComplete")
    VALUES ($1 , $2);
    `;

    // Use the pool to make the transaction
    // pool.query(queryText, [SOME ARRAY OF PARAMETERS])

   
    pool.query(queryText,[newTodo.text,newTodo.isComplete])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new todos`, error);
        res.sendStatus(500);
      })
  });



//PUT Route:

router.put('/:id', (req, res) => {

    let todosId = req.params.id;

    let isComplete = req.body.isComplete;

  
console.log("change is complete:", todosId, isComplete);

 //Query text to send to the database (SELECT)
        // Using backticks will be easier since queries often have quotes in them
        // Needs to be the exact SQL that you would write in Postico

    
            //  let queryText = `SELECT * FROM "todos";`
            let queryText = `
            UPDATE "todos" SET "isComplete" = NOT "isComplete"
            WHERE "id"= $1;
        `
    // Use pool to make the transaction with the Database 
    // Remember: The URL itself will be used to hold some small bit of data. (parameters)
    pool.query(queryText, [todosId])
    .then((result) => {
      res.sendStatus(204)
    })
    .catch((err) => {
      console.log(`Error making query.. '${queryText}'`, err)
      res.sendStatus(500)
    })

})




//DELETE route:
router.delete('/:id', (req, res) => {

});


module.exports = router;
