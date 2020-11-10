import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-geral" />
      <ChannelButton channelName="links" />
      <ChannelButton channelName="lembretes-avisos" />
      <ChannelButton channelName="shurimark" />
      <ChannelButton channelName="banco" />

    </Container>
  )
};

export default ChannelList;