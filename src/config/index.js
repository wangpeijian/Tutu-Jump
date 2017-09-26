/** ------------------------------系统配置----------------------------------------- */
//项目服务器地址
var SERVER_PATH = "http://act.guoanfamily.com/staticWeb/jumptutu/";
var SHARE_TITLE = "TUTU JUMP";
var SHARE_DESC = "中秋国庆，双节同庆";

//全局配置
var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 650;

//系统字体文件配置
// var FONT_SOURCE = '../laya/font/BitMicro01.fnt';
var FONT_FAMILY = 'BitMicro';

//游戏动画帧
var GAME_FRAME = 1;
//游戏初始速度
var GAME_SPEED_DEFAULT = 2
//游戏速度
var GAME_SPEED = GAME_SPEED_DEFAULT;
//游戏加速频率
var GAME_ADD_SPEED_FREQUENCY = 1000;
//游戏加速系数
var GAME_ADD_SPEED_RATE = 0.1;
//游戏得分系数
var GAME_SCORE_RATIO = 0.1;
//游戏BGM
var GAME_BGM = "./res/sounds/bgmusic.mp3";

/** ------------------------------游戏模块配置----------------------------------------- */
//背景配置
//速度
//var BACKGROUND_SPEED = GAME_SPEED;
//循环周期
var BACKGROUND_LOOP_TIME = 1;
//图片资源
var BACKGROUND_IMAGES = ['./background/background_01.png',
 './background/background_02.png',
 './background/background_03.png',
 './background/background_04.png',
 './background/background_05.png'];

//云朵配置
//速度
//var CLOUD_SPEED = GAME_SPEED;
//云朵资源
var CLOUD_IMAGE = ['cloud/cloud_01.png', 'cloud/cloud_02.png'];
//云朵尺寸
var CLOUD_WIDTH = 100;
var CLOUD_HEIGHT = 50;
//一屏幕内云朵数量
var CLOUD_NUMBER = 4;

//灯笼配置
var LANTERN_SPEED = GAME_SPEED * 2;
//灯笼资源
var LANTERN_IMAGE = 'lantern/lanmp.png';
var LANTERN_ANI = './lanmpUp.ani';
//灯笼尺寸
var LANTERN_WIDTH = 90;
var LANTERN_HEIGHT = 109;
//灯笼出现的几率
var LANTERN_CHANCE = 0.1;
//灯笼加速n毫秒
var LANTERN_FLY_TIME = 5 * 1000;
//灯笼加速倍数
var LANTERN_SPEED_RATE = 2;

//萝卜配置
//var RADISH_SPEED = GAME_SPEED;
//萝卜资源
var RADISH_IMAGE = 'radish/radish.png';
//萝卜尺寸
var RADISH_WIDTH = 60;
var RADISH_HEIGHT = 60;
//萝卜出现的几率
var RADISH_CHANCE = 1;

//tutu配置
var TUTU_JUMP_JSON = './res/atlas/rabbit.json';
var TUTU_JUMP_FAT_JSON = './res/atlas/rabbit_fat.json';
var TUTU_JUMP_ANI = './rabbitJump.ani';
var TUTU_JUMP_FAT_ANI = './rabbitFatJump.ani';
var TUTU_FLY_ANI = './rabbitFly.ani';
var TUTU_FLY_FAT_ANI = './rabbitFatFly.ani';

var TUTU_JUMP_SOUND = './res/sounds/jump.mp3';
var TUTU_JUMP_FAT_SOUND = './res/sounds/jumpslow.mp3';
var TUTU_DEATH_SOUND = './res/sounds/death.mp3';
var TUTU_FLY_SOUND = './res/sounds/fly.mp3';

//tutu正常动画执行时间
var TUTU_ANIMATION_DURING = 500;

//tutu尺寸
var TUTU_WIDTH = 80;
var TUTU_HEIGHT = 110;
//tutu起跳速度
var TUTU_JUMP_INIT_SPEED = 10;
//tutu飞行速度
var TUTU_FLY_INIT_SPEED = 10;
//tutu重力加速度
var TUTU_FALL_G = -0.25;

//胖tutu尺寸
var TUTU_FAT_WIDTH = 120;
var TUTU_FAT_HEIGHT = 120;
//tutu起跳速度
var TUTU_FAT_JUMP_INIT_SPEED = 10;
//tutu飞行速度
var TUTU_FAT_FLY_INIT_SPEED = 10;
//tutu重力加速度
var TUTU_FAT_FALL_G = -0.3;
//tutu移动阻力
var TUTU_FAT_MOVE_FRICTION = 0.8;
//胖tutu变身时间
var TUTU_FAT_TIME = 5000;

//tutu桃心动画
var TUTU_LOVE_WIDTH = 45;
var TUTU_LOVE_HEIGHT = 45;
var TUTU_LOVE_ANI = './tutuLove.ani';

//月亮配置
var MOON = 'moon/moon.png';
var MOON_WIDTH = 232;
var MOON_HEIGHT = 178;
var MOON_LOVE_ANI = "./moonLove.ani";
var MOON_THROW_RADISH_ANI = "./moonThrewRadish.ani";

/** ------------------------------页面资源配置----------------------------------------- */
//按钮皮肤
var BUTTON_SKIN_START = 'button/button_start.png';
var BUTTON_SKIN_AGAIN = 'button/button_again.png';
var BUTTON_SKIN_NEXT = 'button/button_next.png';
var BUTTON_WIDTH = 140;
var BUTTON_HEIGHT = 50;
var BUTTON_FONT_SIZE = 26;
var BUTTON_FONT_COLOR = '#F9DD69';
var BUTTON_FONT_COLOR_ACTIVE = '#FFFFFF';

//输入框皮肤
var INPUT_SKIN = 'input/frame_01.png';
var INPUT_WIDTH = 190;
var INPUT_HEIGHT = 50;
var INPUT_FONT_SIZE = 22;
var INPUT_FONT_COLOR = '#089FEA';
var INPUT_PROMPT_COLOR = '#089FEA';

//logo配置
var LOGO_FORM = 'logo/logo_01.png';
var LOGO_FORM_WIDTH = 190;
var LOGO_FORM_HEIGHT = 100;

//表单下边距
var FORM_MARGIN_BOTTOM = 20;


//封面页
var COVER_PAGE_BACKGROUND = './pages/cover_page_background.jpg';

//表单页
var FORM_PAGE_BACKGROUND = './pages/form_page_background.png';

//说明页
var EXPLAIN_PAGE_BACKGROUND_YUN = './pages/explain_page_background_yun.png';
var EXPLAIN_PAGE_BACKGROUND_WX = './pages/explain_page_background_wx.png';

//游戏页面
//计分板
var GAME_SCORE_PANEL = 'score/scoreboard.png'
var GAME_SCORE_PANEL_WIDTH = 220;
var GAME_SCORE_PANEL_HEIGHT = 30;

// var STATUS_NORMAL = 'score/normal.png'
// var STATUS_NORMAL_WIDTH = 15;
// var STATUS_NORMAL_HEIGHT = 20;
// var STATUS_RADISH_EMPTY = 'score/radish_empty.png'
// var STATUS_RADISH = 'radish/radish.png'
// var STATUS_RADISH_WIDTH = 15;
// var STATUS_RADISH_HEIGHT = 20;
// var STATUS_FAT_EMPTY = 'score/fat_empty.png'
// var STATUS_FAT = 'score/fat.png'
// var STATUS_FAT_WIDTH = 15;
// var STATUS_FAT_HEIGHT = 20;
// //面板状态间距
// var STATUS_PADDING = 10;

var STATUS_ANI = './fatStaus.ani';