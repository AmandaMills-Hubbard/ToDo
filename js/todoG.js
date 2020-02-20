// created by Sebastian, Miggie, Finesse, Shane, Jessie (along with help from mentors and google)

document.getElementById("addButton").addEventListener("click", addNewLi);

const ul = document.getElementById("list");
const clear = document.getElementById("clearList");
let done = 0;
const clearCompleted = document.getElementById("clearCompleted");

function addNewLi(){
  let addToList = document.getElementById('addToList').value;
  let li = document.createElement('LI');
  li.addEventListener('click', (e) => {
    let x = event.target;
    x.style.textDecoration = "line-through";
  updateCounter();
  })
  let newLi = document.createTextNode(addToList);

  li.appendChild(newLi);
  ul.appendChild(li);
}

function updateCounter(){
  done++;
let span = document.getElementById("doneCount");
console.log("span is " + span);
span.innerHTML=done;
console.log(done + "update counter");
}

clearCompleted.addEventListener("click", function(){
  const allLi = document.querySelectorAll("li");

  for(let i = 0; i < allLi.length; i++){

    if(allLi[i].style.textDecoration === "line-through" ){
      console.log(allLi[i])
      ul.removeChild(allLi[i])
    }
  }
})

clear.addEventListener("click", () => {
  const li = document.querySelectorAll("LI");
  for(let i = 0; i < li.length; i++){
    ul.removeChild(li[i]);
}
})
