import React, {useReducer, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import ArticleCard from '../../utils/articleCard';

import {  useDispatch,useSelector } from 'react-redux';
import { getArticles } from '../../store/actions/article_actions'

const initialSort = {
  sortBy: "_id",
  order: "desc",
  limit: 8,
  skip: 0            
}

const Home = () => {

  const [sort,setSort] = useReducer((state,newState)=>({...state,...newState}),initialSort)

  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch();

  useEffect(()=>{
    // trigger this only on first render
    if(articles && !articles.articles){
      //dispatch
      dispatch(getArticles(initialSort))
    }
  },[dispatch, articles])

  return(
    <div>
      <div>
        CARROUSEL
      </div>
      <Grid container spacing={2} className="article_card">
        <Grid key ={1} item xs={12} s={6} lg={3}>
          <ArticleCard />
        </Grid>
        <Grid key ={1} item xs={12} s={6} lg={3}>
          <ArticleCard />
        </Grid>
        <Grid key ={1} item xs={12} s={6} lg={3}>
          <ArticleCard />
        </Grid>
        <Grid key ={1} item xs={12} s={6} lg={3}>
          <ArticleCard />
        </Grid>
      </Grid> 

    </div>
  )
}

export default Home;