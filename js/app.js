function Change() {
    document.body.style.backgroundColor = "black";
}

let date = new Date();
let hour = date.getHours();


if (hour>=9 && hour <12) {
    alert('Sabahin xeyr');
}
else if (hour>=12 & hour<=18) {
    alert('Gunortan xeyir');
}
else if(hour>=19 & hour<=24) {
    alert('axsamin xeyir');
}
else if(hour>=1 & hour<9) {
    alert('seher uzu');
}