export const exerciseMixin = {
    data() {
        return {
            firstText: 'Excercise One',
            secondText: 'Exercise Two'
        }
    },
    filters: {
        reverseText(value) {
            return value.split("").reverse().join("");
        }
    },
    computed: {
        oneText() {
            return this.firstText.split("").reverse().join("")
        },
        twoText() {
            let second = this.secondText;
            return `${second} (${second.length})`
        }
    }
}