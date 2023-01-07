const month = require('./index.js');

describe(`test month`, () => {
  it('adds 2 to equal февраль', () => {
    const result = month(2);
    expect(result).toBe(`февраль`);
});
  it('adds 3 to equal март', () => {
    const result = month(3);
    expect(result).toBe(`март`);
  });
  it('adds 12 to equal декабрь', () => {
    const result = month(12);
    expect(result).toBe(`декабрь`);
  });

});