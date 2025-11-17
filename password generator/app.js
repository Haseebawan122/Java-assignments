function generate() {
    let values = "wqererwer:.ewrerer^¥-¥^-690780i87687978¥9¥78979/7:98:.:";
    let password = "";

    for (let i = 0; i < 12; i++) {
        let randomnum = Math.floor(Math.random() * values.length);
        password += values[randomnum];
    }

    document.getElementById("result").textContent = password;
}