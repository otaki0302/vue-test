<template>
    <div class="mv">
        <div class="mv-inner">
            <h1 class="mv-ttl">
                <span>桜</span>
                特集
            </h1>
        </div>
    </div>
</template>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&display=swap');

    .mv {
        height: calc(100dvh - 66px);
        background:url(@/assets/feature-sakura/mv.jpg) no-repeat center/cover
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
</style>
<script>
</script>