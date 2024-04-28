

export default function BigBadgeButton({ updatedCases }) {
  function clickAnimation(event) {
    updatedCases();
    const clickAnimation = document.createElement("img");
    clickAnimation.src = "/images/NYPD.webp";
    clickAnimation.className = "float-animation";

    document.body.appendChild(clickAnimation);
  }

  return (
    <img
      className="nypd-badge-button"
      src="/images/NYPD.webp"
      alt="Main game clicker for the game"
      onClick={clickAnimation}
    />
  );
}
