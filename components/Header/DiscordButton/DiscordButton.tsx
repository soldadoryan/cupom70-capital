import { RiDiscordFill } from "react-icons/ri";
import servers from "./servers.json";
import s from "./styles.module.css";

export function DiscordButton() {
  return (
    <div className={s.wrap}>
      <button className={s.discordButton}>
        <RiDiscordFill /> Discord
      </button>
      <ul className={s.discordList}>
        {servers.map((server) => (
          <li key={server.title}>
            <a href="">
              <RiDiscordFill />
              {server.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
