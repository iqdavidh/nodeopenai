const openaiClient = require("../src/lib/openaiClient");
const getFullStory = require("./getFullStory");

const fullHistory =getFullStory()

describe("text_compresion", () => {
  it("text",async () => {
    const response = await openaiClient.text.compression(fullHistory,30,60);
    expect(response).toBeTruthy()
    
    const responseExample1={
      "id": "cmpl-9cOoGC4fe47QaBRYsdYIVNEnBFX9H",
      "object": "text_completion",
      "created": 1718938860,
      "model": "gpt-3.5-turbo-instruct",
      "choices": [
        {
          "text": "\n\nSnow White, a kind princess with legendary beauty, is banished by her jealous stepmother, the Queen, who desires to be the fairest in the land. The huntsman, unable to harm Snow White, sets her free in the forest where she feels fear and loneliness.",
          "index": 0,
          "logprobs": null,
          "finish_reason": "stop"
        }
      ],
      "usage": {
        "prompt_tokens": 350,
        "completion_tokens": 57,
        "total_tokens": 407
      }
    }
    
  });
  
  
  
});