let result = document.getElementById("UnDiv");
console.log(result.innerHTML);
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc() {
            changeColor('yellow');
            result.innerHTML = "Yellow !";
        }        