import assert from 'assert';
import circle from '../lib';

describe('catatonic-circle', function () {
  it('should have a version number!', function () {
    assert(typeof circle.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
