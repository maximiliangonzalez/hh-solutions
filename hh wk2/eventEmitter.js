
'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.functions = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.functions[funcName]) {
    this.functions[funcName] = [];
  }
  this.functions[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (this.functions[funcName]) {
    this.functions[funcName].forEach(func => func.apply(this, args));
  }
};

const eventfulEmitter = new EventEmitter();
eventfulEmitter.on('sickEvent', () => console.log('what a sick event this is'));
eventfulEmitter.on('sickEvent', () => console.log('yes, sick indeed'));
eventfulEmitter.on('lessSickEvent', () => console.log('that was way less sick than the other event'));

// eventfulEmitter.trigger('sickEvent');
eventfulEmitter.trigger('lessSickEvent');



module.exports = EventEmitter;