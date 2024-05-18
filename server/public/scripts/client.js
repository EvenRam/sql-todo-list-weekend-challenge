console.log('JS is sourced!');

// call the function to Display the list of existing songs on page when it loads



//create a function to GET Todo List from the server
// function (GetTodos)

function () {
    
    axios.get('/').then((response) => {
        console.log("GET / response", response);
        (response.data);
    });
}

// create a function to append todo list to the dom 
    //function appendTodosToDom(){}


    //loop over each todo and append data to the dom





//clear form -- need to clear the input forms 
    //initialize function clearform(){}



// POST --- send the users input to the sever 
    //git initialize function postTodo()

    //create our request body


    // send the new todo to the server 



// PUT -- sending a put request to change completion status on the todo list 
        // initialize function completionStatus (){}

    // Use axios to send a PUT request to change to complete
        // Send  & id in URL
    // For .then, will call the render function.




// Delete-- 
    // Remove a song from our list
