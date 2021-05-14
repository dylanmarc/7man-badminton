$(document).ready(function () {

    players = [];
    rounds = 0;

    //adds players
    $('#add').click(function () {
        console.log(players.length)
        if (players.length < 7 && $('#playerInput').val() != '') {
            var newPlayer = $('#playerInput').val();
            players.push(newPlayer);
            $('#playerList').append(`<li>${newPlayer}</li>`);
            $('#playerInput').val('');
        } else if ($('#playerInput').val() != ''){
            alert('enter someone u buht')
        } else {
            alert('too many u buht');
        }
    })

    //first 4 on
    //last 3 of on players off, first off player goes on


    $('#matchmake').click(function () {
        if (players.length == 7) {
            sevenPlayer();
        }else{
            alert('ya buht')
        }
    })

    $('#clear').click(function () {
        players = []
        $('#playerList').empty()
        $('#match').empty()
    })

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
        $('#match').html(`<b>Round: ${rounds}</b><div class="text-success">${playersOn}</div><div class="text-danger">${playersOff}</div>`)
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


    // $('#count').click(function () {
    //     countPlayers()
    // })

    //counts players
    // function countPlayers() {
    //     $('#playerList').find('li').each(function () {
    //         players.push($(this).text());
    //     });
    //     console.log(players);
    //     return players;
    // }
})
