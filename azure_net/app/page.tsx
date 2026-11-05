import Image from "next/image";

export default function Home() {
  return (
    <div className="console">
  <header>
    <p>
      guest@azurewater
    </p>
  </header>
  <div className="consolebody" id="msg">
    <div id="message_body">
      <span>
        {'> '}
      </span>
      <span id="cursor" className="blink">
          {'_'}
      </span>
      <div className="cursor" id="cursor">
      </div>
    </div>
  </div>
</div>
  );
}
