let djx;
// 获取param参数
function getUrlPara(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

$(document).ready(function () {
    djc = getUrlPara("djc");
    if (djc) {
        $("#equipment-address").html("5号楼2号房间");
        $("#equipment-code").html(djc);
    }
    // 点击按钮后，发送的事情
    $('#begin').click(function() {
        console.log('asdasdasasd');
    });
});

const request = function (url, options) {
    const defaults = {
        url,
        data: options.data,
        type: options.type || 'GET',
        dataType: options.dataType || 'json',
        async: options.async || true,
        contentType: options.contentType || 'application/json',
        success: options.success || function () {},
        error: options.error || null
    };
    const ajaxConfig = {
        url: defaults.url,
        data: defaults.data,
        type: defaults.type,
        dataType: defaults.dataType,
        async: defaults.async,
        contentType: defaults.contentType,
        success: function (res, status, xhr) {
            defaults.success.call(xhr, {
                code: 1,
                data: res
            });
        },
        error: function (xhr, error) {
            console.log(error);
        }
    };

    return $.ajax(ajaxConfig);
};

$("#describe").click(function () {
    $("#help").show(500)
})
$("#help button").click(function () {
    $("#help").hide(500)
})

function f1() {
    begin.src = "image/ALL/beginchange.png";
    begin.style.width = "13vw";
    begin.style.left = "10vw";
    begin.style.bottom = "8vh";
    anbei1.style.boxShadow = "0 0 0 0.15vw #17BBF3";
    fute1.style.boxShadow = "0 0 0 0.15vw #17BBF3";
    dianzu1.style.boxShadow = "0 0 0 0.15vw #17BBF3";
    var Zbottom = document.querySelector(".Zbottom_middle");
    var Zbottom_middle = Zbottom.getElementsByTagName("div");
    for (var i = Zbottom_middle.length - 1; i >= 0; i--) {
        setTimeout(
            function () {
                Zbottom_middle[2].className = "text";
                setTimeout(
                    function () {
                        Zbottom_middle[1].className = "text";
                        setTimeout(
                            function () {
                                Zbottom_middle[0].className = "text";
                                setTimeout(
                                    function () {
                                        Zbottom_middle[3].className = "text";
                                        setTimeout(
                                            function () {
                                                Zbottom_middle[4].className = "text";
                                                setTimeout(
                                                    function () {
                                                        Zbottom_middle[5].className = "text";
                                                    },
                                                    2000)
                                            },
                                            2000)
                                    },
                                    2000)
                            },
                            2000)
                    },
                    2000)
            },
            2000)
    }
    setTimeout(
        function () {
            pc3.src = "image/ALL/buildingThchange.png";
            setTimeout(
                function () {
                    pc2.src = "image/ALL/buildingTchange.png";
                    setTimeout(
                        function () {
                            pc1.src = "image/ALL/buildingOchange.png";
                            setTimeout(
                                function () {
                                    pc4.src = "image/ALL/buildingFchange.png";
                                    setTimeout(
                                        function () {
                                            pc5.src = "image/ALL/buildingFifchange.png";
                                            setTimeout(
                                                function () {
                                                    pc6.src = "image/ALL/buildingSchange.png";
                                                    setTimeout(
                                                        function () {
                                                            var one = document.getElementById('Elect-percent');
                                                            var two = document.getElementById('Al-percent');
                                                            var three = document.getElementById('Al-weight');
                                                            var AL = parseInt(Al.value);
                                                            var FE = parseInt(Fe.value);
                                                            var CU = parseInt(Cu.value);
                                                            var SI = parseInt(Si.value);
                                                            var sum1 = (AL - FE - CU - SI) * 0.12;
                                                            var sum2 = (AL - FE - CU - SI) * 0.88;
                                                            var sum3 = sum2 * 0.85;
                                                            one.value = sum1;
                                                            two.value = sum2;
                                                            three.value = sum3;
                                                        },
                                                        2000);
                                                },
                                                2000);
                                        },
                                        2000);
                                },
                                2000);
                        },
                        2000);
                },
                2000);
        },
        2000);
    setTimeout(
        function () {
            var an = parseInt(anbei.value);
            var fu = parseInt(fute.value);
            var ou = parseInt(dianzu.value);
            var first = document.getElementById('first-box');
            var firsttop = document.getElementById('first-box-top');
            var firstbottom = document.getElementById('first-box-bottom');
            firsttop.style.display = "block";
            firstbottom.style.display = "block";
            first.style.boxShadow = "0 0 0 0.15vw #17BBF3";
            document.getElementById("first-box-top").innerHTML = "设定电压:" + an + "A";
            setTimeout(
                function () {
                    if (fu > 50) {
                        var second1 = document.getElementById('second-box-1');
                        var second1top = document.getElementById('second-box-1-top');
                        var second1bottom = document.getElementById('second-box-1-bottom');
                        second1top.style.display = "block";
                        second1bottom.style.display = "block";
                        second1.style.boxShadow = "0 0 0 0.15vw #17BBF3";
                        document.getElementById("second-box-1-top").innerHTML = "设定电压:" + an + "A" + "<br>" + "最高电压:" + fu + "V";
                        setTimeout(
                            function () {
                                if (ou > 400) {
                                    var third = document.getElementById('third-box-1');
                                    var thirdtop = document.getElementById('third-box-1-top');
                                    thirdtop.style.display = "block";
                                    third.style.boxShadow = "0 0 0 0.15vw #17BBF3";
                                    document.getElementById("third-box-1-top").innerHTML = "设定电压:" + an + "A" + "<br>" + "最高电压:" + fu + "V" + "<br>" + "最低电压:" + ou + "Ω";
                                } else {
                                    var third1 = document.getElementById('third-box-2');
                                    var third1top = document.getElementById('third-box-2-top');
                                    third1top.style.display = "block";
                                    third1.style.boxShadow = "0 0 0 0.15vw #17BBF3";
                                    document.getElementById("third-box-2-top").innerHTML = "设定电压:" + an + "A" + "<br>" + "最高电压:" + fu + "V" + "<br>" + "最低电压:" + ou + "Ω";
                                }
                                setTimeout(f2(), 2000);
                            },
                            2000);
                    } else {
                        var second = document.getElementById('second-box-2');
                        var secondtop = document.getElementById('second-box-2-top');
                        var secondbottom = document.getElementById('second-box-2-bottom');
                        secondtop.style.display = "block";
                        secondbottom.style.display = "block";
                        second.style.boxShadow = "0 0 0 0.15vw #17BBF3";
                        document.getElementById("second-box-2-top").innerHTML = "设定电压:" + an + "A" + "<br>" + "最高电压:" + fu + "V";
                        setTimeout(
                            function () {
                                if (ou > 400) {
                                    var third = document.getElementById('third-box-3');
                                    var thirdtop = document.getElementById('third-box-3-top');
                                    thirdtop.style.display = "block";
                                    third.style.boxShadow = "0 0 0 0.15vw #17BBF3";
                                    document.getElementById("third-box-3-top").innerHTML = "设定电压:" + an + "A" + "<br>" + "最高电压:" + fu + "V" + "<br>" + "最低电压:" + ou + "Ω";
                                } else {
                                    var third1 = document.getElementById('third-box-4');
                                    var third1top = document.getElementById('third-box-4-top');
                                    third1top.style.display = "block";
                                    third1.style.boxShadow = "0 0 0 0.15vw #17BBF3";
                                    document.getElementById("third-box-4-top").innerHTML = "设定电压:" + an + "A" + "<br>" + "最高电压:" + fu + "V" + "<br>" + "最低电压:" + ou + "Ω";
                                }
                                setTimeout(f2(), 2000);
                            },
                            2000);
                    }
                },
                2000);
        },
        2000);
}

function sleep(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}
async function change(doc, option, duration) {
    doc.setOption(option);
    await sleep(duration);
}

async function f2() {
    await change(myChartOne, optionOne, 1500);
    await change(myChartTwo, optionTwo, 1500);
    await change(myChartThree, optionThree, 1500);
    await change(myChartFour, optionFour, 1500);
    $("#overheating").html(randomNum(40, 60) + '%');
    $("#report").show("normal");
    // 填入数据
    $(".quality").eq(0).html("360kg");
    $(".quality").eq(1).html("12.21kg");
    $(".quality").eq(2).html("12.21kg");
    $(".quality").eq(3).html("12.21kg");
    $(".quality").eq(4).html("45.34%");
    $(".quality").eq(5).html("58.23%");
    $(".quality").eq(6).html("209.6kg");
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}