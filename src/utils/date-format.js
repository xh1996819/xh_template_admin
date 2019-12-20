import Vue from 'vue'

let date = Date.parse(new Date()) // 获取当前时间戳（毫秒）

/**
 * timestamp 当前时间戳，毫秒
 * formats 时间格式，包括：
 *            1.Y-m-d
 *            2.Y-m-d H:i:s
 *            3.Y年m月d日
 *            4.Y年m月d日 H时i分s秒
 */

const _date = {
    dateFormat: (timestamp, formats) => {
        formats = formats || 'Y-m-d'
        let zero = function (value) {
            if (value < 10) {
                return '0' + value
            }
            return value
        }
        let myDate = timestamp ? new Date(timestamp) : new Date()
        let year = myDate.getFullYear()
        let month = zero(myDate.getMonth() + 1)
        let day = zero(myDate.getDate())
        let hour = zero(myDate.getHours())
        let minite = zero(myDate.getMinutes())
        let second = zero(myDate.getSeconds())

        return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
            return ({
                Y: year,
                m: month,
                d: day,
                H: hour,
                i: minite,
                s: second
            })[matches]
        })
    }
}


export default _date

Vue.prototype.$date = _date