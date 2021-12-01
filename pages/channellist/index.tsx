import ChannellistList, { Channellist } from 'components/channellistList';
import { NextPage } from 'next';
import React from 'react';

const c: Channellist[] = [
  {
    id: 'hogehoge',
    title: 'アル中カラカラ',
    createdAt: 1637281,
  },
  {
    id: 'hogehoge',
    title: 'アル中カラカラ',
    createdAt: 1637281,
  },
];

const ChannellistPage: NextPage = () => {
  return (
    <>
      <ChannellistList channellists={c} />
    </>
  );
};

export default ChannellistPage;
