var quotes = ["Belive in Yourself","Be Yourself","All our dreams can come true, if we have the courage to pursue them. – Walt Disney",
"The secret of getting ahead is getting started.” – Mark Twain",
"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed. – Michael Jordan",
"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. – Mary Kay Ash",
"The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
"Only the paranoid survive. – Andy Grove",
"It’s hard to beat a person who never gives up. – Babe Ruth"];

var num = Math.floor(Math.random()*quotes.length);
console.log(num);

document.getElementById('quoteDisplay').innerHTML = quotes[num];

function newquote(){
    location.reload(true);
}

