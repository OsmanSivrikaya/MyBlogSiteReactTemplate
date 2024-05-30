import Section from "./routes/section";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={5}>
        <Section />
      </SnackbarProvider>
    </div>
  );
}

export default App;
