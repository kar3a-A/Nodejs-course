



function usePost(url, todo) {

        
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
        })

}

export default usePost