<script setup>
    defineProps( {
        imgPath: {
            type: String,
            require: true,
        },
        ttl: {
            type: String,
            require: true,
        },
        dtl: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            require: true,
        },
    })
</script>

<template>
    <article class="sec--tour__list__items">
        <figure class="sec--tour__list__items__img">
            <img :src="imgPath" width="" height="" alt="" loading="lazy">
        </figure>
        <h3 class="sec--tour__list__items__ttl">{{ ttl }}</h3>
        <p class="sec--tour__list__items__txt">{{ dtl }}</p>
        <p class="sec--tour__list__items__price">{{ price }}円</p>
    </article>
</Template>

<style>
    .sec--tour__list__items {
        background: #fff;
        border-radius: 16px;
        padding: 16px;
        font-family: "Shippori Mincho",serif;
        transition: .2s;
        &:hover {
            scale: 1.05;
        }
    }
    .sec--tour__list__items__img {
        margin-bottom: 20px;
        img {
            border-radius: 12px;
        }
    }
    .sec--tour__list__items__ttl {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;    
        margin-bottom: 16px; 
    }
    .sec--tour__list__items__txt {
        font-size: 14px;
        line-height: 1.8;
        margin-bottom: 20px;
    }
    .sec--tour__list__items__price {
        color: #DA3D30;
        font-size: 24px;
        font-weight: 500;
        text-align: right;
    }
</style>