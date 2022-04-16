

$("span").click(function(e){
    // $(e.target).css({"backgroundColor":"rgb(179, 179, 179)"});
    $(e.target).css({"opacity":"0.7"});
    $(e.target).css({"border":"1px solid black"});

   
    setTimeout(function(){
        $(e.target).attr("style","none");
        $(e.target).attr("style","none");
        // $(e.target).css({"backgroundColor":"rgb(211, 211, 211)"});
        // $(e.target).css({"border":"1px solid transparent"});
    },400)
})



$(".inputSigns").click(function(){
    let signVal = $(this).html();
    let temp_str = $("#calcInput").html();
    let ind = temp_str.length-1;

    // let re = /[1-9]/;
    // let re2 = /^[-]?[0-9]{1,}([.][0-9]{1,9})?$/;
    // if(re.test(signVal) && re.test(temp_str) ){
    //     $("#calcInput").html("");
    // }



    console.log(signVal," ",temp_str[ind]," ",ind);

    if(signVal=="/"||signVal=="*"||signVal=="+"||signVal=="-"||signVal=="."){
        if(temp_str[ind]!="/"&&temp_str[ind]!="+"&&temp_str[ind]!="*"&&temp_str[ind]!="." &&temp_str[ind]!="-" && ind>=0){
            $("#calcInput").html($("#calcInput").html()+ signVal);
        }
    } else if(signVal=="-"){
            if(temp_str[ind]!="-") $("#calcInput").html($("#calcInput").html()+ signVal);
    } else {
       
        $("#calcInput").html($("#calcInput").html()+ signVal);
    }
 

});




$("#clearInp").click(function(){
    $("#calcInput").html("");
});

$("#result").click(function(){
    let temp_str = $("#calcInput").html();
    $("#calcInput").html(eval(temp_str));
});

$("#backspace").click(function(){
    let temp_str = $("#calcInput").html();
    if(temp_str.length>0){
        temp_str = temp_str.split("");
            temp_str.length--;
            temp_str.join("");
            $("#calcInput").html(temp_str);
    }
});