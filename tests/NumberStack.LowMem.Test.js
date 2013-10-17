(function() {

    describe('NumberStack.SimpleFloat constructor', function() {

        it('should create a new instance', function() {
             expect(new NumberStack.LowMem([1,2,3]) instanceof NumberStack.LowMem).toEqual(true);
        });

        it('should allow an empty stack to be created', function() {
            expect(new NumberStack.LowMem());
        });

        it('should allow a stack containing integers to be created', function() {
            expect(new NumberStack.LowMem([1, 2, 4]));
        });

        describe('NumberStack.SimpleFloat getSize()', function() {
            expect(new NumberStack.LowMem([1.231243, 1.234345345, 678679867.234234]));
        });

        it('should allow a stack containing mixed numbers to be created', function() {
            expect(new NumberStack.LowMem([345, 3452.234234234, 123123123123]));
        });

        it('should fail silently when bad values are passed in initial the stack', function() {
            expect(new NumberStack.LowMem([345, 3452.234234234, 123123123123, 'This is a bad value']));
        });
    });

    describe('NumberStack.SimpleFloat push()', function() {

        var test;

        it('should allow new numbers to be added', function() {
            test = new NumberStack.LowMem([1,2,3]);
            expect(test.push(1)).not.toBe(null);
            expect(test.push(1.5465131351351351)).not.toBe(null);

            test = new NumberStack.LowMem([1.5646,2.51351,3.215163513]);
            expect(test.push(1)).not.toBe(null);
            expect(test.push(1.5465131351351351)).not.toBe(null);
        });

        it('should not allow numbers and objects to be added', function() {
            test = new NumberStack.LowMem([1.5646,2.51351,3.215163513]);
            expect(test.push('asdasdasda')).toBe(false);
            expect(test.push({a: 'object'})).toBe(false);
            expect(test.push(new Object)).toBe(false);
            expect(test.push(function() {})).toBe(false);
        });

        it('should return the position of the number as in the stack', function() {
            test = new NumberStack.LowMem([1,2,3]);
            expect(test.push(1)).toBe(4);

            test = new NumberStack.LowMem();
            expect(test.push(1)).toBe(1);
        });

    });

    describe('NumberStack.SimpleFloat getSize()', function() {

        var test;

        it('should return the length of the stack', function() {
            test = new NumberStack.LowMem([1,2,3]);
            expect(test.getSize()).toEqual(3);

            test = new NumberStack.LowMem([1.514654,2.58,3.12313]);
            expect(test.getSize()).toEqual(3);

            test = new NumberStack.LowMem([1,2,'a very bad value', 3]);
            expect(test.getSize()).toEqual(3);
        });

        it('should return 0 if the stack length is 0', function() {

            test = new NumberStack.LowMem();
            expect(test.getSize()).toEqual(0);

            test = new NumberStack.LowMem([]);
            expect(test.getSize()).toEqual(0);

            test = new NumberStack.LowMem([1]);
            test.pop();
            expect(test.getSize()).toEqual(0);

        });

    });

})();

