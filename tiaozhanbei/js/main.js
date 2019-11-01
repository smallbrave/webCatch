 $(function(){
    /* 控制侧边栏的一级菜单 */
    (function firstMenu(){
        const strArr2 = ["data-collection", "data-analysis", "online-monitor", "hot-prediction", "user-management"];
        for (let item of strArr2) {
            let hideStr = "#"+ item +"-box"+" "+"span";
            $(hideStr).hide();
        }
        let laststr;
        $(".menu-first").on("click",
            function(e){
                let str = "#"+e.delegateTarget.id+"-box"+" "+"span";
                if(laststr) $(laststr).hide();         
                laststr = str;
                $(str).show(500);
            }
        );
    })();
    /* 控制侧边栏的二级菜单 */
    (function secondMenu(){
        let laststr="#show-content-part-3-1";
        $(".menu-second span").on("click",
        function(e){
            $("#show-content-main").hide()
            if($("#show-content-part-3-2")) $("#show-content-part-3-2").hide();
            if($("#show-content-part-3-3")) $("#show-content-part-3-3").hide();
            $("#show-content-part-5-2").hide();
            $("#show-content-part-5-3").hide();
            let str = "#show-"+e.delegateTarget.id;
            $(laststr).hide();
            laststr = str;
            $(str).show(500);
        }
    );
    })();
    /* 控制模型训练页的页面选择 */
    (function choosePage(){
        let laststr="#show-content-part-3-1";
        $(".model-training-menu span").on("click",
        function(e){
            let str = "#"+e.delegateTarget.className.slice(0,-4);
            $(laststr).hide();
            laststr = str;
            console.log(e)
            $(str).show(500);
        }
    );
})();
    // 顶部展开
    $(".top-nav").click(function() {
        let idx = $(this).index();
        let strArr = ["data-collection", "data-analysis", "online-monitor", "hot-prediction", "user-management"];
        let str = "#"+ strArr[idx] +"-box"+" "+"span";
        strArr.splice(idx, 1);
        for (let item of strArr) {
            let hideStr = "#"+ item +"-box"+" "+"span";
            $(hideStr).hide();
        }
        $(str).show(500);
    })
}
)