export function getColors(topNav) {
    if (topNav.key === 'A' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(12).fill('grey'),
                    string2: Array(6).fill('grey').concat(Array(6).fill('white')),
                    string3: Array(12).fill('white'),
                    string4: Array(7).fill('white')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(6).fill('grey').concat(Array(7).fill('white')),
                    string2: Array(13).fill('white'),
                    string3: Array('grey').concat(Array(6).fill('white')),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(13).fill('white'),
                    string2: Array(6).fill('white'),
                    string3: Array(6).fill('white'),
                    string4: Array(6).fill('grey')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(14).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('grey')
                }
            }
        }
    }
    else if (topNav.key === 'A' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(5).fill('white'),
                    string2: Array(7).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(7).fill('white')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(5).fill('grey').concat(Array(7).fill('white')),
                    string2: Array(12).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(2).fill('grey').concat(Array(10).fill('white')),
                    string2: Array(4).fill('grey').concat(Array(5).fill('white')),
                    string3: Array(10).fill('white'),
                    string4: Array(10).fill('grey')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(13).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(3).fill('grey').concat('white')
                }
            }
        }
    }
    else if (topNav.key === 'B' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(4).fill('grey').concat(Array(3).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(2).fill('grey').concat(Array(5).fill('white'))
                }
            }
            case 'Viola': {
                return {
                    string1: Array(4).fill('grey').concat(Array(9).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(2).fill('grey').concat(Array(5).fill('white')),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(13).fill('white'),
                    string2: Array(6).fill('white'),
                    string3: Array(2).fill('grey').concat(Array(4).fill('white')),
                    string4: Array(6).fill('grey')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(15).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('grey')
                }
            }
        }
    }
    else if (topNav.key === 'C' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(4).fill('grey').concat(Array(5).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(4).fill('grey').concat(Array(3).fill('white'))
                }
            }
            case 'Viola': {
                return {
                    string1: Array(11).fill('grey'),
                    string2: Array(11).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(7).fill('white')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(11).fill('grey'),
                    string2: Array(11).fill('white'),
                    string3: Array(6).fill('white'),
                    string4: Array(6).fill('white')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(6).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('white')
                }
            }
        }
    }
    else if (topNav.key === 'D' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(4).fill('grey').concat(Array(7).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(6).fill('white'),
                    string2: Array(8).fill('white'),
                    string3: Array(8).fill('white'),
                    string4: Array('grey').concat(Array(7).fill('white'))
                }
            }
            case 'Cello': {
                return {
                    string1: Array(6).fill('white'),
                    string2: Array(6).fill('white'),
                    string3: Array(6).fill('white'),
                    string4: Array(6).fill('white')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(7).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('white')
                }
            }
        }
    }
    else if (topNav.key === 'E' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(6).fill('grey').concat(Array(6).fill('white')),
                    string2: Array(12).fill('white'),
                    string3: Array('grey').concat(Array(6).fill('white')),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(8).fill('white'),
                    string2: Array('grey').concat(Array(7).fill('white')),
                    string3: Array('grey').concat(Array(7).fill('white')),
                    string4: Array(3).fill('grey').concat(Array(5).fill('white'))
                }
            }
            case 'Cello': {
                return {
                    string1: Array(3).fill('grey').concat(Array(5).fill('white')),
                    string2: Array(10).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(3).fill('grey').concat(Array(5).fill('white'))
                }
            }
            case 'Bass': {
                return {
                    string1: Array(10).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('white')
                }
            }
        }
    }
    else if (topNav.key === 'E' && topNav.mode === 'Major' && topNav.accidental === 'Flat' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(7).fill('grey').concat(Array(5).fill('white')),
                    string2: Array(13).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(7).fill('white'),
                    string2: Array(7).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(2).fill('grey').concat(Array(5).fill('white'))
                }
            }
            case 'Cello': {
                return {
                    string1: Array(2).fill('grey').concat(Array(5).fill('white')),
                    string2: Array(9).fill('white'),
                    string3: Array(6).fill('white'),
                    string4: Array(2).fill('grey').concat(Array(4).fill('white'))
                }
            }
            case 'Bass': {
                return {
                    string1: Array(8).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('white')
                }
            }
        }
    }
    else if (topNav.key === 'F' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(4).fill('grey').concat(Array(9).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(2).fill('grey').concat(Array(5).fill('white')),
                    string4: Array(7).fill('grey')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(4).fill('grey').concat(Array(5).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(8).fill('white'),
                    string4: Array(4).fill('grey').concat(Array(4).fill('white'))
                }
            }
            case 'Cello': {
                return {
                    string1: Array(9).fill('white'),
                    string2: Array(6).fill('white'),
                    string3: Array(5).fill('white'),
                    string4: Array(4).fill('grey').concat('white')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(11).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(4).fill('white')
                }
            }
        }
    }
    else if (topNav.key === 'G' && topNav.mode === 'Major' && topNav.accidental === 'Natural' ){
        switch(topNav.instrument) {
            case 'Violin': {
                return {
                    string1: Array(11).fill('grey'),
                    string2: Array(11).fill('white'),
                    string3: Array(7).fill('white'),
                    string4: Array(7).fill('white')
                }
            }
            case 'Viola': {
                return {
                    string1: Array(4).fill('grey').concat(Array(7).fill('white')),
                    string2: Array(11).fill('white'),
                    string3: Array(8).fill('white'),
                    string4: Array(8).fill('grey')
                }
            }
            case 'Cello': {
                return {
                    string1: Array(11).fill('white'),
                    string2: Array(6).fill('white'),
                    string3: Array(6).fill('white'),
                    string4: Array(6).fill('grey')
                }
            }
            case 'Bass': {
                return {
                    string1: Array(12).fill('white'),
                    string2: Array(4).fill('white'),
                    string3: Array(4).fill('white'),
                    string4: Array(2).fill('grey').concat(Array(2).fill('white'))
                }
            }
        }
    }
    else{
        return {
            string1: Array(1).fill('grey'),
            string2: Array(1).fill('grey'),
            string3: Array(1).fill('grey'),
            string4: Array(1).fill('grey')
        }
    }
}