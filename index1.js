const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function runCompletion(){
try {
    const completion = await openai.createCompletion(
        {
            model: "text-davinci-003",
            prompt: "What do i need to make a cake??",
          },
          {
            timeout: 10000,
            headers: {
              "Example-Header": "example",
            },
          }
    );
    console.log(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }

}

runCompletion();