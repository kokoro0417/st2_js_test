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
    });

    function Reset(){
    	$("table tr td").css("background-color","black");
    	$("table tr td").css("color","red");
    	$("table tr td").removeClass("on");
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
    		else{
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

    $("h1").click(function(){
                  $(".test1").css("color","red");
                  });

    $("h1").css("color","red");
    $("p").fadeOut("slow");
    $("h2").text("おやすみ");

    $(".test1").click(function(){
        $(".test2").text("teeeeest2!!");
    });

    $(".boxA").click(function(){
        $(".boxB").hide();
    });

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