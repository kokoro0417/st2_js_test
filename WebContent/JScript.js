/**
 *
 */

/*function colorChenge(){
	if(document.getElementById){if(document.all){
		alert(document.getElementById("table tr td").style.width);
	}
}*/

jQuery(function(){

    $(document).ready(function(){
    	Reset();
    	SelLock();
    });

    function SelLock(){
    	var BS = $(".buy_seat").val();
    	var Ary = BS.split(",");
    	var i = 0;
    	while(Ary[i]!=null){
    		$("."+Ary[i]).addClass("Lock");
    		$("."+Ary[i]).css("background-color","red");
    		$("."+Ary[i]).css("color","black");
    		i++;

    	}

    }

    function Reset(){
    	var n = $(".ChengeText").val();
    	var ResetAry = n.split(",");
    	var i = 0;
    	if(ResetAry!=""){
	    	while(ResetAry[i]!=null){
	    		$("."+ResetAry[i]).css("background-color","black");
	        	$("."+ResetAry[i]).css("color","red");
	        	if($("."+ResetAry[i]).hasClass("on")){
	        		$("."+ResetAry[i]).removeClass("on");
	        	}
	    		i++;
	    	}
    	}
    	$(".ChengeText_disp").text("");
    	$(".ChengeText").val("");
    }

    $(".Reset").click(function(){
    	Reset();
    });

  /*  $(".submit_b").click(function(){
    	$("table tr td").css("background-color","black");
    	$("table tr td").css("color","red");
    	$(".ChengeText_disp").text("");
    });*/



    $("table tr td").click(function(){
    		var CV = $(this).text();
    		/*alert("aa");*/
    		if($(this).hasClass("on")){
    			$(this).removeClass("on");
    			$(this).css("background-color","black");
    			$(this).css("color","red");
    			$(".ChengeText").val(TextDown($('.ChengeText').val(),CV));
    			$(".ChengeText_disp").text($(".ChengeText").val());
    		}
    		else if(!$(this).hasClass("Lock")){
    			$(this).addClass("on");
    			$(this).css("background-color","red");
    			$(this).css("color","black");
        		$(".ChengeText").val(TextUpdate($('.ChengeText').val(),CV));
        		$(".ChengeText_disp").text($(".ChengeText").val());
    		}
    });

    function TextUpdate(text,ptext){
    	var n;
    	if(text==""){
    		n = ptext;
    	}else{
    		n = text + "," + ptext;
    	}
    	var Ary = n.split(",");
    	var i=0;
    	var tmpAry=[];
    	while(Ary[i]!=null){
    		Ary[i] = Ary[i];
    		tmpAry.push(Ary[i]);
    		i++;
    	}
    	tmpAry.sort();
    	return tmpAry;
    }

    function TextDown(text,Dtext){
    	var Ary = text.split(",");
    	var i = 0;
    	while(Ary[i]!=Dtext){
    		i++;
    		if(i>50){
    			break;
    		}
    	}
    	Ary.splice(i,1);
    	return Ary;
    }




   // $(".boxs").hover(
    $(".boxs").hover(
        function(){
            $(".boxA,.boxB,.boxC").animate({width:"200px"});

        },
        function(){
            $(".boxA,.boxB,.boxC").animate({width:"100px"});

        }
    );
    $(".hako").mouseover(function(){
        $(this).css("background-color","white");
    });

});