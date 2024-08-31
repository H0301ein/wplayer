import { useEffect, useState } from "react";
import srt2vtt from "./srt2vtt";

export default function Sub() {
  const [sub, setSub] = useState({});

  async function getSub() {
    const options = {
      types: [
        {
          description: "Sub Files",
          accept: {
            "text/plain": [".vtt", ".srt"],
          },
        },
      ],
    };

    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker(options);
    const fileData = await fileHandle.getFile();
    const txt = await fileData.text();
    const vtt = srt2vtt(txt);
    const subFile = new File([vtt], "sub.vtt", { type: "text/plain" });
    const subURL = URL.createObjectURL(subFile);
    setSub(subURL);
  }

  useEffect(() => {
    document.getElementById("setSub").src = sub;
  });

  return (
    <button
      className="text-white rounded-md bg-[#42275e] hover:bg-[#282c34] hover:rounded-lg hover:font-bold"
      onClick={getSub}
    >
      Sub
    </button>
  );
}
