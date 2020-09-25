const ADD_CONTENT = "store/ADD_CONTENT" as const;
const DELETE_CONTENT = "store/DELETE_CONTENT" as const;
const CHANGE_TAB = "store/CHANGE_TAB" as const;
const CHECK_TOGGLE = "store/CHECK_TOGGLE" as const;

interface ToDo {
  text: string;
  checked: boolean;
}

interface InitialState {
  toDoList: ToDo[];
  activeTab: string;
}

type contentAction = AddContent | DeleteContent | ChangeTab | CheckToggle;

interface AddContent {
  type: typeof ADD_CONTENT;
  toDoList: ToDo[];
}

interface DeleteContent {
  type: typeof DELETE_CONTENT;
  toDoList: ToDo[];
}

interface ChangeTab {
  type: typeof CHANGE_TAB;
  activeTab: string;
}

interface CheckToggle {
  type: typeof CHECK_TOGGLE;
  toDoList: ToDo[];
}

export const addContent = (toDoList: ToDo[]) => ({
  type: ADD_CONTENT,
  toDoList,
});

export const deleteContent = (toDoList: ToDo[]) => ({
  type: DELETE_CONTENT,
  toDoList,
});

export const changeTab = (activeTab: string) => ({
  type: CHANGE_TAB,
  activeTab,
});

export const checkToggle = (toDoList: ToDo[]) => ({
  type: CHECK_TOGGLE,
  toDoList,
});

const INITIAL_STATE: InitialState = {
  toDoList: [],
  activeTab: "toDo",
};

export default function store(state = INITIAL_STATE, action: contentAction) {
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
