
//z HTML pobieram przycisk o id='btn'
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	var list = document.getElementById('list');
	var items = list.getElementsByTagName('li');
	list.innerHTML += '<li>item '+items.length+'</li>';
})