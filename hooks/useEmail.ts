import { useState } from "react";

const useEmail = () => {
  const [state, setState] = useState<string>();

  async function handleSubmit(data: any) {
    data.preventDefault();
    setState("loading");

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        username: 'Anna'
      })
    })

    setTimeout(() => {
      setState("ready");
    }, 1500);
  }

  return { handleSubmit, state };
};

export { useEmail };
