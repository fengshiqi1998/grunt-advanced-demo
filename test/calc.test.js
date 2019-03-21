var add = require('../calc');

var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);        
  });
  it('1 + 0 = 1', function() {
    expect(add(1, 0)).to.be.equal(1);     
  });
  it('"1" + "0" = "1"', function() {
    expect(add('1', '0')).to.be.equal(1);
  });
  it('1 + 20 = 21', function() {
    expect(add(1, 20)).to.be.equal(21);
  })
});
