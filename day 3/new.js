let btn = document.querySelector("button");
btn.onclick = function openGoogle() {
  window.open(
      'https://www.google.com','_blank',`width=500,height=500,left=2000,top=600`
  );
};
