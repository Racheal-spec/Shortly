function shortLink() {
		
    let url = document.getElementById('input-link').value;
    if(url === undefined || url == null || url.length <= 0) {
        alert("The Url field is required");
    }else{
        var validUrl = validateUrl(url);
        if (validUrl) {

            // document.getElementById('defaultUrl').innerHTML = url;
            
                fetch('https://rel.ink/api/links/', {
                  method: 'POST',
                  body: JSON.stringify({'url':url}),
                  headers: {
                      'Content-Type': 'application/json'
                    },
                  mode: 'cors',
                })
                .then(response => response.json())
                .then(result => {
                  // document.getElementById('defaultUrl').innerHTML;
                  // document.getElementById('result').innerHTML = '<a href="https://rel.ink/'+result.hashid+'">https://rel.ink/'+ result.hashid +'</a>';
                  console.log('Success:', result);
                })
                .catch(error => {
                  console.error('Error:', error);
                });

        }else{
            alert("The Url provided is not valid!!!. It should start with either https or http");
        }
    }
}

function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}
