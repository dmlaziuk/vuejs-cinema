<template>
    <div id="day-select">
        <ul class="days">
            <li
                :class="{ day: true, active: isActive(day) }"
                v-for="day in days"
                @click="selectDay(day)">{{ formatDay(day) }}</li>
            <li class="day-selector">
                <span class="dec" @click="changeDay(-1)"></span>
                <span class="inc" @click="changeDay(1)"></span>
            </li>
        </ul>
    </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
    data: () => {
        return {
            days: [0, 1, 2, 3, 4, 5, 6].map( num => moment().add(num, 'days'))
        }
    },
    props: ['selected'],
    methods: {
        formatDay(raw) {
            if (raw.isSame(moment(), 'day')) {
                return 'Today'
            } else {
                return raw.format('ddd DD/MM')
            }
        },
        isActive (day) {
            return day.isSame(this.selected, 'day')
        },
        selectDay(day) {
            this.$bus.$emit('set-day', day)
        },
        changeDay(change) {
            let newDay = moment(this.selected).add(change, 'days')
            if (this.days.find(day => newDay.isSame(day, 'day'))) {
                this.selectDay(newDay)
            }
        }
    }
}
</script>
