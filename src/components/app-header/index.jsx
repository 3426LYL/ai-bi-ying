import { memo, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppHeaderWrapper, TopWrapper } from "./style";
import HeaderRight from "./c-cpns/header-right";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import { useScrollPosition } from "@/hooks";
import classNames from "classnames";
import { useSelector } from "react-redux";

export default memo(function () {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig,
  }));
  const isFixed = headerConfig.topFixed;

  const { wScrollY } = useScrollPosition();
  const [prevPosition, setPrevPosition] = useState(0);
  const isTop = wScrollY === 0 && headerConfig.topSearch;
  const themeColor = isTop ? "#fff" : "#222";
  const [isSearch, setIsSearch] = useState(true);

  if (!isTop && prevPosition === 0 && isSearch) {
    setIsSearch(false);
    setPrevPosition(wScrollY);
  }
  if (Math.abs(wScrollY - prevPosition) >= 50 && isSearch) {
    setIsSearch(false);
  }

  function searchBarClick(isSearch) {
    setIsSearch(isSearch);
    setPrevPosition(wScrollY);
  }

  const dynamicClasses = classNames({
    notTop: !isTop,
    notsearch: !isSearch && !isTop,
    fixed: isFixed,
  });
  useEffect(() => {
    console.log(isSearch);
  }, [isSearch]);
  return (
    <AppHeaderWrapper className="notTop notsearch fixed">
      <ThemeProvider theme={{ color: themeColor }}>
        <TopWrapper>
          <HeaderLeft />
          <HeaderCenter
            isSearch={false}
            isTop={isTop}
            searchBarClick={searchBarClick}
          />
          <HeaderRight isTop={isTop} />
        </TopWrapper>
        <div className="search-area"></div>
        {!isTop && <div className="header-bottom"></div>}
      </ThemeProvider>
    </AppHeaderWrapper>
  );
});
