import PropsTypes from 'prop-types';
import NumberField from '../ui/NumberFields';

const InputSection = ({ inputs, handleInputFields }) => {
  return (
    <div
      style={{
        width: '100%',
        padding: ' 0.5rem 1rem',
        backgroundColor: '#efefef',
        borderRadius: '0.15rem',
      }}
    >
      <h3
        style={{
          fontFamily: 'Arial',
          textAlign: 'center',
          fontSize: '1.5rem',
          color: '#121212',
          margin: 0,
          marginBottom: '1rem',
        }}
      >
        Inputs
      </h3>
      <div style={{ 
        display: 'flex',
        gap: '1rem',
        justifyContent: 'space-between'
      }}>
        <NumberField value={inputs.a} onChange={handleInputFields} name='a' />

        <NumberField value={inputs.b} onChange={handleInputFields} name='b' />
      </div>
    </div>
  );
};

InputSection.propsTypes = {
  inputs: PropsTypes.shape({
    a: PropsTypes.number.isRequired,
    b: PropsTypes.number.isRequired,
  }).isRequired,
  handleInputFields: PropsTypes.func.isRequired,
};

export default InputSection;
