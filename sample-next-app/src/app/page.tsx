'use client';

import {useState} from 'react';
import Link from 'next/link';

export default function HomeSweetHome() {
  var [input, setInput] = useState("");
  var [message, setMessage] = useState("your name.");

  const doChange = (event) => {
    setInput(event.target.value);
  };
  const doClick = () => {
    setMessage("Hello, " + input + "!!");
    setInput("");
  };

  return (
      <main>
          <div className= "m-5">
              <h1 className="title">Next.js sample</h1>
              <p className="msg">{message}</p>
              <input type="text" onChange={doChange} value={input} className="input"/>
              <button onClick={doClick} className="btn">Click</button>
          </div>
          <div>
              <h1 className="title">2 page</h1>
              <p className="msg">This is other page sample.</p>
              <div>
                  <Link href="/other">나성범 사진보러 가기!!!</Link>
              </div>
          </div>
          <div>
              <h1 className="title">3 page</h1>
              <p className="msg">This is DynamicRouting page sample.</p>
              <div>
                  <Link href="/name">동적 라우팅 페이지 들어가자</Link>
              </div>
          </div>
      </main>  
  );
}
