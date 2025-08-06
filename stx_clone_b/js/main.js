window.addEventListener("load", function () {
  //각각의 요소를 변수에 담아놓는다.
  const nav = document.querySelector(".nav");
  const headerBg = document.querySelector(".header-bg");
  //nav에 마우스 엔터 했을 때 즉 호버했을 때
  nav.addEventListener("mousernter", function () {
    headerBg.style.height = "400px";
  });
  //nav에 마우스 리브 했을 때 즉 호버를 안했을 때
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});

// alert(" 연결")
