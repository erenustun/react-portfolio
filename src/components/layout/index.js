import React from 'react'
import Header from './header'
import Footer from './footer'

/** Mainwrapper for website structure */
export default function Layout({ children }) {
	return (
		<div className="bg-gray-800 text-gray-100">
			<Header />
			<div className="container px-3">
				{children}
			</div>
			<Footer />
		</div>
	)
}