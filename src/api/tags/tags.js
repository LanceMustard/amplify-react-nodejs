import { tags } from '../mockData';

export const getTags = (group) => tags.filter((x) => x.group === group);
