/* from https://blog.developerdao.com/farcaster-frames-explained */
/* need both node.js and Express.js and possibly JSON too */

const express = require("express")
const app = express()

app.use(express.json())

app.get("/frame", (request, response) => {
  response.send(`
    <!doctype html>

    <title>Frame 1</title>

    <meta property="fc:frame" content="vNext">
    <meta property="fc:frame:image" content="https://example.com/image.jpg">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="fc:frame:post_url" content="https://example.com/frame">
    <meta property="fc:frame:button:1" content="Next Frame">
  `)
})

app.post("/frame", (request, response) => {
  const { fid } = request.body.untrustedData

  response.send(`
    <!doctype html>

    <title>Frame 2</title>

    <meta property="fc:frame" content="vNext">
    <meta property="fc:frame:image" content="https://example.com/image.jpg">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="fc:frame:button:1" content="Your FID is: ${fid}">
    <!--<meta property="fc:frame:button:1" content="Your FID is: ${fid}">-->
  `)

})

app.listen(3333, () => 
  console.log("Server started on port 3333")
)
