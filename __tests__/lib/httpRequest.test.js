const httpRequest = require("../../src/lib/httpRequest");
describe("httpRequest", () => {
  it("get request",async () => {
    const url = "https://dummyapi.online/api/movies"
    const response = await httpRequest.GET(url);
    expect(response.success).toBe(true);
    expect(Array.isArray(response.rawResponse)).toBe(true)
  });
});