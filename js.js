
function dankMode() {
    document.body.style.backgroundColor="black";
    myTag=document.getElementsByClassName('my-color');
    myTag2=document.getElementsByClassName('opp-my-color');
    for(i=0; i<  myTag.length; i++ )
        myTag[i].style.backgroundColor="#111";

    for(i=0; i<  myTag2.length; i++ )
        myTag2[i].style.color="#eee";
  }


  function lightMode() {
    document.body.style.backgroundColor="white";

    myTag=document.getElementsByClassName('my-color');
    myTag2=document.getElementsByClassName('opp-my-color');
    for(i=0; i<  myTag.length; i++ )
        myTag[i].style.backgroundColor="#fff";

        for(i=0; i<  myTag2.length; i++ )
        myTag2[i].style.color="#000";
  }