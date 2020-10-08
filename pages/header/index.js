import Link from 'next/link'

export default function Header() {
    return (
        <header className="d-flex px-5">
            <div className="shape"></div>
            <div className="flex-grow-1">
                <img src="assets/images/logo-white.png" height={100} className="mt-4"/>
            </div>
            <ul className="d-flex flex-row flex-grow-1 align-items-center justify-content-end">
                <li>
                    <Link href="/about">
                        <a className="nav-url">About</a>
                    </Link>
                </li>

                <li>
                    <Link href="/projects">
                        <a className="nav-url">Projects</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a className="nav-url">Contact</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
