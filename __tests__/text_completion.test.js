const openaiClient = require("../src/lib/openaiClient");
describe("text_completion", () => {
  it("text",async () => {
    const response = await openaiClient.text.completion("Naruto is a ninja",50);
    expect(response).toBeTruthy()
    
    const responseExample1={
      "id": "cmpl-9bx9z1b7DKOOqve19jxdOuwkiIXsR",
      "object": "text_completion",
      "created": 1718832575,
      "model": "gpt-3.5-turbo-instruct",
      "choices": [
        {
          "text": "-in-training with a need for attention, a knack for mischief and, sealed within him, a strange, formidable power. His antics amuse his instructor Kakashi and irritate his teammates, intense Sasuke and witty Sakura, but Naruto is serious about",
          "index": 0,
          "logprobs": null,
          "finish_reason": "length"
        }
      ],
      "usage": {
        "prompt_tokens": 6,
        "completion_tokens": 50,
        "total_tokens": 56
      }
    }
    
    const responseExample2 = {
      "id": "cmpl-9bx7rLbpCvOeYTHR00dbXcwC5t16i",
      "object": "text_completion",
      "created": 1718832443,
      "model": "gpt-3.5-turbo-instruct",
      "choices": [
        {
          "text": "\n\n\n\"Personal Jesus\"",
          "index": 0,
          "logprobs": null,
          "finish_reason": "length"
        }
      ],
      "usage": {
        "prompt_tokens": 4,
        "completion_tokens": 6,
        "total_tokens": 10
      }
    }
  });
  
  
  
});