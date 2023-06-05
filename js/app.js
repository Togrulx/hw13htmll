function Modes() {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

    }
}
function Change() {

    let inp_value = document.getElementById('Group').value;
    let x = inp_value.slice(-3, -2);


    switch (x) {
        case '1':
            document.getElementById('Letters').innerHTML = "Səhər qrupudur"
            document.body.style.backgroundColor = "#F2EFE4"
            break;

        case '2':
            document.getElementById('Letters').innerHTML = "Günorta Qrupudur"
            document.body.style.backgroundColor = "#ffc800"
            document.getElementById('Letters').style.color = "white"
            break;
        case '3':
            document.getElementById('Letters').innerHTML = "Axşam Qrupudur"
            document.body.style.backgroundColor = "#131c3a"
            document.getElementById('Letters').style.color = "white"
            break;
        default:

            document.getElementById('Letters').innerHTML = "Add valid option"
            document.body.style.backgroundColor = "red"
            break;

    }

}