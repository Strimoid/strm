export default (props) => (
    <div className="rounded overflow-hidden shadow-sm my-2 px-4 py-6 flex w-full text-sm">
        {props.content.thumbnail && 
            <div className="flex-none">
                <img className="w-32 h-24 rounded" src={`https://strm.pl/i/200x150/thumbnails/${props.content.thumbnail}`} />  
            </div>
        }
        
        <div class="ml-4">
            <h3 class="text-base font-medium">{props.content.title}</h3>
            <p class="text-gray-700 mt-2">{props.content.description}</p>
        </div>
    </div>
);
