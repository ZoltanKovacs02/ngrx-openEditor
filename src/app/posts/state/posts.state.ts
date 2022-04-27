import { Post } from 'src/app/models/posts.models';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'title', description: 'some text' },
    { id: '2', title: 'title2', description: 'some text2' },
  ],
};
