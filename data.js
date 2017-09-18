function getData() {
    var data = window.fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((x) => {
            return x.text();
        }).then((data) => {
            var json = JSON.parse(data);
            console.log(data.title);
            document.getElementById("title").innerText = json.title;
            document.getElementById("body").innerText = json.body;
        });

}
