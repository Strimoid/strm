export default (props) => (
    <div>
        <textarea className="w-full border rounded p-4" placeholder="Add new entry..."></textarea>
        
        <div className="flex justify-end mt-1">
            <input type="text" className="border rounded px-4 mr-4" placeholder="Group" />
            <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white float-right">Add</button>
        </div>
    </div>
)
