

export default function useUpdate(url, todo) {
    fetch(`${url}/${todo.id}`, {
      // Patch or put should be use base on 
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
}