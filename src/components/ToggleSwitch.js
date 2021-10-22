import React from "react";
import styled from "styled-components";
import cx from "classnames";

const ToggleSwitchStyles = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    transition: 0.4s;
  }

  .slider::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: black;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: blue;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.rounded {
    border-radius: 34px;
  }
  .slider.rounded:before {
    border-radius: 50%;
  }
`;

export default function ToggleSwitch({ rounded = false, isToggled, onToggle }) {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  return (
    <ToggleSwitchStyles>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={sliderCX} />
      </label>
    </ToggleSwitchStyles>
  );
}
