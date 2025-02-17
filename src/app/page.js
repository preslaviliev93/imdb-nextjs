import React from 'react'
import Results from '@/components/Results';


const API_KEY = process.env.API_KEY;
console.log(`FOUND API KEY ${API_KEY}`);
export default async function Home({searchParams}) {
  const params = await searchParams;
  const genre = params?.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
  }?api_key=${API_KEY}&language=en-US&page=1`);


  const data = await res.json();
  if(!data){
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log(data);

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
