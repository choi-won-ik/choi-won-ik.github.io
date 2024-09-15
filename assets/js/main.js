$(document).ready(()=>{
    // window페이지 스크롤
    const $content = document.getElementById('content');
    const $contentAll = $content.getElementsByTagName('li');
    let count = 0;
    let countSave = 0;
    let windowHeight = window.innerHeight/2;

    // 좌측 매뉴
    const $menu = document.getElementById('nav nav-pills flex-column mb-auto');
    const $menuAll = $menu.getElementsByTagName('label');
    

    // 처음 window scroll위치 지정
    for (let i = 0; i < $contentAll.length; i++) {
      if(windowHeight*-1<$contentAll[i].getBoundingClientRect().top&&$contentAll[i].getBoundingClientRect().top<windowHeight){
        countSave=i;
        count=i;
      }
    }
    $menuAll[countSave].classList.add('on');

    for (let i = 0; i < $menuAll.length; i++) {
      $menuAll[i].addEventListener('click',()=>{
        count=i;
        if(count!==countSave){
          $menuAll[countSave].classList.remove('on');
          $contentAll[count].scrollIntoView({ behavior: "smooth", block: "start" });
          countSave=count;

          $menuAll[countSave].classList.add('on');
        }
        
      });
    }


    // 스크롤 이벤트
    window.addEventListener('scroll',()=>{
      // 휠을 내릴 때
      if(count+1<$contentAll.length){
        if($contentAll[count+1].getBoundingClientRect().top<=windowHeight){
          count=count+1;
        }
      }
      // 처음페이지에서 휠을 올릴 때
      else if(count-1<=-1){
        count=0;
      }
      // 휠을 올릴 때
      if(count>0){
        if($contentAll[count].getBoundingClientRect().top>windowHeight){
          count=count-1;
        }
      }
      
      // 마지막 페이지에서 휠을 내릴 때
      else if(count+1>=4){
        count=$contentAll.length-1;
      }
      
      if(count!==countSave){
        $menuAll[countSave].classList.remove('on');
        countSave=count;
        $menuAll[countSave].classList.add('on');
      }
      
    });

//  -----------------------------------------------------------------------------------------------------
//  윈도우 사이즈에 대한 변화

    // 왼쪽 메뉴 전체 창
    const $sideMenu = document.getElementById('sideMenu');
    // 전체 페이지
    const $main = document.getElementById('main');
    let minWidth=$main.offsetWidth;
    // 창 버튼
    const $navBTN=document.getElementById('navBTN');
    // 상단 네브바
    const $nav = document.getElementById('nav');
    // email Form
    const $mailForm=document.getElementById('mailForm');
    // 내 주소
    const $myAdr=document.getElementById('myAdr');
    // 슬라이드 암전
    const $slide =document.getElementById('slide');
    
    // 좁아졌을 때
    if(minWidth<1524&&$nav.classList.contains('off')){
      $sideMenu.classList.add('off');
		  $nav.classList.remove('off');
	
		  $content.classList.add('on');
      // 메일 보내기 더욱 좁아졌을 때
      if(minWidth<1222&&!$myAdr.classList.contains('turn')){
        $myAdr.classList.add('turn');
        $mailForm.classList.add('turn');
      }
    }

    $navBTN.addEventListener('click',()=>{
      $sideMenu.classList.toggle('off');
      if(!$sideMenu.classList.contains('off')){
        $slide.classList.add('show');
      }else{
        $slide.classList.remove('show');
      }
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
      if($slide.classList.contains('show')){
        $slide.classList.remove('show');
      }
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
  });
