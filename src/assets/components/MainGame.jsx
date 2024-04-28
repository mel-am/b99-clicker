
import MainCounter from "./Counter";

export default function mainGame({ newCases, updatedCases }) {
  return (
    <>
      <MainCounter newCases={newCases} />
      <Button updatedCases={updatedCases} />
    </>
  );
}
