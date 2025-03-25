<script setup>
import { ref, onMounted } from 'vue';

const activeTab = ref(1); // 現在表示中のタブを管理する
const weatherIcons = ref([]); // 複数の天気アイコンを管理する

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
    // XMLHttpRequestを使って天気データを取得
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=weather_code,apparent_temperature_min,temperature_2m_max&hourly=temperature_2m,rain,weather_code&timezone=Asia%2FTokyo', true);
    request.responseType = 'json';

    request.onload = function () {
        const data = this.response;
        const weatherCode = data.daily.weather_code;

        // 受け取ったweather_codeに基づいてアイコンを格納
        const icons = weatherCode.map(code => {
            if (code === 0) {
                return '<img src="src/assets/feature-sakura/sun.png" alt="晴れ">';
            } else if (code === 1 || code === 2 || code === 3) {
                return '<img src="src/assets/feature-sakura/cloudy.png" alt="曇り">';
            } else if (code === 80 || code === 81 || code === 82) {
                return '<img src="src/assets/feature-sakura/rainy.png" alt="雨">';
            } else {
                return '<img src="src/assets/feature-sakura/default.png" alt="取得できませんでした。">';
            }
        });

        weatherIcons.value = icons; // 生成したアイコンの配列をセット
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
    <div class="content-inner">
        <div class="tab-grop">
            <button class="sakura-btn" @click="content01">タブ01</button>
            <button class="sakura-btn" @click="content02">タブ02</button>
            <button class="sakura-btn" @click="content03">タブ03</button>
        </div>
        <div class="tab-content">
            <div :class="{ shown: activeTab === 1 }" class="tab-content__01">1</div>
            <div :class="{ shown: activeTab === 2 }" class="tab-content__02">2</div>
            <div :class="{ shown: activeTab === 3 }" class="tab-content__03">3</div>
        </div>

        <!-- 天気アイコンを繰り返し表示 -->
        <ul class="weather-week">
            <li v-for="(icon, index) in weatherIcons" :key="index" v-html="icon"></li>
        </ul>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&display=swap');

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

.tab-content > div {
    display: none;
}
.tab-content > div.shown {
    display: block;
}

.weather-week {
    display: flex;
    padding: 0;
}
</style>