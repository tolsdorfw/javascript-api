document.getElementById("calculate").addEventListener("click", () => {
    var parent = document.getElementById("parent").value;
    var required = document.getElementById("required").value;

    if (required == "" || parent == "") {
        return;
    } else {
        var result = required / parent;
        document.getElementById("result").innerHTML = "Result: " + result + " em";
    }
    
});

// var parent = document.getElementById("")