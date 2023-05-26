import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "/src/components/Navbar/Navbar"
import Experiences from "./components/Experiences/Experiences"
import Hero from "./components/Hero/Hero"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Navbar />
		<Hero />
		<Experiences />
	</React.StrictMode>
)
