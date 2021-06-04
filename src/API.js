export const getUsers = async pageToken => {
  const msgData = await (
    await fetch(`http://message-list.appspot.com/messages?pageToken=${pageToken}`)
  ).json();
  return msgData;
};