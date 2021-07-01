<script>
export default {
  name: 'StringNotes',
  props: {
    notesArray: Array,
    colorArray: Array,
    stringNum: Number
  },
  render() {
    return (
    <div className="string-container"> 
        <div className="main-string"></div> 
        <div className="note-container">
          {this.notesArray.map((value, id) => (
            <div className="string-note" style={`background-color: ${this.colorArray[id]}`}>
                <input type="text" 
                       className="note-value" 
                       value={value} 
                       name={`string-${this.stringNum}-note`} 
                       key={id} 
                       maxlength="3"
                       autocomplete="off">
                </input>
            </div>
            ))}
        </div>
    </div>
    );
  },
};
</script>

<style scoped>
.string-note {
  background-color: white;
  border: 0.15vw solid black;
  width: 4.12%;
  height: 50px;
  border-radius: 50%;
  margin-right: 1.78%;
  float: left;
}

.note-value {
  border: none;
  width: 93%;
  height: 100%;
  text-align: center;
  font-size: 200%;
  font-family: 'Sarala';
  background-color: transparent;
}

.string-note[style="background-color: grey;"] .note-value {
  pointer-events: none;
}

.string-container {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
}

.main-string {
  width: 100%;
  height: 7%;
  background-color: black;
}

.note-container {
  position: absolute;
  width: 89vw;
  height: 9.25vh;
  display: flex;
  align-items: center;
  margin-left: 3.4vw;
  z-index: 3;
}
</style>