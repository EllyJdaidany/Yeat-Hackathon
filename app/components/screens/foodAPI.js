npm install clarifai
 const Clarifai = require('clarifai');
 //initialize api key
const app = new Clarifai.App({
  apiKey: 'f7b984f6836947fb8edc7fc676bc9d65'
})

 //SDK
<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>

 app.models.initModel({id: Clarifai.FOOD_MODEL, version: "bd367be194cf45149e75f01d59f77ba7"})
      .then(foodModel => {
        return foodModel.predict("foodImage");
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']
      })
