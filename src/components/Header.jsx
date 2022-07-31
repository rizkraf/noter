import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

function Header({ onSearch, query }) {
  return (
    <header className="sticky top-0 z-20 bg-white font-primary">
      <div className="mx-auto flex max-w-screen-md items-center justify-between border-b-2 border-black px-5 py-5 md:px-0">
        <h1 className="text-4xl font-bold">Noter</h1>
        <Search onSearch={onSearch} query={query} />
      </div>
    </header>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
  query: PropTypes.string,
};

export default Header;
