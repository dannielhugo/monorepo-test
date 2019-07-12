import { storiesOf } from '@storybook/vue'
import TableRow from './TableRow'

storiesOf('TableRow', module)
  .add('normal', () => ({
    components: { TableRow },
    template:
      `
      <TableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))