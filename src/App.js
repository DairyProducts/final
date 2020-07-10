import React from 'react';
import './App.css';
import './Button.js'
import Button from './Button.js';
import './giphy.gif'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hello there.</h1>
        <h3>You are bored. I am bored. Let's be bored together.</h3>
        <h4>Okay fine. Here are some stories you can read. Just make sure you read
          these by yourself and that you are the only one in the room. 
        </h4>
        <h5><b>The story about the kid who stuck his head in a toilet</b></h5>
        <p>So there was this kid. He really enjoyed being the weird type, as people say. After a day of picking people's noses and dumping bottles of orange juice
          on random people on the street, he decided to cool off. Instead of hopping into a pool like a normal, sane person, he decided to run into the nearest public bathroom,
          crash into a stall, scream 'TALAHANIA', and dunked his head in the toilet. This moment was captured on numerous cell phones and posted all over Reddit, who prompted removed
          all of the images because 'they were too violent'.
        </p>
        <h5><b>The story about the kid who really liked Fortnite</b></h5>
        <p>We all know that Minecraft was and will always be the best game ever created, and that Fortnite is a trash salty tryhard game trying to prove it's better than Minecraft, but
          it's not. So there was this kid who boasted about how much he played Fortnite. He also talked about how Fortnite was much better than Minecraft. Soon after, the 200 million+
          people in the Minecraft Army captured the kid, and the decision was made to banish him to the Nether. I dunno what happened after that, I've never seen him in all my trips
          down there.
        </p>
        <h5><b>Pig Cult AOUH</b></h5>
        <p>The Pig Cult is the best established Minecraft cult in the entire universe. Just click <a className='App-link' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a>. Come on, don't be shy.
        </p>
        <h5><b>Just a thing to say</b></h5>
        <p>Haikyuu is poop. Like I said, just a thing to say.
        </p>
        <h5><b>Something for you to watch</b></h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WtO3AHMBePY" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h5><b>Some really epic music for y'all</b></h5>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-sentKzikd0" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h5><b>If you really want you can friend me on Minecraft Bedrock</b> </h5>
        <p>My IGN is DaireeProds.</p>
        <h5><b>Here's something trippy.</b></h5>
        <img height='500' width='800'src={require("./giphy.gif")} alt="image"/> 
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
