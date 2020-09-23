import { useSelector } from "react-redux";

export default function useGetDoList() {
  const data = useSelector(({ store }: any) => ({
    toDoList: store.toDoList,
  }));

  return data;
}

export function useGetActiveTab() {
  const data = useSelector(({ store }: any) => ({
    activeTab: store.activeTab,
  }));

  return data;
}
