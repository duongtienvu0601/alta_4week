import { memo, useState } from "react";
import type { FC } from "react";
import classes from "./SearchBox.module.css";

interface SearchBoxProps {
  className?: string;
}

const SearchBox: FC<SearchBoxProps> = memo(function SearchBox(props = {}) {
  const [searchTerm, setSearchTerm] = useState(""); // State lưu trữ kết quả tìm kiếm

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchTerm(event.currentTarget.value); // Lưu kết quả tìm kiếm vào state
    }
  };

  return (
    <div className={classes.main}>
      <a className={classes.text}>Từ khóa</a>
      <input
        className={classes.input}
        type="text"
        placeholder="Nhập từ khóa"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
});

export default SearchBox;
