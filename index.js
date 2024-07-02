document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    let data_user = document.forms['awal']['nama'].value;
    let data_password = document.forms['awal']['password'].value;
    
    if (data_user.trim() === "") {
        alert("Username Tidak Boleh Kosong ... !!!");
    } else if (data_password.trim() === "") {
        alert("Password Tidak Boleh Kosong ... !!!");
    } else {
        window.location.href = "SERENITY.html";
    }
});
