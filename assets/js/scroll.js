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
        if($contentAll[count+1].getBoundingClientRect().top<windowHeight){
          count=count+1;
        }
      }
      // 처음페이지에서 휠을 올릴 때
      else if(count-1<=-1){
        count=0;
      }
      // 휠을 올릴 때
      if(count>0){
        if($contentAll[count-1].getBoundingClientRect().bottom>windowHeight){
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


    
  });