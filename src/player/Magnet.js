import WebTorrent from "webtorrent/dist/webtorrent.min.js";

export default function Magnet() {
  async function getMagnet() {
    let link = await navigator.clipboard.readText();

    const client = new WebTorrent();
    navigator.serviceWorker.register("./sw.js");
    const controller = await navigator.serviceWorker.ready;
    client.createServer({ controller });

    client.add(link, (torrent) => {
      const file = torrent.files.find((file) => {
        return file.name.endsWith(".mp4");
      });
      file.streamTo(document.getElementById("plyr"));
    });
  }

  return (
    <button
      className="mt-5 text-white rounded-md bg-[#42275e] hover:bg-[#282c34] hover:rounded-lg hover:font-bold"
      onClick={getMagnet}
    >
      Magnet
    </button>
  );
}
