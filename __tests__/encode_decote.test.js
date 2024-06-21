const openaiClient = require("../src/lib/openaiClient");
describe("encode _ decode", () => {
  it("encode_decode",async () => {
    const text = "Naruto is a ninja from konoja";
    const list = openaiClient.encode(text);
    expect(list).toMatchObject([
      40059,
      9390,
      318,
      257,
      37049,
      422,
      479,
      29941,
      6592
    ])
    
    const decodedText = openaiClient.decode([29941])
    expect(decodedText).toBe("ono")
    
    
    
  });
});