import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostState = createFeatureSelector<PostsState>('posts');
export const getPost = createSelector(getPostState, (state) => {
  console.log(state.posts);
  return state.posts;
});

/* export const getPostById =
  createSelector(
    getPostState, 
    (state, props) => {
      return state.posts.find((post) => post.id === props.id);
}); */
export const getPostById = (id: String ) =>
  createSelector(getPostState, (state) => {
    return state.posts.find((post) => post.id === id);
  });
