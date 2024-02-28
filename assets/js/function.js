window.onload=()=>{
  	const $portfolioImg = document.getElementById('portfolioImg');
  	const $portfolioShow = document.getElementById('portfolioShow');
	// 왼쪽 메뉴 전체 창
	const $sideMenu = document.getElementById('header');
	// 전체 페이지
	const $main = document.getElementById('main');
	let minWidth=0;
	// 창 버튼
	const $navBTN=document.getElementById('navBTN');
	// 상단 네브바
	const $nav = document.getElementById('nav');
	// 소개 글
	const $content = document.getElementById('content');
	// email Form
	const $mailForm=document.getElementById('mailForm');
	// 내 주소
	const $myAdr=document.getElementById('myAdr');

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

	$navBTN.addEventListener('click',()=>{
		$sideMenu.classList.toggle('off');
	  });
	
	  window.addEventListener('resize',()=>{
		// console.log(window.innerWidth);
		minWidth=$main.offsetWidth;
		
		// 좁아졌을 때
		if(minWidth<1524&&$nav.classList.contains('off')){
		  $sideMenu.classList.add('off');
		  $nav.classList.remove('off');
	
		  $content.classList.add('on');
		}
		// 넓어졌을 때
		else if(minWidth>=1524&&!$nav.classList.contains('off')){
		  
		  $sideMenu.classList.remove('off');
		  $nav.classList.add('off');
	
		  $content.classList.remove('on');
		}
		// 메일 보내기 더욱 좁아졌을 때
		if(minWidth<1222&&!$myAdr.classList.contains('turn')){
		  $myAdr.classList.add('turn');
		  $mailForm.classList.add('turn');
		}
		// 매일 보내기 넓어 졌을 때
		else if(minWidth>=1222&&$myAdr.classList.contains('turn')){
		  $myAdr.classList.remove('turn');
		  $mailForm.classList.remove('turn');
		}
	  });
}
