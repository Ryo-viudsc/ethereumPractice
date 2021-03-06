
  //to customize your truffle network config
  //this is just a default development network 
  //to the same port as the one ganache starts on
  //local host 8545
  //if we run the truffle development,
  //the port should be 7545

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   }
  }
  
};
