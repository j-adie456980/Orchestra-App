<template>
  <div className="top-nav">
        <h1>Instrument Review</h1>
        <div id="dropdown" className="dropdown">
          <button className="dropbtn-review-type">{{topNav.reviewType}}</button>
          <div className="dropdown-content">
            <button className="review-type" @click="updateDropdown" value="Notes">Notes</button>
            <button className="review-type" @click="updateDropdown" value="Fingering">Fingering</button>
          </div>
        </div>
        <div className="spacing"></div>
        <div id="dropdown" className="dropdown">
          <button className="dropbtn-instrument">{{topNav.instrument}}</button>
          <div className="dropdown-content">
            <button className="instrument" @click="updateDropdown" value="Violin">Violin</button>
            <button className="instrument" @click="updateDropdown" value="Viola">Viola</button>
            <button className="instrument" @click="updateDropdown" value="Cello">Cello</button>
            <button className="instrument" @click="updateDropdown" value="Bass">Bass</button>
          </div>
        </div>
        <div className="spacing"></div>
        <div id="dropdown" className="dropdown">
          <button className="dropbtn-key">{{topNav.key}}</button>
          <div className="dropdown-content">
            <button className="key" @click="updateDropdown" value="A">A</button>
            <button className="key" @click="updateDropdown" value="B">B</button>
            <button className="key" @click="updateDropdown" value="C">C</button>
            <button className="key" @click="updateDropdown" value="D">D</button>
            <button className="key" @click="updateDropdown" value="E">E</button>
            <button className="key" @click="updateDropdown" value="F">F</button>
            <button className="key" @click="updateDropdown" value="G">G</button>
          </div>
        </div>
        <div className="spacing"></div>
        <div id="dropdown" className="dropdown">
          <button className="dropbtn-accidental">{{topNav.accidental}}</button>
          <div className="dropdown-content">
            <button className="accidental" @click="updateDropdown" value="Natural">Natural</button>
            <button className="accidental" @click="updateDropdown" value="Sharp">Sharp</button>
            <button className="accidental" @click="updateDropdown" value="Flat">Flat</button>
          </div>
        </div>
        <div className="spacing"></div>
        <div id="dropdown" className="dropdown">
          <button className="dropbtn-mode">{{topNav.mode}}</button>
          <div className="dropdown-content">
            <button className="mode" @click="updateDropdown" value="Major">Major</button>
            <button className="mode" @click="updateDropdown" value="Minor">Minor</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'TopNav',
  methods: {
    logData(){
      const x = document.getElementsByName("string-1-note");
      console.log(x.length);
    },
    updateDropdown(event){
      this.$parent.updateTopNavState(this.topNav);
      switch(event.target.className) {
        case 'review-type': this.topNav.reviewType = event.target.value; break;
        case 'instrument': this.topNav.instrument = event.target.value; this.updateStringNames(event.target.value); break;
        case 'key': this.topNav.key = event.target.value; break;
        case 'accidental': this.topNav.accidental = event.target.value; break;
        case 'mode': this.topNav.mode = event.target.value; break;
      }
      this.$parent.updateScore('0 / 0');
    },
    updateStringNames(name){
      console.log(name);
      switch(name) {
        case 'Violin': this.$parent.updateStrings(['E', 'A', 'D', 'G']); break;
        case 'Viola': this.$parent.updateStrings(['A', 'D', 'G', 'C']); break;
        case 'Cello': this.$parent.updateStrings(['A', 'D', 'G', 'C']); break;
        case 'Bass': this.$parent.updateStrings(['G', 'D', 'A', 'E']); break;
      }
    }
  },
  data() {
    return {
      topNav: {
        reviewType: 'Notes',
        instrument: 'Violin',
        key: 'C',
        accidental: 'Natural',
        mode: 'Major'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-nav {
    overflow: hidden;
    background-color: #2E5566;
    font-family: 'Sarala';
}
  
.top-nav h1 {
    float: left;
    color: white;
    text-align: center;
    padding: 4px 16px;
    padding-left: 7%;
    padding-right: 7%;
    text-decoration: none;
    font-size: 36px;
    margin-block-start: 0;
    margin-block-end: 0;
    letter-spacing: 1px;
}
  
.top-nav .dropdown {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 0px;
    height: fit-content;
}
  
.top-nav .spacing {
    float: left;
    width: 5%;
    height: 60px;
}
  
.dropbtn-review-type, .dropbtn-instrument, .dropbtn-key, .dropbtn-accidental, .dropbtn-mode {
    color: white;
    padding: 12px;
    padding-bottom: 8px;
    font-size: 130%;
    font-weight: bold;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
}
  
.dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 4;
}
  
.dropdown-content button {
    color: white;
    background-color: #2E5566;
    cursor: pointer;
    border: none;
    font-family: 'Sarala';
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropbtn-review-type {width: 10vw;}
.dropbtn-instrument {width: 8vw;}
.dropbtn-key {width: 4vw;}
.dropbtn-accidental {width: 8vw;}
.dropbtn-mode {width: 7vw;}

.dropbtn-review-type ~ .dropdown-content button {width: 10vw;}
.dropbtn-instrument ~ .dropdown-content button {width: 8vw;}
.dropbtn-key ~ .dropdown-content button {width: 4vw;}
.dropbtn-accidental ~ .dropdown-content button {width: 8vw;}
.dropbtn-mode ~ .dropdown-content button {width: 7vw;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn-review-type, 
.dropdown:hover .dropbtn-instrument, 
.dropdown:hover .dropbtn-key,
.dropdown:hover .dropbtn-accidental, 
.dropdown:hover .dropbtn-mode {color: #C4C4C4; border-bottom-color: #C4C4C4;}

.dropdown .dropdown-content button:hover{background-color: #d3d3d3; color: rgb(37, 37, 37);}

</style>
