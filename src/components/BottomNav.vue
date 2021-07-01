<template>
<div className="bottom-nav">
    <h1>Enter Name : </h1>
    <input type="text" maxlength="30">
    <div className="score-label" style="font-family: Sarala;">Score : </div>
    <div className="score-value"><canvas id="canvas"></canvas></div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    score: String
  },
  methods: {
    updateScore(score){
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");  
      ctx.clearRect(0, 0, 400, 200);  
      ctx.font = "bold 400% Verdana, sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(`${score}`, c.width/2, c.height/2);
    }
  },
  watch: {
    score: {
      handler: function (score) {
        this.updateScore(score);
      },
      deep: true,
    }
  },
  mounted() {
    this.updateScore(this.score);
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-nav {
  width: 100%;
  height: 10.5vh;
  background-color: #2E5566;
}

.bottom-nav h1{
  float: left;
  color: white;
  font-family: 'Sarala';
  width: 18%;
  height: 100%;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-top: 1%;
}

.bottom-nav input {
  float: left;
  color: white;
  background-color: transparent;
  border: none;
  border-bottom: 0.175vw solid white;
  width: 30%;
  height: 50%;
  margin-top: 1.2%;
  font-size: 200%;
  font-weight: bold;
  text-align: left;
  padding-left: 1%;
}

.bottom-nav input:focus { outline: none; }

.score-label {
  color: white;
  font-size: 250%;
  font-weight: bold;
  height: 100%;
  width: 10%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
}

.score-value {
  height: 100%;
  width: 10%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  margin-top: 1%;
}

canvas {
  width: 120%;
  height: 120%;
}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>
