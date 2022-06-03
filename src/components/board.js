import React from "react";
import Card from "./card";
import CornerCard from "./cornerCard";

import './styles/board.css';

export default function Board(props) {
  return (
    <div className="wrapper">
      <div className="layer">
        <CornerCard />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
      </div>
      <div className="layer" style={{'rotate': '90deg'}}>
        <CornerCard />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
      </div>
      <div className="layer" style={{'rotate': '180deg'}}>
        <CornerCard />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
      </div>
      <div className="layer" style={{'rotate': '270deg'}}>
        <CornerCard />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
        <Card title={'Test'} price={'100'} />
      </div>
    </div>
  )
}