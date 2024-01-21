import PropsTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import Button from '../ui/Button';

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <li key={historyItem.id}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <p>
          Operations: {historyItem.inputs.a} {historyItem.operation}{' '}
          {historyItem.inputs.b} {' = '} {historyItem.result}
        </p>
        <div>
          <Button text={show ? 'Hide' : 'Show'} onClick={handleToggle} />
        </div>
      </div>
      {show && (
        <>
          <small>
            {historyItem.date.toLocaleDateString()}{' '}
            {historyItem.date.toLocaleTimeString()}
          </small>{' '}
          <br />
          <Button
            onClick={() => handleRestoreBtn(historyItem)}
            text='Restore'
            key={shortid.id}
            disabled={disabled} //FIXME: disabled after click
          />
        </>
      )}
    </li>
  );
};

HistoryItem.propsTypes = {
  historyItem: PropsTypes.shape({
    id: PropsTypes.string.isRequired,
    inputs: PropsTypes.shape({
      a: PropsTypes.number.isRequired,
      b: PropsTypes.number.isRequired,
    }).isRequired,
    operation: PropsTypes.string.isRequired,
    result: PropsTypes.number.isRequired,
    date: PropsTypes.object.isRequired,
  }),
  disabled: PropsTypes.bool.isRequired,
  handleRestoreBtn: PropsTypes.func.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
