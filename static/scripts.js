function toggleStyle() {

    let element = document.getElementById("main");
    let icon = document.getElementById("style-switcher");
    
    if (element.classList.contains("light")) {

        element.classList.add("dark");
        element.classList.remove("light")

        icon.src = "static/media/sun.png"
    } 
    else if (element.classList.contains("dark")) {

        element.classList.add("light");
        element.classList.remove("dark")

        icon.src = "static/media/moon.png"

    }


}