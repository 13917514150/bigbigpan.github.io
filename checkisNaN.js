function checkisNaN() {
   let input = document.getElementById(`check_number`).nodeValue;
    if (input = '' || isNaN(input)) {
alert(`不是数字`);
    }
}