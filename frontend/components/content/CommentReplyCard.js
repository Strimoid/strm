import FormattedRelative from '../intl/FormattedRelative';

export default (props) => (
    <div className="pl-4 mt-4 w-full flex">
        <div className="flex-none">
            <img className="h-10 w-10" src={`https://strm.pl/i/avatars/${props.reply.user.avatar}`} />  
        </div>

        <div className="ml-4 flex-grow">
            <div className="mb-2 border-b">
                <span className="text-blue-600">{props.reply.user.name}</span>
                <span className="float-right">
                    <FormattedRelative date={props.reply.createdAt} />
                </span>
            </div>

            <p dangerouslySetInnerHTML={{__html: props.reply.text}}></p>
        </div>
    </div>
);
