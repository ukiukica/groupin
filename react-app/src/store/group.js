const VIEW_GROUPS = "stories/VIEW_GROUPS";

const view = (groups) => ({
  type: VIEW_GROUPS,
  groups,
});

export const viewGroups = () => async (dispatch) => {
  const res = await fetch("/api/groups/");

  if (res.ok) {
    const groups = await res.json();
    dispatch(view(groups));
  }
};

const groupsReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_GROUPS:
      const groups = {};
      action.groups.groups.forEach((group) => {
        groups[group.id] = group;
      });
      return { ...groups };
    default:
      return state;
  }
};

export default groupsReducer;
