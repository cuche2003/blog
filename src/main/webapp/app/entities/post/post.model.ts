import { IUser } from 'app/entities/user/user.model';
import { IBlog } from 'app/entities/blog/blog.model';

export interface IPost {
  id: number;
  title?: string | null;
  content?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
  blog?: Pick<IBlog, 'id' | 'name'> | null;
}

export type NewPost = Omit<IPost, 'id'> & { id: null };
