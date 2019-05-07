
function dankMode() {
    document.body.style.backgroundColor="black";            // Set background

    myTag=document.getElementsByClassName('my-color');      // Get all items for one color
    myTag2=document.getElementsByClassName('opp-my-color'); // Get all items for opposite color

    for(i=0; i<  myTag.length; i++ )
        myTag[i].style.backgroundColor="#111";              // Set all items for one color

    for(i=0; i<  myTag2.length; i++ )                       
        myTag2[i].style.color="#eee";                       // Set all items for opposite color
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