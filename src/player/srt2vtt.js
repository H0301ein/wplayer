export default function srt2vtt(srt) {
  let vtt = "";
  srt = srt.replace(/\r+/g, "");
  const list = srt.split("\n");
  for (let i = 0; i < list.length; i++) {
    const m = list[i].match(
      /(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/,
    );
    if (m) {
      vtt +=
        m[1] +
        ":" +
        m[2] +
        ":" +
        m[3] +
        "." +
        m[4] +
        " --> " +
        m[5] +
        ":" +
        m[6] +
        ":" +
        m[7] +
        "." +
        m[8] +
        "\n";
    } else {
      vtt += list[i] + "\n";
    }
  }
  vtt = "WEBVTT\n\n\n" + vtt;
  vtt = vtt.replace(/^\s+|\s+$/g, "");
  return vtt;
}
