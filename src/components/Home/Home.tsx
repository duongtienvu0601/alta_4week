import { memo } from "react";
import type { FC } from "react";
import classes from "./Home.module.css";
import { Menubar } from "../MenuBar/Menubar";
interface HomeProps {
  className?: string;
}

const Home: FC<HomeProps> = memo(function Home(props = {}) {
  return (
    <div className={classes.main}>
      <Menubar />
    </div>
  );
});

export default Home;
