console.log('JS is sourced!');

// call the function to Display the list of existing songs on page when it loads
getTodos()


//create a function to GET Todo List from the server
 function getTodos(){
    console.log('in get todos...')
    axios.get('/todos')
    .then((response) => {
        console.log("GET / response", response);
        // render the todo list
        renderTodos(response.data);
    }).catch((error) => {
        console.log('Error', error);
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

    // another way to clear  todoTableBody.clear()
    //loop over each todo and append data to the dom

for(let todos of todoList){
    const classText = todos.isComplete ? 'green' : 'red';
    todoTableBody.innerHTML += `
             <tr data-testid="toDoItem">
                <td class=${classText}>${todos.text}</td>

                <td>${todos.isComplete} </td>
                <td data-testid="completeButton">
                <button onClick="completionStatus(${todos.isComplete},${todos.id})"> Complete </button>
                 </td>

                <td data-testid="deleteButton"> 
                <button onClick="deleteTodo(event,${todos.id})"> Delete </button> 
                </td>
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

        if(document.getElementById("todoTbody").value ){

        }

        postTodo(task);
        clearForm;
    }

//clear form -- need to clear the input forms 
    //initialize function clearform(){}
    function clearForm(event){
        event.preventDefault()
        let form = document.getElementById("form")
        form.reset();
    }

// PUT -- sending a put request to change completion status on the todo list 
        // initialize 
        
    function completionStatus (isComplete, todosId){

        
        
        console.log("changing the is complete status:", isComplete, todosId)

    // Use axios to send a PUT request to change to complete
        // Send  & id in URL
    // For .then, will call the render function.

    axios({
        method: "PUT",
        url: "/todos/" + todosId,
        data: {
            isComplete: isComplete
        }
      })
        .then((response) => {
          refreshTodos()
          // refreshTodos() will retrieve all koalas and then update the DOM
    
        })
        .catch((error) => {
          console.log("error", error);
    
        });

    }
// Delete--
    // Remove a taks from our list
function deleteTodo(event, todosId){
    event.preventDefault()
    axios({
        method: "DELETE",
        url: `/todos/${todosId}`
    })
    .then((response) => {
        refreshTodos();
    }).catch((error) => {
        console.log('Error', error);
        alert('Something went wrong');
    });
    console.log(deleteTodo)
}
