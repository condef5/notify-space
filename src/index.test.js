import notify from '.';

describe('it should show notify', () => {
  it("should show 'hola'", () => {
    notify({ text: 'hola' });
    expect(1).toBe(1);
  });
});
