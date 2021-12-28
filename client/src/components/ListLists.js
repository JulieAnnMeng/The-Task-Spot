import Lists from './Lists';

function ListLists({lists, handleTaskPatch, handleListDelete}) {
    let listList = [];

    // if(!lists){
    //     return <h2>loading</h2>
    // } else {
    // listList = lists.map((list)=>{
    //     return(
    //         <Lists 
    //         key={list.id}
    //         id={list.id}
    //         title={list.title}
    //         description={list.description}
    //         tasks={list.tasks}
            
    //         handleTaskPatch={handleTaskPatch}
    //         handleListDelete={handleListDelete}
    //         />
    //     )
    // })}

    return (
        <div className="listsDiv">
            <p>Lists will show up here</p>
            {/* {listList} */}
        </div>
    );
}

export default ListLists;