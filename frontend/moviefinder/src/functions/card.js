var cardId;
var card=document.getElementById("card");



    
export const createModalCard=(element,cardPath,long)=>{


    var starsContainer=document.createElement("div");
      starsContainer.id="cardStarContainer";
      starsContainer.className="star-container"
    var cardContent=document.createElement("DIV");
    var card=document.createElement("DIV");
    card.class="card-modal";
    cardId=element.id;
  
  
      
     
     card.style.backgroundImage=`url(${cardPath+element.backdrop_path})`; 
     card.style.backgroundRepeat ="no-repeat";
     card.alt=element.title;
     card.className="card";
     card.id="card"; 
    card.style.padding="0%"
  card.alt=element.title;
  card.name=element.title;
    card.style.margin="0%"
     card.addEventListener("click",function(){
   //  bringMovie(element.id);
   //  var dialog=document.getElementById("dialog");
     //dialog.showModal();
     
    // dialog.style.display="";
     })
    
  
    return card;
  
  }
  