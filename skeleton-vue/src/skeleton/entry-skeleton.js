// skeleton.js
import Vue from 'vue'
import listSkeleton from './listSkeleton'
import detailSkeleton from './detailSkeleton'

// 这里对应的id就是plugins里面不同页面对应的skeletonId
export default new Vue({
  components: {
    listSkeleton,
    detailSkeleton
  },
  template: `
    <div style="height: 100%">
      <listSkeleton id="listSkeleton" style="display:none;" />
      <detailSkeleton id="detailSkeleton" style="display:none;" />
    </div>
  `
});
