## Summary

生成一个占位符图像的loader


## 用法示例

``` javascript
<template>
  <div>
    <img :src="placeholder" alt="Placeholder Image" v-if="!loaded" />
    <img :src="largeImage" alt="Large Image" v-else />
  </div>
</template>

<script>
const imagePlaceholder = require('createImgPlhLoader!./demo.png');
export default {
  data() {
    return {
      loaded: false,
      placeholder: imagePlaceholder,
      largeImage: 'path/to/large-image.jpg'
    };
  },
  mounted() {
    const image = new Image();
    image.src = this.largeImage;
    image.onload = () => {
      this.loaded = true;
    };
  }
};
</script>
```
