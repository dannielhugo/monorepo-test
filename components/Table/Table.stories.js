
import { storiesOf } from '@storybook/vue'
import Table from './Table'

var items = [
  ['Yair Lamb', 'yair.lamb@email.com'],
  ['Leonardo Payne', 'leonardo.payne@email.com'],
  ['Carl Henson', 'carl.henson@email.com'],
  ['Jensen Combs', 'jensen.combs@email.com'],
  ['Amiah Burton', 'amiah.burton@email.com'],
  ['Yaretzi Mayo', 'yaretzi.mayo@email.com'],
  ['Kamren Huffman', 'kamren.huffman@email.com']
]

storiesOf('Table', module)
  .add('with 7 items', () => ({
    components: { Table },
    template:
      `
      <Table
        :items="items"
      />
    `,
    data: () => ({
      items
    })
  }))