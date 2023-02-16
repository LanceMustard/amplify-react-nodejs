import { tags } from '../mockData'

export const getTags = (group) => {
    return tags.filter(x => x.group === group)

}