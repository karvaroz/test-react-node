import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ChallengeOne from "./pages/ChallengeOne";
import ChallengeTwo from "./pages/ChallengeTwo";
import ChallengeThree from "./pages/ChallengeThree";
import ChallengeFour from "./pages/ChallengeFour";
import ChallengeFive from "./pages/ChallengeFive";

import Layout from "./components/Layout";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/challenge1",
				element: <ChallengeOne />,
			},
			{
				path: "/challenge2",
				element: <ChallengeTwo />,
			},
			{
				path: "/challenge3",
				element: <ChallengeThree />,
			},
			{
				path: "/challenge4",
				element: <ChallengeFour />,
			},
			{
				path: "/challenge5",
				element: <ChallengeFive />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
