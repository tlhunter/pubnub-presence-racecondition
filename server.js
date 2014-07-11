var pubnub_creds = require('./pubnub.json');
var uuid = require('uuid');
var server_uuid = uuid.v4();
var express = require('express');

var HTTP_PORT = 1337;
var PLAYERS_PER_GAME = 2;
var app = express();
var game_id = "game-" + uuid.v4();

var pubnub = require('pubnub').init({
	publish_key: pubnub_creds.publish,
	subscribe_key: pubnub_creds.subscribe,
	secret_key: pubnub_creds.secret,
	ssl: true,
	uuid: server_uuid
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// Privide PubNub keys to client
app.get('/pubnub', function(req, res) {
	res.send({
		subscribe: pubnub_creds.subscribe,
		publish: pubnub_creds.publish,
		game_id: game_id
	});
});

pubnub.subscribe({
	channel: game_id,

	// Client shouldn't publish. Just looking for presence notifications.
	message: function(message, env, channel) {},

	connect: function() {
		console.log('SUBSCRIBE: ' + game_id);
	},

	// Sometimes this doesn't fire if two clients join in quick succession
	// I see the connection callbacks fire in the client, but presence only calls once
	presence: function(data, env, channel) {
		// Don't care about myself
		if (data.uuid === server_uuid) { return; }

		if (data.occupancy >= 20) {
			console.log("MASS PRESENCE");
		} else {
			console.log("PRESENCE: ", data.uuid);
		}

		console.log(data);

		// The server is counted, hence the +1
		if (data.occupancy % PLAYERS_PER_GAME - 1 === 0) {
			console.log("INIT GAME\n\n");
		}
	},

	error: function(err) { console.log('ERROR:', err); }
});

// Client asks to join a game. We create one or add them to an available one
app.listen(HTTP_PORT);
console.log("Server UUID: " + server_uuid);
console.log("http://localhost:" + HTTP_PORT);
