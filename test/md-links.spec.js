require('../readLink');
require ('fs');
require('md-links');

const arrL = ['https://github.com/DianaG-M/cdmx-2019-01-bc-core-data-lovers/blob/master/test/data.spec.js']
describe('findLink', () => {
  it('Should are a function', () => {
    console.log ('function')
  });

  it ('Should return links for .md' , () => {
    expect(findLink).toEqual(arrL)
  })
})