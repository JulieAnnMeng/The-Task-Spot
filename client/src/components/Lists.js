import ListsCard from './ListsCard';

function Lists({lists, getLists}) {
    
    let listList = lists.map((list)=>{
            return(
                <ListsCard 
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    description={list.description}
                    tasks={list.tasks}
                    getLists={getLists}
                />
            )})

    return (
        <div className="listsDiv">
            {listList}
        </div>
    );
}

export default Lists;