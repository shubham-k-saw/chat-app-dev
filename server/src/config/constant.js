// socket events ke naam apne hisab se badal sakte ho
const SOCKET_EVENTS = {
  MESSAGE: 'sendMessage',
  DELETE_MESSAGE: 'deleteMessage',
  FRIEND_REQUEST: 'sendFriendRequest',
  DELETE_FRIEND_REQUEST: 'deleteFriendRequest',
  ACCEPT_FRIEND_REQUEST: 'acceptFriendRequest',
  REJECT_FRIEND_REQUEST: 'rejectFriendRequest'
}

const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 20,
  USERNAME_MIN_LENGTH: 5,
  USERNAME_MAX_LENGTH: 20,
  FIRSTNAME_MIN_LENGTH: 3,
  LASTNAME_MIN_LENGTH: 2,
}

export { SOCKET_EVENTS, VALIDATION }