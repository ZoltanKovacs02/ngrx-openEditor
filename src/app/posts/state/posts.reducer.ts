import { Action, createReducer } from "@ngrx/store";
import { initialState, PostsState } from "./posts.state";

const _postReducer=createReducer(initialState)

export function postsReducer(state: PostsState | undefined, action: Action) {
  return _postReducer(state, action);
}
