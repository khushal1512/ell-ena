import { FilterProps } from "../types";

export const HomePageFilters: FilterProps[] = [
  { name: "Newest", value: "newest" },
  { name: "Important", value: "important" },
  { name: "Frequent", value: "frequent" },
  { name: "Need Assignee", value: "Need Assignee" },
];

export const GlobalSearchFilters: FilterProps[] = [
  { name: "Task", value: "task" },
  { name: "Meeting", value: "answer" },
  { name: "Important", value: "user" },
  { name: "Tag", value: "tag" },
];
