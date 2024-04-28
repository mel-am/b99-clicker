import { useState, useEffect } from "react";
import "./style/App.css";
import IntroPage from "./assets/components/intropage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

export default function App() {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  const [cases, setCases] = useState(0);
  const [cps, setCps] = useState(1);
  const [upgradeClicked, setUpgradeClicked] = useState(null);
  let startingUserData;
  if (storedUserData) {
    startingUserData = storedUserData;
  } else {
    startingUserData = {
      Scully: 0,
      Hitchcock: 0,
      Boyle: 0,
      Diaz: 0,
      Santiago: 0,
      Peralta: 0,
      Jeffords: 0,
      Holt: 0,
      Gina: 0,
    };
  }
  const [upgradeCounts, setUpgradeCounts] = useState(startingUserData);
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
    setUpgradeClicked(upgrade.name);
    setUpgradeCounts((prevCounts) => ({
      ...prevCounts,
      [upgrade.name]: prevCounts[upgrade.name] + 1,
    }));
  }

  const upgrades = [
    {
      name: "Scully",
      cost: 50,
      cpsIncrease: 5,
      image: "/images/Scully.png",
      audio: new Audio(scullyAudio),
    },
    {
      name: "Hitchcock",
      cost: 100,
      cpsIncrease: 10,
      image: "/public/images/Hitchcock.webp",
      audio: new Audio(hitchcockAudio),
    },
    {
      name: "Boyle",
      cost: 150,
      cpsIncrease: 15,
      image: "/public/images/Hitchcock.webp",
      audio: new Audio(boyleAudio),
    },
    {
      name: "Diaz",
      cost: 200,
      cpsIncrease: 20,
      image: "/public/images/Diaz.webp",
      audio: new Audio(diazAudio),
    },
    {
      name: "Santiago",
      cost: 250,
      cpsIncrease: 25,
      image: "/public/images/Santiago.webp",
      audio: new Audio(santiagoAudio),
    },
    {
      name: "Peralta",
      cost: 300,
      cpsIncrease: 30,
      image: "/public/images/Peralta.webp",
      audio: new Audio(peraltaAudio),
    },
    {
      name: "Jeffords",
      cost: 350,
      cpsIncrease: 35,
      image: "/public/images/Jeffords.webp",
      audio: new Audio(jeffordsAudio),
    },
    {
      name: "Holt",
      cost: 400,
      cpsIncrease: 40,
      image: "/public/images/Capitan_Holt.webp",
      audio: new Audio(holtAudio),
    },
    {
      name: "Gina",
      cost: 450,
      cpsIncrease: 45,
      image: "/public/images/Gina.png",
      audio: new Audio(ginaAudio),
    },
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/src/App.jsx">
          <main>
            <h1>Brooklyn 99 Clicker</h1>
            <h2>Solve 50 cases to reveal your first partner</h2>

        
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
            <p>I have {cases} cases</p>
            <p>I have solved {cps} cases per second</p>
            <h2>Upgrade Counts</h2>
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
            </table>
          </main>
        </Route>
      </Switch>
    </Router>
  );
}

// import { useState, useEffect } from "react";
// import "./style/App.css";
// import IntroPage from "./assets/components/intropage";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// // Audio

// const scullyAudio = "/sounds/scully-challenge-accepted-101soundboards.mp3";
// const hitchcockAudio =
//   "/sounds/hitchcock-i-need-my-afternoon-nap-101soundboards.mp3";
// const boyleAudio = "/sounds/charles-boyle-whatever-you-say-101soundboards.mp3";
// const diazAudio = "../sounds/rosa-diaz-lets-do-this-101soundboards.mp3";
// const santiagoAudio = "/sounds/amy-santiago-pretty-dope-101soundboards.mp3";
// const peraltaAudio =
//   "/sounds/jake-peralta-chills-literal-chills-101soundboards.mp3";
// const holtAudio = "/sounds/captain-holt-vindication-101soundboards.mp3";
// const ginaAudio = "/sounds/gina-linetti-one-hundred-emoji-101soundboards.mp3";
// const jeffordsAudio =
//   "/sounds/terry-jeffords-not-today-nibs-101soundboards.mp3";

// export default function App() {
//   const storedUserData = JSON.parse(localStorage.getItem("userData"));

//   const [cases, setCases] = useState(0);
//   const [cps, setCps] = useState(1);
//   const [upgradeClicked, setUpgradeClicked] = useState(null);
//   let startingUserData;
//   if (storedUserData) {
//     startingUserData = storedUserData;
//   } else {
//     startingUserData = {
//       Scully: 0,
//       Hitchcock: 0,
//       Boyle: 0,
//       Diaz: 0,
//       Santiago: 0,
//       Peralta: 0,
//       Jeffords: 0,
//       Holt: 0,
//       Gina: 0,
//     };
//   }
//   const [userData, setUserData] = useState(startingUserData);
//   useEffect(() => {
//     const myInterval = setInterval(() => {
//       addCase();
//     }, 10000 / cps);

//     return () => {
//       clearInterval(myInterval);
//     };
//   }, [cps]);

//   function addCase() {
//     setCases((currentCases) => {
//       const newCases = currentCases + 1;
//       const updatedCases = newCases >= 0 ? newCases : 0;
//       localStorage.setItem("cases", updatedCases.toString());
//       return updatedCases;
//     });
//   }

//   function buyUpgrade(upgrade) {
//     setCps(cps + upgrade.cpsIncrease);
//     setCases((currentCases) => currentCases - upgrade.cost);
//     setUpgradeClicked(upgrade.name);
//     setUpgradeCounts((prevCounts) => ({
//       ...prevCounts,
//       [upgrade.name]: prevCounts[upgrade.name] + 1,
//     }));
//   }

//   const upgrades = [
//     {
//       name: "Scully",
//       cost: 50,
//       cpsIncrease: 5,
//       image: "/images/Scully.png",
//       audio: new Audio(scullyAudio),
//     },
//     {
//       name: "Hitchcock",
//       cost: 100,
//       cpsIncrease: 10,
//       image: "/public/images/Hitchcock.webp",
//       audio: new Audio(hitchcockAudio),
//     },
//     {
//       name: "Boyle",
//       cost: 150,
//       cpsIncrease: 15,
//       image: "/public/images/Hitchcock.webp",
//       audio: new Audio(boyleAudio),
//     },
//     {
//       name: "Diaz",
//       cost: 200,
//       cpsIncrease: 20,
//       image: "/public/images/Diaz.webp",
//       audio: new Audio(diazAudio),
//     },
//     {
//       name: "Santiago",
//       cost: 250,
//       cpsIncrease: 25,
//       image: "/public/images/Santiago.webp",
//       audio: new Audio(santiagoAudio),
//     },
//     {
//       name: "Peralta",
//       cost: 300,
//       cpsIncrease: 30,
//       image: "/public/images/Peralta.webp",
//       audio: new Audio(peraltaAudio),
//     },
//     {
//       name: "Jeffords",
//       cost: 350,
//       cpsIncrease: 35,
//       image: "/public/images/Jeffords.webp",
//       audio: new Audio(jeffordsAudio),
//     },
//     {
//       name: "Holt",
//       cost: 400,
//       cpsIncrease: 40,
//       image: "/public/images/Capitan_Holt.webp",
//       audio: new Audio(holtAudio),
//     },
//     {
//       name: "Gina",
//       cost: 450,
//       cpsIncrease: 45,
//       image: "/public/images/Gina.png",
//       audio: new Audio(ginaAudio),
//     },
//   ];
//   {
//     cases >= 50 && (
//       <button onClick={buyUpgrade(upgrades[0])}>Work with Scully</button>
//     );
//   }
//   {
//     cps >= 150 && (
//       <button onClick={buyUpgrade(upgrades[1])}>Work with Hitchcock</button>
//     );
//   }
//   {
//     cps >= 200 && (
//       <button onClick={buyUpgrade(upgrades[2])}>Work with Boyle</button>
//     );
//   }
//   {
//     cps >= 250 && (
//       <button onClick={buyUpgrade(upgrades[3])}>Work with Santiago</button>
//     );
//   }
//   {
//     cps >= 300 && (
//       <button onClick={buyUpgrade(upgrades[4])}>Work with Peralta</button>
//     );
//   }
//   {
//     cps >= 350 && (
//       <button onClick={buyUpgrade(upgrades[5])}>Work with Jeffords</button>
//     );
//   }
//   {
//     cps >= 400 && (
//       <button onClick={buyUpgrade(upgrades[6])}>Work with Captain Holt</button>
//     );
//   }
//   {
//     cps >= 450 && (
//       <button onClick={buyUpgrade(upgrades[7])}>Work with Gina</button>
//     );
//   }

//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={IntroPage} />
//         <Route path="/main-game.jsx">
//           <main>
//             <h1>Brooklyn 99 Clicker</h1>
//             <h2>Solve 50 cases to reveal your first partner</h2>

//             {/* Place upgrade buttons within the JSX return */}
//             {cases >= 50 && (
//               <button onClick={() => buyUpgrade(upgrades[0])}>
//                 Work with Scully
//               </button>
//             )}
//             {cps >= 150 && (
//               <button onClick={() => buyUpgrade(upgrades[1])}>
//                 Work with Hitchcock
//               </button>
//             )}
//             {cps >= 200 && (
//               <button onClick={() => buyUpgrade(upgrades[2])}>
//                 Work with Boyle
//               </button>
//             )}
//             {cps >= 250 && (
//               <button onClick={() => buyUpgrade(upgrades[3])}>
//                 Work with Santiago
//               </button>
//             )}
//             {cps >= 300 && (
//               <button onClick={() => buyUpgrade(upgrades[4])}>
//                 Work with Peralta
//               </button>
//             )}
//             {cps >= 350 && (
//               <button onClick={() => buyUpgrade(upgrades[5])}>
//                 Work with Jeffords
//               </button>
//             )}
//             {cps >= 400 && (
//               <button onClick={() => buyUpgrade(upgrades[6])}>
//                 Work with Captain Holt
//               </button>
//             )}
//             {cps >= 450 && (
//               <button onClick={() => buyUpgrade(upgrades[7])}>
//                 Work with Gina
//               </button>
//             )}

//             {cases >= 0 && <button onClick={addCase}>Complete a case</button>}
//             {cps >= 10 && (
//               <button onClick={() => buyUpgrade(upgrades[1])}>
//                 Work with Hitchcock
//               </button>
//             )}
//             {upgrades.map(
//               (upgrade, index) =>
//                 cps >= upgrade.cost && (
//                   <button key={index} onClick={() => buyUpgrade(upgrade)}>
//                     Work with {upgrade.name}
//                   </button>
//                 )
//             )}
//             {upgradeClicked && (
//               <div>
//                 <p>Image for {upgradeClicked} appears here</p>
//                 {/* Conditional rendering based on upgradeClicked */}
//                 {upgrades.map(
//                   (upgrade, index) =>
//                     upgradeClicked === upgrade.name && (
//                       <img key={index} src={upgrade.image} alt={upgrade.name} />
//                     )
//                 )}
//               </div>
//             )}
//             <p>I have {cases} cases</p>
//             <p>I have solved {cps} cases per second</p>
//             <h2>Upgrade Counts</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Upgrade Type</th>
//                   <th>Count</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(upgradeCounts).map(([upgradeType, count]) => (
//                   <tr key={upgradeType}>
//                     <td>{upgradeType}</td>
//                     <td>{count}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </main>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// {upgradeClicked && (
//   <div>
//     <p>Image for {upgradeClicked} appears here</p>
//     {upgradeClicked === "Scully" && (
//       <img src="scully_image_url" alt="Scully" />
//     )}
//     {upgradeClicked === {buyUpgrade(upgrades[0])}" && (
//       <img src="./assets/components/team/Scully.png" alt="Hitchcock" />
//     )
//     {upgradeClicked === "Boyle" && (
//       <img src="./assets/components/team/boyle.webp" alt="Boyle" />
//     )}
//     {upgradeClicked === "Diaz" && (
//       <img src="./assets/components/team/boyle.webp" alt="Diaz" />
//     )}
//     {upgradeClicked === "Santiago" && (
//       <img src="./assets/components/team/boyle.webp" alt="Santiago" />
//     )}
//     {upgradeClicked === "Peralta" && (
//       <img src="./assets/components/team/boyle.webp" alt="Peralta" />
//     )}
//     {upgradeClicked === "Holt" && (
//       <img src="./assets/components/team/boyle.webp" alt="Captain Holt" />
//     )}

//     {upgradeClicked === "Gina" && (
//       <img src="./assets/components/team/boyle.webp" alt="Gina" />
//     )}
// </div>
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={IntroPage} />
//         <Route path="/main-game.jsx">
//           <main>
//             <h1>Brooklyn 99 Clicker</h1>
//             <h2>Solve 50 cases to reveal your first partner</h2>

//             {cases >= 0 && <button onClick={addCase}>Complete a case</button>}
//             {cps >= 10 && (
//               <button onClick={() => buyUpgrade(upgrades[1])}>
//                 Work with Hitchcock
//               </button>
//             )}
//             {upgrades.map(
//               (upgrade, index) =>
//                 cps >= upgrade.cost && (
//                   <button key={index} onClick={() => buyUpgrade(upgrade)}>
//                     Work with {upgrade.name}
//                   </button>
//                 )
//             )}
//             {upgradeClicked && (
//               <div>
//                 <p>Image for {upgradeClicked} appears here</p>
//                 {/* Conditional rendering based on upgradeClicked */}
//                 {upgrades.map((upgrade, index) => (
//                   upgradeClicked === upgrade.name && (
//                     <img key={index} src={upgrade.image} alt={upgrade.name} />
//                   )
//                 ))}
//               </div>
//             )}
//             <p>I have {cases} cases</p>
//             <p>I have solved {cps} cases per second</p>
//             <h2>Upgrade Counts</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Upgrade Type</th>
//                   <th>Count</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(upgradeCounts).map(([upgradeType, count]) => (
//                   <tr key={upgradeType}>
//                     <td>{upgradeType}</td>
//                     <td>{count}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </main>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
