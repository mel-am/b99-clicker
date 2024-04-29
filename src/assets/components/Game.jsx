
import React from "react";
import Counter from "./Counters";
import { upgradesList } from "../../App";
export default function Game({ cases, cps, buyUpgrade }) {
  return (
    <div>
      <h1>Solve as many cases as you can!</h1>
      <Counter label="New Cases" value={cases} /> 
      <Counter label="Cases Per Second" value={cps} />

      <button onClick={() => buyUpgrade(upgradesList[0])}>
        Upgrade
 your partner</button>
    </div>
  );
}
// import Counter from "./Counters";
// import Button from "./Button";
// import { upgrades } from "App";

// export default function Game({ newCases, updatedCases }) {
//   return (
//     <>
//       <h1>Solve as many cases as you can!</h1>
//       buyUpgrade={buyUpgrade}
//       <Counter newCases={newCases} />
//       <Counter updatedCases={updatedCases} />
//       <Counter cps={cps} />
//       <Button buyUpgrade={buyUpgrade.Button} />
//     </>
//   );

