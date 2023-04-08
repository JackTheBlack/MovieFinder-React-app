const getStars=(type,votes)=>{
    let stars=votes/2;
    let starsContainer=document.getElementById(type);
  
    for(let x=0;x<=stars;x++){
        
        let star=document.createElement("DIV");
        star.className="star";
        starsContainer.appendChild(star);

    }

}

export {getStars}