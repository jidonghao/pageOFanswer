window.onload = function () {

}
/**
 * 
 * @param {*} password 秘钥
 * @param {*} niname 昵称
 * @param {*} fenshu 分数
 */
function Emp(password, niname, fenshu) {
    this.password = password;
    this.niname = niname;
    this.fenshu = fenshu;
}

/**
 * 登录方法
 */
function login() {
    //秘钥
    let keykey = document.getElementById("keykey").value;
    //昵称
    let nicheng = document.getElementById("name").value;
    //分数
    let fenshu = document.getElementById("fenshu").value;
    if (keykey.length == 0) {
        alert("秘钥不能为空！");
        document.getElementById("keykey").focus();
    } else if (nicheng.length == 0) {
        alert("昵称不能为空！");
        document.getElementById("name").focus();
    } else if (fenshu > 224) {
        alert("分数不能大于224");
        document.getElementById("fenshu").focus();
    } else if (keykey == "abcde" || keykey == "dhdh") {
        //登录 利用构造方法传值
        let emp = new Emp(keykey, nicheng, fenshu);
        //通过sessionStorage传值
        sessionStorage.setItem('op', JSON.stringify(emp));
        location.replace("mainPage.html");
    } else {
        alert("秘钥错误！");
        document.getElementById("keykey").focus();
    }
}

document.getElementById("btn_queding").onclick = function () {
    login();
}