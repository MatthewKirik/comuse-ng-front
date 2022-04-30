import { ControlHasErrorPipe } from './control-has-error.pipe';

describe('ControlHasErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new ControlHasErrorPipe();
    expect(pipe).toBeTruthy();
  });
});
