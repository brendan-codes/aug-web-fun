

function removeButton(){
    var element = document.querySelector("#login");
    element.remove();
}

function search(){
    var userInput = document.querySelector("#search").value;

    alert(`You have searched for ${userInput}`);
}

function updateCounter(id){
    console.log(id);
    var currentCount = parseInt(document.querySelector(id).innerText);
    console.log(currentCount);
    document.querySelector(id).innerText = currentCount+1;
}
