$(document).ready(function () {

    players = [];
    rounds = 0;
    defaultPlayers = [' Dylan', ' Lewis', ' George', ' Ravi', ' Callum', ' Jake', ' Max'];


    //adds players
    $('#add').click(function () {

        if (players.length < 7 && $('#playerInput').val() != '') {

            if ($('#playerInput').val() == 'default' || $('#playerInput').val() == '$') {
                players = defaultPlayers;
                $('#playerList').empty();
                for (i = 0; players.length > i; i++) {
                    $('#playerList').append(`<li class="list-group-item bg-dark text-white border-secondary">${players[i]}</li>`);
                }
                $('#divider').removeClass('d-none');

            } else {
                var newPlayer = $('#playerInput').val();
                players.push(newPlayer);
                $('#playerList').append(`<li class="list-group-item bg-dark text-white border-secondary">${newPlayer}</li>`);
                $('#playerInput').val('');

                $('#divider').removeClass('d-none');
            }

        } else if ($('#playerInput').val() == '') {
            alert('enter someone u no-life cretin')
        } else {
            alert('too many ppl u fucking idiot');
        }
    })

    //makes a match if you have seven players
    $('#matchmake').click(function () {
        if (players.length == 7) {
            sevenPlayer();
        } else {
            alert('Go fuck yourself (not enough people)')
        }
    })

    //clears player list and matchups
    $('#clear').click(function () {
        players = []
        $('#playerList').empty()
        $('#match').empty()
        $('#divider').addClass('d-none');
    })

    //makes it so you can press enter to add players to the list
    $('#playerInput').keyup(function () {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            $('#add').click();
        }
    })

    //takes array of players and calculates who is on and off
    function sevenPlayer() {
        var playersOn = []
        var playersOff = []
        for (i = 0; players.length > i; i++) {
            console.log(i)
            if (i <= 3) {
                playersOn.push(players[i]);
            } else {
                playersOff.push(players[i]);
            }
        }
        rounds++;
        $('#match').html(`<b class="text-white bg-dark list-group-item bg-dark text-white border-secondary">Round: ${rounds}</b><div class="text-white border-secondary bg-success list-group-item">${playersOn}</div><div class="text-white border-secondary bg-danger list-group-item">${playersOff}</div>`)
        var newPlayers = [];
        for (i = 0; playersOff.length > i; i++) {
            newPlayers.push(playersOff[i]);
        }
        for (i = 0; playersOn.length > i; i++) {
            newPlayers.push(playersOn[i]);
        }
        players = newPlayers;
    }
    Array.prototype.move = function (from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
    };

})