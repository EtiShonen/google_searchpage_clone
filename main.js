const searchInput = document.querySelector("#search_input");

searchInput.addEventListener("keydown" , function(event) {
    if(event.code == "Enter") {
        search();
    }
});
function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=edge..69i57j0i433j0i512j0i433i512j0i512j0i131i433i512j0i3j0i512.2137j0j4&sourceid=chrome&ie=UTF-8"
}