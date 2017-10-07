const dgram = require('dgram');

class DatadogLogs {

  constructor( PORT, HOST) {
    this.PORT = PORT;
    this.HOST = HOST;
    this.client = dgram.createSocket('udp4');
  }

  send(message) {
    // The logger only supports JSON so lets just stringify anything...
    let payload = new Buffer( JSON.stringify(message) );
    this.client.send( payload, 0, payload.length, this.PORT, this.HOST, (err, bytes)=> {
      if (err) throw err;
      this.client.close();
    });
  }
  
}

module.exports = DatadogLogs;
