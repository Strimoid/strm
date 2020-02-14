import CommentReplyCard from "./CommentReplyCard";
import FormattedRelative from '../intl/FormattedRelative';

export default (props) => (
    <div className="overflow-hidden px-4 py-4 flex w-full text-sm">
        <div className="flex-none">
            <img className="h-10 w-10" src={`https://strm.pl/i/avatars/${props.comment.user.avatar}`} />  
        </div>

        <div className="ml-4 flex-grow">
            <div className="mb-2 border-b">
                <span className="text-blue-600">{props.comment.user.name}</span>
                <span className="float-right" alt={props.comment.createdAt}>
                    <FormattedRelative date={props.comment.createdAt} />
                </span>
            </div>

            <p dangerouslySetInnerHTML={{__html: props.comment.text}}></p>

            {props.comment.replies.map(reply => (
                <CommentReplyCard reply={reply} />
            ))}
        </div>
    </div>
);
