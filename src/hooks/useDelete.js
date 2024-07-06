


function useDelete(url, todoID) {
    fetch(`${url}/${todoID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoID)
      })
}


export default useDelete