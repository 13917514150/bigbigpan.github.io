function checkisNaN() {
   let input = document.getElementById(`check_number`).value;
    if (input == ' '||isNaN(input)) {
alert(`不是数字`);
    }
    else{
        document.write(`输入数字为： ${input}`)
    }
}