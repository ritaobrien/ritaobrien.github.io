function beer(){
    for(i=99;i>1;i=i-1){
        document.getElementById("main").innerHTML+="<br/>"+i+" bottles of beer on the wall, <br/>" +i+" bottles of beer on the wall,</br> Take one down and pass it around, </br>" +i+ " bottles of beer on the wall.</br>";
    }
    
    if (i<=1){
    document.getElementById("main").innerHTML+="<br/> 1 bottle of beer on the wall,</br> 1 bottle of beer on the wall,</br> Take one down and pass it around,</br> no more bottles of beer on the wall.</br>";
    document.getElementById("main").innerHTML+="</br> No more bottles of beer on the wall, </br> no more bottles of beer, </br>Go to the store and buy some more, </br>99 bottles of beer on the wall.";
    }
}