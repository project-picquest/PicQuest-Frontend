<template>
    <div class="container">
        <div class="left-container">
        <span>PicQuest</span>
        </div>
        <div class="center-container"></div>
        <div class="right-container"></div>
    </div>
</template>

<script setup></script>
<style scoped>
.container {
    display: flex;
    height: 3.5rem;
    /* background-color: beige; */
    flex-shrink: 0;
    border-bottom: 1px solid #ececec;
    margin: 0 1.5rem;
}

.left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 25%;
    /* background-color: green; */
}
.center-container {
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 50%;
    /* background-color: blue; */
}
.right-container {

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 25%;
    /* background-color: red; */
    cursor: pointer;
}

.left-container span {
    color: #f74320;
    font-weight: 800;
    font-size: 1.5rem;
}
</style>