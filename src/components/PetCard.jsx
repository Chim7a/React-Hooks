import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const PetCard = (props) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={props.image} />}
    >
      <Meta title={props.name} description="www.instagram.com" />
    </Card>
  );
};

export default PetCard;
