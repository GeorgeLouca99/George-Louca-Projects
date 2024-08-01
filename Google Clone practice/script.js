function searchPage(counter) {
    if (counter == 0) {
        counter = 1;
        setTimeout(function() {
            searchPage(counter);
        }, 1000);
    } else {
        window.location = "page2.html";
    }
}