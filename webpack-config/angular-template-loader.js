module.exports = function angularTemplateLoader(source, map) {
  const escaped = `'` + source.replace(/'/g, `\\'`) + `'`;

  // TODO: change to
  // const script = `angular.module('templates').run(['$templateCache', function ($templateCache) { $templateCache.put(${escaped}) }`;

  const script = `console.log(${escaped})`;
  this.callback(null, script, map);
};
