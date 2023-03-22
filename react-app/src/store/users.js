const VIEW_USERS = "users/VIEW_USERS";

const view = (users) => ({
  type: VIEW_USERS,
  users,
});

export const viewUsers = () => async (dispatch) => {
  const response = await fetch("/api/users/");

  if (response.ok) {
    const users = await response.json();
    dispatch(view(users));
  }
};
// payload = {userId: 2}

// Create thunk to add group to pinned
  export const pinGroup = (payload) => async (dispatch) => {
    const response = await fetch(
      `/api/users/${payload.userId}/pin-group/${payload.groupId}`,
      // {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      // }
    );

    if (response.ok) {
      const users = await response.json();
      dispatch(view(users));
    }
  }; 

// Create thunk to remove group from pinned

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_USERS:
      const normalizedUsers = {};
      action.users.users.forEach((user) => {
        normalizedUsers[user.id] = user;
      });
      return { ...normalizedUsers };
    default:
      return state;
  }
};

export default usersReducer;
