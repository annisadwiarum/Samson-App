import { useState } from "react";

const useEmail = () => {
  const [state, setState] = useState<string>();

  async function handleSubmit(data: any) {
    data.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("ready");
    }, 1500);
  }

  return { handleSubmit, state };
};

export { useEmail };
