import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function ItemFooter({ id, archived, onDelete, onArchive }) {
  return (
    <div className="mt-auto flex w-full gap-3">
      <Button id={id} onDelete={onDelete}>
        Hapus
      </Button>
      <Button id={id} archived={archived} onArchive={onArchive}>
        {archived ? "Pindahkan" : "Arsipkan"}
      </Button>
    </div>
  );
}

ItemFooter.propTypes = {
  id: PropTypes.number,
  archived: PropTypes.bool,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
};

export default ItemFooter;
