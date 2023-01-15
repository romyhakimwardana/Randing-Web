try {
    let masuk = document.getElementById("lgn")
    masuk.onclick = login
} catch (error) {
    
}
console.log(sessionStorage)

function login(e){
    e.preventDefault()
    
    const dataLog = []
    const userKey = sessionStorage.getItem('user');
    const objUser = JSON.parse(userKey);

    let loginNama = document.getElementById("useremail")
    let loginPass = document.getElementById("userpass")

    for (let i = 0; i <= objUser.length - 1; i++){
        if (loginNama.value == objUser[i].Email && loginPass.value == objUser[i].Password){
            console.log("Berhasil login")
            alert("Berhasil Login")
            window.location.href = "beranda.html"
        } else if (i == objUser.length - 1){
            console.log("Gagal Login")
            alert("Maaf Login Gagal")
        }else{
            console.log("Gagal Login")
            alert("Maaf Login Gagal")
        }
    }
}