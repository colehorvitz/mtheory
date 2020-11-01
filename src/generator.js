const NOTES = ["A", "Ab", "A#", "B", "Bb", "B#", "C", "C#", "Cb",
"D", "Db", "D#", "E", "E#", "Eb", "F", "Fb", "F#","G", "G#", "Gb"]
const MM = ["major", "minor"]
const SCALE_MODES = ["major", "natural minor", "harmonic minor", "melodic minor"]
const SCALE_DEGREES = ["tonic (1)", "supertonic (2)", "mediant (3)", "subdominant (4)",
 "dominant (5)", "submediant (6)", "subtonic/leading tone"]
const TRIAD_TYPES = ["major", "minor", "augmented", "diminished"]
const SEVENTH_TYPES = ["maj7", "V7", "min7", "dim7"]
const INVERSIONS = ["root", "first", "second"]

const SCALE = {SPELLING: 'spelling', DEGREE: 'degree'}
const CHORD = {TRIAD: 'triad', SEVENTH: 'seventh'}
const ARP = {}
const INV = {ROOT: "root", FIRST: "first", SECOND:"second"}
const DIRECTIVE_TYPES = [SCALE, CHORD, ARP, INV]


let getRandItem = (arr) => arr[Math.floor(Math.random() * arr.length)]
let getRandProp = (obj) => obj[Object.keys(obj)[Object.keys(obj).length * Math.random() << 0]]

export default function generate(c){
    let type = ""
    switch (c) {
        case "ALL":
            type = getRandItem(DIRECTIVE_TYPES);
            break;
        case "SCALES":
            type = SCALE;
            break;
        case "CHORDS":
            type = CHORD;
            break;
        case "ARPEGGIOS":
            type = ARP;
            break;
        case "INVERSIONS":
            type = INV;
            break;
        default:
            break;
    }
    console.log(type)
    let dir = getRandProp(type) //get specific directive
    let note = getRandItem(NOTES) //get a random note
    let s = ""
    switch(type) {
        case(SCALE):
            let mode = getRandItem(SCALE_MODES)
            switch(dir) {
                case(SCALE.SPELLING):
                    s = "Play the " + note + " " + mode + " scale ";
                    break;
                case(SCALE.DEGREE):
                    s = "Play the " + getRandItem(SCALE_DEGREES) + " of the " + note + " " + mode + " scale";
                    break;
                default:
                    break;
            }
            break;
        case(CHORD):
            switch(dir){
                case(CHORD.TRIAD):
                    s = "Play a(n) " + note + " " + getRandItem(TRIAD_TYPES) + " triad";
                    break;
                case(CHORD.SEVENTH):
                    s = "Play a(n) " + note + getRandItem(SEVENTH_TYPES) + " chord";
                    break;
                default:
                    break;
            } 
            break;
        case(ARP):
            s = "Play the " + note + getRandItem(SEVENTH_TYPES) + " arpeggio";
            break;
        case(INV):
            s = "Play a(n) " + note + " " + getRandItem(MM) + " " + getRandItem(INVERSIONS) + " inversion";
            break;
        default:
            break;
    }
    return s
}
