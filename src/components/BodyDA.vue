/* eslint-disable no-mixed-spaces-and-tabs */
<template>
 <div class="container">
          <div class="row office-worker">
            <div class="col-sm-8 col-md-8 col-lg-6">
              <img src="../../public/images/carousel/woker.png" alt="" />
            </div>
            <div class="col-sm-4 -col-md-4 col-lg-6">
              <div class="worker_word">
                <div class="worker_One">
                  <h6>大家好，我是一名</h6>
                  <h3>上班族</h3>
                </div>
                <div class="worker_Two">
                  <h6>工作是內勤辦公室，</h6>
                  <h3>需長期久坐。</h3>
                </div>
                <div class="worker_Third">
                  <h6>需要長時間動腦，</h6>
                  <h3>常吃美食抒壓。</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- 身體分析 -->
          <div class="row second-pic">
            <div v-for="item in groupItems"
                 :key="item.id"
                 class="col-lg-4" >
              <img :src=item.image />
              <h2 >{{item.text}}</h2>
            </div>

          </div>
          <div class="workerBtn">
            <a href="#sec3">檢視自己健康</a>
            <a href="#sec5">改善飲食大作戰</a>
          </div>
        </div>

</template>
<script>
export default {
  data () {
    return {
      groupItems: [
        {
          id: 1,
          image: require('../../public/images/carousel/s_1.jpg'),
          text: '久坐族',
          word: '代謝變差、增加胰島素、腿部肌肉萎縮'
        },
        {
          id: 2,
          image: require('../../public/images/carousel/s_2.jpg'),
          text: '肉食族',
          word: '增加腎的負擔'
        },
        {
          id: 3,
          image: require('../../public/images/carousel/s_3.jpg'),
          text: '膽固醇過高',
          word: '引發血管阻塞，可能引起腦中風'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.office-worker {
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
 img {
  width: 500px;
  }
}
.worker_word {
  padding-left: 30px;
  .worker_One {
  transform: rotate(351deg);
  padding-bottom: 10px;
  h6{display: inline-block; color: #2f5a28;}
  h3{
    height: 40px;
    background-color: #2f5a28;
    border-radius: 10px;
    color: white;
    display: inline-block;
    }
  }
.worker_Two {
  padding-bottom: 10px;
  h6{display: inline-block;color: #2f5a28;}
  h3{
    height: 40px;
    background-color: #2f5a28;
    border-radius: 10px;
    color: white;
    display: inline-block;
  }
}
.worker_Third {
  transform: rotate(7deg);
  h6{display: inline-block; color: #2f5a28;}
  h3{
  height: 40px;
  background-color: #2f5a28;
  border-radius: 10px;
  color: white;
  display: inline-block;
  }
}
}

@media (max-width: 576px) {
  .office-worker {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
img {width: 200px;}
  }

  .worker_word{
     .worker_One {
    transform: rotate(359deg);
    padding-bottom: 5px;
    }
    .worker_Two {
    padding-bottom: 5px;
    }
    .worker_Third {
    transform: rotate(0deg);
    }
   }
}

@media (max-width: 768px) {
  .office-worker {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
img{width: 300px;}
  }
 .worker_word{
    .worker_One {
    transform: rotate(359deg);
    padding-bottom: 5px;
    }
    .worker_Two {
    padding-bottom: 5px;
    }
  .worker_Third {
    transform: rotate(0deg);
    }
  }
}

.second-pic {
  text-align: center;
  /* 族群圖片 */
  div img {
  padding-bottom: 20px;
  border-radius: 100%;
  }
}

/* Btn */
.workerBtn {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
  margin: 0px 10px;
  padding: 10px 20px;
  background-color: #2f5a28;
  text-decoration: none;
  width: 200px;
  text-align: center;
  color: white;
  border-radius: 30px;
  }
}
</style>
