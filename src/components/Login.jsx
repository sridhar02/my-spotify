import React from "react";
import queryString from "query-string";

import styles from "./login.module.css";

const redirectUri =
  process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000";
const clientId = process.env.REACT_APP_CLIENT_ID;

const paramas = {
  client_id: clientId,
  response_type: "code",
  redirect_uri: redirectUri,
  scope:
    "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
};

const spotifyParams = queryString.stringify(paramas);
const AUTH_URL = `https://accounts.spotify.com/authorize?${spotifyParams}`;

export default function Login() {
  return (
    <div className={styles.container}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <a href={AUTH_URL} className={styles.button}>
        Login with Spotify
      </a>
    </div>
  );
}
