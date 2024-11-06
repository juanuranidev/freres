import React, { useState, useEffect } from "react";
import "./MessageBar.scss";

const MessageBar = () => {
  const [showFirstMessage, setshowFirstMessage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => setshowFirstMessage(!showFirstMessage),
      5000
    );

    return () => clearInterval(timeout);
  }, [showFirstMessage]);

  return (
    <div className="message_bar">
      <p className={`message_bar_p ${showFirstMessage ? "show" : "hide"}`}>
        Envío Express (CABA) en menos de 48hs hábiles
      </p>
      <p className={`message_bar_p ${showFirstMessage ? "hide" : "show"}`}>
        Envíos gratis en compras mayores a $12.000
      </p>
    </div>
  );
};

export default MessageBar;
