import {selectUnit} from '@formatjs/intl-utils';
import {FormattedRelativeTime} from 'react-intl';

export default (props) => {
    const {value, unit} = selectUnit(new Date(props.date));

    return <FormattedRelativeTime value={value} unit={unit} />;
  };
  