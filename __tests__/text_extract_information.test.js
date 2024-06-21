const openaiClient = require("../src/lib/openaiClient");
const text =  `ONCE UPON A TIME, a Princess named Snow White lived in a castle with her father the King and her Stepmother the Queen. Her father always reminded his daughter that above all else, a royal family must be fair. Said he: “People over all the land come here to the castle with disputes. They need their ruler to hear each side and make a decision that's fair.”

The Queen, Snow White’s stepmother, knew how important being fair was to her husband. She asked her magic mirror: “Mirror, mirror, on the wall, who is the fairest of them all?”

"Snow White is the fairest of them all!” said the Magic Mirror.

“What?!” shouted the Queen in surprise. “No one is more fair than I! The Queen must be the best at everything. What's more fair than that?”`



describe("headlines", () => {
  it("text",async () => {
    
    const instructions = ` two list. One list for people and another list for the places`
    const response = await openaiClient.text.extractData(text, instructions);
    expect(response).toBeTruthy()
    
    const exampleResponse = {
      "id": "cmpl-9cP3bIF1UVQ2wgfqaxmiVxfBa5jNq",
      "object": "text_completion",
      "created": 1718939811,
      "model": "gpt-3.5-turbo-instruct",
      "choices": [
        {
          "text": "\n\nList 1: People\n1. Snow White\n2. King\n3. Queen\n4. Magic Mirror\n\nList 2: Places\n1. Castle\n2. Land\n3. Ruler's Court\n4. Magic Mirror's Chamber",
          "index": 0,
          "logprobs": null,
          "finish_reason": "stop"
        }
      ],
      "usage": {
        "prompt_tokens": 198,
        "completion_tokens": 52,
        "total_tokens": 250
      }
    }
    
  });
  
  
  
});