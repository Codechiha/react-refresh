import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/*      Using React Query to handle API fetching
 *Note: the variables used to use useQuery must be named how it is named below
 *Note: though data can be renamed by adding a : and to the right of it assign name
 *Note: useQuery({queryKey: [], queryFn: () => {}}) -> Docs say these must be named and assigned like this 
 *Note: By default, when this components window is not the focus, it will refetch automatically

 React Query Hooks have many options to change how you like it, for example
 In the App.js where the QueryClient is used

 const client = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  Doing this will change the auto refetch to false
*/
export const Query = () => {
    
    const minCeil = Math.ceil(1)
    const maxFloored = Math.floor(16)
    const id = Math.floor(Math.random() * (maxFloored - minCeil) + minCeil)

    const { data, isLoading, isError, refetch } = useQuery({queryKey:["cat"], queryFn: () => {
        return axios.get(`https://swapi.dev/api/people/${id}`).then((res) => res.data)
    } })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2> ERROR </h2>
    }

    return(
        <div>
            {console.log(data)}
            <h2>Name: {data?.name}</h2>
            <h2>Height: {data?.height} cm</h2>
            <h2>Hair: {data?.hair_color}</h2>
            <h2>Skin Color: {data?.skin_color}</h2>

            <button onClick={refetch}>Another Character</button>
        </div>
    )
}