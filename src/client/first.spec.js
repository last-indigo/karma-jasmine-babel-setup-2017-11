describe('sanity test', function () {
  it('passes', function () {
    expect(true).toBe(true);
  });
});

describe('first suite', function () {
  describe('example of an async->sync test double', function () {
    it('runs in a sync manner', function (/*done*/) {
      window.setTimeout = function (cb) {
        cb();
      };
      var val = null;
      window.setTimeout(function () {
        val = 123;
        // done();
      }, 10500);
      expect(val).toBe(123);
    });
  });

  describe('ES5 features', function () {
    it('has Object.create', function () {
      expect(Object.create).toEqual(jasmine.any(Function));
    });
  });

  describe('ES2015 features', function () {
    it('has Promise', function () {
      expect(Promise).toEqual(jasmine.any(Function));
    });

    it('has Object.assign', function () {
      expect(Object.assign).toEqual(jasmine.any(Function));
    });

    it('can recognize arrow functions', function () {
      expect(() => 123).toEqual(jasmine.any(Function))
    });

    it('can use desctructuring assignment', function () {
      let a = 1;
      let b = 2;

      // flip them
      [a, b] = [b, a];

      expect(a).toEqual(2);
      expect(b).toEqual(1);
    });
  });

  // describe('ES2017 features', function () {
  //   it('can fetch', function(){
  //     expect(fetch('google.com')).toEqual(jasmine.any(Promise));
  //   });
  // });


});
