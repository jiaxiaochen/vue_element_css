<template>
    <section class="order-container">
      <div><p class="orange">欢迎来到我的“贾”园</p></div>
    </section>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
    }
  },
  filters: {
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  p {
    display: inline;
    font-family: 'Lobster';
    text-align: center;
    font-size: 20vmin;
    line-height: 40vmin;
    color: #86adcc;
    cursor: pointer;
    
    &:hover {
        color: #86adcc;
    }
  }
  .orange {
    color: #ff5722;
    margin-top: 60px;
    font-size: 40px;
  }

.orange:hover {
    animation: orange 1.5s ease-in-out infinite alternate;
}
@keyframes orange {
    to {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722, 0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
        
    }
    from {
        filter: brightness(110%);
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722, 0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
  }
}

</style>
