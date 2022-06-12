describe('First Suit test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have info in screen', async () => {
    const result = await element(by.text('Cancel anytime. Ofter terms apply.'));
    await expect(result).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
     await element(by.id('option-premium')).tap();
     await expect(element(by.text('6.99'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
