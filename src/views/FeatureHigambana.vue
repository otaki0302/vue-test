<script setup>
    import TourCard from '@/components/feature-higambana/TourCard.vue';
</script>
<template>
    <main class="page--feature-higambana">
        <div class="mv">
            <h1>彼岸花特集</h1>
            <img src="@/assets/feature-higambana/mv.jpg" width="3200" height="1600" alt="メインビジュアル" loading="lazy">
        </div>
        <section class="sec--lead">
            <div class="content-inner">
               <h2 class="sec-ttl">彼岸花が見られる名所</h2>
               <div class="sec--lead__col">
                    <swiper-container
                        class="sec--lead__slide"
                        slides-per-view="1"
                        space-between="25"
                        navigation="true"
                        pagination="true"
                        loop="true"
                    >
                        <swiper-slide><img src="@/assets/feature-higambana/img01.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img02.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img03.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img04.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img01.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img02.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img03.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img04.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                    </swiper-container>
                    <div class="sec--lead__dtl">
                        <h3 class="sec--lead__dtl__ttl">埼玉県 巾着田</h3>
                        <p class="sec--lead__dtl__txt">
                            埼玉県日高市にある巾着田は、彼岸花の名所として知られています。毎年秋になると、約500万本の彼岸花が一斉に咲き誇り、その美しさは圧巻です。巾着田は、曼珠沙華まつりが開催され、多くの観光客が訪れます。自然豊かな環境の中で、真っ赤な彼岸花の絨毯を楽しむことができます。
                        </p>
                    </div>
                </div>
                <div class="sec--lead__col">
                    <swiper-container
                        class="sec--lead__slide"
                        slides-per-view="1"
                        space-between="25"
                        navigation="true"
                        pagination="true"
                        loop="true"
                    >
                        <swiper-slide><img src="@/assets/feature-higambana/img05.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img06.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img07.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img08.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img05.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img06.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img07.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                        <swiper-slide><img src="@/assets/feature-higambana/img08.jpg" width="" height="" alt="" loading="lazy"></swiper-slide>
                    </swiper-container>
                    <div class="sec--lead__dtl">
                        <h3 class="sec--lead__dtl__ttl">埼玉県 深山（みやま）の花園</h3>
                        <p class="sec--lead__dtl__txt">
                            埼玉県深山の花園は、彼岸花の美しさで知られるもう一つの名所です。毎年秋になると、広大な敷地に真っ赤な彼岸花が咲き乱れ、その光景はまるで赤い絨毯のようです。深山の花園は、静かな自然環境の中で彼岸花を楽しむことができる場所で、多くの写真愛好家や観光客が訪れます。彼岸花の見頃には、特別なイベントやガイドツアーも開催され、訪れる人々にとって忘れられない体験となります。
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="sec--tour">
            <div class="content-inner">
                <h2 class="sec-ttl" data-heading-clr="white">彼岸花鑑賞におすすめのツアー</h2>
                <ul class="sec--tour__list">
                    <TourCard 
                        imgPath="/src/assets/feature-higambana/img03.jpg"
                        ttl="【日帰り】都心から1時間ちょっと。約500万本の彼岸花がつくる紅の絨毯 高麗巾着田鑑賞ツアー"
                        dtl="会場では巾着田まつりも開催。地元の名産品やお土産もご購入いただけます。"
                        price="5,000"
                    />
                    <TourCard 
                        imgPath="/src/assets/feature-higambana/img03.jpg"
                        ttl="【日帰り】都心から1時間ちょっと。約500万本の彼岸花がつくる紅の絨毯 高麗巾着田鑑賞ツアー"
                        dtl="会場では巾着田まつりも開催。地元の名産品やお土産もご購入いただけます。"
                        price="5,000"
                    />
                    <TourCard 
                        imgPath="/src/assets/feature-higambana/img03.jpg"
                        ttl="【日帰り】都心から1時間ちょっと。約500万本の彼岸花がつくる紅の絨毯 高麗巾着田鑑賞ツアー"
                        dtl="会場では巾着田まつりも開催。地元の名産品やお土産もご購入いただけます。"
                        price="5,000"
                    />
                    <TourCard 
                        imgPath="/src/assets/feature-higambana/img03.jpg"
                        ttl="【日帰り】都心から1時間ちょっと。約500万本の彼岸花がつくる紅の絨毯 高麗巾着田鑑賞ツアー"
                        dtl="会場では巾着田まつりも開催。地元の名産品やお土産もご購入いただけます。"
                        price="5,000"
                    />
                    <TourCard 
                        imgPath="/src/assets/feature-higambana/img03.jpg"
                        ttl="【日帰り】都心から1時間ちょっと。約500万本の彼岸花がつくる紅の絨毯 高麗巾着田鑑賞ツアー"
                        dtl="会場では巾着田まつりも開催。地元の名産品やお土産もご購入いただけます。"
                        price="5,000"
                    />
                    <TourCard 
                        imgPath="/src/assets/feature-higambana/img03.jpg"
                        ttl="【日帰り】都心から1時間ちょっと。約500万本の彼岸花がつくる紅の絨毯 高麗巾着田鑑賞ツアー"
                        dtl="会場では巾着田まつりも開催。地元の名産品やお土産もご購入いただけます。"
                        price="5,000"
                    />
                </ul>
            </div>
        </section>
    </main>
</template>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&display=swap');
    .page--feature-higambana {
        color: #464646;
    }
    .mv {
        position: relative;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 320px;
            background: linear-gradient(to bottom,rgb(231 228 200/0) 0%,#E7E4C8 100%);
            position: absolute;
            bottom: 0;
        }
        h1 {
            color: #fff;
            font-size: 40px;
            font-family: "Shippori Mincho", serif;
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            letter-spacing: .2em;
            text-shadow: 0px 3px 6px rgb(0 0 0/.5);
        }
    }
    .content-inner {
        max-width: 1024px;
        margin-inline: auto;
    }
    .sec--lead {
        padding-block: 80px 160px;
        background: #E7E4C8;
        min-height: 300px;
        position: relative;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 320px;
            background: linear-gradient(to bottom,#E7E4C8 0%,#DA3D30 100%);
            position: absolute;
            bottom: -160px;
            left: 0;
        }
    }
    .sec-ttl {
        width: fit-content;
        color: #DA3D30;
        font-size: 32px;
        font-weight: 500;
        font-family: "Shippori Mincho",serif;
        text-align: center;
        padding: 0 32px 52px;
        margin: 0 auto 56px;
        letter-spacing: .1em;
        background: url(@/assets/feature-higambana/icn_heading.png) no-repeat center bottom/auto 40px,linear-gradient(to right,#DA3D30 0%,#DA3D30 calc(50% - 41px),transparent calc(50% - 41px),transparent calc(50% + 41px),#DA3D30 calc(50% + 41px),#DA3D30 100%) no-repeat left bottom 20px/100% 1px;
    }
    .sec-ttl[data-heading-clr="white"] {
        color: #fff;
        background: url(@/assets/feature-higambana/icn_heading--wh.png) no-repeat center bottom/auto 40px,linear-gradient(to right,#fff 0%,#fff calc(50% - 41px),transparent calc(50% - 41px),transparent calc(50% + 41px),#fff calc(50% + 41px),#fff 100%) no-repeat left bottom 20px/100% 1px;
    }
    .sec--lead__slide {
        width: 100%;
        img {
            border-radius: 16px;
        }
    }
    .sec--lead__col {
        display: grid;
        grid-template-columns: repeat(2,calc(50% - 25px));
        align-items: center;
        gap: 50px;
        & + & {
            margin-top: 80px;
        }
        &:nth-of-type(even) {
            .sec--lead__slide {
                order: 2;
            }
            .sec--lead__dtl {
                order: 1;
            }
        }
    }
    .sec--lead__dtl__ttl {
        font-size: 24px;
        font-weight: 500;
        font-family: "Shippori Mincho",serif;
        letter-spacing: .1em;
        margin-bottom: 20px;
        padding-bottom: 21px;
        background: linear-gradient(to right,#464646 0%,#464646 60px,transparent 60px,transparent 100%) no-repeat bottom left/100% 1px;
        &::first-letter {
            color: #DA3D30;
            font-size: 32px;
        }
    }
    .sec--lead__dtl__txt {
        font-family: "Shippori Mincho",serif;
        line-height: 1.8;
    }
    swiper-container {
        --swiper-navigation-color: #fff;

        &::part(bullet-active) {
            background: #fff;
        }
        &::part(navigation) {
            width: 100px;
        }
    }
    .sec--lead__slide :deep(.swiper-button-prev,.swiper-button-next) {
        transition: .2s;
        &:hover {
            opacity: .7;
        }
    }
    .sec--lead__slide :deep(.swiper-button-prev:after),
    .sec--lead__slide :deep(.swiper-button-next:after) {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        rotate: 45deg;
    }
    .sec--lead__slide :deep(.swiper-button-prev:after) {
        rotate: -135deg;
    }
    .sec--tour {
        padding-block: 160px 80px;
        background: url(@/assets/feature-higambana/bg_tour.png) no-repeat right 10% bottom/auto 160px,#DA3D30;
    }
    .sec--tour__list {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 30px;
    }
</style>
<script type="module">
    import { register } from 'swiper/element/bundle';
    register();
</script>