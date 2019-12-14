export const adderSubtractorMixin = {
    methods: {
        add() {
            this.number++;
        },
        reset() {
            this.number = 0;
        },
        reduce() {
            this.number--;
        }
    },
}