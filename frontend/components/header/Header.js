import Link from 'next/link'

export default (props) => (
    <header className="w-full bg-blue-600 text-blue-500 px-4 pt-4 pb-0 mb-4 border-box">
        <Link href="/">
            <a className="bg-white px-4 py-2 mr-4">Contents</a>
        </Link>
        <Link href="/entries">
            <a className="bg-white px-4 py-2">Entries</a>
        </Link>
    </header>
)
