import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App"

function Overlay() {
  return (
    <>
      <App />
      <div className="dot" />
    </>
  )
}

createRoot(document.getElementById("root")).render(<Overlay />)
