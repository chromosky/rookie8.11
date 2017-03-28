//sprawdzam ile elementow li 
function myFunction() {
    var x = document.getElementsByTagName("li");
    document.getElementById("btnNbr").innerHTML = x.length;
}

function function1() {
  var ul = document.getElementById("ulList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("x+1"));
  li.setAttribute("id", "Item x+1"); // added line
  ul.appendChild(li);
  alert(li.id);
}    

var add = document.getElementById('js-addElem');
console.log(add);

addElem.addEventListener('click', function(e) {
e.target.innerHTML += '<li>item</li>';
});