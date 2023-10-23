import WebTorrent from "webtorrent/dist/webtorrent.min.js";

export default function Torrent() {
  async function getTorrent() {
    const options = {
      types: [
        {
          description: "Torrent",
          accept: {
            "file/*": [".torrent"],
          },
        },
      ],
    };

    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker(options);
    const fileData = await fileHandle.getFile();
    const file = new Uint8Array(await fileData.arrayBuffer());

    const client = new WebTorrent();
    navigator.serviceWorker.register("./sw.js", { scope: "./" });
    const controller = await navigator.serviceWorker.ready;
    client.createServer({ controller });

    const opt = {
      announce: [
      ],
    };
    client.add(file, opt, (torrent) => {
      const wt = torrent.files.find((file) => {
        if (file.name.endsWith(".mp4")) {
          return file.name.endsWith(".mp4");
        } else file.name.endsWith(".mkv");
        {
          return file.name.endsWith(".mkv");
        }
      });
      wt.streamTo(document.getElementById("plyr"));
    });
  }

  return (
    <button
      className="mt-5 text-white rounded-md bg-[#16504b] hover:bg-[#282c34] hover:rounded-lg hover:font-bold"
      onClick={getTorrent}
    >
      Torrent
    </button>
  );
}
