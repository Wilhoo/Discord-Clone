import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n} 
            author="Wilho"
            date="09/11/2020"
            content="Seja melhor do que seu eu de ontem"
          />
        ))} 

        <ChannelMessage 
          author="Brad"
          date="09/11/2020"
          content={
            <>
              <Mention>@Wilho</Mention>, falaaaa dev! 
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;