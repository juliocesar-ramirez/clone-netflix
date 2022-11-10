faq_li = document.querySelectorAll('.faq_li');

faq_btn = document.querySelectorAll('.faq_btn');


faq_btn.forEach(evento);




function evento(n, i) {
	faq_btn[i].addEventListener("click", funcion2);
}
function funcion1() {
	console.log('holainiciando');

}
function funcion2() {
	console.log('hola');

}



