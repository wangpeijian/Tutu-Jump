/** ------------------------------系统配置----------------------------------------- */
//全局配置
var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 600;

//系统字体文件配置
var FONT_SOURCE = '../laya/font/BitMicro01.fnt';
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
var BACKGROUND_IMAGES = ['../laya/assets/background/background_01.png', '../laya/assets/background/background_02.png','../laya/assets/background/background_03.png','../laya/assets/background/background_04.png','../laya/assets/background/background_05.png'];

//云朵配置
//速度
var CLOUD_SPEED = GAME_SPEED;
//云朵资源
var CLOUD_IMAGE = ['../laya/assets/cloud/cloud_01.png', '../laya/assets/cloud/cloud_02.png'];
//云朵尺寸
var CLOUD_WIDTH = 100;
var CLOUD_HEIGHT = 50;
//一屏幕内云朵数量
var CLOUD_NUMBER = 4;

//灯笼配置
var LANTERN_SPEED = GAME_SPEED;
//灯笼资源
var LANTERN_IMAGE = '../laya/assets/lantern/lanmp.png';
var LANTERN_ANI = './lanmpUp.ani';
//灯笼尺寸
var LANTERN_WIDTH = 70;
var LANTERN_HEIGHT = 70;
//灯笼出现的几率
var LANTERN_CHANCE = 1;

//萝卜配置
var RADISH_SPEED = GAME_SPEED;
//萝卜资源
var RADISH_IMAGE = '../laya/assets/radish/radish.png';
//萝卜尺寸
var RADISH_WIDTH = 30;
var RADISH_HEIGHT = 30;
//萝卜出现的几率
var RADISH_CHANCE = 1;

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

//月亮配置
var MOON = '../laya/assets/moon/moon.png';
var MOON_LOVE = '../laya/assets/moon/love.png';
var MOON_WIDTH = 232;
var MOON_HEIGHT = 178;

/** ------------------------------页面资源配置----------------------------------------- */
//按钮皮肤
var BUTTON_SKIN_START = '../laya/assets/button/button_start.png';
var BUTTON_SKIN_AGAIN = '../laya/assets/button/button_again.png';
var BUTTON_SKIN_NEXT = '../laya/assets/button/button_next.png';
var BUTTON_WIDTH = 140;
var BUTTON_HEIGHT = 50;
var BUTTON_FONT_SIZE = 26;
var BUTTON_FONT_COLOR = '#F9DD69';
var BUTTON_FONT_COLOR_ACTIVE = '#FFFFFF';

//输入框皮肤
var INPUT_SKIN = '../laya/assets/input/frame_01.png';
var INPUT_WIDTH = 190;
var INPUT_HEIGHT = 50;
var INPUT_FONT_SIZE = 22;
var INPUT_FONT_COLOR = '#089FEA';
var INPUT_PROMPT_COLOR = '#089FEA';

//logo配置
var LOGO_FORM = '../laya/assets/logo/logo_01.png';
var LOGO_FORM_WIDTH = 190;
var LOGO_FORM_HEIGHT = 100;

//表单下边距
var FORM_MARGIN_BOTTOM = 20;


//封面页
var COVER_PAGE_BACKGROUND = '../laya/assets/pages/cover_page_background.jpg';

//表单页
var FORM_PAGE_BACKGROUND = '../laya/assets/pages/form_page_background.png';

//说明页
var EXPLAIN_PAGE_BACKGROUND = '../laya/assets/pages/explain_page_background.png';

//游戏页面
//计分板
var GAME_SCORE_PANEL = '../laya/assets/score/scoreboard.png'
var GAME_SCORE_PANEL_WIDTH = 220;
var GAME_SCORE_PANEL_HEIGHT = 30;

var STATUS_NORMAL = '../laya/assets/score/normal.png'
var STATUS_NORMAL_WIDTH = 15;
var STATUS_NORMAL_HEIGHT = 20;
var STATUS_RADISH_EMPTY = '../laya/assets/score/radish_empty.png'
var STATUS_RADISH = '../laya/assets/score/radish.png'
var STATUS_RADISH_WIDTH = 15;
var STATUS_RADISH_HEIGHT = 20;
var STATUS_FAT_EMPTY = '../laya/assets/score/fat_empty.png'
var STATUS_FAT = '../laya/assets/score/fat.png'
var STATUS_FAT_WIDTH = 15;
var STATUS_FAT_HEIGHT = 20;
//面板状态间距
var STATUS_PADDING = 10;