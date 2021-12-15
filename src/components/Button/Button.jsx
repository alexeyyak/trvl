import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn--mobile">
      <button
        //   $-Проверь класс, проверь размер
        className={`btn ${checkButtonStyle} ${checkbuttonSize}`}
        // а зачем включи это
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

// includes(value) – возвращает true, если в массиве имеется
// элемент value, в противном случае false. find/filter(func) –
// фильтрует элементы через функцию и отдаёт первое/все
// значения, при прохождении которых через функцию возвращается
// true
