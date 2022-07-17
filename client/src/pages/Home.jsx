import React,{useState,useEffect} from 'react';
import HeadNav from '../components/HeadNav.jsx';
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core';
import MediaCard from '../components/MediaCard.jsx';
const Home = ()=>{
    const [movie,setMovie]=useState([]);
   
    const movieapi={
        key:'d98d9ec83d01ed0457725059cf6f58ef',
        url:'https://api.themoviedb.org/3/',
        image:'https://image.tmdb.org/t/p/w500'
    }
    useEffect(()=>{
        const getMovie=async ()=>{
            try{
                let response=await fetch('https://api.themoviedb.org/3/tv/popular?api_key=d98d9ec83d01ed0457725059cf6f58ef&page=1');
                response=await response.json();
                response=await response.results;
                setMovie(response);
            }
            catch(err){
                setMovie(err);
            }
        }
            getMovie();
    },[])

    return (
        <>
        <HeadNav/>
        <Box mt={16}>
            <Grid container sx={{mx:'auto'}} spacing={2}>
            <Grid 
                item
                lg={12}
                sm={12}
                md={12}
                >         
            <Typography 
            variant='h4'>Trending</Typography>
                </Grid>
            <Grid>
            </Grid>
                    {
                    movie.map(movies=><Grid 
                        item 
                        lg={3}
                        md={8}
                        xs={12} 
                        sm={8}><MediaCard 
                        maxWidth={340} 
                        images={movieapi.image+movies.poster_path} 
                        title={movies.name}
                        body={movies.overview}
                          /></Grid>)
                            }
            </Grid>
        </Box>
        </>
    	)
}
export default Home;