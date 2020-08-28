<template>
  <div class="rainbow-waves">
    <canvas :id="config.el"></canvas>
  </div>
</template>

<script>
export default {
  name: "rainbow-waves",
  props: {
    config: {
      type: Object,
      default() {
        return {
          el: "rainbow-waves",
          width: 1920,
          height: 1000,
          backgroundColor: "#fff",
          waves: [
            {
              color: "blue",
              jitter: 0.04,
              restore: 0.03,
              waveGap: 80,
              waterGap: 20,
              waveUps: 6,
              waveHeight: 0.45,
            },
          ],
        };
      },
    },
  },
  watch: {
    config: {
      handler() {
        this.$nextTick(() => {
          this.drow();
        });
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  beforeDestroy() {
    const { el, width, height } = this.config;
    let canvas = document.getElementById(el);
    let ctx = canvas.getContext("2d");
    ctx.rect(0, 0, width, height);
  },
  methods: {
    drow() {
      const { el, width, height, waves, backgroundColor } = this.config;
      let canvas = document.getElementById(el);
      let ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      let storms = waves.map(
        (
          { jitter, restore, waveGap, waterGap, waveUps } = {
            jitter: 0.04,
            restore: 0.03,
            waveGap: 80,
            waterGap: 20,
            waveUps: 6,
          }
        ) => {
          return function (x) {
            return (
              (Math.sin(x * waveUps + t * jitter) * waveGap + waterGap) *
              Math.sin(t * restore)
            );
          };
        }
      );
      let t = 0;
      loop();
      function loop() {
        ctx.clearRect(0, 0, width, height);
        ctx.rect(0, 0, width, height);
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        for (let i = 0; i < waves.length; i++) {
          let color = waves[i]["color"];
          let storm = storms[i];
          ctx.beginPath();
          for (let e = 0; e <= 1 + 0.01; e += 0.01) {
            ctx.lineTo(e * width, height * waves[i]["waveHeight"] + storm(e));
          }
          ctx.lineTo(width, height);
          ctx.lineTo(0, height);
          ctx.closePath();
          ctx.fillStyle = color;
          ctx.fill();
        }
        t++;
        requestAnimationFrame(loop);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.rainbow-waves {
  width: 100%;
  height: 100%;
}
</style>
