import PropTypes from "prop-types";

const ItemListContainer = ({ vision }) => {
  return (
    <div>
      <p>{vision}</p>
    </div>
  );
};

ItemListContainer.propTypes = {
  vision: PropTypes.string.isRequired,
};

export default ItemListContainer;
