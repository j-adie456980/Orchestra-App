<template>
  <div className="inner-body-container">
    <h2>Formating Guide</h2>
    <p>Notes  :  A, B, C, D, E, F, G   ( not case sensitive )</p>
    <p>Intervals  :  Numbers 1 - 4  ( fingerings are all half steps, overlapping fingerings use ' / '.  Example :  ' 3 / 1 ' )</p>
    <p>Accidentals  :  Sharp = #   |   Flat = b    (   A   |  A#  |  Ab  )</p>
    <div className="string-name-container">
      <div className="string-1-name">{{stringNames[0]}}</div>
      <div className="string-2-name">{{stringNames[1]}}</div>
      <div className="string-3-name">{{stringNames[2]}}</div>
      <div className="string-4-name">{{stringNames[3]}}</div>
    </div>
    <div className="neckboard-top">
      <div className="top-string-container"> <div className="top-string"></div> </div>
      <div className="top-string-container"> <div className="top-string"></div> </div>
      <div className="top-string-container"> <div className="top-string"></div> </div>
      <div className="top-string-container"> <div className="top-string"></div> </div>
    </div>
    <div className="neckboard-main-strings">
    <StringNotes :stringNum="1" :notesArray="stringNotes.string1" :colorArray="stringColors.string1"></StringNotes>
    <StringNotes :stringNum="2" :notesArray="stringNotes.string2" :colorArray="stringColors.string2"></StringNotes>
    <StringNotes :stringNum="3" :notesArray="stringNotes.string3" :colorArray="stringColors.string3"></StringNotes>
    <StringNotes :stringNum="4" :notesArray="stringNotes.string4" :colorArray="stringColors.string4"></StringNotes>
    </div>
    <div className="neckboard-main-frets">
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
      <div className="neckboard-fret"></div>
    </div>
    <div className="submit-container">
      <button className="submit-button" value="Submit" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import StringNotes from './StringNotes.vue'
import {gradeAnswers} from '../scripts/GradeAnswers'
import {getColors} from '../scripts/GetColors'
import {getNotes} from '../scripts/GetNotes'

export default {
  components: { StringNotes },
  name: 'InnerBody',
  props: {
    stringNames: Array,
    topNavState: Object
  },
  watch: {
    topNavState: {
      handler: function (vals) {
        this.stringNotes = getNotes(vals); 
        this.stringColors = getColors(vals);
      },
      deep: true,
    }
  },
  methods: {
    submit(){
      const answerArray = [...document.getElementsByClassName("note-value")].map(note => note.value);

      const lengths = [this.stringNotes.string1.length,
                       this.stringNotes.string2.length,
                       this.stringNotes.string3.length,
                       this.stringNotes.string4.length];

      const answerObject = {  // Slice array of answers into similarly structured object as stringNotes / stringColors
        string1: answerArray.slice(0,                                lengths[0]),
        string2: answerArray.slice(lengths[0],                       lengths[0]+lengths[1]),
        string3: answerArray.slice(lengths[0]+lengths[1],            lengths[0]+lengths[1]+lengths[2]),
        string4: answerArray.slice(lengths[0]+lengths[1]+lengths[2], lengths[0]+lengths[1]+lengths[2]+lengths[3])
      }
      let score;
      [score, this.stringNotes] = gradeAnswers(this.topNavState, this.stringColors, answerObject);
      this.$parent.updateScore(score);
    }
  },
  data() {
    const initialTopNav = {
        reviewType: 'Notes',
        instrument: 'Violin',
        key: 'C',
        accidental: 'Natural',
        mode: 'Major'
    }
    return {
      stringNotes: getNotes(initialTopNav),
      stringColors: getColors(initialTopNav),
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-body-container {
  height: 80.8vh;
  width: 100vw;
}

.inner-body-container h2 {
  font-family: 'Sarala';
  color: #264755;
  margin: 0 0;
  padding-top: 1.5vh;
  text-align: center;
  font-size: 1.4em;
  margin-left: 12vw;
  padding-bottom: 1vh;
  border-bottom: 2px solid #264755;
  width: 16vw;
}

.inner-body-container p {
  letter-spacing: 1px;
  font-family: 'Sarala';
  color: #264755;
  font-size: 1.2em;
  margin-left: 13vw;
  font-weight: bold;
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
}

.string-name-container {
  margin-top: 2vh;
  height: 37vh;
  width: 5vw;
  float: left;
  border: 2px solid white;
}

.string-1-name, .string-2-name, .string-3-name, .string-4-name {
  font-family: 'Sarala';
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.neckboard-top {
  margin-top: 2vh;
  float: left;
  width: 2.9vw;
  height: 37vh;
  border: 0.175vw solid black;
  background-color: #E3E3E3;
}

.top-string-container {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
}

.top-string {
  width: 100%;
  height: 7%;
  background-color: black;
}

.neckboard-main-strings {
  position: absolute;
  margin-top: 2vh;
  margin-left: 9vw;
  width: 89vw;
  height: 37vh;
  border: 0.175vw solid black;
  background-color: #E3E3E3;
}

.neckboard-main-frets {
  position: absolute;
  margin-top: 2vh;
  margin-left: 9vw;
  width: 89vw;
  height: 37vh;
  border: 0.175vw solid black;
  z-index: 1;
}

.neckboard-fret {
  float: left;
  width: 0.15vw;
  height: 101%;
  background-color: black;
  margin-left: 5.4vw;
}

.submit-container {
  width: 100%;
  height: 12%;
  margin-top: 23%;
  position: absolute;
  bottom: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button {
  color: white;
  background-color: #2E5566;
  cursor: pointer;
  border: 0.25vw solid black;
  font-family: 'Sarala';
  font-weight: bold;
  letter-spacing: 0.1vw;
  font-size: 250%;
  height: 80%;
  width: 20%;
}

.submit-button:active {
    -webkit-animation: pulse 1.5s infinite;
            animation: pulse 1.5s infinite;
}

</style>
