const cutOverview=(text)=>{

    var newText;
    var x=70;
    while(x<=150){

        if(text[x]===" "){
            newText=text.slice(0,x);
            x=300;
        }

        x=x+1;
    }
    newText=newText+"...";
    return newText;

}

export {cutOverview}