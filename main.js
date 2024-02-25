let result = document.getElementById("UnDiv");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc() {
            changeColor('yellow');
            result.innerHTML = "Yellow !";
        }        