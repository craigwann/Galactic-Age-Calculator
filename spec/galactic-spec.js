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

  it('should test a persons age in Mercury years', function() {
    expect(reusableDate.mercury()).toEqual(75);
  });

  it('should test a persons age in Venus years', function() {
    expect(reusableDate.venus()).toEqual(29.032258064516128);
  });

  it('should test a persons age in Mars years', function() {
    expect(reusableDate.mars()).toEqual(9.574468085106384);
  });

  it('should test a persons age in Jupiter years', function() {
    expect(reusableDate.jupiter()).toEqual(1.5177065767284992);
  });

  it('should test a persons age in years born before January 1, 1970', function() {
    let oldPerson = new Galactic('June 22,1968');
    expect(oldPerson.oldAge()).toEqual(50);
  });

});
