import React from "react";
import { Header } from "./";

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		//
		<>
			<Header />
			{children}
		</>
	);
};

// :::*
export interface LayoutProps {
	children: React.ReactNode;
	//
}

export default Layout;
