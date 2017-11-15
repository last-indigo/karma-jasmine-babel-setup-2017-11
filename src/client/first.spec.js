describe('first suite', function(){
  it('works', function(){
    expect(true).toBe(true);
  });
});

describe('first suite', function(){
  it('has Object.create', function() {
    expect(Object.create).toEqual(jasmine.any(Function));
  });
  it('has Object.assign', () => {
    expect(Object.assign).toEqual(jasmine.any(Function));
  });
  it('has Object.assign', function(){
    expect(Promise).toEqual(jasmine.any(Function));
  });
  it('can recognize arrow functions', function() {
    expect(() => 123).toEqual(jasmine.any(Function))
  });
  it('should not throw', function(done){
    window.setTimeout = function(cb) {
      cb();
    };
    var val = null;
    window.setTimeout(function() {
      val = 123;
      done();
    }, 10500);
    expect(val).toBe(123);
  });

  // it('can fetch', function(){
  //   expect(fetch('google.com')).toEqual(jasmine.any(Promise));
  // });

  it('can use desctructuring assignment', function(){
    let a = 1;
    let b = 2;

    // flip them
    [a, b] = [b, a];

    expect(a).toEqual(2);
    expect(b).toEqual(1);
  });


});
