import Link from 'next/link'

export default function Header() {
    return (
        <header className="d-flex align-items-center">
            <div className="d-flex w-75 mx-auto align-items-center">
                <h1 className="flex-grow-1 text-text-left m-0 mb-4 display-4 text-white">Eren.develops</h1>
                <ul className="d-flex flex-grow-1 mt-2 justify-content-end">
                    <li>
                        <Link href="/about">
                            <a className="nav-url mr-5">About</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/projects">
                            <a className="nav-url mr-5">Projects</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a className="nav-url">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
