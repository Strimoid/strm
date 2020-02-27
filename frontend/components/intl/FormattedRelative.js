import { selectUnit } from '@formatjs/intl-utils'
import { FormattedRelativeTime } from 'react-intl'

export default ({ date }) => {
  const { value, unit } = selectUnit(new Date(date))

  return <FormattedRelativeTime value={value} unit={unit} />
}
