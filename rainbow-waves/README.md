# rainbow-waves

rainbow-waves is a wave component on Vue.

## Install

```sh
npm i --save rainbow-waves
```

```js
import RainbowWaves from 'rainbow-waves'
```

## Usage

```html
<rainbow-waves :config="config"></rainbow-waves>
```

## Options

```js
config = {
  // canvas id
  el: {
    type:String,
    default:"rainbow-waves"
  },
  // canvas width
  width:{
    type:Number,
    default:1920
  },
  // canvas height
  height:{
    type:Number,
    default:1080
  },
  // canvas background-color
  backgroundColor:{
    type:String,
    default:"#fff"
  },
  // waves
  waves::{
    type:Array,
    default(){
      return [
        {
          // wave color
          color: {
            type:String,
            default:"blue"
          },
          // Wave jitter frequency 波浪抖动频率
          // [0.01 - 1.00]
          jitter:{
            type:Number,
            default:0.04
          },
          // Peak difference recovery speed 波峰差值恢复速度
          //  [0.01 - 1.00]
          restore:{
            type:Number,
            default:0.03
          },
          // Wave peak difference 波浪峰差
          waveGap:{
            type:Number,
            default:80
          },
          // Water level difference 水位差
          waterGap:{
            type:Number,
            default:20
          },
          // Wave frequency 波浪起伏频率
          // [1 - 10]
          waveUps:{
            type:Number,
            default:6
          },
          // Wave ratio in canvas height 波浪占比
          // [0.01 - 1]
          waveHeight:{
            type:Number,
            default:0.45
          },
        }
      ];
    }
  },
}

```

## LICENSE

MIT