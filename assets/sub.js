window.onload=()=>{
  	const $portfolioImg = document.getElementById('portfolioImg');
  	const $portfolioShow = document.getElementById('portfolioShow');

	goGit=()=>{
		window.location.href="https://github.com/choi-won-ik/chat";
	};

	$portfolioImg.addEventListener('mouseover',()=>{
		$portfolioShow.classList.add('on')
	});

	$portfolioImg.addEventListener('mouseout',()=>{
		$portfolioShow.classList.remove('on')
	});

	const $sendMail = document.getElementById('sendMail');

	function createData() {
		let sendData = $('#mailForm').serialize();
		let params = new URLSearchParams(sendData);
		
		return params;
	}

	$sendMail.addEventListener('click',(event)=>{
		event.preventDefault();

		let data = createData(event);

		let name = data.get('name');
		let email=data.get('email');
		let subject=data.get('subject');
		let msg=data.get('msg');

		$.ajax({
			type : "post",
			url : "https://script.google.com/macros/s/AKfycbzKWHan6deUXJ7UfWJRohfy-jaqsRE2GcDtP9ZRY1Bg17cJKQvB_2FpDPfYOnYqAmMKzQ/exec",
			data : JSON.stringify({
					name : name,
					email:email,
					subject:subject,
					msg:msg
				}),
			dataType:"json",
			success : function(data, status, xhr){
					alert('연락주셔서 감사합니다. 빠른 시간내에 꼭 회신드리도록 하겠습니다! :)');
			
				location.reload();
			},
			error : function(jqXHR, textStatus, errorThrown){
					console.log("error")
			}
		});
	});
}
