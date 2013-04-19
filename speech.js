var s2t = require('googleS2T').s2t;
s2t([ 'jfk_1961_0525_moon.flac'],
  true,
  {lang:'nl-nl'},
  function(err,ret){
    console.log(JSON.stringify(ret, undefined, 2));
  }
);

