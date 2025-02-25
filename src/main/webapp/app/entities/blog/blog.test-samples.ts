import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 11276,
  name: 'for crazy',
  description: 'medium atop roadway',
};

export const sampleWithPartialData: IBlog = {
  id: 18988,
  name: 'wherever hm',
  description: 'paralyse where but',
};

export const sampleWithFullData: IBlog = {
  id: 31362,
  name: 'cow nor',
  description: 'negligible blah strictly',
};

export const sampleWithNewData: NewBlog = {
  name: 'ew vengeful',
  description: 'gently unnaturally generously',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
