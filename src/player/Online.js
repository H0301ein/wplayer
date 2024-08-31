import { useEffect, useState } from "react";

export default function Online() {
  const [url, setUrl] = useState({});

  async function getURL() {
    let link = await navigator.clipboard.readText();
    setUrl(link);
  }

  useEffect(() => {
    document.getElementById("plyr").src = url;
  });

  return (
    <button
      className="mt-5 text-white rounded-md bg-[#16504b] hover:bg-[#282c34] hover:rounded-lg hover:font-bold"
      onClick={getURL}
    >
      Online
    </button>
  );
}
