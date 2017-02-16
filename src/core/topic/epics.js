import {topicActions} from './actions';
import {fetchTopics, fetchTopic} from '../../core/api';

export function loadTopics(action$) {
  return action$.ofType(topicActions.LOAD_TOPICS)
    .switchMap(({payload}) => {
      return fetchTopics(payload)
    })
}

export function loadTopic(action$) {
  return action$.ofType(topicActions.LOAD_TOPIC)
    .switchMap(({payload}) => {
      return fetchTopic(payload)
    })
}

export const topicEpics = [
  loadTopics,
  loadTopic
];