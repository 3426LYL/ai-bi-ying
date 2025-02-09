import React, { memo, useState } from "react";
import { PictureWrapper } from "./style";
import PictrueBrowser from "@/base-ui/picture-browser";

const PictureViewer = memo((props) => {
  const { picturesData } = props;
  const [ShowBrowser, setShowBrowser] = useState(false);

  const genRightPicItem = (item) => {
    return (
      <div className="item" key={item}>
        <img src={item} alt="" />
        <div className="cover"></div>
      </div>
    );
  };
  const handleCloseBrowser = () => {
    setShowBrowser(false);
  };
  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={picturesData?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {picturesData?.slice(1, 5).map(genRightPicItem)}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {ShowBrowser && (
        <PictrueBrowser
          pictureUrls={picturesData}
          onClose={handleCloseBrowser}
        />
      )}
    </PictureWrapper>
  );
});

export default PictureViewer;
