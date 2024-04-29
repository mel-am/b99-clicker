import { useState, useEffect } from "react";
import "./style/App.css";
import Game from "./assets/components/Game";
// import Counter from "../src/assets/components/Counters"
// import Button from "./assets/components/Button";

// Audio

const scullyAudio = "/sounds/scully-challenge-accepted-101soundboards.mp3";
const hitchcockAudio =
  "/sounds/hitchcock-i-need-my-afternoon-nap-101soundboards.mp3";
const boyleAudio = "/sounds/charles-boyle-whatever-you-say-101soundboards.mp3";
const diazAudio = "../sounds/rosa-diaz-lets-do-this-101soundboards.mp3";
const santiagoAudio = "/sounds/amy-santiago-pretty-dope-101soundboards.mp3";
const peraltaAudio =
  "/sounds/jake-peralta-chills-literal-chills-101soundboards.mp3";
const holtAudio = "/sounds/captain-holt-vindication-101soundboards.mp3";
const ginaAudio = "/sounds/gina-linetti-one-hundred-emoji-101soundboards.mp3";
const jeffordsAudio =
  "/sounds/terry-jeffords-not-today-nibs-101soundboards.mp3";

// Function to set starting user data
// function getStartingUserData() {
//   return {
//     Scully: 0,
//     Hitchcock: 0,
//     Boyle: 0,
//     Diaz: 0,
//     Santiago: 0,
//     Peralta: 0,
//     Jeffords: 0,
//     Holt: 0,
//     Gina: 0,
//   };
// }

// function handleGame() {

//   //starting data
//   startingUserData = {
//     Scully: 0,
//     Hitchcock: 0,
//     Boyle: 0,
//     Diaz: 0,
//     Santiago: 0,
//     Peralta: 0,
//     Jeffords: 0,
//     Holt: 0,
//     Gina: 0,
//   };
// }
export const upgradesList = [
  {
    name: "Scully",
    cost: 50,
    cpsIncrease: 50,
    image: "/images/Scully.png",
    audio: new Audio(scullyAudio),
  },
  {
    name: "Hitchcock",
    cost: 100,
    cpsIncrease: 100,
    image: "/public/images/Hitchcock.webp",
    audio: new Audio(hitchcockAudio),
  },
  {
    name: "Boyle",
    cost: 150,
    cpsIncrease: 150,
    image: "/public/images/boyle.webp",
    audio: new Audio(boyleAudio),
  },
  {
    name: "Diaz",
    cost: 200,
    cpsIncrease: 200,
    image: "/public/images/Diaz.webp",
    audio: new Audio(diazAudio),
  },
  {
    name: "Santiago",
    cost: 250,
    cpsIncrease: 250,
    image: "/public/images/Santiago.webp",
    audio: new Audio(santiagoAudio),
  },
  {
    name: "Peralta",
    cost: 300,
    cpsIncrease: 300,
    image: "/public/images/Peralta.webp",
    audio: new Audio(peraltaAudio),
  },
  {
    name: "Jeffords",
    cost: 350,
    cpsIncrease: 350,
    image: "/public/images/Jeffords.webp",
    audio: new Audio(jeffordsAudio),
  },
  {
    name: "Holt",
    cost: 400,
    cpsIncrease: 400,
    image: "/public/images/Holt.webp",
    audio: new Audio(holtAudio),
  },
  {
    name: "Gina",
    cost: 450,
    cpsIncrease: 450,
    image: "/public/images/Gina.png",
    audio: new Audio(ginaAudio),
  },
];
export default function App() {
  // const storedUserData =
  //   JSON.parse(localStorage.getItem("userData")) || getStartingUserData();

  const [cases, setCases] = useState(0);
  const [cps, setCps] = useState(1);
  // const [upgradeClicked, setUpgradeClicked] = useState(null);
  // const [upgradeCounts, setUpgradeCounts] = useState(storedUserData);

  // let startingUserData;
  // if (storedUserData) {
  //   startingUserData = storedUserData;
  // } else {
  //   startingUserData = {
  //     Scully: 0,
  //     Hitchcock: 0,
  //     Boyle: 0,
  //     Diaz: 0,
  //     Santiago: 0,
  //     Peralta: 0,
  //     Jeffords: 0,
  //     Holt: 0,
  //     Gina: 0,
  //   };
  // }
  // const [upgradeCount, setUpgradeCount] = useState(startingUserData);
  useEffect(() => {
    const myInterval = setInterval(() => {
      addCase();
    }, 10000 / cps);

    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addCase() {
    setCases((currentCases) => {
      const newCases = currentCases + 1;
      const updatedCases = newCases >= 0 ? newCases : 0;
      localStorage.setItem("cases", updatedCases.toString());
      return updatedCases;
    });
  }

  function buyUpgrade(upgrade) {
    setCps(cps + upgrade.cpsIncrease);
    setCases((currentCases) => currentCases - upgrade.cost);
    // setUpgradeClicked(upgrade.name);
    // setUpgradeCounts((prevCounts) => ({
    //   ...prevCounts,
    //   [upgrade.name]: prevCounts[upgrade.name] + 1,
    // }));
  }

  return (
    <>
      <main>
        <br></br>
        <h1>Brooklyn 99 Clicker</h1>
        <br></br>
        <h2>Solve 50 cases to reveal your first partner</h2>
        <br></br>
        <div id="upgrade-list">
          {upgradesList.map(
            (upgrade, index) =>
              cases >= 50 &&
              cps >= upgrade.cost && (
                <div id="upgrade-item" key={index}>
                  <img src={upgrade.image} alt={upgrade.name} />
                  <button
                    onClick={() => {
                      buyUpgrade(upgrade);
                      upgrade.audio.play();
                    }}
                  >
                    Work with {upgrade.name}
                  </button>
                </div>
              )
          )}
        </div>
        {/* Button to complete a case */}
        {cases >= 0 && <button onClick={addCase}>Complete a case</button>}
        <p>I have solved {cases} cases</p>
        <Game
          cases={cases}
          cps={cps}
          buyUpgrade={buyUpgrade}
          upgradesList={upgradesList}
        />{" "}
        {/* Buttons to buy upgrades */}
        {/* {upgradesList.map(
          (upgrade, index) =>
            cps >= upgrade.cost && (<> <img src={upgrade.image}/>
              <button key={index} onClick={() => buyUpgrade(upgrade)}>
                Work with {upgrade.name}  {upgrade.audio.play()}
              </button>
              </>
            )
        )}

        {/* <Counter label="New Cases" value={cases} />
        <Counter label="Cases Per Second" value={cps} /> */}
        {/* Button to complete a case */}
        {/* {cases >= 0 && <button onClick={addCase}>Complete a case</button>}
        <p>I have solved {cases} cases</p> */}
        {/* {upgradesList.map(
          (upgrade, index) =>
            cps >= upgrade.cost && (
              <button key={index} onClick={() => buyUpgrade(upgradesList)}>
                Work with {upgrade.name}
              </button>
            )
        )} */}
        {/* <Game
          cases={cases}
          cps={cps}
          buyUpgrade={buyUpgrade}
          upgradesList={upgradesList}
        />{" "}
        */}
        {/* {cases >= 0 && <button onClick={addCase}>Complete a case</button>}
        {cps >= 10 && (
          <button onClick={() => buyUpgrade(upgrades[1])}>
            Work with Hitchcock
          </button>
        )}
        {upgrades.map(
          (upgrade, index) =>
            cps >= upgrade.cost && (
              <button key={index} onClick={() => buyUpgrade(upgrade)}>
                Work with {upgrade.name}
              </button>
            )
        )}
        {cases >= 50 && (
          <button onClick={() => buyUpgrade(upgrades[0])}>
            Work with Scully
          </button>
        )}
        {cps >= 150 && (
          <button onClick={() => buyUpgrade(upgrades[1])}>
            Work with Hitchcock
          </button>
        )}
        {cps >= 200 && (
          <button onClick={() => buyUpgrade(upgrades[2])}>
            Work with Boyle
          </button>
        )}
        {cps >= 250 && (
          <button onClick={() => buyUpgrade(upgrades[3])}>
            Work with Santiago
          </button>
        )}
        {cps >= 300 && (
          <button onClick={() => buyUpgrade(upgrades[4])}>
            Work with Peralta
          </button>
        )}
        {cps >= 350 && (
          <button onClick={() => buyUpgrade(upgrades[5])}>
            Work with Jeffords
          </button>
        )}
        {cps >= 400 && (
          <button onClick={() => buyUpgrade(upgrades[6])}>
            Work with Captain Holt
          </button>
        )}
        {cps >= 450 && (
          <button onClick={() => buyUpgrade(upgrades[7])}>
            Work with Gina
          </button>
        )}

        {cases >= 0 && <button onClick={addCase}>Complete a case</button>}
        {cps >= 10 && (
          <button onClick={() => buyUpgrade(upgrades[1])}>
            Work with Hitchcock
          </button>
        )}
        {upgrades.map(
          (upgrade, index) =>
            cps >= upgrade.cost && (
              <button key={index} onClick={() => buyUpgrade(upgrade)}>
                Work with {upgrade.name}
              </button>
            )
        )}
        {upgradeClicked && (
          <div>
            <p>Image for {upgradeClicked} appears here</p>
            {upgrades.map(
              (upgrade, index) =>
                upgradeClicked === upgrade.name && (
                  <img key={index} src={upgrade.image} alt={upgrade.name} />
                )
            )}
          </div>
        )}
        <Game Cases={cases} cps={cps} buyUpgrade={buyUpgrade} /> */}
        {/* <h2>Upgrade Counts</h2>
        <table>
          <thead>
            <tr>
              <th>Upgrade Type</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(upgradeCounts).map(([upgradeType, count]) => (
              <tr key={upgradeType}>
                <td>{upgradeType}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {/* <button className="reset-button" onClick={handleGame}>
          Reset Game
        </button> */}
        <table id="upgrade-table">
          <thead>
            <tr>
              <th>Upgrade</th>
              <th>Cost</th>
              <th>Partner</th>
            </tr>
          </thead>
          <tbody>
            {upgradesList.map(
              (upgrade, index) =>
                cps >= upgrade.cost && (
                  <tr key={index}>
                    <td>{upgrade.name}</td>
                    <td>{upgrade.cost}</td>
                    <td>Work with {upgrade.name}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        {/* Button to complete a case */}
        {/* {cases >= 0 && <button onClick={addCase}>Complete a case</button>} */}
        {/* <p>I have solved {cases} cases</p> */}
        {/* Display Game component */}
        {/* <Game
    cases={cases}
    cps={cps}
    buyUpgrade={buyUpgrade}
    upgradesList={upgradesList}
  /> */}
      </main>
    </>
  );
}
