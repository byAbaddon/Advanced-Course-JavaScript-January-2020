function addClassFunctionality(ac) {
  ac.prototype.species = 'Human';
  ac.prototype.toSpeciesString = function () {
  return `I am a ${this.species}. ` +  this.toString();
 }
}