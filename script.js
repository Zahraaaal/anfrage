function sendAnswerToServer(answer) {
    fetch('https://maker.ifttt.com/trigger/{event}/json/with/key/kL5pPg8_AUVNle8U-PNAmovkDhH5KRrEZ2Y46C3SuG0', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value1: answer }),
    });
}
https://maker.ifttt.com/trigger/%7Bevent%7D/json/with/key/kL5pPg8_AUVNle8U-PNAmovkDhH5KRrEZ2Y46C3SuG0
function antwort(antwort) {
    var ausgabeElement = document.getElementById('ausgabe');
    var gifElement = document.getElementById('gif');


    if (antwort === 'Ja') {
        ausgabeElement.innerHTML = 'Yippie!!!';
        gifElement.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWRhMWF5dnp5eWV5eHdidWlwb3RqZGhqYXJvY2MxMHdjeHY1M3I5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GeimqsH0TLDt4tScGw/giphy.gif'; // URL für das "Ja"-GIF
        gifElement.style.display = 'inline-block'; 
        
           
    } else if (antwort === 'Nein') {
        ausgabeElement.innerHTML = 'Bitte erneut versuchen!';
        gifElement.src = 'https://media0.giphy.com/media/nR4L10XlJcSeQ/200.webp?cid=ecf05e474unpobgelo9s9c9ylhn7ft0kjs13qsk5d7a8uac0&ep=v1_gifs_search&rid=200.webp&ct=g'; // URL für das "Nein"-GIF
        gifElement.style.display = 'inline-block'; // "Nein"-GIF anzeigen
    }
    sendAnswerToServer(answer); // Send the user's answer to the server
}
