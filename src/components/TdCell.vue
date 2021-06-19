<template>
  <td v-bind:id="tdKey.text+'drag'"
    :style="tdKey.styleList"
    @click="tdKey.checked = !tdKey.checked"
    ></td>
      <!-- :class="{ 'checked': tdKey.checked }" -->
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: 'TdCell',
  props: ['tdKey'],
  mounted () {
    // eslint-disable-next-line camelcase
    var cell_drag = document.getElementById(this.tdKey.text + 'drag')
    // eslint-disable-next-line no-new
    new Sortable(cell_drag, {
      group: {
        name: 'shared'
      },
      swap: true, // 交換
      swapThreshold: 1, // 選項:交換區域將佔據的目標百分比，介於0和1之間
      animation: 150 // 定義排序動畫時間,單位:number
    }, 500)
  }
}
</script>

<style lang="scss">

// .checked {
//   background-color: rgb(90, 25, 25);
// }

</style>
