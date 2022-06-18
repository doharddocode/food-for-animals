import React, { useState } from "react";

import Label from "../label";

import './food-item.sass'

const FullInfo = ({ fullInfo = [] }) => {
  const content = fullInfo.map((info, index) => {
    const {
      strong = null,
      label = null,
    } = info;

    return (
      <div key={ index } className="food-item__full-info-item">
        <strong>{ strong }</strong> { label }
      </div>
    );
  });

  return (
    <div className="food-item__full-info">{ content }</div>
  );
}

const FoodCaption = ({ isSelected, caption, disabled, foodDescription }) => {
  if (disabled) {
    return <div className="food-item__caption">Печалька, { foodDescription } закончился.</div>;
  }

  if (!isSelected) {
    return <div className="food-item__caption">Чего сидишь? Порадуй котэ, <span role="link">купи.</span></div>;
  }

  return <div className="food-item__caption">{ caption }</div>;
}

const setClassList = (isSelected, disabled) => {
  const classListBase = ['food-item-wrapper'];

  if (isSelected) {
    classListBase.push('selected')
  }
  if (disabled) {
    classListBase.push('disabled');
  }

  return classListBase.join(' ');
}

const FoodItem = ({ props }) => {
  const {
    topInfo = '',
    title = '',
    description = '',
    fullInfo = '',
    label = {},
    caption = '',
    disabled = false,
  } = props;
  const [isSelected, selectedUpdate] = useState(false);

  return(
    <div
      className={ setClassList(isSelected, disabled) }
      onClick={ () => selectedUpdate( isSelected => !isSelected )}>
      <div className="food-item">
        <div className="food-item__inner">
          <div className="food-item__top-info">{ topInfo }</div>
          <h2 className="food-item__title">{ title }</h2>
          <div className="food-item__description">{ description }</div>
          <FullInfo fullInfo={ fullInfo } />
          <Label label={ label } />
        </div>
      </div>
      <FoodCaption
        isSelected={ isSelected }
        caption={ caption }
        foodDescription={ description }
        disabled={ disabled }
      />
    </div>
  );
}

export default FoodItem;