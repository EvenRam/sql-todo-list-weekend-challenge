console.log('JS is sourced!');

// call the function to Display the list of existing songs on page when it loads
getTodos()


//create a function to GET Todo List from the server
 function getTodos(){

    axios.get('/todos')
    .then((response) => {
        console.log("GET / response", response);
        renderTodos(response.data);
        
    });
}


// POST --- send the users input to the sever 
    //git initialize function postTodo()

    function postTodo(addTask){
        console.log('postodo, adding a new todo item');


    // send the new todo to the server 
    axios({
        method: 'POST',
        url: '/todos',
        data: addTask
        
        
    }).then((response) => {
        console.log('postTodo()', response.data);
        refreshTodos();

    }).catch((error) => {
        console.log('Error', error);
        alert('Something went wrong');
    });

    }

// create a function to append todo list to the dom 
    function renderTodos(todoList){
    let todoTableBody = document.getElementById("todoTbody")
    todoTableBody.innerHTML = '';
    //loop over each todo and append data to the dom

for(let todos of todoList){
    todoTableBody.innerHTML += `
             <tr>
                <td>${todos.text}</td>

                <td>${todos.isComplete} <button onClick="isComplete(${todos.id})"> Complete </button> </td>

                <td> <button onClick="deletetodo(${todos.id})"> Delete </button> </td>
            <tr>

        `;
        console.log('This should be the todo list',todoTableBody)
        console.log("the users incoming input",todos)
}

    };

    // add new todo item 

    function refreshTodos() {
        axios({
          method: 'GET',
          url: '/todos'
        }).then(function (response) {
          console.log('refreshTodos() response', response.data);
          renderTodos(response.data);
        }).catch(function (error) {
          console.log('error in GET', error);
        });
      }
      

    function handleSubmit(event){
        event.preventDefault();

        let task = {};

        task.text = document.getElementById("taskName").value
        task.isComplete = false

        postTodo(task);
        clearForm;
    }

//clear form -- need to clear the input forms 
    //initialize function clearform(){}
    function clearForm(){
        let form = document.getElementById("form")
        form.reset();
    }

// PUT -- sending a put request to change completion status on the todo list 
        // initialize function completionStatus (){}

    // Use axios to send a PUT request to change to complete
        // Send  & id in URL
    // For .then, will call the render function.




// Delete-- 
    // Remove a song from our list
