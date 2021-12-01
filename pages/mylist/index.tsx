import MylistLibrary, { Mylist } from 'components/mylistList';
import { NextPage } from 'next';
import React from 'react';

const a: Mylist[] = [
  {
    id: 'hogehoge',
    title: 'アル中カラカラ',
    createdAt: 1578573,
  },
  {
    id: 'hogehoge',
    title: 'アル中カラカラ',
    createdAt: 1578573,
  },
];

const MylistListPage: NextPage = () => {
  return <MylistLibrary mylists={a} />;
};

export default MylistListPage;
