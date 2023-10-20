import { useEffect, useState } from "react";

export default function Local() {
  const [mov, setMov] = useState({});

  async function getMov() {
    const options = {
      types: [
        {
          description: "Movie,Audio Files",
          accept: {
            "video/*": [".mkv", ".webm", ".mp4", ".mp3"],
          },
        },
      ],
    };

    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker(options);
    const fileData = URL.createObjectURL(await fileHandle.getFile());
    setMov(fileData);
  }

  useEffect(() => {
    document.getElementById("plyr").src = mov;
  });

  return (
    <button
      className="mt-5 text-white rounded-md bg-[#16504b] hover:bg-[#282c34] hover:rounded-lg hover:font-bold"
      onClick={getMov}
    >
      Local
    </button>
  );
}
