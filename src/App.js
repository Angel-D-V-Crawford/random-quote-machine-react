import { useEffect, useState } from 'react';
import './App.css';

// Quote Creator
const createQuote = (text, author) => {
  return {
    text,
    author
  };
}

const arrQuotes = [
  createQuote("What does not destroy me, makes me strong.", "Friedrich Nietzsche"),
  createQuote("The world is a dangerous place to live - not because of the people who are evil but because of the people who don't do anything about it.", "Albert Einstein"),
  createQuote("Never to suffer would have been never to have been blessed.", "Edgar Allan Poe"),
  createQuote("Nature is just enough; but men and women must comprehend and accept her suggestions.", "Antoinette Brown Blackwell"),
  createQuote("Labor to keep alive in your breast that little spark of celestial fire called conscience.", "George Washington"),
  createQuote("Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.", "Abraham Lincoln"),
  createQuote("Remember that sometimes not getting what you want is a wonderful stroke of luck.", "Dalai Lama"),
  createQuote("Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.", "Paavo Nurmi"),
  createQuote("A leader is one who knows the way, goes the way, and shows the way.", "John C. Maxwell"),
  createQuote("Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.", "Henry James"),
  createQuote("The aim of life is self-development. To realize one's nature perfectly - that is what each of us is here for.", "Oscar Wilde"),
  createQuote("If you love life, don't waste time, for time is what life is made up of.", "Bruce Lee"),
  createQuote("He who wishes to secure the good of others, has already secured his own.", "Confucius"),
  createQuote("The most complicated achievements of thought are possible without the assistance of consciousness.", " Sigmund Freud"),
  createQuote("The greatest danger for most of us is not that our aim is too high, and we miss it, but that it is too low, and we reach it.", "Michelangelo"),
  createQuote("The more you like yourself, the less you are like anyone else, which makes you unique.", "Walt Disney"),
  createQuote("Wise kings generally have wise counselors; and he must be a wise man himself who is capable of distinguishing one.", "Diogenes"),
  createQuote("Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", "Barack Obama"),
  createQuote("I have friends in overalls whose friendship I would not swap for the favor of the kings of the world.", " Thomas Edison"),
  createQuote("Ask not what your country can do for you, ask what you can do for your country.", "John F. Kennedy")
];

function QuoteBox() {
  const [quote, setQuote] = useState({
    text: '',
    author: ''
  });

  useEffect(() => {
    handleNewQuote();
  }, []);

  function handleNewQuote() {
    const arrIndex = Math.floor(Math.random() * arrQuotes.length);
    console.log(arrIndex);
    const newQuote = arrQuotes[arrIndex];
    setQuote({...newQuote});
  }

  return(
    <div id='quote-box'>
      <p id='text'>{'"' + quote.text + '"'}</p>
      <i id='author'>{quote.author}</i>
      <br />
      <br />
      <button id='new-quote' onClick={handleNewQuote}>New Quote</button>
      <a id='tweet-quote' href={'https://twitter.com/intent/tweet?text="' + quote.text + '" ' + quote.author} target='_blank'>Tweet Quote</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
