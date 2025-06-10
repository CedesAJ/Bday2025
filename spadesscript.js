function emailSend(){
    var userName = document.getElementById('teamName').value;
    var player1Name = document.getElementById('player1').value;
    var player2Name = document.getElementById('player2').value;
    var phone = document.getElementById('phone').value;
    var messageBody = "Team Name: " + userName + "<br> Member 1: " + player1Name + "<br> Member 2: " + player2Name + "<br> Phone: " + phone;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "cedesaj@gmail.com",
    Password : "BB73C27DB39D4E0E70B71B3D6E61EB7B6336",
    To : 'cedesaj@gmail.com',
    From : "cedesaj@gmail.com",
    Subject : "Spades Tournament",
    Body : messageBody
}).then(
  message => alert(message)
);
}
