const credentials = require("../../credentials.json")
const OpenAI = require("openai");
const {encode,decode} = require('gpt-3-encoder')
const configuration =  {
  apiKey: credentials.key
}

const openai = new OpenAI(configuration);

//https://stackoverflow.com/questions/77789886/openai-api-error-the-model-text-davinci-003-has-been-deprecated


const completion = async (text)=>await openai.completions.create({
  model: 'gpt-3.5-turbo-instruct',
  prompt: text,
  temperature: 0.3,
  max_tokens:300
});

const compression = async (text, wordsForCompresion, max_tokens= 5)=>await openai.completions.create({
  model: 'gpt-3.5-turbo-instruct',
  prompt: `I need to summarize with very few words the following text:"""${text}"""`,
  max_tokens: max_tokens,
  temperature: 0,
});

const headlines = async (text)=>await openai.completions.create({
  model: 'gpt-3.5-turbo-instruct',
  prompt: `I need to create the headlines for a presentation with the most important information from the following article """${text}"""`,
  temperature: 0.3,
  max_tokens:300
});
const extractData = async (text, instructions)=>await openai.completions.create({
  model: 'gpt-3.5-turbo-instruct',
  prompt: `I need to create ${instructions} mentioned in the following text """${text}"""`,
  temperature: 0.3,
  max_tokens:300
});


const openaiClient = {
  encode,
  decode,
  text:{
    completion,
    compression,
    headlines,
    extractData
  }
}


module.exports = openaiClient;