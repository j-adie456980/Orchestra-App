export function getNotes(topNav) {
    if (topNav.key === 'A' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(12).fill(''),
                    string2: Array(12).fill(''),
                    string3: Array(12).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(13).fill(''),
                    string2: Array(13).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(13).fill(''),
                    string2: Array(6).fill(''),
                    string3: Array(6).fill(''),
                    string4: Array(6).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(14).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'A' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(5).fill(''),
                    string2: Array(7).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(12).fill(''),
                    string2: Array(12).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(12).fill(''),
                    string2: Array(9).fill(''),
                    string3: Array(10).fill(''),
                    string4: Array(10).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(13).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'B' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(7).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(13).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(13).fill(''),
                    string2: Array(6).fill(''),
                    string3: Array(6).fill(''),
                    string4: Array(6).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(15).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'C' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(9).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(6).fill(''),
                    string4: Array(6).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(6).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'D' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(6).fill(''),
                    string2: Array(8).fill(''),
                    string3: Array(8).fill(''),
                    string4: Array(8).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(6).fill(''),
                    string2: Array(6).fill(''),
                    string3: Array(6).fill(''),
                    string4: Array(6).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(7).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'E' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(12).fill(''),
                    string2: Array(12).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(8).fill(''),
                    string2: Array(8).fill(''),
                    string3: Array(8).fill(''),
                    string4: Array(8).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(8).fill(''),
                    string2: Array(10).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(8).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(10).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'E' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(12).fill(''),
                    string2: Array(13).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(7).fill(''),
                    string2: Array(7).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(7).fill(''),
                    string2: Array(9).fill(''),
                    string3: Array(6).fill(''),
                    string4: Array(6).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(8).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'F' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(13).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(9).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(8).fill(''),
                    string4: Array(8).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(9).fill(''),
                    string2: Array(6).fill(''),
                    string3: Array(5).fill(''),
                    string4: Array(5).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else if (topNav.key === 'G' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(7).fill(''),
                    string4: Array(7).fill('')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(11).fill(''),
                    string3: Array(8).fill(''),
                    string4: Array(8).fill('')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(11).fill(''),
                    string2: Array(6).fill(''),
                    string3: Array(6).fill(''),
                    string4: Array(6).fill('')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(12).fill(''),
                    string2: Array(4).fill(''),
                    string3: Array(4).fill(''),
                    string4: Array(4).fill('')
                }
            }
        }
    }
    else{
        return {
            string1: Array(1).fill(''),
            string2: Array(1).fill(''),
            string3: Array(1).fill(''),
            string4: Array(1).fill('')
        }
    }
}