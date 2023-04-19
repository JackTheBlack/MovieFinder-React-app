import { createModalCard } from "./card"; 
import { useContext } from "react";
import AppContext from "../context/contextApi";






//var listNode=document.getElementById("list");

var dialog=document.getElementById("dialog");
var cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";

export const getMovieList =async(title,setModalShow,setSelectedMovie)=>{
  
    const options = {
        method: 'GET'
    }
    await fetch(`${process.env.REACT_APP_SEARCH_MOVIE_API}${title}`,options)
        .then(response => response.json())
        .then(response =>getList(response.results,setModalShow,setSelectedMovie))
        .catch(err => (console.log(err)));

   

}
export const getList=(array,setModalShow,setSelectedMovie)=>{
    var listNode=document.getElementById("list");
    
   //  listNode.innerHTML=''
    ///// check if the input got more than 3 words////////////////////
    if(array.length>=3){
      
        for(let x=0;x<=5;x++){
            listNode.style.display="block";
          var liNode=document.createElement("div");
            liNode.style.display="flex"
            liNode.className="item-list";
            var title=document.createElement("section");
          
            title.style.marginTop="30px";
            title.style.fontSize="14px";
            title.style.marginLeft="2%";
            
             title.innerText=array[x].title;           
            title.id=array[x].id;  
       
            cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";
         let card=createModalCard(array[x], cardPath,false);
            card.id=array[x].id;
         liNode.id=array[x].id ;         
         liNode.appendChild(card);
            liNode.appendChild(title);
            listNode.appendChild(liNode);
        
           liNode.addEventListener("click",function(){
            selected(array,listNode,x,setModalShow,setSelectedMovie)
           })      
           

        
        }
     


       
       
     
    }
 
    

}



function selected(array,list,x,setModalShow,setSelectedMovie){
    let allList=list.querySelectorAll("section");
  
    setSelectedMovie(array[x]);
    let dialog=document.getElementById("dialog");
  
    dialog.showModal();
   

      
    
}




export const removeList=()=>{

    var listNode=document.getElementById("list");
   
    while (listNode.firstChild) {
       listNode.removeChild(listNode.firstChild);
    }
}

