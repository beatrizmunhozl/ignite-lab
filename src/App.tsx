import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`
interface lesson {
  id: 'string'
  title: 'string'
}

function App() {  
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then((res) => {console.log(res.data)})    
  // },[])

  const {data} = useQuery(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <>
      <h1 className="text-2xl ">Hello World!</h1>
      <ul>
        {data?.lessons.map((item: lesson) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
    
  )
}

export default App
