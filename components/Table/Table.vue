<template>
  <table>
     <tr>
      <th
        v-for="(label, index) in header"
        :key="index"
      >
        {{ label }}
      </th>
    </tr>
    <TableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
    />
  </table>
</template>

<script>
import TableRow from '@monorepotest/table-row/TableRow'
export default {
  name: 'Table',
  props: {
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    TableRow
  }
}
</script>

<style>
th {
  text-align: left;
  padding: 8px;
  font-size: 13px;
  color: #8d8d92;
}
</style>