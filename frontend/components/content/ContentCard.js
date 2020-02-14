import Link from 'next/link'
import FormattedRelative from '../intl/FormattedRelative'

export default (props) => (
    <div className="rounded overflow-hidden shadow-sm my-2 px-4 py-6 flex w-full text-sm">
        <div className="flex-none flex flex-col mr-4">
            <button className="rounded w-16 h-8 border hover:bg-green-100">
                 {props.content.uv} <span className="font-black text-green-700">￪</span>
            </button>
            <button className="rounded w-16 h-8 border mt-2 hover:bg-red-100">
            {props.content.dv} <span className="font-black text-red-700">￬</span>
            </button> 
        </div>
        
        {props.content.thumbnail && 
            <div className="flex-none mr-4">
                <img className="w-32 h-24 rounded" src={`https://strm.pl/i/200x150/thumbnails/${props.content.thumbnail}`} />  
            </div>
        }
        
        <div>
            <h3 className="text-base font-medium">
                <Link href={`/c/${props.content.id}`}>
                    <a>{props.content.title}</a>
                </Link>
            </h3>
            <p className="text-gray-700 mt-2">{props.content.description}</p>
            <p className="text-gray-600 mt-2 text-xs">
                {props.content.comments_count} comments | added <FormattedRelative date={props.content.createdAt} />
            </p>
        </div>
    </div>
);
