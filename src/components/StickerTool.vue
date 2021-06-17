<template>
    <div class="flex" v-bind:id="stickerName + 'tool_drag_key'">
      <img
        v-bind:id="stickerName"
        class="sticker"
        v-if="sticker != ''"
        v-bind:src="sticker"
        @contextmenu.prevent="removeSticker($event, stickerName)"
      />
      <span v-else>A</span>
    </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: 'StickerTool',
  props: ['stickerName', 'sticker'],
  data () {
    return {
      tool_drag_key: null
    }
  },
  mounted () {
    var _this = this

    // eslint-disable-next-line camelcase
    var tool_drag = document.getElementById(this.stickerName + 'tool_drag_key')
    // eslint-disable-next-line camelcase
    this.tool_drag_key = tool_drag

    // eslint-disable-next-line no-new
    new Sortable(tool_drag, {
      group: {
        name: 'shared',
        pull: 'clone', // To clone: set pull to 'clone'
        put: false
      },
      animation: 150,
      onClone (evt) {
        var cloneEl = evt.clone
        // cloneEl.addEventListener("contextmenu",_this.removeSticker(cloneEl))
        cloneEl.addEventListener('contextmenu', (event) => {
          _this.removeSticker(event, _this.stickerName)
        })
      }
    })
  },
  methods: {
    removeSticker (event, id) {
      if (event) {
        event.preventDefault()
      }

      console.log("I'm in~")

      var el = event.srcElement
      var parentId = el.parentElement.id

      console.log(parentId)

      if (parentId !== `${id}tool_drag_key`) {
        el.remove()
      }
    }
  }
}
</script>
