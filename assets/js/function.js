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




}