window.onload = function () {
    let opString = sessionStorage.getItem("op");
    if (opString != null) {
        document.getElementById("nicheng").innerText = JSON.parse(opString).niname;//昵称
        document.getElementById("fenshunum").innerText = JSON.parse(opString).fenshu;//分数
    } else {
        logout();
    }
};

// 登出
function logout() {
    sessionStorage.clear();
    location.replace("index.html");
}