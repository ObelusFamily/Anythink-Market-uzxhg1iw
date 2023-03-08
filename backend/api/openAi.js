
const apiKey = process.env.OPENAI_API_KEYgit

const response = await openai.createImage({
    prompt: "a white siamese cat",
    n: 1,
    size: "256x256",
  });
  image_url = response.data.data[0].url;