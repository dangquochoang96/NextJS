import { useRouter } from 'next/router'
import axios from 'axios'

export default function DetailMovie({movie}) {
  const router = useRouter()
  const { id } = router.query
  console.log(movie)
  return (
    <>
      <h1>ID phim : {id}</h1>
    </>
  )
}

export const getDataMoviesById = async (id = 0) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=vi&append_to_response=videos,images&include_image_language=vi,null`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? response.data : {};
  return result;
}

export async function getServerSideProps({ query }) {
  const id = await query.id;
  const result = await getDataMoviesById(id)
  return {
    props: {
      movie: result,
    },
  }
}