export default function Upgrades({ buyUpgrade, upgrades, cps, upgradeClicked }) {
  return (
    <section className="upgrade">
      <h2>Upgrade your partner</h2>
      <ul>
        {upgrades.map(
          (upgrade, index) =>
            cases >= upgrade.cost &&
            cps >= upgrade.cost && (
              <li key={index}>
                <button onClick={() => buyUpgrade(upgrade)}>
                  Work with {upgrade.name}
                </button>
              </li>
            )
        )}
      </ul>
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
    </section>
  );
}
// export default function Upgrades({ buyUpgrade, Upgrade, upgrades }) {
//     return (
//         <section className="upgrade">
//             <h2>Upgrade your partner</h2>
//             <ul>
//                 {upgrades.map(
//                     (upgrade, index) =>
//                         cps >= upgrade.cost && (
//                             <button key={index} onClick={() => buyUpgrade(upgrade)}>
//                                 Work with {upgrade.name}
//                             </button>
//                         )
//                 )}
//                 {upgradeClicked && (
//                     <div>
//                         <p>Image for {upgradeClicked} appears here</p>
//                         {upgrades.map(
//                             (upgrade, index) =>
//                                 upgradeClicked === upgrade.name && (
//                                     <img key={index} src={upgrade.image} alt={upgrade.name} />
//                                 )
//                         )}
//                     </div>
//                 )};
//         </section>
