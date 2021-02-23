const promesa = new Promise((resolve, reject) => {
    setTimeout(250);
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status == 200) {
            console.log(req.response);
        }
        else {

        }
    };
    req.send();
});
function request(url)
{
    promesa.then((resp) => resp.json())
}