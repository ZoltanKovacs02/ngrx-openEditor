import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';

export const ADD_POST_ACTION = '[posts page ] add post';
export const UPDATE_POST_ACTION = '[post page] update post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
