import EntryReplyCard from "./EntryReplyCard";
import FormattedRelative from '../intl/FormattedRelative';

export default (props) => (
    <div className="rounded overflow-hidden shadow-md my-2 px-4 py-6 flex w-full text-sm">
        <div className="flex-none">
            <img className="h-10 w-10" src={`https://strm.pl/i/avatars/${props.entry.user.avatar}`} />  
        </div>

        <div className="ml-4 flex-grow">
            <div className="mb-2 border-b">
                <span className="text-blue-600">{props.entry.user.name}</span>
                <span className="ml-4 text-gray-500">{props.entry.group.urlname}</span>
                <span className="float-right" alt={props.entry.createdAt}>
                    <FormattedRelative date={props.entry.createdAt} />
                </span>
            </div>

            <p dangerouslySetInnerHTML={{__html: props.entry.text}}></p>

            {props.entry.replies.map(reply => (
                <EntryReplyCard reply={reply} />
            ))}
        </div>
    </div>
);
