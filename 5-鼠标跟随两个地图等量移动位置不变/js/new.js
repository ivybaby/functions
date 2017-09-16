(function($){
	var opt;
	var flag=true;
	$.fn.lightMove=function(options){
       opt = $.extend({},$.fn.lightMove.def,options);
       var mvAreaHeight=$(this).outerHeight();
       var mvAreaWidth=$(this).outerWidth();
  
       var gtAreaHeight=$(opt.getarea).outerHeight();
       var gtAreaWidth=$(opt.getarea).outerWidth();
       
       var split=Math.ceil(mvAreaHeight/gtAreaHeight);
       
     
       $(this).on("mousemove",function(ev){
      	 	var oEvent=ev||event;
      	 	var oEventH=oEvent.clientY;//鼠标的Y
      	 	var oEventW=oEvent.clientX;//鼠标的X
      	 	var mvtop=$(this).offset().top;//距离文档左上角的Y
            var mvLeft=$(this).offset().left;//距离文档左上角的X
	        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	        var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft; 
	        if(((oEventH+scrollTop)==mvtop)||((oEventH)==(mvAreaHeight+mvtop))){
	        	alert("uu");
	        }else{
	        	$(opt.movemap).css({"top":(oEventH-mvtop+scrollTop)+'px',"left":(oEventW-mvLeft+scrollLeft)+'px'});
	            $(opt.movetarget).css({"top":(oEventH-mvtop+scrollTop)/split+'px',"left":(oEventW-mvLeft+scrollLeft)/split+'px'});  	   
	        }
	           
      	});
   
      	
	  
	}
})(jQuery)
