$(document).ready(function(){

   $("#sort1,#sort2").sortable({connectWith:".connect"});

}); 
    $("#el1").draggable({stack:"#el1"}); 
    $("#el1").resizable();
    $("#sort1").sortable();
    $("#el2,#el3").draggable({stack:"#el2,el3"});
    $("#drop1,#drop2,#el3");
    $("#drop1").html("Андрей");
    $("#drop2").html("Твердохлеб")

	over:function(){
         $("#warp1").css("background-color","#d7fa99");
         $("#drop1").css("background-color","#d7fa99");
      }


 