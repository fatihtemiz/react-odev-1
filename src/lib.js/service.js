import axios from 'axios'

export default const getData = async (id) => {
    await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(data => console.log(data))
}