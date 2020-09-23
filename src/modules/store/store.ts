const ADD_CONTENT = "store/ADD_CONTENT" as const;
const DELETE_CONTENT = "store/DELETE_CONTENT" as const;
const CHANGE_TAB = "store/CHANGE_TAB" as const;
const CHECK_TOGGLE = "store/CHECK_TOGGLE" as const;

interface initialProps {
  toDoList: any;
  activeTab: string;
}

type contentAction =
  | ReturnType<typeof addContent>
  | ReturnType<typeof deleteContent>
  | ReturnType<typeof changeTab>
  | ReturnType<typeof checkToggle>;

export const addContent = (toDoList: any) => ({
  type: ADD_CONTENT,
  toDoList,
});

export const deleteContent = (toDoList: any) => ({
  type: DELETE_CONTENT,
  toDoList,
});

export const changeTab = (activeTab: string) => ({
  type: CHANGE_TAB,
  activeTab,
});

export const checkToggle = (toDoList: any) => ({
  type: CHECK_TOGGLE,
  toDoList,
});

const INITIAL_STATE: initialProps = {
  toDoList: [],
  activeTab: "toDo",
};

export default function store(
  state: initialProps = INITIAL_STATE,
  action: contentAction
) {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        toDoList: action.toDoList,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        toDoList: action.toDoList,
      };
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
    case CHECK_TOGGLE:
      return {
        ...state,
        toDoList: action.toDoList,
      };
    default:
      return state;
  }
}
