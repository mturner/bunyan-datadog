const DatadogLogs = require('./lib/DatadogLogs');

class BunyanDatadog {

  constructor(config) {
    if (!config || !config.host || !config.port ) {
      throw new Error("bunyan-datadog requires a config object with host and port.  See Readme for details");
    }
    this.datadogClient = new DatadogLogs(config.port,config.host);
  }

  write(data){
    this.datadogClient.send(data);
  }

}

module.exports = (config)=> {
  console.log("Creating BunyanDatdog!", config)
  return new BunyanDatadog(config);
}
