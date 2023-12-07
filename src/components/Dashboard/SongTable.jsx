import React, { useEffect, useState, useRef } from "react";
import image from "../../assets/profile.jpg";
import Musicplayer from "./musicPlayer";
import "./SongTable.css";

function SongTable() {
  const [data, setData] = useState([
    {
      name: "Song 1",
      source: "Spotify",
      addedOn: "17/06/2021",
      link: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "Song 2",
      source: "YouTube",
      addedOn: "18/06/2021",
      link: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "Song 3",
      source: "Apple Music",
      addedOn: "19/06/2021",
      link: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "Song 4",
      source: "SoundCloud",
      addedOn: "20/06/2021",
      link: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "Song 5",
      source: "Spotify",
      addedOn: "21/06/2021",
      link: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "Song 6",
      source: "YouTube",
      addedOn: "22/06/2021",
      link: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
  ]);

 

  return (
    <div>
      <table
        className="songs-table"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr className="table-head-container">
            <th className="song-name">SONG NAME</th>
            <th className="source">SOURCE</th>
            <th className="added-on">ADDED ON</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((user, i) => (
            <tr
              key={i}
              className="table-row"
              style={{
                borderBottom:
                  "1px solid var(--conditional-divider, rgba(0, 0, 0, 0.06))",
                marginLeft: "1rem",
              }}
            >
              <td>
                <div
                  style={{
                    padding: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={image}
                    alt="profile"
                    style={{ width: "4.4rem", height: "4.4rem" }}
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.source}</td>
              <td>{user.addedOn}</td>
              <td>
                <div className="buttons-music">
                  <svg
                    onClick={() => handlePlay(user)}
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM15 29V11L29 20L15 29Z"
                      fill="#FDB927"
                    />
                  </svg>

                  <div className="delete">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.62476 1.87357H4.49976C4.56851 1.87357 4.62476 1.81732 4.62476 1.74857V1.87357H9.37476V1.74857C9.37476 1.81732 9.43101 1.87357 9.49976 1.87357H9.37476V2.99857H10.4998V1.74857C10.4998 1.197 10.0513 0.748566 9.49976 0.748566H4.49976C3.94819 0.748566 3.49976 1.197 3.49976 1.74857V2.99857H4.62476V1.87357ZM12.4998 2.99857H1.49976C1.22319 2.99857 0.999756 3.222 0.999756 3.49857V3.99857C0.999756 4.06732 1.05601 4.12357 1.12476 4.12357H2.06851L2.45444 12.2954C2.47944 12.8283 2.92007 13.2486 3.45288 13.2486H10.5466C11.081 13.2486 11.5201 12.8298 11.5451 12.2954L11.931 4.12357H12.8748C12.9435 4.12357 12.9998 4.06732 12.9998 3.99857V3.49857C12.9998 3.222 12.7763 2.99857 12.4998 2.99857ZM10.4263 12.1236H3.57319L3.19507 4.12357H10.8044L10.4263 12.1236Z"
                        fill="black"
                        fill-opacity="0.45"
                      />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          position: "fixed",
          bottom: 0,
        
          padding: "1rem",
        }}
      >
        <Musicplayer data={data} />
      </div>
    </div>
  );
}

export default SongTable;
