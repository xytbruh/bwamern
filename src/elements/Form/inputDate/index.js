import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import formDate from "utils/formDate";
import iconCalendar from "assets/icons/ic_calendar.svg";

import React from "react";

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIshowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      value: value.selection,
      name: name,
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate.current && !refDate.current.contains(event.target)) {
      setIshowed(false);
    }
  };

  return <div></div>;
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
