import catatonicCircle from '../lib';
import { should } from 'chai';

should();

describe('catatonic-circle', function () {
  it('should have a version number!', function () {
    catatonicCircle.should.have.property('VERSION');
  });
});
