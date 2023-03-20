import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "./Nav";

const Layout = () => {
	return (
		<main>
			<section>
				<Nav />
			</section>
			<section>
				<Outlet />
			</section>
		</main>
	);
};

export default Layout;
