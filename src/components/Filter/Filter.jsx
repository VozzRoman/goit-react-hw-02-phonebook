import { FildName, EnterName } from 'components/ContactForm/ContactFormStyle';
import PropTypes from 'prop-types';
export const Filter = ({ onChange, value }) => {
  return (
    <FildName>
      Find contacts
      <EnterName
        placeholder="Find contacts"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FildName>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
