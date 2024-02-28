function CustomButton({ onclick, children }) {
  return <button onClick={onclick}>{children}</button>;
}

function GameStartFunc({ gameName }) {
  function handleFunc() {
    alert(`${gameName} Started`);
  }

  return <CustomButton onclick={handleFunc}>Start {gameName}</CustomButton>;
}

export default GameStartFunc;
