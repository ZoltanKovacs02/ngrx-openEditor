import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getpostState = createFeatureSelector<PostsState>('posts');
export const getPost = createSelector(getpostState, (state) => {
  return state.posts;
});
