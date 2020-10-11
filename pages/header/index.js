import Link from 'next/link'

export default function Header() {
    return (
        <header className="d-flex align-items-center">
            <div className="d-flex w-75 mx-auto align-items-center">
                <h1 className="flex-grow-1 text-text-left m-0 mb-4 display-4 text-white">Eren.develops</h1>
                <ul className="d-flex flex-grow-1 mt-2 align-items-center justify-content-end">
                    <li>
                        <Link href="/about">
                            <a className="nav-url mr-5 text-white">About</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/projects">
                            <a className="nav-url mr-5 text-white">Projects</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a className="nav-url text-white mr-3">Contact</a>
                        </Link>
                    </li>
                    <div className="divider"></div>
                    <a href="https://github.com/erenustun/" className="mb-2 ml-2" target="_blank"><img src="/assets/images/github.png" height={26} /></a>
                    <a href="https://www.linkedin.com/in/eren-üstün-957807153" className="ml-3 mb-2" target="_blank"><img src="/assets/images/linkedin.png" height={26} /></a>
                </ul>
            </div>
        </header>
    )
}
