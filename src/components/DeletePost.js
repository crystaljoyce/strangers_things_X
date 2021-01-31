


const Delete = ( { posts, setPosts, title, setTitle, description, setDescription } ) => {
    

    
    return <> 
    <h3> 
        Edit
    </h3>
    <form   
        onSubmit={handleDelete}>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}>
                    
                </input>
        </form>
        </>
}