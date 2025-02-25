import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 22355,
  title: 'legal',
  content: '../fake-data/blob/hipster.txt',
};

export const sampleWithPartialData: IPost = {
  id: 5816,
  title: 'and',
  content: '../fake-data/blob/hipster.txt',
};

export const sampleWithFullData: IPost = {
  id: 15743,
  title: 'silently',
  content: '../fake-data/blob/hipster.txt',
};

export const sampleWithNewData: NewPost = {
  title: 'via',
  content: '../fake-data/blob/hipster.txt',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
