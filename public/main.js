'use strict';
var pubnub;
var player_uuid = PUBNUB.uuid();

$(function() {

  // Grab some PubNub keys from the server
  $.get('/pubnub', function(data) {
    pubnub = PUBNUB.init({
        publish_key: data.publish,
        subscribe_key: data.subscribe,
        ssl: true,
        uuid: player_uuid // otherwise tabs share UUIDs
    });

    console.log("PubNub Client UUID: ", pubnub.get_uuid(), player_uuid);

    joinGame(data.game_id);
  });
});

// Asks the server for a game then joins it
// Joins the PubNub channel for the game the server told us about
function joinGame(game_id) {
  console.log("Attempting to join game: " + game_id);

  pubnub.subscribe({
	channel: game_id,

	message: function(message) {
	  message = JSON.parse(message);

	  console.log("MSG: ", message);
	},

	connect: function() {
	  console.log("SUBSCRIBE: " + game_id);
	},

	error: function(err) {
	  console.log("ERR: " + err);
	}
  });
}
