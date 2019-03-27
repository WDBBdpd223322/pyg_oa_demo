<template>
  <el-pagination
    @size-change="size => this.$emit('sizeChange', size)"
    @current-change="page => this.$emit('pageChange', page)"
    :current-page="1"
    :page-sizes="[2, 4, 8, 10]"
    :page-size="2"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['total']
}
</script>

<style scoped>

</style>
