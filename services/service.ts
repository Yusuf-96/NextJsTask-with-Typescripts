export const getAllTask = (): Promise<Response> => {
  return fetch("https://noteappfeature.herokuapp.com/api/todo/");
};

export const deleteSingleTask = (id: number | undefined) => {
  return fetch(`https://noteappfeature.herokuapp.com/api/todo/${id}/`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
