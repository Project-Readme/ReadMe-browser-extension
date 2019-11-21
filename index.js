import axios from 'axios';
// const cheerio = require('cheerio');

const URL = window.location.href;

const scrape = async () => {
   try {
       const {data} = await axios.get(URL);
       return data;

   } catch (error) {
       console.log(error);
   }
}

console.log(scrape());
