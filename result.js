document.addEventListener("DOMContentLoaded", () => {
    let header = document.getElementById("header");
    let subheader = document.getElementById("subheader");
    let parts = document.getElementById("iron-man").children;
    // console.log({header, subheader, parts});
    console.log('header display: ', header.getAttribute("display"));
    console.log('subheader display: ', subheader.getAttribute("display"));

    if(parts[0].getAttribute("background-image") != "") {
        console.log('has background');
        header.setAttribute("display", "block");
        console.log('header display: ', header.getAttribute("display"));
        subheader.setAttribute("display", "block");
        console.log('subheader display: ', subheader.getAttribute("display"));
    }
})