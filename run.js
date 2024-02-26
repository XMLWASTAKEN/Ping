const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bot Status</title>
        <style>
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: black;
            color: red;
          }
          h1 {
            font-size: 5em;
          }
        </style>
      </head>
      <body>
        <h1>LHOOFRAㅤALWAYSㅤONㅤTOPㅤ!</h1>
      </body>
    </html>
  `);
});

const fetch = require('node-fetch');
const urls = [
'https://galactic-nova-tazgmot.glitch.me',      
'https://galactic-nova-7mimo.glitch.me',
'https://galactic-nova-spakalaw.glitch.me',      
'https://galactic-nova-tugutilities.glitch.me',      
'https://galactic-nova-alonzo.glitch.me',
'https://gn-lhoofra-bogey.glitch.me',      
'https://galactic-nova-daryl.glitch.me',
'https://galactic-nova-elmachakil.glitch.me',
'https://gn-lhoofra-elio.glitch.me',
'https://galactic-nova-forex.glitch.me',
'https://galactic-nova-tug.glitch.me',      
'https://galactic-nova-hamza.glitch.me',
'https://galactic-nova-host.glitch.me',
'https://galactic-nova-ilyass.glitch.me',      
'https://galactic-nova-luna.glitch.me',
'https://galactic-nova-music.glitch.me',
'https://gn-lhoofra-normand.glitch.me',
'https://galactic-nova-siwi.glitch.me',
'https://galactic-nova-utilities.glitch.me',
'https://galactic-nova-xml.glitch.me'
];

async function ping(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error for ${url}: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error for ${url}:`, error.message);
  }
}

urls.forEach(ping);

setInterval(() => {
  urls.forEach(ping);
}, 30000);
