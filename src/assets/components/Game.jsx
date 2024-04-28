import MainCounter from "./Counters";
import Button from "./badge";

export default function mainGame({ newCases, updatedCases }) {
  return (
    <>
      <h1>Solve as many cases as you can!</h1>
      <MainCounter newCases={newCases} />
      <MainCounter updatedCases={updatedCases} />
      <Button buyUpgrade={buyUpgrade} />
    </>
  );
}
