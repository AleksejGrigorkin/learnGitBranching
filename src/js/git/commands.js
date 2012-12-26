var _ = require('underscore');

var getRegexMap = function() {
  return {
    // ($|\s) means that we either have to end the string
    // after the command or there needs to be a space for options
    commit: /^commit($|\s)/,
    add: /^add($|\s)/,
    checkout: /^checkout($|\s)/,
    rebase: /^rebase($|\s)/,
    reset: /^reset($|\s)/,
    branch: /^branch($|\s)/,
    revert: /^revert($|\s)/,
    log: /^log($|\s)/,
    merge: /^merge($|\s)/,
    show: /^show($|\s)/,
    status: /^status($|\s)/,
    'cherry-pick': /^cherry-pick($|\s)/
  };
};

var getShortcutMap = function() {
  return {
    'git commit': /^gc($|\s)/,
    'git add': /^ga($|\s)/,
    'git checkout': /^go($|\s)/,
    'git rebase': /^gr($|\s)/,
    'git branch': /^gb($|\s)/,
    'git status': /^gs($|\s)/
  };
};

var expandShortcut = function(commandStr) {
  _.each(getShortcutMap(), function(regex, method) {
    var results = regex.exec(commandStr);
    if (results) {
      commandStr = method + ' ' + commandStr.slice(results[0].length);
    }
  });
  return commandStr;
};

exports.getRegexMap = getRegexMap;
exports.expandShortcut = expandShortcut;