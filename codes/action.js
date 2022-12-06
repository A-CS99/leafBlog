window.onload = function(){
    var qq = document.getElementById("qq");
    var wx = document.getElementById("wx");
    console.log(qq);
    console.log(wx);
    qq.onmouseover = function(){
        var txt = document.getElementById("txt");
        txt.innerHTML = "QQ: 2946015394";
    }
    wx.onmouseover = function(){
        var txt = document.getElementById("txt");
        txt.innerHTML = "WeChat: xiaoye_720416";
    }
}