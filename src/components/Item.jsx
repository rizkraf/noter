import React from "react";
import PropTypes from "prop-types";
import ItemBody from "./ItemBody";
import ItemFooter from "./ItemFooter";
import ItemHeader from "./ItemHeader";

function Item({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <>
      <div className="flex h-full flex-col rounded-lg border-2 border-black bg-white p-5">
        <ItemHeader title={title} createdAt={createdAt} />
        <ItemBody body={body} />
        <ItemFooter
          id={id}
          onDelete={onDelete}
          archived={archived}
          onArchive={onArchive}
        />
      </div>
    </>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
};

export default Item;
