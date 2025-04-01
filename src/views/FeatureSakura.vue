<script setup>
import { ref, onMounted } from 'vue';

const activeTab = ref(1); // 現在表示中のタブを管理する
const weatherIcons = ref([]); // 複数の天気アイコンを管理する
const maxTemperature = ref([]); // 最大気温を管理する
const minTemperature = ref([]); // 最低気温を管理する

const content01 = () => {
    activeTab.value = 1;
};

const content02 = () => {
    activeTab.value = 2;
};

const content03 = () => {
    activeTab.value = 3;
};

onMounted(() => {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=weather_code,apparent_temperature_min,temperature_2m_max&hourly=temperature_2m,rain,weather_code&timezone=Asia%2FTokyo', true);
    request.responseType = 'json';

    request.onload = function () {
        const data = this.response;
        const weatherCode = data.daily.weather_code;
        const maxTemperatureData = data.daily.temperature_2m_max;
        const minTemperatureData = data.daily.apparent_temperature_min;

        const icons = weatherCode.map(code => {
            if (code === 0) {
                return '<img src="src/assets/feature-sakura/sun.png" alt="晴れ">';
            } else if (code === 1 || code === 2 || code === 3) {
                return '<img src="src/assets/feature-sakura/cloudy.png" alt="曇り">';
            } else if (code === 45 || code === 51 || code === 53 || code === 55 || code === 56 || code === 57 || code === 61 || code === 63 || code === 65 || code === 66 || code === 67 || code === 80 || code === 81 || code === 82 || code === 95 ) {
                return '<img src="src/assets/feature-sakura/rainy.png" alt="雨">';
            } else {
                return '<img src="src/assets/feature-sakura/default.png" alt="取得できませんでした。">';
            }
        });

        weatherIcons.value = icons;
        maxTemperature.value = maxTemperatureData;
        minTemperature.value = minTemperatureData;
    };
    request.send();
});
</script>

<template>
    <div class="mv">
        <div class="mv-inner">
            <h1 class="mv-ttl">
                <span>桜</span>特集
            </h1>
        </div>
    </div>
    <section class="sec--weather">
        <div class="content-inner">
            <div class="btn-wrapper">
                <button class="sakura-btn" :class="{ active: activeTab === 1 }" @click="content01">今日の天気</button>
                <button class="sakura-btn" :class="{ active: activeTab === 2 }" @click="content02">1週間天気</button>
                <button class="sakura-btn" :class="{ active: activeTab === 3 }" @click="content03">準備中</button>
            </div>
            <div class="tab-content">
                <div :class="{ shown: activeTab === 1 }" class="tab-content__01">
                    <figure v-html="weatherIcons[0]"></figure>
                    <p v-html="`<span>${maxTemperature[0]}</span>` + '℃'"></p>
                </div>
                <div :class="{ shown: activeTab === 2 }" class="tab-content__02">
                    <ul class="weather-week">
                        <li v-for="(icon, index) in weatherIcons" :key="index">
                            <figure v-html="icon"></figure>
                            <p><span>{{ maxTemperature[index] }}</span>℃<br><span>{{ minTemperature[index] }}</span>℃</p>
                        </li>
                    </ul>
                </div>
                <div :class="{ shown: activeTab === 3 }" class="tab-content__03">
                    <p>準備中</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gidole&family=Shippori+Mincho:wght@400;500;700&display=swap');
.mv {
    height: calc(100dvh - 66px);
    background:url(@/assets/feature-sakura/mv.jpg) no-repeat center/cover;
}
.mv-inner {
    max-width: 1024px;
    margin-inline: auto;
    padding-top: 80px;
}
.mv-ttl {
    width: fit-content;
    margin-left: auto;
    color: #666;
    font-size: 40px;
    font-weight: 400;
    font-family: "Shippori Mincho",serif;
    opacity: 0;
    animation: mv-ttl 1s ease-in-out .5s forwards;
    span {
        display: block;
        font-size: 80px;
        margin-bottom: 4px;
    }
}

@keyframes mv-ttl {
    0% { opacity:0; }
    100% { opacity:1; }
}

.content-inner {
    width: 800px;
    margin-inline: auto;
}
.sec--weather {
    padding-block: 80px;
}
.btn-wrapper {
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.sakura-btn {
    font-size: 20px;
    background: none;
    padding: 20px ;
    border: 1px solid #fff;
    border-bottom: 1px solid #c0c0c0;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    transition: .3s;
    &.active {
        border-color: #c0c0c0;
        border-bottom: 1px solid #fff;
    }
}
.tab-content > div {
    display: none;
    min-height: 250px;
    border: 1px solid #c0c0c0;
    border-top: 0;
    border-radius: 0 0 8px 8px;
    padding: 32px;
}
.tab-content > div.shown {
    display: block;
}
.tab-content__01 {
    text-align: center;
    font-family: "Gidole",sans-serif;
    figure {
        width: fit-content;
        max-width: 120px;
        text-align: center;
        margin: 0 auto 24px;
    }
    :deep(span) {
        font-size: 40px;
        line-height: 1;
        margin-right: 2px;
        
    }
}

.weather-week {
    display: flex;
    gap: 16px;
    padding: 0;
    margin: 0;
    list-style: none;
}
.weather-week li {
    text-align: center;
}
.weather-week li figure {
    margin-bottom: 8px;
}
.weather-week li p {
    font-size: 16px;
    font-family: "Gidole", sans-serif;
    line-height: 1.3;
    span {
        font-size: 20px;
    }
}
.tab-content__03 {
    display: grid;
    place-content: center;
    text-align: center;
}
</style>