const lyrics = [
    {
        lyric: "달아나는 빛 초록을 거머쥐고",
        title: "<초록을거머쥔우리는> - 잔나비",
    },
    {
        lyric: "너는 누군가의 dreams scome true",
        title: "<I AM> - IVE",
    },
    {
        lyric: "자고 나면 괜찮아질 거야 하루는 더 어른이 될 테니",
        title: "<꿈과 책과 힘과 벽> - 잔나비",
    },
    {
        lyric: "From now on 모든 것을 백지로 되돌려 놓고 생각 말고 저질러 붓은 너가 쥐고 있어",
        title: "<Artist> - ZICO",
    },
    {
        lyric: "나는 너의 음악이고 그런 마음 한 줄이야",
        title: "<투게더!> - 잔나비",
    },
    {
        lyric: "마지막 선물은 산뜻한 안녕",
        title: "<사건의 지평선> - 윤하",
    },
    {
        lyric: "항상 평범했던 일상도 특별해지는 이 순간",
        title: "<선물> - 멜로망스",
    },
    {
        lyric: "이룰 수 없는 저 꿈의 나라로",
        title: "<깊은 밤을 날아서> - 이문세",
    },
    {
        lyric: "우린 모두 타오르는 젊음이기에",
        title: "<작전명 청-춘!> - 잔나비",
    },
    {
        lyric: "달콤한 색감이 물들어 조금씩",
        title: "<그라데이션> - 10CM",
    },
]

const lyric = document.querySelector("#lyric span:first-child");
const title = document.querySelector("#lyric span:last-child");

const todaysLyric = lyrics[Math.floor(Math.random() * lyrics.length)];

lyric.innerText = todaysLyric.lyric;
title.innerText = todaysLyric.title;