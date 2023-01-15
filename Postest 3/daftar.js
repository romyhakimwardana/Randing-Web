console.log(sessionStorage)
const form = document.getElementById('fr')
const daftarNama = document.getElementById("nama")
const daftarEmail = document.getElementById("email")
const daftarPass = document.getElementById("pass")
const dataUser = []

form.addEventListener('submit', function(event){
    event.preventDefault()

    if(daftarPass.value < 5){
        console.log("Password Kurang")
        alert("Password kurang dari 5")
    }else{
    dataUser.push({
        "Nama": daftarNama.value,
        Email: daftarEmail.value,
        Password: daftarPass.value 
    })

    let UbahString = JSON.stringify(dataUser);
    sessionStorage.setItem('user', UbahString);
    console.log("Berhasil Daftar")
    alert("Berhasil Daftar")
    window.location.href = "login.html"
}}
)