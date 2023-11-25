window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth < 1200) {
        let x = document.querySelector("h1");
        x.innerHTML = '<a href="/index.html">The Stanford NLP Group</a>';
    }
    if (document.documentElement.clientWidth > 1200) {
        let x = document.querySelector("h1");
        x.innerHTML = '<a href="/index.html">The Stanford Natural Language Processing Group</a>'; 
    }
    });
  if (document.documentElement.clientWidth < 1200) {
      let x = document.querySelector("h1");
      x.innerHTML = '<a href="/index.html">The Stanford NLP Group</a>';
  }
  if (document.documentElement.clientWidth > 1200) {
      let x = document.querySelector("h1");
      x.innerHTML = '<a href="/index.html">The Stanford Natural Language Processing Group</a>'; 
  }
