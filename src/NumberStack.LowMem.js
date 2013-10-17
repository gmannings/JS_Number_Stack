// Namespace
var NumberStack = NumberStack || {};

/**
 * Simple low memory footprint implementation of a number only stack.
 *
 * @param {Array}   vals    Array of integers or floats
 * @constructor
 */
NumberStack.LowMem = function(vals) {

    var _stack  = [],
        inst    = this;

    // Private methods ---------------------

    /**
     * Validation check that a value is a number - integer *or* float
     * @param val
     * @returns {boolean}
     * @private
     */
    function _isNumber(val) {

        // Null val check
        if (val === undefined || val === null) {
            return false;
        }

        // Simple number check
        return typeof val === 'number';

    }

    // Public methods ----------------------

    /**
     * Return the number of elements within the stack
     * @returns {Number}
     */
    this.getSize = function() {
        return _stack.length;
    };

    /**
     * Returns whether the stack is empty
     * @returns {boolean}
     */
    this.isEmpty = function() {
        return !!((inst.getSize() > 0));
    };

    /**
     * Add a number value to the stack.
     * @param {number} val
     *  Valid integer or float
     * @returns {number | boolean}
     *  Success returns stack length, failure return false
     */
    this.push = function(val) {
        return ( _isNumber(val) ) ?
            _stack.push(val) :
            false;
    };

    /**
     * Removes the last item from the stack and returns it
     * @returns {number}
     *  Value removed from end of the stack
     */
    this.pop = function() {
        return _stack.pop();
    };

    /**
     * Return the  value of the last item in the stack without removing
     * @returns {number}
     */
    this.peek = function() {
        return _stack[_stack.length - 1];
    };

    /**
     * Simple implementation to find the largest number within the stack
     * @returns {number}
     *  Largest number in stack
     */
    this.getLargest = function() {
        return _stack.sort(function(a, b) {
            return b - a;
        })[0];
    };

    /**
     * Move the bottom item to the top of the stack and return the value
     * @returns {number}
     */
    this.leftRotate = function() {
        // Remove the first item in the stack
        var bottomItem = _stack.shift();

        // Append to the top of the stack
        inst.push(bottomItem[0]);

        return this.peek();
    };

    /**
     * Move the top item to the bottom of the stack and return the next itme
     * in the stack's value
     * @returns {number}
     */
    this.rightRotate = function() {
        // Remove the first item in the stack
        var topItem = inst.pop();

        // Append to the bottom of the stack
        _stack.unshift(topItem);

        return this.peek();
    };

    // Initialisation ------------------------

    // On instantiation push supplied constructor values as long as they are numbers
    if (vals) {
        vals.forEach(function(val) {
            if (_isNumber(val)) {
                inst.push(val);
            }
        });
    }
};

