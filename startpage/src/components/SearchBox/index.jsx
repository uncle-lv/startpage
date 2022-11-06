import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-extreme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style/index.css";
import { searchSuggest } from "../../config/api";

const EngineSelect = function (props) {
  const { options, onSwitch } = props;

  const selectEngine = (option) => {
    onSwitch(option);
  };

  return (
    <div className="engine-select-wrapper">
      {options.map((option) => {
        return (
          <img
            key={option.id}
            className="engine-icon"
            src={option.icon}
            onClick={(e) => {
              selectEngine(option);
            }}
          ></img>
        );
      })}
    </div>
  );
};

const SearchBox = function (props) {
  const { options } = props;

  const [selectedEngine, setSelectedEngine] = useState(options[0]);

  const switchEngine = (engine) => {
    if (engine.id !== selectedEngine.id) {
      setSelectedEngine(engine);
    }
  };

  const [suggestResult, setSuggestResult] = useState([]);
  const getSearchSuggests = (keyword,suggest_type) => {
    fetch(`${searchSuggest}?s=${keyword}&type=${suggest_type}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        const suggestions = response.data;
        if (suggestions.length <= 8) {
          setSuggestResult(suggestions);
        } else {
          setSuggestResult(suggestions.slice(0, 8));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [keyword, setKeyword] = useState("");

  const keywordChange = (e) => {
    setKeyword(e.target.value);
    getSearchSuggests(e.target.value,selectedEngine.suggest_id);
  };

  const search = (keyword) => {
    if (keyword === "") {
      return;
    }

    window.open(selectedEngine.href + keyword);
  };

  const suggestItems = suggestResult.map((item) => (
    <div className="suggest-value"><a href={selectedEngine.href + item} target="_blank">{item}</a></div>
  ));

  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <Tippy
          content={
            <EngineSelect
              options={options}
              onSwitch={switchEngine}
            ></EngineSelect>
          }
          allowHTML={true}
          interactive={true}
          trigger="click"
          placement="bottom"
          arrow={false}
          theme="blur"
          animation="scale-extreme"
        >
          <div className="prefix-icon">
            <img src={selectedEngine.icon}></img>
          </div>
        </Tippy>
        <input
          type="text"
          value={keyword}
          onChange={keywordChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(keyword);
            }
          }}
        ></input>

        <div
          className="suffix-icon"
          onClick={(e) => {
            search(keyword);
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </div>
        <div className="search-suggest-list" hidden={suggestResult.length == 0}>
          {suggestItems}
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { SearchBox };
