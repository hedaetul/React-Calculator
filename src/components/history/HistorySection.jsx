import PropsTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistorySection = ({ histories, restoredHistory, handleRestoreBtn }) => {
  return (
    <div>
      <p>History</p>
      {histories.length === 0 ? (
        <p>
          <small>There is no history</small>
        </p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              disabled={restoredHistory === historyItem.id}
              historyItem={historyItem}
              handleRestoreBtn={handleRestoreBtn}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

HistorySection.propsTypes = {
  histories: PropsTypes.arrayOf({}),
  restoredHistory: PropsTypes.number.isRequired,
  handleRestoreBtn: PropsTypes.func.isRequired,
};

export default HistorySection;
