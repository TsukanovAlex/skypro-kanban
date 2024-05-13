export const topicStyles = {
  _purple: {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  _orange: {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  _green: {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  },
  _gray: {
    backgroundColor: "#94a6be",
    color: "#ffffff",
  },
};

export const topicWithColors = [
  { topic: "Web Design", color: "_orange" },
  { topic: "Research", color: "_green" },
  { topic: "Copywriting", color: "_purple" },
]; 

export const paths = {
  MAIN: "/",
  CARD: "/card/:id",
  LOGIN: "/login",
  EXIT: "/exit",
  REGISTER: "/register",
  NEW_CARD: "/new-card",
  NOT_FOUND: "*",
};
