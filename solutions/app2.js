const user = {
  firstName: "John",
  lastName: "Doe",
};

const {
  lastName: l = "unknown",
  firstName: f = "unknown",
  job: j = "unknown",
} = user;

export { f, l, j };
