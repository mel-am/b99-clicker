

export default function introPage({ onClick }) {
  return (
    <div className="intro-page">
      <h1 className="heading">Welcome to the 99</h1>
      <button className="blue-button" onClick={onClick}>
        Enter the BullPen
      </button>
      <audio autoPlay>
        <source src="/sounds/Brooklyn Nine-Nine.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
