  var prompt = require('prompt'); 

  var properties = [
    {
      name: 'samplesize',
      pattern: /^[0-9]*$/,
      message: 'Please provide only whole numbers',
      required: true 
      }
  ];

  prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Sample Size: ' + result.samplesize);
    piValue(result.samplesize);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

  function points () {
    
    var x = Math.random();
    var y = Math.random();

    var distance = Math.sqrt(x*x + y*y); //Equation of a circle

    if(distance < 1) {
      return true;
    }

    return false;
  }

  function piValue(samplesize) {
    var inCount = 0;

    for (var i = 0; i < samplesize; i++) {
      if(points()) {
        inCount++;
      }      
    };
    
    var pi = 4 * (inCount/samplesize);

    console.log('The number of points inside ' + inCount);
    console.log('The approximate value of pi for Sample Size ' + samplesize + ' is: ' + pi);
  }
  
