import React from "react";
import { Card, Tag, Button } from "antd";
const { Meta } = Card;

const PetCard = (props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          className="w-[300px] h-[300px] object-cover"
          alt="example"
          src={props.image}
        />
      }
    >
      <Meta
        title={props.name}
        description={
          <div className="grid gap-2">
            <h2>
              <strong>Location</strong> <span>{props.location}</span>
            </h2>
            <h2>
              <strong>Type</strong> <span>{props.type}</span>
            </h2>
            <h2>
              <strong>Race</strong> <span>{props.race}</span>
            </h2>
            <div>
              {" "}
              {props.isAdopted === true ? (
                <Tag color="red">Not available for adoption</Tag>
              ) : (
                <Tag color="green">Available for adoption</Tag>
              )}
            </div>
            <Button
              disabled={props.isAdopted === true ? true : false}
              onClick={() => props.handlePetAdoption(props.id)}
            >
              Adopt pet
            </Button>
          </div>
        }
      />
    </Card>
  );
};

export default PetCard;
