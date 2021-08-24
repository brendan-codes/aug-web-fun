function magicalUnicorns(element){
    console.log(element.innerHTML);
    console.log("Hello world!");

    element.remove();

    // document.querySelector("#world").remove();
}

function addChildren(element){
    element.innerHTML = "<h1 style='color: orange'>This an H1</h1>";
}

function updateChildrenAgain(element){
    element.innerHTML = "<h1 style='color: blue'>I am a message!</h1>";
}

// afternoon demo

function updateCounter(id){
    var currentCount = parseInt(document.querySelector(id).innerHTML);
    console.log(currentCount);
    document.querySelector(id).innerHTML = currentCount+1;
}


function buildWorld(x, y){
    var world = "";
    var id = 0;

    // building rows
    for (let i = 0; i <= y; i++) {
        world += "<div class='row'>";

        // building cells
        for(let j = 0; j <= x; j++){
            world += `<div id='${id}' class='cell'></div>`;
            id++;
        }

        world += "</div>";
    }

    console.log(world);
    document.querySelector("#world").innerHTML = world;
}

// buildWorld(50, 50);


function search(){
    var userInput = document.querySelector("#search").value;
    console.log(userInput);

    alert(`You have searched for ${userInput}`);
    document.querySelector("#searchResult").innerHTML = `<h1>You have searched for ${userInput} </h1>`;
}

