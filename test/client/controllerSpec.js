describe("Controller testing", function()
{
  beforeEach(angular.mock.module("linksoup.controllers"));

  it("should have an appCtrl", module(function(appCtrl)
  {
    expect(appCtrl).not.toEqual(null);
  }));
  it("should not have an appleCtrl", module(function(appleCtrl)
  {
    expect(appleCtrl).toEqual(null);
  }));
});
