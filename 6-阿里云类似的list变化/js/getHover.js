(function($){
	//centerSlide 的切换 start
	var bWidth=910;
	var bHeight=80;
	var eWidth=940;
	var eHeight=120;
	$.centerSlide=function (){
		    var centerObj=$(".centerHover");//.centerHover对象
			var rowObj=$(".centerHover .row");//每一行.row对象
			
			function getOrder(obj,flag,endWidth,endHeight){//样式
				var oh=obj.children("h5");
				var oul=obj.find("ul");
				var oli=oul.children("li");
				
				oli.each(function(){
			    	var liLength=oli.length;
				    $(this).css({"width":oul.width()/liLength+'px'});
				});
		 
			    var toTopH=oh.height();
			    var toTopLi=oli.height();
			  
/*h5对象padding-top*/var hPadTop=(endHeight-toTopH)/2; 
/*ul对象padding-top*/var liPadTop=(endHeight-toTopLi)/2; 
          
			    oh.css({"padding-top":hPadTop+'px',"padding-bottom":hPadTop+'px'});/*设置h5对象padding-top*/
			    oli.css({"padding-top":liPadTop+'px',"padding-bottom":liPadTop+'px'});/*设置li对象padding-top*/
			   
			    if(flag){obj.animate({"width":eWidth+'px',"height":eHeight+'px'},"fast"); }
			    	  
			}
			
			
			function  getHover(obj){//hover时触发
				var objh=obj.children("h5");
		        var objul=obj.find("ul");
		       
			    var inx=obj.index();
                var data=objh.attr("data-role");
			    objh.prepend("<img src='img/img"+inx+"_"+data+".png' class='hmar'/><br/>");
				
			    objul.children("li").each(function(){
				    $(this).prepend("<img src='img/img"+inx+"_"+$(this).attr('data-role')+".png' class='mar'/><br/>");
				});
				getOrder(obj,true,eWidth,eHeight);
			}
			function initVar(){
			    rowObj.each(function(){
			       	 if($(this).hasClass("inactive")){
						     getHover($(this)); 
			       	 }
			       	 else{
			       	 	$(this).css({"width":bWidth+'px',"height":bHeight+'px'});
			       	 	getOrder($(this),false,bWidth,bHeight);}
			    });
			}
			initVar();//初始化
			rowObj.each(function(){
				var $this=$(this);
				var t;
				$(this).hover(function(e){
					    
					 	 if($(this).hasClass("inactive")){return true;}
					     else{
					 	 t=setTimeout(function(){
					 	    rowObj.find("img,br").remove();
					        rowObj.each(function(){
				              $(this).removeClass("inactive").addClass("normal").css({"width":bWidth+'px',"height":bHeight+'px'});
						      getOrder($(this),false,bWidth,bHeight);
					        });
					     
					           $this.addClass("inactive");
						       getHover($this);
					        },100); 
					     }
					       
				
			      },function(e){
				     e.stopPropagation();
				     clearTimeout(t);
                     $(this).stop(true,true); 
                   
			     });
			
			  });
			
			}
	//centerSlide 的切换 end
	
	
})(jQuery)