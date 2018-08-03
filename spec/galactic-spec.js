import { Galactic } from './../src/galactic.js';

describe('Galactic', function() {
  var reusableDate;

  beforeEach(function() {
    reusableDate = new Galactic('June 14,2000');
  });

  it('should test a persons age in years', function() {
    expect(reusableDate.getAge()).toEqual(18);
  });

  it('should test a persons age in seconds', function() {
    expect(reusableDate.getAgeSeconds()).toEqual(572313600);
  });

});
