const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

console.log(process.env.OPENAI_API_KEY)

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//text completion
// const runTest = async (prompt_) =>{
//     const response = await openai.createCompletion({
//         model: "text-davinci-002",
//         prompt: prompt_,
//         temperature: 0,
//         max_tokens: 6,
//       });
//       console.log("response",response)
//       console.log("choices",response.data.choices)

// }

//keywords extraction
const runTest = async (prompt_) =>{
    //const promptInput = `Extract keywords from this text:${prompt_}`
    const promptInput = `My name is Teven and I am`

    const resKeyword = await openai.createCompletion({
        model: "text-davinci-002",//"text-curie-001",//"text-ada-001",//"text-davinci-002",
        prompt: promptInput,
        temperature:0.9,
        max_tokens:60,
        top_p:1.0,
        frequency_penalty:0.8,
        presence_penalty:0.0
      });
      console.log("promptInput",promptInput)
      console.log("response",resKeyword.data)
      console.log("choices",resKeyword.data.choices[0].text)

}

//runTest("Do you wish to describe? Do you want to evaluate? Is your goal to narrate? Is your intent to persuade?")
runTest("Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing. Writers write persuasive and argument paragraphs because their purpose is to persuade or convince someone. Their point is that their reader should see things a particular way and possibly take action on that new way of seeing things. Writers write paragraphs of comparison because the comparison will make their point clear to their readers.")
// runTest("Say this is a test")
// runTest("I cnduo't bvleiee taht I culod aulaclty uesdtannrd waht I was rdnaieg. Unisg the icndeblire pweor of the hmuan mnid, aocdcrnig to rseecrah at Cmabrigde Uinervtisy, it dseno't mttaer in waht oderr the lterets in a wrod are, the olny irpoamtnt tihng is taht the frsit and lsat ltteer be in the rhgit pclae. The rset can be a taotl mses and you can sitll raed it whoutit a pboerlm. Tihs is bucseae the huamn mnid deos not raed ervey ltteer by istlef, but the wrod as a wlohe. Aaznmig, huh? Yaeh and I awlyas tghhuot slelinpg was ipmorantt! See if yuor fdreins can raed tihs too.")
//runTest("Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.")
// console.log("response",response)