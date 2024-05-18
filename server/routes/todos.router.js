const router = require('express').Router();
const pool = require('../modules/pool');





// recieved clients GET request and repsond with result.rows
router.get('/', (req, res) => {

 //Query text to send to the database (SELECT)
        // Using backticks will be easier since queries often have quotes in them
        // Needs to be the exact SQL that you would write in Postico

    
            //  let queryText = `SELECT * FROM "todos";`

    // Use pool to make the transaction with the Database 

})

 



//POST route:
router.post('/', (req, res) => {
    console.log('req.body', req.body);

    

    // ! Use parameterization ✅


    // Use the pool to make the transaction
    // pool.query(queryText, [SOME ARRAY OF PARAMETERS])
})  

//PUT Route:

router.put('/rank/:id', (req, res) => {

 //Query text to send to the database (SELECT)
        // Using backticks will be easier since queries often have quotes in them
        // Needs to be the exact SQL that you would write in Postico

    
            //  let queryText = `SELECT * FROM "todos";`

    // Use pool to make the transaction with the Database 
    // Remember: The URL itself will be used to hold some small bit of data. (parameters)


})




//DELETE route:
router.delete('/:id', (req, res) => {

});


module.exports = router;
