// Add your JavaScript code here

$(document).ready(function () {
    $("#hidebtn").click(function(){
        $("p").hide()
    })
    $("#showbtn").click(function(){
        $("p").show()
    })
    $("#togglebtn").click(function(){
        $("p").toggle()
    })
});
