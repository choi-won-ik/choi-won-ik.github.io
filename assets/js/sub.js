window.onload=()=>{
	const $Cpdf = document.getElementById('chat-pdf');
	const $Cgit = document.getElementById('chat-git');
	const $Mpdf = document.getElementById('market-pdf');
	const $Mgit = document.getElementById('market-git');

	let minWidth=window.innerWidth;

	if(minWidth<790){
		$Cpdf.innerHTML="";
		$Cgit.innerText="";
		$Mpdf.innerHTML="";
		$Mgit.innerText="";
		$Cpdf.innerHTML="pdf";
		$Cgit.innerText="git";
		$Mpdf.innerHTML="pdf";
		$Mgit.innerText="git";
	}else{
		$Cpdf.innerHTML="";
		$Cgit.innerText="";
		$Mpdf.innerHTML="";
		$Mgit.innerText="";
		$Cpdf.innerHTML="pdf 파일";
		$Cgit.innerText="git 파일";
		$Mpdf.innerHTML="pdf 파일";
		$Mgit.innerText="git 파일";
	}

	window.addEventListener('resize',()=>{
		minWidth=window.innerWidth;
		if(minWidth<790){
			$Cpdf.innerHTML="";
			$Cgit.innerText="";
			$Mpdf.innerHTML="";
			$Mgit.innerText="";
			$Cpdf.innerHTML="pdf";
			$Cgit.innerText="git";
			$Mpdf.innerHTML="pdf";
			$Mgit.innerText="git";
		}else{
			$Cpdf.innerHTML="";
			$Cgit.innerText="";
			$Mpdf.innerHTML="";
			$Mgit.innerText="";
			$Cpdf.innerHTML="pdf 파일";
			$Cgit.innerText="git 파일";
			$Mpdf.innerHTML="pdf 파일";
			$Mgit.innerText="git 파일";
		}
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
					alert('연락주셔서 감사합니다. 빠른 시간내에 꼭 회신드리도록 하겠습니다 :)');
			
				location.reload();
			},
			error : function(jqXHR, textStatus, errorThrown){
					console.log("error")
			}
		});
	});
}
