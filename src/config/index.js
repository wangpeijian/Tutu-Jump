/** ------------------------------系统配置----------------------------------------- */
//全局配置
var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

//游戏动画帧
var GAME_FRAME = 1;
//游戏速度
var GAME_SPEED = 5;

/** ------------------------------模块配置----------------------------------------- */
//背景配置
//速度
var BACKGROUND_SPEED = GAME_SPEED;
//循环周期
var BACKGROUND_LOOP_TIME = 1;
//图片资源
var BACKGROUND_IMAGES = ['../laya/assets/background/background.png', '../laya/assets/floor/floor.png','../laya/assets/background/background.png'];

//云朵配置
//速度
var CLOUD_SPEED = GAME_SPEED;
//云朵资源
var CLOUD_IMAGE = '../laya/assets/floor/floor.png';
//云朵尺寸
var CLOUD_WIDTH = 200;
var CLOUD_HEIGHT = 50;
//一屏幕内云朵数量
var CLOUD_NUMBER = 4;

//灯笼配置
var LANTERN_SPEED = GAME_SPEED;
//灯笼资源
var LANTERN_IMAGE = '../laya/assets/floor/floor.png';
//灯笼尺寸
var LANTERN_WIDTH = 70;
var LANTERN_HEIGHT = 70;
//灯笼出现的几率
var LANTERN_CHANCE = 0.1;
