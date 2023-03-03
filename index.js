const { process_params } = require("express/lib/router");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function runCompletion(inputData){
const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: inputData.toString(),
});
console.log(completion.data.choices[0].text);
}

function searchPrompt() {
    rl.question('YOU> ',async input => {
      if( input == 'exit' )
       {
        return rl.close();
       } 
        else
        {
            await runCompletion(input);
            searchPrompt();
        }
    });
  }

searchPrompt();
