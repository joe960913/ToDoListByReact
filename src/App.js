import React, { useState } from "react";
import "./App.less";
import ToDo from "./ToDo";
import Done from "./Done";
let goodSentence = [
  `“To have created love like that out of absolutely nothing — it was a sort of miracle, wasn’t it?”
– Marianne Wiggins'`,
  `“Love blurs your vision; but after it recedes, you can see more clearly than ever.”
– Margaret Atwood`,
  `“I looked and looked at her, and I knew, as clearly as I know that I will die, that I loved her more than anything I had ever seen or imagined on earth.”
– Vladimir Nabokov`,
  `“I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.”
– Gabriel Garcia Marquez`,
  `“I love you also means I love you more than anyone loves you, or has loved you, or will love you, and also, I love you in a way that no one loves you, or has loved you, or will love you, and also, I love you in a way that I love no one else, and never have loved anyone else, and never will love anyone else.”
– Jonathan Safran Foer`,
  `“The love I felt for her on that train ride had a capital and provinces, parishes and a Vatican, an orange planet and many sullen moons — it was systemic and it was complete.”
– Gary Shteyngart`,
  `“Love is like the rain. It comes in a drizzle sometimes. Then it starts pouring and if you’re not careful it will drown you.”
– Edwidge Danicat`,
  `“Love was love, one could find it with anyone, one could find it anywhere. It was just that you could never keep it. Not unless you were ready to die for it.”
– Norman Mailer`,
  `“How mysterious it is, to be in love. For you can be in love with one who knows nothing of you. Perhaps our greatest happinesses spring from such longings — being in love with one who is oblivious of you.”
– Joyce Carol Oates`,
  `I was always hungry for love. Just once, I wanted to know what it was like to get my fill of it — to be fed so much love I couldn’t take any more. Just once. ”
– Haruki Murakami`
];
function App() {
  const [tab, setTab] = useState("todo");
  let ChangeTab = e => {
    e.preventDefault();
    let val = e.target.value;
    setTab(val);
  };
  let rand = Math.floor(Math.random() * goodSentence.length);
  let stc = goodSentence[rand];
  return (
    <div id="container">
      <h1 id="header">TODO</h1>
      <div id="sentence">
        <span>{stc}</span>
      </div>
      {tab === "todo" ? <ToDo /> : <Done />}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button value="todo" onClick={ChangeTab}>
          todo
        </button>
        <button value="done" onClick={ChangeTab}>
          done
        </button>
      </div>
    </div>
  );
}

export default App;
