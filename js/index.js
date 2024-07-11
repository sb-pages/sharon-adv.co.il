const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
window.addEventListener("DOMContentLoaded", function () {
	var form = document.getElementById("my-form");
	var status = document.getElementById("status");

  
	function success() {
		form.reset();
		status.className = "success";
		status.innerHTML = "ההודעה נשלחה בהצלחה!";
	}
  
	function error() {
	  	status.className = "error";
	  	status.innerHTML = "אופס! יש בעיה.";
	}
  
	form.addEventListener("submit", function (ev) {
	  ev.preventDefault();
	  var data = new FormData(form);
	  ajax(form.method, form.action, data, success, error);
	});
  });
  
  function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
	  if (xhr.readyState !== XMLHttpRequest.DONE) return;
	  if (xhr.status === 200) {
		success(xhr.response, xhr.responseType);
	  } else {
		error(xhr.status, xhr.response, xhr.responseType);
	  }
	};
	xhr.send(data);
  }
  