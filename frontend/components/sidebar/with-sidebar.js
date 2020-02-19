import GroupsSidebar from './groups'

export default (props) => {
    return (
        <div className="px-4 flex flex-col-reverse lg:flex-row">
            <div className="flex-none lg:w-1/5 lg:py-4">
                <GroupsSidebar />
            </div>
            <div className="flex-grow">
                {props.children}
            </div>
    </div>
    )
}
