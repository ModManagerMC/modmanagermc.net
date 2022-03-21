import { CapitalizePipe } from './capitalize.pipe';

describe('CapizalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
