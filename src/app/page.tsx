import Image from "next/image";
import IconTelegram from "../assets/icons/telegram.svg";
import IconTwitter from "../assets/icons/twitter.svg";
import IconGithub from "../assets/icons/github.svg";

export default function Home() {
  return (
    <div id="root">
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Runes Tools</a>
          </div>
          <div className="social">
            <a href="https://t.me/runestools" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconTelegram className="icon" />
            </a>
            <a href="." title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="." title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Join telegram channel if you&rsquo;re curious.</p>
          </div>
          <a href="https://t.me/runestools">
            <div className="cta">Join Telegram Channel</div>
          </a>
        </div>
        <div className="footer">
          <span>
            made by{" "}
            <a className="underlined" href="." target="_blank" rel="noopener noreferrer">
              arkn98
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="."
              title="GitHub repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
