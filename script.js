//Setting Up Variables 

//input 
let theInput =document.querySelector(".add-task input ");

// The Button 
let theAddButton =document.querySelector(".add-task .plus");

// Tasks Container 
let tasksContainer = document.querySelector(".tasks-content");

//All Tasks
let tasksCount =document.querySelector('.tasks-count span');

//Task Completed 
let taskCompleted = document.querySelector(".tasks-completed span");


// Focus On Input Field 
window.onload=function(){
    theInput.focus();
};

//Adding The Task 
theAddButton.onclick=function(){

    // IF Input Is Empty 
    if(theInput.value ==''){
        console.log("no value");
        //Remove no Tasks Message 
    }
    else{

        //No Tasks Message 
       let noTasksMsg = document.querySelector(".no-tasks-message");
       // Check if span with no tasks message is exist
       if(document.body.contains(document.querySelector('.no-tasks-message'))){
               //Remove no Task Message   
       noTasksMsg.remove();

       }


       // console.log(theInput.value);

       //Remove no Task Message   
      //noTasksMsg.remove();

       //Create Span Element 
       let mainSpan = document.createElement('span'); 

       //Create Delete Button 
       let deleteElement =document.createElement('span');

       //create The Span Text
       let text =document.createTextNode(theInput.value);

       //Create The Delete Button Text 
       let deleteText =document.createTextNode("Delete");

       //Add Text To Span 
       mainSpan.appendChild(text);

       // Add Class To Span 
       mainSpan.className='task-box';

       //Add Text To Delete Button 
       deleteElement.appendChild(deleteText);

       //Add Class To Delete Button 
       deleteElement.className= 'delete';

       //Add Delete Button To Main Span 
       mainSpan.appendChild(deleteElement);
       
       // Add The Tasks To Container 
       tasksContainer.appendChild(mainSpan);

       //Empty The Input 
       theInput.value='';

       theInput.focus();

       // Calculate Tasks 
       calculateTasks();
   
    }

};

document.addEventListener('click',function(e){
    //Delete Task 
    if(e.target.className=='delete'){
       // console.log("Yes ");

       //Remove Current Task
       e.target.parentNode.remove();

       //Chick Number Of Tasks Inside The Container 
       if(tasksContainer.childElementCount==0){
           createNoTasks();
       }

    }
    //Finsh Task 
    if(e.target.classList.contains('task-box')){
        
        //Toggle Class Finsh 
        e.target.classList.toggle('finished');
    }
    calculateTasks();
});
//Function To Create No Taskes Message 
function createNoTasks(){
    //Create Message Span Element 
    let msgSpan = document.createElement("span");

    //Create The Text Message 
    let msgText = document.createTextNode("No Tasks To Show ");

    //Add Text To Message Span Elemnt 
    msgSpan.appendChild(msgText);

    //Add Class To Message Span 
    msgSpan.className = 'no-tasks-message';

    //Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
}
//Function To Calculate Tasks
function calculateTasks(){

    //Callculate All Tasks
    tasksCount.innerHTML=document.querySelectorAll('.tasks-content .task-box').length;

        //Callculate completed Tasks
        taskCompleted.innerHTML=document.querySelectorAll('.tasks-content .finished').length;


}
