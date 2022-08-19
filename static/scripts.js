function toggleStyle() {

    var element = document.getElementById("main");

    if (element.classList.contains("light")) {

        element.classList.add("dark");
        element.classList.remove("light")
    } 
    else if (element.classList.contains("dark")) {

        element.classList.add("light");
        element.classList.remove("dark")
    }
}