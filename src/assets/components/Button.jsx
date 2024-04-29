

export default function BadgeButton({ updatedCases }) {
  function clickAnimation() {
    updatedCases();
    const clickAnimation = document.createElement("img");
    clickAnimation.src = "/images/NYPD.webp";
    clickAnimation.className = "float-animation";

    document.body.appendChild(clickAnimation);
  }
  return (
    <button
      className="nypd-badge-button"
          onClick={clickAnimation}
          >
      <img src="/images/NYPD.webp"
      alt="Main game clicker for the game"
          />
      </button>
  );
}
