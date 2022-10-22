import EVENTS from './constants/tracking/events';
import CANCELLATION_TYPES from './constants/tracking/cancellation-types';
import EXCHANGES from './constants/rabbitmq/exchanges';
import QUEUES from './constants/rabbitmq/queues';
import ROUTING_KEYS from './constants/rabbitmq/routing-keys';

const TRACKING = {
  EVENTS,
  CANCELLATION_TYPES,
};

const RABBIT_MQ = {
  EXCHANGES,
  QUEUES,
  ROUTING_KEYS,
};

export {
  TRACKING,
  RABBIT_MQ
};
