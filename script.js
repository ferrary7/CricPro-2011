let $playerImage=document.getElementById("player-img")

document.onclick=e=>{
    console.log(e.target.matches(".player"));
    if(e.target.matches(".player")){
        let player=e.target.dataset.player;
        $playerImage.setAttribute("src",`./assets/${player}.png`)
        $playerImage.style.left=`${e.clientX}px`;
        $playerImage.style.top =`${e.clientY+10}px`;
        $playerImage.style.display="block";
    }
    else{
        $playerImage.style.display = "none";
    }
}