/** ------------------------------系统配置----------------------------------------- */
//全局配置
var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 600;

//系统字体文件配置
var FONT_SOURCE = './res/font/BitMicro01.fnt';
var FONT_FAMILY = 'BitMicro01';

//游戏动画帧
var GAME_FRAME = 1;
//游戏速度
var GAME_SPEED = 2;
//游戏得分系数
var GAME_SCORE_RATIO = 10;

/** ------------------------------游戏模块配置----------------------------------------- */
//背景配置
//速度
var BACKGROUND_SPEED = GAME_SPEED;
//循环周期
var BACKGROUND_LOOP_TIME = 1;
//图片资源
var BACKGROUND_IMAGES = ['./res/atlas/background/background.png', './res/atlas/floor/floor.png','./res/atlas/background/background.png'];

//云朵配置
//速度
var CLOUD_SPEED = GAME_SPEED;
//云朵资源
var CLOUD_IMAGE = './res/atlas/floor/floor.png';
//云朵尺寸
var CLOUD_WIDTH = 100;
var CLOUD_HEIGHT = 50;
//一屏幕内云朵数量
var CLOUD_NUMBER = 4;

//灯笼配置
var LANTERN_SPEED = GAME_SPEED;
//灯笼资源
var LANTERN_IMAGE = './res/atlas/floor/floor.png';
//灯笼尺寸
var LANTERN_WIDTH = 70;
var LANTERN_HEIGHT = 70;
//灯笼出现的几率
var LANTERN_CHANCE = 0.1;

//萝卜配置
var RADISH_SPEED = GAME_SPEED;
//萝卜资源
var RADISH_IMAGE = './res/atlas/floor/floor.png';
//萝卜尺寸
var RADISH_WIDTH = 30;
var RADISH_HEIGHT = 30;
//萝卜出现的几率
var RADISH_CHANCE = 0.05;

//tutu配置
var TUTU_JUMP_ATLAS = './res/atlas/fly.atlas';
var TUTU_FLY_ATLAS = './res/atlas/stand.atlas';
var TUTU_FALL_ATLAS = './res/atlas/fly.atlas';
//tutu尺寸
var TUTU_WIDTH = 80;
var TUTU_HEIGHT = 80;
//tutu起跳速度
var TUTU_JUMP_INIT_SPEED = 10;
//tutu飞行速度
var TUTU_FLY_INIT_SPEED = 10;
//tutu重力加速度
var TUTU_FALL_G = -0.25;
