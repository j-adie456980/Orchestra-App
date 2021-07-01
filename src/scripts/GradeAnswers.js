export function gradeAnswers(topNav, colors, studentAnswers) {
    //console.log(topNav, colors, studentAnswers);
    const correctAnswers = getCorrectAnswers(topNav);
    let score = 0;
    const lengths = [studentAnswers.string1.length,
                     studentAnswers.string2.length,
                     studentAnswers.string3.length,
                     studentAnswers.string4.length];
    const totalLength = lengths[0] + lengths[1] + lengths[2] + lengths[3];
    let i = 0;
    let numGrey = 0;
    while(i < 4) {
        let j = 0;
        while(j < lengths[i]) {
            if (colors[`string${i+1}`][j] !== 'grey') {
                if (studentAnswers[`string${i+1}`][j].charAt(0).toUpperCase() + // only first character is capitalized  ex. "Bb"
                    studentAnswers[`string${i+1}`][j].slice(1) === correctAnswers[`string${i+1}`][j]) {  
                    colors[`string${i+1}`][j] = '#b6f0c6';
                    score +=1;
                }
                else {
                    colors[`string${i+1}`][j] = '#f0b6b6';
                }
            }
            else {
                numGrey += 1;
            }
            j+=1;
        }
        i += 1;
    }
    //console.log(correctAnswers, score);
    //console.log(numGrey);
    return [`${score} / ${totalLength-numGrey}`, studentAnswers];
}

function getCorrectAnswers(topNav){
    if (topNav.key === 'A' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', '', '', '', '', '', 'E', '', 'F#', '', 'G#', 'A'],
                        string3: ['', 'E', '', 'F#', '', 'G#', 'A', '', 'B', '', 'C#', 'D'],
                        string4: ['', 'A', '', 'B', '', 'C#', 'D']
                    }
                }
                else {  // Fingerings
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', '', '', '', '', '', '1', '', '2', '', '3', '4'],
                        string3: ['', '1', '', '2', '', '3', '4/1', '', '2', '', '3', '4'],
                        string4: ['', '1', '', '2', '', '3', '4']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', 'E', '', 'F#', '', 'G#', 'A', ''],
                        string2: ['', 'E', '', 'F#', '', 'G#', 'A', '', 'B', '', 'C#', 'D', ''],
                        string3: ['', 'A', '', 'B', '', 'C#', 'D'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '', '1', '', '2', '', '3', '4', ''],
                        string2: ['', '1', '', '2', '', '3', '4/1', '', '2', '', '3', '4', ''],
                        string3: ['', '1', '', '2', '', '3', '4'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'B', '', 'C#', 'D', '', 'E', '', 'F#', '', 'G#', 'A', ''],
                        string2: ['', 'E', '', 'F#', '', 'G#', ''],
                        string3: ['', 'A', '', 'B', '', 'C#', ''],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '3', '1', '', '3', '', '1', '', '2', '3', ''],
                        string2: ['', '1', 'X', '2', '', '4', ''],
                        string3: ['', '1', 'X', '2', '', '4', ''],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['G#', 'A', '', 'B', '', 'C#', 'D', '', 'E', '', 'F#', '', 'G#', 'A'],
                        string2: ['', 'E', '', 'F#'],
                        string3: ['', 'B', '', 'C#'],
                        string4: ['', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['1', '2', '', '1', '', '4', '1', '', '4', '', '1', '', '2', '3'],
                        string2: ['', '1', '', '4'],
                        string3: ['', '1', '', '4'],
                        string4: ['', '', '', '']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'A' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['F', '', 'G', 'Ab', ''],
                        string2: ['Bb', '', 'C', 'Db', '', 'Eb', ''],
                        string3: ['Eb', '', 'F', '', 'G', 'Ab', ''],
                        string4: ['Ab', '', 'Bb', '', 'C', 'Db', '']
                    }
                }
                else {
                    return {
                        string1: ['1', '', '2', '3', ''],
                        string2: ['1', '', '2', '3', '', '4', ''],
                        string3: ['1', '', '2', '', '3', '4', ''],
                        string4: ['1', '', '2', '', '3', '4', '']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', 'Eb', '', 'F', '', 'G', 'Ab', ''],
                        string2: ['Eb', '', 'F', '', 'G', 'Ab', '', 'Bb', '', 'C', 'Db', ''],
                        string3: ['Ab', '', 'Bb', '', 'C', 'Db', ''],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '1', '', '2', '', '3', '4', ''],
                        string2: ['1', '', '2', '', '3', '4/1', '', '2', '', '3', '4', ''],
                        string3: ['1', '', '2', '', '3', '4', ''],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', 'C', 'Db', '', 'Eb', '', 'F', '', 'G', 'Ab', ''],
                        string2: ['', '', '', '', 'G', 'Ab', '', 'Bb', ''],
                        string3: ['Ab', '', 'Bb', '', 'C', 'Db', '', 'Eb', '', 'F'],
                        string4: ['', '', '', '', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '1', '2', '', '4', '', '1', '', '2', '3', ''],
                        string2: ['', '', '', '', '1', '2', '', '4', ''],
                        string3: ['1', 'X', '2', '', '4', '1', 'X', '2', '', '4'],
                        string4: ['', '', '', '', '', '', '', '', '', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['Ab', '', 'Bb', '', 'C', 'Db', '', 'Eb', '', 'F', '', 'G', 'Ab'],
                        string2: ['Eb', '', 'F', ''],
                        string3: ['Bb', '', 'C', 'Db'],
                        string4: ['', '', '', 'Ab']
                    }
                }
                else {
                    return {
                        string1: ['1', '', '4', '', '1', '2', '', '1', '', '4', '', '2', '3'],
                        string2: ['1', '', '4', ''],
                        string3: ['1', '', '4', '4'],
                        string4: ['', '', '', '4']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'B' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'A', 'Bb', ''],
                        string2: ['Bb', '', 'C', '', 'D', 'Eb', '', 'F', '', 'G', ''],
                        string3: ['Eb', '', 'F', '', 'G', '', 'A'],
                        string4: ['', '', 'Bb', '', 'C', '', 'D']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '2', ''],
                        string2: ['1', '', '2', '', '3/1', '2', '', '3', '', '4', ''],
                        string3: ['1', '', '2', '', '3', '', '4'],
                        string4: ['', '', '2', '', '3', '', '4']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'D', 'Eb', '', 'F', '', 'G', '', 'A', 'Bb'],
                        string2: ['Eb', '', 'F', '', 'G', '', 'A', 'Bb', '', 'C', ''],
                        string3: ['', '', 'Bb', '', 'C', '', 'D'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '2', '', '3/1', '', '2', '', '3', '4'],
                        string2: ['1', '', '2', '', '3/1', '', '2', '3', '', '4', ''],
                        string3: ['', '', '2', '', '3', '', '4'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['Bb', '', 'C', '', 'D', 'Eb', '', 'F', '', 'G', '', 'A', 'Bb'],
                        string2: ['Eb', '', 'F', '', 'G', ''],
                        string3: ['', '', 'Bb', '', 'C', ''],
                        string4: ['', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['1', 'X', '2', '', '4/1', '2', '', '4', '', '1', '', '2', '3'],
                        string2: ['1', 'X', '2', '', '4', ''],
                        string3: ['', '', '2', '', '4', ''],
                        string4: ['', '', '', '', '', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'A', 'Bb', '', 'C', '', 'D', 'Eb', '', 'F', '', 'G', '', 'A', 'Bb'],
                        string2: ['Eb', '', 'F', ''],
                        string3: ['Bb', '', 'C', ''],
                        string4: ['', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '2', '4', '', '1', '', '4', '1', '', '4', '', '1', '', '2', '3'],
                        string2: ['1', '', '4', ''],
                        string3: ['1', '', '4', ''],
                        string4: ['', '', '', '']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'C' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'A', '', 'B', 'C', ''],
                        string2: ['', 'B', 'C', '', 'D', '', 'E', 'F', '', 'G', ''],
                        string3: ['', 'E', 'F', '', 'G', '', 'A'],
                        string4: ['', '', '', '', 'C', '', 'D']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '', '2', '3', ''],
                        string2: ['', '1', '2', '', '3/1', '', '2', '3', '', '4', ''],
                        string3: ['', '1', '2', '', '3', '', '4'],
                        string4: ['', '', '', '', '3', '', '4']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', 'E', 'F', '', 'G', '', 'A', '', 'B', 'C', ''],
                        string3: ['', 'A', '', 'B', 'C', '', 'D'],
                        string4: ['', 'D', '', 'E', 'F', '', 'G']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', '1', '2', '', '3/1', '', '2', '', '3', '4', ''],
                        string3: ['', '1', '', '2', '3', '', '4'],
                        string4: ['', '1', '', '2', '3', '', '4']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', 'E', 'F', '', 'G', '', 'A', '', 'B', 'C', ''],
                        string3: ['', 'A', '', 'B', 'C', ''],
                        string4: ['', 'D', '', 'E', 'F', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', '1', '2', '', '4', '', '1', '', '3', '4', ''],
                        string3: ['', '1', '', '3', '4', ''],
                        string4: ['', '1', '', '3', '4', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'A', '', 'B', 'C', ''],
                        string2: ['', 'E', 'F', ''],
                        string3: ['', 'B', 'C', ''],
                        string4: ['F', '', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '4', '4', ''],
                        string2: ['', '1', '2', ''],
                        string3: ['', '1', '2', ''],
                        string4: ['1', '', '4', '']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'D' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'A', '', 'B', '', 'C#', 'D', ''],
                        string2: ['', 'B', '', 'C#', 'D', '', 'E', '', 'F#', 'G', ''],
                        string3: ['', 'E', '', 'F#', 'G', '', 'A'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '', '2', '', '3', '4', ''],
                        string2: ['', '1', '', '2', '3/1', '', '2', '', '3', '4', ''],
                        string3: ['', '1', '', '2', '3', '', '4'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'B', '', 'C#', 'D', ''],
                        string2: ['', 'E', '', 'F#', 'G', '', 'A', ''],
                        string3: ['', 'A', '', 'B', '', 'C#', 'D', ''],
                        string4: ['', 'D', '', 'E', '', 'F#', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '2', '3', ''],
                        string2: ['', '1', '', '2', '3', '', '4', ''],
                        string3: ['', '1', '', '2', '', '3', '4', ''],
                        string4: ['', '1', '', '2', '', '3', '4', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'B', '', 'C#', 'D', ''],
                        string2: ['', 'E', '', 'F#', 'G', '', '', ''],
                        string3: ['', 'A', '', 'B', '', 'C#', ''],
                        string4: ['', 'D', '', 'E', '', 'F#', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '3', '4', ''],
                        string2: ['', '1', '', '3', '4', '', '', ''],
                        string3: ['', '1', 'X', '2', '', '4', ''],
                        string4: ['', '1', 'X', '2', '', '4', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'A', '', 'B', '', 'C#', 'D'],
                        string2: ['', 'E', '', 'F#'],
                        string3: ['', 'B', '', 'C#'],
                        string4: ['', 'F#', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '4', '', '2', '4'],
                        string2: ['', '1', '', '4'],
                        string3: ['', '1', '', '4'],
                        string4: ['', '1', '2', '']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'E' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', 'B', '', 'C#', '', 'D#', 'E'],
                        string2: ['', 'B', '', 'C#', '', 'D#', 'E', '', 'F#', '', 'G#', 'A'],
                        string3: ['', 'E', '', 'F#', '', 'G#', 'A'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '', '1', '', '2', '', '3', '4'],
                        string2: ['', '1', '', '2', '', '3', '4/1', '', '2', '', '3', '4'],
                        string3: ['', '1', '', '2', '', '3', '4'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'B', '', 'C#', '', 'D#', 'E', ''],
                        string2: ['', 'E', '', 'F#', '', 'G#', 'A', ''],
                        string3: ['', 'A', '', 'B', '', 'C#', '', 'D#', ''],
                        string4: ['', '', '', 'E', '', 'F#', '', 'G#', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '2', '', '3', '4', ''],
                        string2: ['', '1', '', '2', '', '3', '4', ''],
                        string3: ['', '1', '', '2', '', '3', '', '4', ''],
                        string4: ['', '', '', '2', '', '3', '', '4', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', 'C#', '', 'D#', 'E', ''],
                        string2: ['D#', 'E', '', 'F#', '', 'G#', 'A', '', 'B', ''],
                        string3: ['', 'A', '', 'B', '', 'C#', ''],
                        string4: ['', '', '', 'E', '', 'F#', '', 'G#']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '1', '', '3', '4', ''],
                        string2: ['1', '2', '', '4', '', '1', '2', '', '4', ''],
                        string3: ['', '1', 'X', '2', '', '4', ''],
                        string4: ['', '', '', '1', 'X', '2', '', '4']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['G#', 'A', '', 'B', '', 'C#', '', 'D#', 'E', ''],
                        string2: ['D#', 'E', '', 'F#'],
                        string3: ['', 'B', '', 'C#'],
                        string4: ['', 'F#', '', 'G#']
                    }
                }
                else {
                    return {
                        string1: ['1', '1', '', '4', '', '1', '', '4', '4', ''],
                        string2: ['1', '1', '', '4'],
                        string3: ['', '1', '', '4'],
                        string4: ['', '1', '', '4']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'E' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', '', 'C', '', 'D', 'Eb', ''],
                        string2: ['Bb', '', 'C', '', 'D', 'Eb', '', 'F', '', 'G', 'Ab', '', 'Bb'],
                        string3: ['Eb', '', 'F', '', 'G', 'Ab', ''],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '', '', '1', '', '2', '3', ''],
                        string2: ['1', '', '2', '', '3/1', '2', '', '3/1', '', '2', '3', '', '4'],
                        string3: ['1', '', '2', '', '3', '4', ''],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['Bb', '', 'C', '', 'D', 'Eb', ''],
                        string2: ['Eb', '', 'F', '', 'G', 'Ab', ''],
                        string3: ['Ab', '', 'Bb', '', 'C', '', 'D', ''],
                        string4: ['', '', 'Eb', '', 'F', '', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['1', '', '2', '', '3', '4', ''],
                        string2: ['1', '', '2', '', '3', '4', ''],
                        string3: ['1', '', '2', '', '3', '', '4', ''],
                        string4: ['', '', '2', '', '3', '', '4', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', 'C', '', 'D', 'Eb', ''],
                        string2: ['Eb', '', 'F', '', 'G', 'Ab', '', 'Bb', ''],
                        string3: ['Ab', '', 'Bb', '', 'C', ''],
                        string4: ['', '', 'Eb', '', 'F', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '1', '', '3', '4', ''],
                        string2: ['1', 'X', '2', '', '4/1', '2', '', '4', ''],
                        string3: ['1', 'X', '2', '', '4', ''],
                        string4: ['', '', '2', '', '4', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['Ab', '', 'Bb', '', 'C', '', 'D', 'Eb'],
                        string2: ['Eb', '', 'F', ''],
                        string3: ['Bb', '', 'C', ''],
                        string4: ['F', '', 'G', 'Ab']
                    }
                }
                else {
                    return {
                        string1: ['1', '', '4', '', '1', '', '4', '1'],
                        string2: ['1', '', '4', ''],
                        string3: ['1', '', '4', ''],
                        string4: ['1', '', '4', '4']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'F' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'A', 'Bb', '', 'C', '', 'D', '', 'E', 'F'],
                        string2: ['Bb', '', 'C', '', 'D', '', 'E', 'F', '', 'G', ''],
                        string3: ['', '', 'F', '', 'G', '', 'A'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '2', '', '3/1', '', '2', '', '3', '4'],
                        string2: ['1', '', '2', '', '3/1', '', '2', '3', '', '4', ''],
                        string3: ['', '', '2', '', '3', '', '4'],
                        string4: ['', '', '', '', '', '', '']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'D', '', 'E', 'F', ''],
                        string2: ['', 'E', 'F', '', 'G', '', 'A', 'Bb', '', 'C', ''],
                        string3: ['', 'A', 'Bb', '', 'C', '', 'D', ''],
                        string4: ['', '', '', '', 'F', '', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '', '2', '3', ''],
                        string2: ['', '1', '2', '', '3/1', '', '2', '3', '', '4', ''],
                        string3: ['', '1', '2', '', '3', '', '4', ''],
                        string4: ['', '', '', '', '3', '', '4', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['Bb', '', 'C', '', 'D', '', 'E', 'F', ''],
                        string2: ['', 'E', 'F', '', 'G', ''],
                        string3: ['', 'A', 'Bb', '', 'C', ''],
                        string4: ['', '', '', '', 'F', '']
                    }
                }
                else {
                    return {
                        string1: ['1', 'X', '2', '', '4', '', '1', '2', ''],
                        string2: ['', '1', '2', '', '4', ''],
                        string3: ['', '1', '2', '', '4', ''],
                        string4: ['', '', '', '', '4', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'A', 'Bb', '', 'C', '', 'D', '', 'E', 'F', ''],
                        string2: ['', 'E', 'F', ''],
                        string3: ['Bb', '', 'C', ''],
                        string4: ['F', '', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '2', '', '1', '', '4', '', '2', '4', ''],
                        string2: ['', '1', '2', ''],
                        string3: ['1', '', '4', ''],
                        string4: ['1', '', '4', '']
                    }
                }
            }
        }
    }
    else if (topNav.key === 'G' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', 'B', 'C', '', 'D', '', 'E', '', 'F#', 'G', ''],
                        string3: ['', 'E', '', 'F#', 'G', '', 'A'],
                        string4: ['', 'A', '', 'B', 'C', '', 'D']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '', '', '', '', '', '', ''],
                        string2: ['', '1', '2', '', '3/1', '', '2', '', '3', '4', ''],
                        string3: ['', '1', '', '2', '3', '', '4'],
                        string4: ['', '1', '', '2', '3', '', '4']
                    }
                }
            }
            case 'Viola': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', '', '', '', 'D', '', 'E', '', 'F#', 'G', ''],
                        string2: ['', 'E', '', 'F#', 'G', '', 'A', '', 'B', 'C', ''],
                        string3: ['', 'A', '', 'B', 'C', '', 'D', ''],
                        string4: ['', '', '', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '', '', '', '1', '', '2', '', '3', '4', ''],
                        string2: ['', '1', '', '2', '3/1', '', '2', '', '3', '4', ''],
                        string3: ['', '1', '', '2', '3', '', '4', ''],
                        string4: ['', '', '', '', '', '', '', '']
                    }
                }
            }
            case 'Cello': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'B', 'C', '', 'D', '', 'E', '', 'F#', 'G', ''],
                        string2: ['', 'E', '', 'F#', 'G', ''],
                        string3: ['', 'A', '', 'B', 'C', ''],
                        string4: ['', '', '', '', '', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '2', '', '4', '', '1', '', '3', '4', ''],
                        string2: ['', '1', '', '3', '4', ''],
                        string3: ['', '1', '', '3', '4', ''],
                        string4: ['', '', '', '', '', '']
                    }
                }
            }
            case 'Bass': {
                if (topNav.reviewType === 'Notes') {
                    return {
                        string1: ['', 'A', '', 'B', 'C', '', 'D', '', 'E', '', 'F#', 'G'],
                        string2: ['', 'E', '', 'F#'],
                        string3: ['', 'B', 'C', ''],
                        string4: ['', '', 'G', '']
                    }
                }
                else {
                    return {
                        string1: ['', '1', '', '4', '1', '', '4', '', '1', '', '3', '3'],
                        string2: ['', '1', '', '4'],
                        string3: ['', '1', '2', ''],
                        string4: ['', '', '2', '']
                    }
                }
            }
        }
    }
    else{
        return {
            string1: [''],
            string2: [''],
            string3: [''],
            string4: ['']
        }
    }
}
