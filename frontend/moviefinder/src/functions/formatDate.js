
const formatDate=(date)=>{
 
try{


    const months=["January","Febrary","March","April","May", "June","July","August","September","October","November","December"];

    let monthName;
    let monthNumber=date[5]+date[6];

   for (let i=0;i<=11;i++){

    if(monthNumber==(i+1)){
       
        monthName=months[i];
    }

   }

var returnDate=date[8]+date[9]+" "+" "+monthName+", "+date[0]+date[1]+date[2]+date[3]
}catch{

}
return(returnDate)
}


export{formatDate}