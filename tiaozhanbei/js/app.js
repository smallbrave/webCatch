// 过度热预测
const box = [2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058];
// 电解槽数据
let djxdata = [{
  "2051": 30.269459,
  "2052": 26.12799,
  "2053": 29.06315,
  "2054": 21.895039
}];
let boxdata = [];
let model;
let buquan;
let caiyang;
let suanfa;
$(document).ready(function () {
  // 选择图片
  $(".modelImg").click(function () {
    console.log($(this).index());
    model = $(this).index;
    alert('你选择了模型' + $(this).index());
    $(".modelNum").html(`你选择了模型${$(this).index()}`)
  });
  // 选择盒子
  $(".choose-djc").click(function () {
    let idx = $(this).index();
    if ($(this).hasClass("choose-djc-active")) {
      $(this).removeClass("choose-djc-active");
      arrRemove(boxdata, box[idx]);
      console.log(boxdata);
    } else {
      $(this).addClass("choose-djc-active");
      boxdata.push(box[idx]);
      console.log(boxdata);
    }
  })
  // 发送数据
  $('#kaishiyuce').click(function () {
    $("#show-content-part-5-2").hide();
    $("#show-content-part-5-3").show(500);
    tiaoxuan();
  })
  // 电解槽跳转
  $(".djc-tiaozhuan").click(function () {
    let idx = box[$(this).index()];
    window.open("./tree.html?djc=" + idx);
  });
  // 已有模型-选择
  $('.data-choose-box').click(function () {
    let chooseidx = $(this).index();
    console.log(chooseidx);
    $('.data-choose-box').removeClass("data-choose-box-active");
    $(this).addClass("data-choose-box-active");
    $('#span').html(`${chooseidx}月数据展示`);
  })
  // 方法选择
  $('#sure').click(function () {
    $('#show-content-part-3-1').hide();
    $('#show-content-part-3-2').show(500);
  });
  $('.method-show-box-1').click(function () {
    buquan = $(this).index() + 1;
    $('#buquan-title').html('补全方法' + buquan);
  });
  $('.method-show-box-2').click(function () {
    caiyang = $(this).index() + 1;
    $('#caiyang-title').html('采样方法' + caiyang);
  });
  $('.method-show-box-3').click(function () {
    suanfa = $(this).index() + 1;
    $('#suanfa-title').html('算法' + suanfa);
  });
  // 这里发送请求
  $('#method-sure').click(function() {
    alert('发送请求');
  });
})

function arrIndex(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) return i;
  }
  return -1;
};

function arrRemove(arr, val) {
  var index = arrIndex(arr, val);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

// 跳转处理
async function tiaoxuan() {
  if (djxdata) {
    let data = djxdata[0];
    for (let item in data) {
      let thisIdx = arrIndex(box, item);
      let thisData = data[item];
      if (thisIdx !== -1) {
        console.log($('.djc-tiaozhuan').eq(thisIdx));
        if (thisData <= 25) {
          $('.djc-tiaozhuan').eq(thisIdx).addClass('djc-normal');
        } else if (thisData > 25 && thisData <= 28) {
          $('.djc-tiaozhuan').eq(thisIdx).addClass('djc-superheat1');
        } else if (thisData > 28) {
          $('.djc-tiaozhuan').eq(thisIdx).addClass('djc-superheat2');
        }
      }
    }
  }
}

// 查看已有模型
let alreadyModelData = [{
    "modelName": "RF",
    "modelURL": "url",
    "createTime": "2019-03-26 13:34:04.0",
    "dataDate": "1、2、3"
  },
  {
    "modelName": "FD",
    "modelURL": "url",
    "createTime": "2019-03-22 13:34:08.0",
    "dataDate": "2、3、4"
  },
  {
    "modelName": "Xgboost",
    "modelURL": "url",
    "createTime": "2019-03-06 13:34:10.0",
    "dataDate": "3、5、9"
  }
]