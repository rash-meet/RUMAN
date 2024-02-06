// function redirectToTeacherPage() {
//     window.location.href = "teacher.html";
// }
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
//     function redirectToTeacherPage() {
//     window.location.href = "teacher.html";
// }
    function changeColour(value)
    {
        const myElement = document.getElementById("myVideo");
        var color = document.body.style.backgroundColor;
        switch(value)
        {
            case 'm':
                myElement.src="ruman male teacher - Made with Clipchamp.mp4";
            break;
            case 'f':
                myElement.src="Untitled video - Made with Clipchamp (5).mp4";
            break;
        }
        // document.body.style.backgroundColor = color;
    }

const myVariableFromBotpress = window.mypayload;
console.log(myVariableFromBotpress);



  if (document.documentElement.clientWidth < 1200) {
      let x = document.querySelector("h1");
      x.innerHTML = '<a href="/index.html">The Stanford NLP Group</a>';
  }
  if (document.documentElement.clientWidth > 1200) {
      let x = document.querySelector("h1");
      x.innerHTML = '<a href="/index.html">The Stanford Natural Language Processing Group</a>'; 
  }
