const openaiClient = require("../src/lib/openaiClient");
const text =  `ONCE UPON A TIME, a Princess named Snow White lived in a castle with her father the King and her Stepmother the Queen. Her father always reminded his daughter that above all else, a royal family must be fair. Said he: “People over all the land come here to the castle with disputes. They need their ruler to hear each side and make a decision that's fair.”

The Queen, Snow White’s stepmother, knew how important being fair was to her husband. She asked her magic mirror: “Mirror, mirror, on the wall, who is the fairest of them all?”

"Snow White is the fairest of them all!” said the Magic Mirror.

“What?!” shouted the Queen in surprise. “No one is more fair than I! The Queen must be the best at everything. What's more fair than that?”`



describe("headlines", () => {
  it("text",async () => {
    
    const response = await openaiClient.text.headlines(text);
    expect(response).toBeTruthy()
    
    const exampleResponse = {
      "id": "cmpl-9cOyT1lSsNoFBHMtaW3lHW2e4kVIS",
      "object": "text_completion",
      "created": 1718939493,
      "model": "gpt-3.5-turbo-instruct",
      "choices": [
        {
          "text": "\n\n1. \"The Importance of Fairness: Lessons from Snow White\"\n2. \"A Royal Reminder: The Value of Fairness in Leadership\"\n3. \"The Queen's Dilemma: A Tale of Fairness and Jealousy\"\n4. \"The Magic Mirror's Truth: The Power of Fairness in Decision-Making\"\n5. \"Fairness Above All: The King's Lesson to His Daughter, Snow White\"\n6. \"The Queen's Quest for Perfection: How Fairness Was Her Downfall\"\n7. \"The Fairness Factor: A Key Element in Effective Ruling\"\n8. \"Mirror, Mirror on the Wall: The Surprising Truth About Fairness\"\n9. \"The Queen's Wake-Up Call: Why Fairness Trumps Selfishness\"\n10. \"The Fairytale of Fairness: A Timeless Lesson for All Leaders\"",
          "index": 0,
          "logprobs": null,
          "finish_reason": "stop"
        }
      ],
      "usage": {
        "prompt_tokens": 193,
        "completion_tokens": 179,
        "total_tokens": 372
      }
    }
    
    
  });
  
  
  
});