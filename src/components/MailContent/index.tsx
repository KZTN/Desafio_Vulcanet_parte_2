import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ChatsSelectMail } from "../../store/modules/Chats/actions";
import { Chat, Message } from "../../store/modules/Chats/types";

import Incoming from "../Incoming";
import OutGoing from "../OutGoing";

import "./styles.scss";
export default function MailContent() {
  const mailIsSelected = useSelector((state: any) => state.Chats.selectedMail);

  const [mailSelected]: Chat[] = useSelector(
    (state: any) => state.Chats.chats
  ).filter((mail: Chat) => mail.id === mailIsSelected);

  return (
    <section id="mailcontent">
      {mailSelected.messages.map((message: Message) => (
        <div key={message.timestamp}>
          {message.type === "incoming" ? (
            <Incoming
              body={message.body}
              seen={message.seen}
              timestamp={message.timestamp}
            />
          ) : (
            <OutGoing
              body={message.body}
              seen={message.seen}
              timestamp={message.timestamp}
            />
          )}
        </div>
      ))}
      <div className="blank-space" />
    </section>
  );
}
