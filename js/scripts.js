
function function1() {

    var ul = document.getElementById("lista");
    ul.innerHTML += '<li>item</li>';
};

addElem.addEventListener('click', function1);

function myFunction() {
    var x = document.getElementByTagName("li");
    document.getElementById("liItem").innerHTML = x.length;
}

