import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
