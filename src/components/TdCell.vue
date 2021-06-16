<template>
  <td v-bind:id="cellname+'drag'"
       class="tdStyle"
       v-bind:class="`grid-cols-${grids}`"
   ></td>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: 'TdCell',
  props: ['cellname', 'svgHtml'],
  data () {
    return {
      grids: 1
    }
  },
  mounted () {
    // eslint-disable-next-line camelcase
    var cell_drag = document.getElementById(this.cellname + 'drag')
    // eslint-disable-next-line no-new
    new Sortable(cell_drag, {
      group: {
        name: 'shared'
      },
      swap: true, // 交換
      swapThreshold: 1, // 選項:交換區域將佔據的目標百分比，介於0和1之間
      animation: 150, // 定義排序動畫時間,單位:number
      onAdd: function (/** Event */evt) { // 多組拖曳新增元素事件
        var count = cell_drag.getElementsByClassName('sticker').length

        console.log(count)

        if (count > 1) {
          this.grids = 2
        }
      }
    })

    // eslint-disable-next-line no-unused-vars
    var timer = setInterval(() => {
      var count = cell_drag.getElementsByClassName('sticker').length

      // console.log(count);

      if (count <= 1) {
        this.grids = 1
      }
    }, 500)
  }
}
</script>

<style lang="scss">
.tdStyle{
    border-left:2px #2f5a28 solid;
    border-top:2px #2f5a28 solid;
    padding:0px;
    margin:0px;
}

</style>
