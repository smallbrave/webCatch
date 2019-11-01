var number= "1";
$("document").ready(function(){
    function password(){
        $("#text");
        $("#password");
    }
    function textBlur() {
        $("#password").val($("#text").val());
    }
    function passwordBlur() {
        $("#text").val($("#password").val());
        $(".password").prop("type","password");
    }
    function eyeBlur(){
        $("#text").val($("#password").val());
        $(".password").prop("type","text");
    }
    password();
    textBlur();
    $(".password").focus(function(){
        if(number=="1")
        {
            $(".password").val("");
            number="2";
            passwordBlur();
        }

    })


});
function chan(){
    var x=3;
    var y=3;
    x=document.getElementsByClassName('eye')[0];
    y=document.getElementsByClassName('password')[0];
    if(x.src.match("two"))
    {
        x.src="image/login/eyeone.jpg";
        y.type="text";
    }
    else
    {
        x.src="image/login/eyetwo.jpg";
        y.type="password";
    }

}