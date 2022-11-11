faq_li = document.querySelectorAll('.faq_li');

faq_btn = document.querySelectorAll('.faq_btn');



faq_btn.forEach((v, i) => {
    faq_btn[i].addEventListener('click', () =>{ 
	faq_li.forEach((v, i) => {
	    faq_li[i].classList.remove('active')
	})
	faq_li[i].classList.add('active')
    })
})

function funcion1() {
	console.log('holainiciando');

}
    function funcion2(i) {
		console.log('hola');
		faq_li[i].classList.add("active");
	}



