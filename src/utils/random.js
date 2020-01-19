/**
 * Created by xh on 15/01/2020.
 */

import Vue from 'vue'

const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

export default getRandomIntInclusive

Vue.prototype.$getRandomIntInclusive = getRandomIntInclusive