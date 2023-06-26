
$("style").last().append(`

#users .uzr.mot2 img.co {

  width: 1px !important;
    height: 1px !important;
  margin-right: 1px;
}

#users .uzr.mot2 span.uhash{

-webkit-text-fill-color: transparent;

    
    }



#users .uzr.mot2 img.u-ico {
margin-left: 9px;
    
     

      
    }

#users .uzr.mot2 img.ustat {
      width: 0px !important;
    height: 0px !important;
    min-height: 0%!important;
    margin-right: 0;
    z-index: 999999;
    border-radius: 3px 0px 3px 0px;
    margin-left: 2px;
    margin-top: 41px;
    
    
    }

#users .uzr.mot2 .fitimg.u-pic {
   border-radius: 100px;
  
  height: 52px !important;
  margin-left: -0px!important;
  z-index: 0 !important;

padding: 10px !important;
border:1px solid #f3f3f3;margin-top:2px;
margin-bottom:-35px;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #525252
}

#users .uzr.mot2 .u-msg {
	
  -webkit-background-clip: text;
  
  font-size: 89% !important;
 
  padding: 1px !important;
	margin-bottom: 12px !important;

background-size: cover;
margin-top: 5px !important;
margin-left: 10px !important;
-webkit-background-clip: text;
-webkit-text-fill-color: #0000;
background-image: linear-gradient(-225deg,#1c1b1a 0%,#e9698c 29%,#1c1b1a 67%,#f2658a 100%);

}





#users .uzr.mot2 {
  padding: 2px !important;
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
   border-radius: 15px 0px 15px 0px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/167804646082612.png);
background-size: 100%;
    
}



#users .uzr.mot2 .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.mot2 .u-topic {
-webkit-text-fill-color: transparent;
  
  
  

  margin-left: 30px;

}




`);


const _mmot56zznz4 = [
    { deco: "- ﺟُــورِي", cls: "mot2"}
];

setInterval(() => {
    if(myid != null){
        _mmot56zznz4.forEach(item => {
            const user = $("#users .uzr:contains('"+item.deco+"')");
            if(user && !user.hasClass(item.cls)) {
                $("#users .uzr:contains('"+item.deco+"')").addClass(item.cls);
                
            } 
        });
    }
}, 3 * 1000);
