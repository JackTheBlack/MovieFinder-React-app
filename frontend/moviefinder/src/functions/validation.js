

export  const validatePassword=(password)=>{
    ///////////////////***REGULAR EXPRESIONS***////////////////////////////////   

    const passFormat=/^([a-zA-Z0-9_-]){8,20}$/;

    if(password.match(passFormat)){
        return true;
     
    }else{
        return false
       
    }

}
export    const validateMail=(mail)=>{
        ///////////////////***REGULAR EXPRESIONS***////////////////////////////////   
    
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(mail.match(mailFormat)){
            return true;
         
        }else{
            return false
           
        }
        
    
    


}

