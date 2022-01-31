function getData(){
    axios.get('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team=transformers')
    .then(response => {
        var h6 = document.createElement('h6');
        var output = document.createTextNode(response.data.token);
        h6.appendChild(output);
        document.getElementById('apiOutput').appendChild(h6);
    })
    .catch(error => console.error(error));

    teamName();
}

