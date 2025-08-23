<template>
    <div id="app" class="app-container">
        <div class="link-container">
            <router-link to="/E8G3_6">
                <img src="../../../assets/下一页.png" />
            </router-link>
        </div>

        <div class="container">

            <div class="question">
                现在我们又多看到了一个证据，你觉得什么原因/什么样的积木能让玩具发出音乐？
            </div>

            <div class="options">
                <div v-for="(option, index) in options" :key="index" class="option"
                    :class="{ selected: selectedOption === index }" @click="selectOption(index)">
                    <div class="avatar">
                        <img :src="require(`@/assets/0606/E8H儿童${option.gender}.png`)" :alt="option.gender + '头像'">
                    </div>
                    <div class="option-text">
                        {{ option.label }}. {{ option.text }}
                    </div>
                </div>
            </div>
        </div>

        <audio ref="audio" :src="require('@/music/A_little_story.mp3')"></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            participants: 4274,
            completed: 0,
            selectedOption: null,
            options: [
                {
                    label: 'A',
                    text: '颜色一样的两个积木和花纹一样的两个积木都能让玩具发出音乐',
                    gender: 'A'
                },
                {
                    label: 'B',
                    text: '花纹一样的两个积木能让玩具发出音乐',
                    gender: 'B'
                },
                {
                    label: 'C',
                    text: '颜色一样的两个积木能让玩具发出音乐',
                    gender: 'C'
                }
            ]
        }
    },
    methods: {
        selectOption(index) {
            this.selectedOption = index;
            this.completed += 1;

            // 播放音频
            // this.$refs.audio.play();
        },
    }
}
</script>

<style scoped>
.app-container {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
    color: #333;
}
.hint-btn {
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 6px;
    font-weight: bold;
    color: #495057;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    cursor: default;
}
.hint-buttons {
    display: flex;
    gap: 15px;
}
.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.link-container {
    position: fixed;
    /* 固定定位 */
    bottom: 20px;
    /* 距离底部20像素 */
    right: 20px;
    /* 距离右边20像素 */
    display: flex;
    flex-direction: column;
    /* 竖向排列 */
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.counter {
    font-size: 14px;
    color: #666;
}

.question {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.option {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: all 0.2s;
}

.option:hover {
    background-color: #f0f0f0;
}

.option.selected {
    background-color: #e1f5fe;
    border-left: 4px solid #039be5;
}

.avatar,
.avatar-large {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.avatar {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    background-color: #ddd;
}

.avatar-large {
    width: 80px;
    height: 80px;
    background-color: #eee;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.avatar img,
.avatar-large img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.option-text {
    flex: 1;
}

.avatars-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
    justify-content: center;
}

.section-title {
    text-align: center;
    margin: 30px 0 15px;
    color: #555;
}
</style>