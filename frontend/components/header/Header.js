import { useQuery } from '@apollo/react-hooks';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link'
import gql from "graphql-tag";

const GET_ME = gql`
    {
        me {
            name
        }
    }
`

function Header({ token }) {
    const { loading, error, data } = useQuery(GET_ME);

    return (
        <header className="w-full bg-blue-600 text-blue-500 px-4 pt-4 pb-0 mb-4 border-box">
            <Link href="/">
                <a className="bg-white px-4 py-2 mr-4">
                    <FormattedMessage id="header.contents" defaultMessage="Contents" />
                </a>
            </Link>
            <Link href="/entries">
                <a className="bg-white px-4 py-2">
                    <FormattedMessage id="header.entries" defaultMessage="Entries" />
                </a>
            </Link>
    
            { data
                ? <a className="bg-white px-4 py-2 float-right">{data.me.name}</a>
                : <Link href="/sign-in"><a className="bg-white px-4 py-2 float-right"><FormattedMessage id="header.sign-in" defaultMessage="Sign in" /></a></Link>
            }
            
        </header>
    )
}

export default Header
