import { Message } from "@intility/bifrost-react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Message state="warning">Coming soon: Dinner planner</Message>
    </div>
  );
}

export default App;
