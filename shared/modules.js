var fnDefinition = function() {};
var objectDefinition = {};
var ModuleClass = _.clone(Marionette.Module);

/*
 * Anonymous
 *
 */

(function() {
  var appOne = new Marionette.Application();
  var module = appOne.module('anonymous', fnDefinition);

  module.onBeforeStop = function() {
    console.log('Anonymous one worked');
  }

  appOne.start();
  module.stop();

  window.appOne = appOne;
})();


/*
 * Object definition
 *
 */

(function() {
  var appTwo = new Marionette.Application();
  var module = appTwo.module('object', objectDefinition);

  module.onBeforeStop = function() {
    console.log('Object def worked');
  }

  appTwo.start();
  module.stop();

  window.appTwo = appTwo;
})();

/*
 * ModuleClass
 *
 */

(function() {
  var appThree = new Marionette.Application();
  var module = appThree.module('moduleClass', ModuleClass);
  
  module.onBeforeStop = function() {
    console.log('ModuleClass worked');
  }

  appThree.start();
  module.stop();

  window.appThree = appThree;
})();
