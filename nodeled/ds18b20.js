var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  console.log('IDS: '+ids);

  ds18b20.temperature(ids[0], function(err, value) {
    console.log('Current temperature is', value);
  });
});
