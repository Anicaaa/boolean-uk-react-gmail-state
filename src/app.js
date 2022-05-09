import { useState } from "react";
import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);

  const checkedEmails = (clickedEmails) => {
    const readEmails = emails.map((e) => {
      if (e === clickedEmails) {
        e.read = true;
      }
      return e;
    });
    setEmails(readEmails);
  };

  const uncheckedEmails = () => {
    const unreadEmails = emails.filter((e) => !e.read);
    return unreadEmails.length;
  };

  const starredEmails = () => {
    const unreadEmails = emails.filter((e) => !e.starred);
    return unreadEmails.length;
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{uncheckedEmails()}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails()}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map((e) => {
            return (
              <li className="email">
                <div className="select">
                  <input
                    className="select-checkbox"
                    type="checkbox"
                    onClick={() => checkedEmails(e)}
                  />
                </div>
                <div className="star">
                  <input className="star-checkbox" type="checkbox" />
                </div>
                <div className="sender">{e.sender}</div>
                <div className="title">{e.title}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
