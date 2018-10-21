npm install clarifai

const Clarifai = require('clarifai');

//initialize api key
const app = new Clarifai.App({
  apiKey: 'f7b984f6836947fb8edc7fc676bc9d65'
})

//SDK
<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>

app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict("https://samples.clarifai.com/metro-north.jpg");
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']
      })


//Request
app.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://samples.clarifai.com/food.jpg").then(
    function(response) {
    // do something with response
    },
    function(err) {
    // there was an error
    }
    );
