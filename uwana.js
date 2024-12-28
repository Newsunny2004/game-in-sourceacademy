/*

SWS3012 Structure and Interpretation of Computer Programs

Course project: UWANNA

Project team members: SU YANFEI, KONG ANYUAN, ZHU ZHRYU, JIANG YONGQIAN.

Resources used: pictures from github, background music from 'https://www.1nzb.com'.

< Enter any assets or sources here, and their licenses.

Clearly indicate if you have used assets or sources without 
complying with their licenses.

You will not be penalized if you have: This is for the 
instructor to decide whether to use your project as a demo 
of Source Academy. >

*/


import {
    enable_debug, debug_log, create_rectangle, create_sprite,
    create_text, query_position, update_color, update_position, update_scale,
    update_text, set_fps, input_key_down, gameobjects_overlap, update_loop,
    build_game, create_audio, play_audio, stop_audio, update_rotation, create_triangle
} from "arcade_2d";

//enable_debug();


// Constants
const gravity = 0.5;
let jump_strength = 7.2;
let jump_strength2 = 4.2;
const speed = 4.4;
const ground_level = 550;
const block_size = 20;
const game_width = 800;
const game_height = 600;
const player_height = 329;
const player_width = 182;
const suofang = 40 / player_height;
const suofang1 = 30 / player_width;
const player_height1 = player_height * suofang;
const player_width1 = player_width * suofang1;
const ehun_height = 225;
const ehun_width = 222;
const suofang2 = 40 / ehun_height;
const suofang3 = 38 / ehun_width;
const ehun_height1 = player_height * suofang2;
const ehun_width1 = player_width * suofang3;
let direction = 0;
let h = 0;
let nh = 0;
let h1 = 0;
let nh1 = 0;
let n7 = 0;
let w = 0;
let nw = 0;
let jumpn = 0;
let walk = 1;
let walk2 = 1;
let ifwalk = 0;
let level = 1;
let firen = 0;
let firespeed = 0;
let setpossitionn = 1;
let canfire = 1;

set_fps(60);

const back = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/0451c02a7ad74350b3edbe36e9b2cf2.jpg"), [0.879, 0.884]), [200, 303]);
const back2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/01a4536364b836931e0bf88144e919d.jpg"), [1, 1]), [-500, 303]);
//const back = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/0451c02a7ad74350b3edbe36e9b2cf2.jpg"), [0.875, 0.875]), [200, 300]);
// Create Game Objects


const fireball = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E7%81%AB%E7%90%83.png"), [15 / 69, 15 / 70]), [-100, -100]);
const fullpath1 = create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%915.png");
update_position(fullpath1, [-100, -100]);


const player0 = [update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%911.png"), [suofang1, suofang]),
update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%912.png"), [suofang1, suofang]),
update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%913.png"), [suofang1, suofang]),
update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%914.png"), [suofang1, suofang])];
const player1 = [update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%915.png"), [suofang1, suofang]),
update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%916.png"), [suofang1, suofang]),
update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%917.png"), [suofang1, suofang]),
update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%918.png"), [suofang1, suofang])];

const player2 = [update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%821.png"), [suofang3, suofang2]), [-100, -100]),
update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%822.png"), [suofang3, suofang2]), [-100, -100]),
update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%823.png"), [suofang3, suofang2]), [-100, -100]),
update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%825.png"), [suofang3, suofang2]), [-100, -100])];

const playerfire2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%828.png"), [suofang3, suofang2]), [-100, -100]);
const player3 = [update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%829.png"), [suofang3, suofang2]), [-100, -100]),
update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%8210.png"), [suofang3, suofang2]), [-100, -100]),
update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%8211.png"), [suofang3, suofang2]), [-100, -100]),
update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%8213.png"), [suofang3, suofang2]), [-100, -100])];
const playerfire3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%81%B6%E9%AD%8216.png"), [suofang3, suofang2]), [-100, -100]);
//const fireball=update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E7%81%AB%E7%90%83.png"),[15/69,15/70]),[-100,-100]);

const fullpath = create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E6%9D%91%E6%B0%911.png");

let player = update_scale(update_color(update_position(fullpath, [-125, ground_level - 40]), [255, 255, 255, 255]), [suofang1, suofang]);
let player22 = update_scale(update_color(update_position(player2[0], [-125, ground_level - 40]), [255, 255, 255, 255]), [suofang1, suofang]);
//const blockphoto=update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/eca06142969bbdd9b4249e479cbd4b0.png"),[block_size/243,block_size/243]),[200,255,220,255]);    
let blockphoto = [];
for (let i = 0; i < 300; i = i + 1) {
    blockphoto[i] = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/eca06142969bbdd9b4249e479cbd4b0.png"), [block_size / 243, block_size / 243]), [200, 255, 220, 255]), [-100, -100]);
}
const ground = update_color(update_position(update_scale(create_rectangle(game_width, 20), [1, 1]), [game_width / 2, ground_level + 10]), [255, 255, 255, 0]);

const coin = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [550, ground_level - block_size * 25.5]);
const coin2 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [300, ground_level - block_size * 8]);
const coin3 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [540, ground_level - block_size * 3]);
const coin4 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [280, ground_level - block_size * 18]);
const door = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c5c3e4057815cb847be8dbd67ee1c14.png"), [block_size / 200, block_size / 200]), [255, 255, 225, 255]), [40, ground_level - block_size * 25.6]);


const chuansong1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E4%BC%A0%E9%80%81%E9%97%A8.png"), [20 / 388, 40 / 408]), [-100, -100]);
const chuansong2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E4%BC%A0%E9%80%81%E9%97%A8.png"), [20 / 388, 40 / 408]), [-100, -100]);
const chuansong3 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E4%BC%A0%E9%80%81%E9%97%A8.png"), [20 / 388, 40 / 408]), [180, 255, 160, 255]), [-100, -100]);
const chuansong4 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E4%BC%A0%E9%80%81%E9%97%A8.png"), [20 / 388, 40 / 408]), [180, 255, 160, 255]), [-100, -100]);


update_position(update_color(blockphoto[9], [255, 255, 255, 250]), [280, ground_level - block_size * 6]);
update_position(update_color(blockphoto[10], [255, 255, 255, 250]), [300, ground_level - block_size * 6]);
update_position(update_color(blockphoto[11], [255, 255, 255, 250]), [320, ground_level - block_size * 6]);

const button = update_position(update_color(create_rectangle(10, 10), [153, 0, 0, 200]), [20, ground_level - block_size * 23.25]);

const blocks = [
    update_position(blockphoto[0], [60, ground_level - block_size]),
    update_position(blockphoto[1], [80, ground_level - block_size]),
    update_position(blockphoto[2], [100, ground_level - block_size]),
    update_position(blockphoto[3], [100, ground_level - block_size * 2]),
    update_position(blockphoto[4], [100, ground_level - block_size * 3]),
    update_position(blockphoto[5], [160, ground_level - block_size * 4]),
    update_position(blockphoto[6], [180, ground_level - block_size * 4]),
    update_position(blockphoto[7], [240, ground_level - block_size * 6]),
    update_position(blockphoto[8], [260, ground_level - block_size * 6]),/*
        update_position(blockphoto[9], [0, ground_level - block_size * 24]),
        update_position(blockphoto[10], [300, ground_level - block_size * 6]),
        update_position(blockphoto[11], [320, ground_level - block_size * 6]),*/
    update_position(blockphoto[12], [340, ground_level - block_size * 6]),
    update_position(blockphoto[13], [360, ground_level - block_size * 6]),
    update_position(blockphoto[14], [380, ground_level - block_size * 6]),
    update_position(blockphoto[15], [400, ground_level - block_size * 6]),
    update_position(blockphoto[16], [420, ground_level - block_size]),
    update_position(blockphoto[17], [440, ground_level - block_size]),
    update_position(blockphoto[18], [460, ground_level - block_size * 4]),
    update_position(blockphoto[19], [480, ground_level - block_size * 4]),
    update_position(update_color(blockphoto[20], [255, 255, 255, 255]), [520, ground_level - block_size * 7]),
    update_position(update_color(blockphoto[21], [255, 200, 255, 130]), [590, ground_level - block_size * 7]),
    update_position(blockphoto[22], [460, ground_level - block_size * 12]),
    update_position(blockphoto[23], [440, ground_level - block_size * 12]),
    update_position(blockphoto[24], [420, ground_level - block_size * 12]),
    update_position(blockphoto[25], [400, ground_level - block_size * 12]),
    update_position(blockphoto[26], [380, ground_level - block_size * 12]),
    update_position(blockphoto[27], [360, ground_level - block_size * 12]),/*
        update_position(blockphoto[28], [20, ground_level - block_size * 23]),*/
    update_position(update_color(blockphoto[29], [255, 255, 255, 255]), [120, ground_level - block_size * 25]),
    update_position(update_color(blockphoto[30], [255, 255, 255, 255]), [120, ground_level - block_size * 26]),
    update_position(update_color(blockphoto[31], [255, 255, 255, 255]), [120, ground_level - block_size * 27]),/*
        update_position(blockphoto[32], [260, ground_level - block_size * 11]),
        update_position(blockphoto[33], [240, ground_level - block_size * 11]),*/
    update_position(blockphoto[34], [220, ground_level - block_size * 11]),
    update_position(blockphoto[35], [200, ground_level - block_size * 11]),
    update_position(blockphoto[37], [160, ground_level - block_size * 14]),
    update_position(blockphoto[38], [140, ground_level - block_size * 14]),
    update_position(blockphoto[39], [100, ground_level - block_size * 17]),
    update_position(blockphoto[40], [80, ground_level - block_size * 17]),
    update_position(blockphoto[41], [20, ground_level - block_size * 20]),
    update_position(blockphoto[42], [40, ground_level - block_size * 20]),
    update_position(blockphoto[43], [20, ground_level - block_size * 24]),
    update_position(blockphoto[44], [40, ground_level - block_size * 24]),
    update_position(blockphoto[45], [60, ground_level - block_size * 24]),
    update_position(blockphoto[46], [80, ground_level - block_size * 24]),
    update_position(blockphoto[47], [100, ground_level - block_size * 24]),
    update_position(blockphoto[48], [120, ground_level - block_size * 24]),
    update_position(blockphoto[49], [140, ground_level - block_size * 24]),
    update_position(blockphoto[50], [160, ground_level - block_size * 24]),
    update_position(blockphoto[51], [180, ground_level - block_size * 24]),
    update_position(blockphoto[52], [200, ground_level - block_size * 24]),
    update_position(blockphoto[53], [180, ground_level - block_size * 20]),
    update_position(blockphoto[54], [200, ground_level - block_size * 19]),
    update_position(blockphoto[55], [220, ground_level - block_size * 18]),
    update_position(blockphoto[56], [240, ground_level - block_size * 17]),
    update_position(blockphoto[57], [260, ground_level - block_size * 16]),
    update_position(blockphoto[58], [280, ground_level - block_size * 16]),
    update_position(blockphoto[59], [300, ground_level - block_size * 16]),
    update_position(blockphoto[60], [320, ground_level - block_size * 17]),
    update_position(blockphoto[61], [340, ground_level - block_size * 18]),
    update_position(blockphoto[62], [360, ground_level - block_size * 19]),
    update_position(blockphoto[63], [380, ground_level - block_size * 20]),
    update_position(blockphoto[64], [280, ground_level - block_size * 20]),
    update_position(blockphoto[65], [280, ground_level - block_size * 21]),
    update_position(blockphoto[66], [460, ground_level - block_size * 22]),
    update_position(blockphoto[67], [480, ground_level - block_size * 21]),
    update_position(blockphoto[68], [500, ground_level - block_size * 20]),
    update_position(blockphoto[69], [520, ground_level - block_size * 20]),
    update_position(blockphoto[70], [540, ground_level - block_size * 20]),
    update_position(blockphoto[71], [560, ground_level - block_size * 20]),
    update_position(blockphoto[72], [580, ground_level - block_size * 20]),
    update_position(blockphoto[73], [460, ground_level - block_size * 27]),
    update_position(blockphoto[74], [480, ground_level - block_size * 27]),
    update_position(blockphoto[75], [500, ground_level - block_size * 27]),
    update_position(blockphoto[76], [520, ground_level - block_size * 25]),
    update_position(blockphoto[77], [540, ground_level - block_size * 24]),
    update_position(blockphoto[78], [560, ground_level - block_size * 23]),
    update_position(blockphoto[79], [280, ground_level - block_size * 22]),
    update_position(blockphoto[80], [280, ground_level - block_size * 23]),
    update_position(blockphoto[81], [280, ground_level - block_size * 24]),
    update_position(blockphoto[82], [280, ground_level - block_size * 25]),
    update_position(blockphoto[83], [280, ground_level - block_size * 26]),
    update_position(blockphoto[84], [280, ground_level - block_size * 27]),
    update_position(blockphoto[85], [400, ground_level - block_size * 29]),
    update_position(blockphoto[86], [400, ground_level - block_size * 28]),
    update_position(blockphoto[87], [0, ground_level - block_size * 24]),
    update_position(blockphoto[88], [0, ground_level - block_size * 23]),
    update_position(blockphoto[89], [0, ground_level - block_size * 22]),
    update_position(blockphoto[90], [0, ground_level - block_size * 21]),
    update_position(blockphoto[91], [0, ground_level - block_size * 20])
];

let blocks2 = [];

let monster1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/1.png"), [block_size / 100, block_size / 100]), [-100, -100]);
let monster2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/2.png"), [block_size / 100, block_size / 100]), [-100, -100]);
let monster3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/3.png"), [block_size / 100, block_size / 100]), [-100, -100]);
let monster4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/4.png"), [block_size / 100, block_size / 100]), [-100, -100]);
let monster5 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/5.png"), [block_size / 50, block_size / 50]), [-100, -100]);
let monster = [monster1, monster2, monster3, monster4, monster5];
let all_monster = update_position(monster1, [-50, -50]);
let move_monster = 0;
let move = 0;

let move_pig = 0;
let movep = 0;
let dmove = 1;
let pig = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/pig2.png"), [block_size / 100, block_size / 100]), [-100, -100]);

const xue = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/%E8%A1%80.png"), [60 / 1200, 60 / 1200]), [255, 255, 225, 255]), [-100, -100]);
let timexue = 0;
let xuen = 0;

const triangle1 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [280, ground_level - block_size * 0.57]), [255, 255, 255, 255]);
const triangle2 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [300, ground_level - block_size * 0.57]), [255, 255, 255, 255]);
const triangle3 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [320, ground_level - block_size * 0.57]), [255, 255, 255, 255]);
const triangle4 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [460, ground_level - block_size * 26]), [255, 255, 255, 255]);
const triangle5 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [480, ground_level - block_size * 26]), [255, 255, 255, 255]);
//const triangle6 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21/270,21/270]), [500, ground_level - block_size * 26]),[255,255,255,255]);
const triangle7 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [520, ground_level - block_size * 19]), [255, 255, 255, 255]);
const triangle8 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), 3 * math_PI / 2), [21 / 270, 21 / 270]), [620, ground_level - block_size * 25]), [255, 255, 255, 255]);
const triangle9 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), 3 * math_PI / 2), [21 / 270, 21 / 270]), [620, ground_level - block_size * 24]), [255, 255, 255, 255]);
const triangle10 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), 3 * math_PI / 2), [21 / 270, 21 / 270]), [620, ground_level - block_size * 23]), [255, 255, 255, 255]);
const triangle11 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), 3 * math_PI / 2), [21 / 270, 21 / 270]), [620, ground_level - block_size * 22]), [255, 255, 255, 255]);
const triangle12 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), 3 * math_PI / 2), [21 / 270, 21 / 270]), [620, ground_level - block_size * 21]), [255, 255, 255, 255]);
const triangle13 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [540, ground_level]), [255, 255, 255, 255]);


let coin5 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [-100, -100]);
let coin6 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [-100, -100]);
let coin7 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [-100, -100]);
let coin8 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [-100, -100]);
let coin9 = update_position(update_color(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/fa10575d33ae0f52bd66a791b474675.png"), [block_size / 222, block_size / 222]), [255, 255, 225, 255]), [-100, -100]);
let button2 = update_position(update_color(create_rectangle(10, 10), [153, 0, 0, 200]), [-100, -100]);
const triangle14 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle15 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI / 2), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle16 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI / 2), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle17 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI / 2), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle18 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI / 2), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle19 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle20 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle21 = update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
//const triangle22= update_color(update_position(update_scale(update_rotation(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), math_PI), [21/270,21/270]), [-100, -100]),[255,255,255,50]);
const triangle23 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle24 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle25 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle26 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle27 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle28 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);

const triangle29 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle30 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);

const triangle31 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);
const triangle32 = update_color(update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Newsunny2004/project1/main/images/c8aff95753957be9ac52386c76a3742.png"), [21 / 270, 21 / 270]), [-100, -100]), [255, 255, 255, 255]);


const checkblock1 = update_position(update_color(create_rectangle(block_size, block_size), [255, 255, 255, 0]), [520, ground_level - block_size * 8]);


const score_text = update_position(create_text("Score: 0"), [50, 20]);
//const test_text = update_position(create_text("Score: 0"), [80, 36]);
const fire_text = update_position(create_text("Press K to fire"), [-100, -100]);
const win_text = update_color(update_scale(update_position(create_text("You Win!"), [-100, -100]), [4, 4]), [100, 255, 100, 250]);
const coin_text = update_position(create_text("Get at least 5 coins\n" + "to open the door."), [-100, -100]);

let velocity = [0, 0];
let on_ground = false;
let score = 0;

// Audio
//const jump_audio = create_audio("https://labs.phaser.io/assets/audio/SoundEffects/jump.wav", 1);
//const bg_audio = play_audio(create_audio("https://cvws.icloud-content.com.cn/B/Ae4xM0mTAuNhXB5BGobMU3-Bd8TpASxwOF3tqQU1W_whKoy0dYvTEGN3/tianehu.mp3?o=AtNKy764tHm6shLA2gFfEEqPUeQfsEdTbt2YVfipLYqY&v=1&x=3&a=CAogCgNl8GwEUAoLP52yvkRzFnsJEnp8QB9P3Ke14akz75gSbxCMhuGnjDIYjOO8qYwyIgEAUgSBd8TpWgTTEGN3aicFFHNxPzCp_SocNULv7YdYwkme8kUXnAxSKIcPufpQ1vQM5WnDLxdyJ1Ic0WEM6q0olZ9o_I-DO4YZBr91jzWqoGfrQZ9TPJowefaNQ8bKUw&e=1721295122&fl=&r=ed7bcdac-9d63-4f2b-9571-c03312d13b13-1&k=L7oS8NL8bq2_mA4zTNbr8g&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=223&s=HsGfHIuitOqX4gTA37iFQlqSMbg&cd=i", 1));
const bg_audio = play_audio(create_audio("https://m10.music.126.net/20240714232904/c86391b397a5e746a2825f808627bbae/ymusic/b6a5/82b1/670f/83511546db7a5930004a4ed197d4bce4.mp3", 1));
const lose = create_audio("https://labs.phaser.io/assets/audio/stacker/gamelost.m4a", 1);
const eat = create_audio("https://labs.phaser.io/assets/audio/SoundEffects/key.wav", 1);

// Handle Input
function handle_input() {
    if (input_key_down("a")) {
        velocity[0] = -speed;
        direction = 1;
        ifwalk = 1;

    } else if (input_key_down("d")) {
        velocity[0] = speed;
        direction = 0;
        ifwalk = 1;

    } else {
        ifwalk = 0;
        velocity[0] = 0;
    }

    if (input_key_down("w") && on_ground) {
        velocity[1] = -jump_strength;
        // velocity[0] = -10;
        //debug_log(on_ground);
        //debug_log(velocity);
        //play_audio(jump_audio);
        on_ground = false;
    }
    if (input_key_down("j") && input_key_down("i")) {
        jumpn = 1;
    } else {
        jumpn = 0;
        //jump_strength=7.2
    }
    if (input_key_down("l") && input_key_down("2")) {
        update_position(player, [40, ground_level - block_size * 27]);
    }
}

function handle_input2() {
    if (input_key_down("a")) {
        velocity[0] = -speed;
        direction = 1;
        ifwalk = 1;

    } else if (input_key_down("d")) {
        velocity[0] = speed;
        direction = 0;
        ifwalk = 1;
        if (dmove === 1) {
            movep = 1;
            dmove = 0;
        }
    } else {
        ifwalk = 0;
        velocity[0] = 0;
    }

    if (input_key_down("w")) {
        velocity[1] = -jump_strength2;
        // velocity[0] = -10;
        // debug_log(on_ground);
        //debug_log(velocity);
        //play_audio(jump_audio);
        on_ground = false;
    }
    if (input_key_down("j") && input_key_down("i")) {
        jumpn = 1;
    } else {
        jumpn = 0;
        //jump_strength=7.2
    }
    if (input_key_down("k") && canfire === 1) {
        firen = 1;
        canfire = 0;
        if (direction === 0) {
            update_position(fireball, query_position(player22));
            update_position(playerfire2, query_position(player22));
            firespeed = 7;
        } else {
            update_position(fireball, query_position(player22));
            update_position(playerfire3, query_position(player22));
            firespeed = -7;
        }
    }
}

function check_collision(rect1, rect2) {
    const pos1 = query_position(rect1);
    const pos2 = query_position(rect2);
    return (math_abs(pos1[0] - pos2[0]) < 32) && (math_abs(pos1[1] - pos2[1]) < 32);
}
function check_collision1(rect1, rect2) {
    const pos1 = query_position(rect1);
    const pos2 = query_position(rect2);
    return (math_abs(pos1[0] - pos2[0]) < 27) && (math_abs(pos1[1] - pos2[1]) < 27);
}
function check_collision2(rect1, rect2) {
    const pos1 = query_position(rect1);
    const pos2 = query_position(rect2);
    return (math_abs(pos1[0] - pos2[0]) < 29) && (math_abs(pos1[1] - pos2[1]) < 29);
}
function check_collision3(rect1, rect2) {
    const pos1 = query_position(rect1);
    const pos2 = query_position(rect2);
    return (math_abs(pos1[0] - pos2[0]) < 32) && (math_abs(pos1[1] - pos2[1]) < 30);
}
function check_collision4(rect1, rect2) {
    const pos1 = query_position(rect1);
    const pos2 = query_position(rect2);
    return (math_abs(pos1[0] - pos2[0]) < 10) && (math_abs(pos1[1] - pos2[1]) < 10);
}
function check_collision5(rect1, rect2) {
    const pos1 = query_position(rect1);
    const pos2 = query_position(rect2);
    return (math_abs(pos1[0] - pos2[0]) < 20) && (math_abs(pos1[1] - pos2[1]) < 20);
}
// Update Loop
update_loop(game => {
    if (level === 1) {
        handle_input();

        if (direction === 1) {
            if (ifwalk === 0) {
                player = update_position(player1[0], query_position(player));
                //player=player1[0];

                //update_position(player1[0],[-100,-100] );
                update_position(player1[1], [-100, -100]);
                update_position(player1[2], [-100, -100]);
                update_position(player1[3], [-100, -100]);
                update_position(player0[0], [-100, -100]);
                update_position(player0[1], [-100, -100]);
                update_position(player0[2], [-100, -100]);
                update_position(player0[3], [-100, -100]);
            } else {
                if (walk < 2) {
                    player = update_position(player1[1], query_position(player));
                    walk = walk + 0.1;
                    update_position(player1[0], [-100, -100]);
                    //update_position(player1[1],[-100,-100] );
                    update_position(player1[2], [-100, -100]);
                    update_position(player1[3], [-100, -100]);
                    update_position(player0[0], [-100, -100]);
                    update_position(player0[1], [-100, -100]);
                    update_position(player0[2], [-100, -100]);
                    update_position(player0[3], [-100, -100]);
                } else if (walk < 3) {
                    player = update_position(player1[2], query_position(player));
                    walk = walk + 0.1;
                    update_position(player1[0], [-100, -100]);
                    update_position(player1[1], [-100, -100]);
                    //update_position(player1[2],[-100,-100] );
                    update_position(player1[3], [-100, -100]);
                    update_position(player0[0], [-100, -100]);
                    update_position(player0[1], [-100, -100]);
                    update_position(player0[2], [-100, -100]);
                    update_position(player0[3], [-100, -100]);
                } else if (walk < 4) {
                    player = update_position(player1[3], query_position(player));
                    walk = walk + 0.1;
                    update_position(player1[0], [-100, -100]);
                    update_position(player1[1], [-100, -100]);
                    update_position(player1[2], [-100, -100]);
                    //update_position(player1[3],[-100,-100] );
                    update_position(player0[0], [-100, -100]);
                    update_position(player0[1], [-100, -100]);
                    update_position(player0[2], [-100, -100]);
                    update_position(player0[3], [-100, -100]);
                } else if (walk > 4) {
                    walk = 1;
                }
            }
        } else {
            if (ifwalk === 0) {
                player = update_position(player0[0], query_position(player));
                update_position(player1[0], [-100, -100]);
                update_position(player1[1], [-100, -100]);
                update_position(player1[2], [-100, -100]);
                update_position(player1[3], [-100, -100]);
                //update_position(player0[0],[-100,-100] );
                update_position(player0[1], [-100, -100]);
                update_position(player0[2], [-100, -100]);
                update_position(player0[3], [-100, -100]);
            } else {
                if (walk < 2) {
                    player = update_position(player0[1], query_position(player));
                    walk = walk + 0.1;
                    update_position(player1[1], [-100, -100]);
                    update_position(player1[1], [-100, -100]);
                    update_position(player1[2], [-100, -100]);
                    update_position(player1[3], [-100, -100]);
                    update_position(player0[0], [-100, -100]);
                    //update_position(player0[1],[-100,-100] );
                    update_position(player0[2], [-100, -100]);
                    update_position(player0[3], [-100, -100]);
                } else if (walk < 3) {
                    player = update_position(player0[2], query_position(player));
                    walk = walk + 0.1;
                    update_position(player1[0], [-100, -100]);
                    update_position(player1[1], [-100, -100]);
                    update_position(player1[2], [-100, -100]);
                    update_position(player1[3], [-100, -100]);
                    update_position(player0[0], [-100, -100]);
                    update_position(player0[1], [-100, -100]);
                    //update_position(player0[2],[-100,-100] );
                    update_position(player0[3], [-100, -100]);
                } else if (walk < 4) {
                    player = update_position(player0[3], query_position(player));
                    walk = walk + 0.1;
                    update_position(player1[0], [-100, -100]);
                    update_position(player1[1], [-100, -100]);
                    update_position(player1[2], [-100, -100]);
                    update_position(player1[3], [-100, -100]);
                    update_position(player0[0], [-100, -100]);
                    update_position(player0[1], [-100, -100]);
                    update_position(player0[2], [-100, -100]);
                    //update_position(player0[3],[-100,-100] );
                } else if (walk > 4) {
                    walk = 1;
                }
            }

        }


        // Apply gravity
        if (!on_ground) { velocity[1] = velocity[1] + gravity; }
        //debug_log("VELOCITY:");
        //debug_log(velocity);

        // Update position
        const position = query_position(player);
        let new_position = [position[0] + velocity[0], position[1] + velocity[1]];

        if (check_collision(player, blockphoto[21])) {
            jump_strength = 12;
        } else {
            jump_strength = 7.2;
        }

        if (jumpn === 1) {
            jump_strength = 25;
        } else if (jumpn === 0) {
            //jump_strength=7.2;
            jumpn = 0.5;
        }
        //检查是否踩到尖刺
        function check_gameover(rect1, rect2) {
            if (check_collision1(rect1, rect2)) {
                timexue = 0;
                xuen = 1;
                update_position(xue, query_position(player));
                new_position = [0, ground_level - 40];
                nh = 0;
                h1 = 0;
                score = 0;
                n7 = 0;
                nw = 0;
                w = 0;
                update_position(coin, [550, ground_level - block_size * 25.5]);
                update_position(coin2, [300, ground_level - block_size * 8]);
                update_position(coin3, [540, ground_level - block_size * 3]);
                update_position(coin4, [280, ground_level - block_size * 18]);
                update_position(triangle7, [520, ground_level - block_size * 19]);
                update_position(triangle8, [790, ground_level - block_size * 25]);
                update_position(triangle9, [790, ground_level - block_size * 24]);
                update_position(triangle10, [790, ground_level - block_size * 23]);
                update_position(triangle11, [790, ground_level - block_size * 22]);
                update_position(triangle12, [790, ground_level - block_size * 21]);
                update_position(triangle13, [540, ground_level]);
                play_audio(lose);
            }
        }

        if (xuen === 1) {
            if (timexue < 255) {
                timexue = timexue + 1;
                update_color(xue, [255, 120, 120, 255 - timexue]);
            } else {
                xuen = 0;
            }
        }
        check_gameover(player, triangle1);
        check_gameover(player, triangle2);
        check_gameover(player, triangle3);
        check_gameover(player, triangle4);
        check_gameover(player, triangle5);
        // check_gameover(player,triangle6);
        check_gameover(player, triangle7);
        check_gameover(player, triangle8);
        check_gameover(player, triangle9);
        check_gameover(player, triangle10);
        check_gameover(player, triangle11);
        check_gameover(player, triangle12);
        check_gameover(player, triangle13);
        if (check_collision3(player, checkblock1) && n7 === 0) {
            if (h1 > 190) {
                nh1 = 1;
            } else if (h1 < 0) {
                nh1 = 0;
                n7 = 1;
            }

            if (nh1 === 1) {
                h1 = h1 - 4;
            } else if (nh1 === 0) {
                h1 = h1 + 9;
            }
            update_position(triangle7, [520, ground_level - block_size * 19 + h1]);
        }
        // check get coin
        if (check_collision1(coin, player)) {
            nw = 1;
            score = score + 1;
            play_audio(eat);
            update_position(coin, [-100, -100]);
            update_position(blockphoto[79], [260, ground_level - block_size * 22]);
        }
        if (check_collision1(coin2, player)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin2, [-100, -100]);
        }
        if (check_collision1(coin3, player)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin3, [-100, -100]);
        }
        if (check_collision1(coin4, player)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin4, [-100, -100]);
        }

        // the moving triangle
        if (nw === 1) {
            if (w < 380) {
                w = w + 0.8;
            } else if (w < 700) {
                w = w + 1;
            }
            update_position(triangle8, [790 - w, ground_level - block_size * 25]);
            update_position(triangle9, [790 - w, ground_level - block_size * 24]);
            update_position(triangle10, [790 - w, ground_level - block_size * 23]);
            update_position(triangle11, [790 - w, ground_level - block_size * 22]);
            update_position(triangle12, [790 - w, ground_level - block_size * 21]);
        }
        // the moving door
        if (check_collision4(button, player)) {
            //update_position(player, [220, ground_level - block_size * 27]);
            update_position(button, [20, ground_level - block_size * 23.4]);
            update_position(blockphoto[29], [100, -100]);
            update_position(blockphoto[30], [100, -100]);
            update_position(blockphoto[31], [100, -100]);
        }
        // debug_log(new_position);
        // the moving blocks
        if (h === 80) {
            nh = 1;
        } else if (h === 0) {
            nh = 0;
        }

        if (nh === 1) {
            h = h - 0.5;
        } else if (nh === 0) {
            h = h + 0.5;
        }

        update_position(blockphoto[39], [100, ground_level - block_size * 15 - h]);
        update_position(blockphoto[40], [80, ground_level - block_size * 15 - h]);

        update_position(blockphoto[34], [220 + h, ground_level - block_size * 11]);
        update_position(blockphoto[35], [200 + h, ground_level - block_size * 11]);
        // Check ground collision
        if (new_position[1] >= ground_level - 20) {
            new_position[1] = ground_level - 20;
            velocity[1] = 0;
            on_ground = true;
        } else {
            on_ground = false;
        }


        // Check block collision
        for (let i = 0; i < array_length(blocks); i = i + 1) {
            const block = blocks[i];
            if (gameobjects_overlap(player, block)) {
                const block_pos = query_position(block);

                // Determine the direction of collision
                const dx = position[0] - block_pos[0];
                const dy = position[1] - block_pos[1];

                if (math_abs(dx) > math_abs(dy)) {
                    // Horizontal collision
                    if (dx > 0) {
                        velocity[0] = 0;
                        new_position[0] = block_pos[0] + block_size / 2 + player_width1 / 2 + 0.01;
                    } else {
                        velocity[0] = 0;
                        new_position[0] = block_pos[0] - block_size / 2 - player_width1 / 2 - 0.01;
                    }
                    velocity[0] = 0;
                } else {
                    // Vertical collision
                    if (dy > 0) { // Falling down
                        new_position[1] = block_pos[1] + block_size / 2 + 20.01;
                        velocity[1] = 0;
                        //on_ground = true;
                    } else { // Jumping up
                        if (!input_key_down("w")) { new_position[1] = block_pos[1] - block_size / 2 - 20; }
                        velocity[1] = 0;
                        on_ground = true;
                    }
                }
            }
        }

        update_position(player, new_position);
        // check if reach the door
        if (check_collision3(player, door)) {
            level = 2;
            for (let i = 0; i < 92; i = i + 1) {
                update_position(blockphoto[i], [-100, -100]);

            }
            update_position(back2, [300, 40]);
            //on_ground=false;
            blocks2 = [
                update_position(blockphoto[0], [10, ground_level - block_size * 3]),
                update_position(blockphoto[1], [30, ground_level - block_size * 3]),
                update_position(blockphoto[2], [50, ground_level - block_size * 3]),
                update_position(blockphoto[3], [70, ground_level - block_size * 3]),
                update_position(blockphoto[4], [90, ground_level - block_size * 3]),
                update_position(blockphoto[5], [110, ground_level - block_size * 3]),
                update_position(blockphoto[6], [130, ground_level - block_size * 3]),
                update_position(blockphoto[7], [150, ground_level - block_size * 3]),
                update_position(blockphoto[8], [170, ground_level - block_size * 3]),
                update_position(blockphoto[269], [190, ground_level - block_size * 3]),
                update_position(blockphoto[268], [210, ground_level - block_size * 3]),
                update_position(blockphoto[267], [230, ground_level - block_size * 3]),
                update_position(blockphoto[12], [250, ground_level - block_size * 3]),
                update_position(blockphoto[13], [250, ground_level - block_size * 4]),
                update_position(blockphoto[14], [250, ground_level - block_size * 5]),
                update_position(blockphoto[256], [250, ground_level - block_size * 6]),
                update_position(blockphoto[257], [230, ground_level - block_size * 6]),
                update_position(blockphoto[298], [210, ground_level - block_size * 6]),
                update_position(blockphoto[259], [190, ground_level - block_size * 6]),
                update_position(blockphoto[260], [170, ground_level - block_size * 6]),
                update_position(blockphoto[261], [150, ground_level - block_size * 6]),
                update_position(blockphoto[262], [130, ground_level - block_size * 6]),
                update_position(blockphoto[263], [110, ground_level - block_size * 6]),
                update_position(blockphoto[264], [90, ground_level - block_size * 6]),
                update_position(blockphoto[265], [70, ground_level - block_size * 6]),
                update_position(blockphoto[266], [50, ground_level - block_size * 6]),
                update_position(blockphoto[24], [30, ground_level - block_size * 6]),
                update_position(blockphoto[25], [10, ground_level - block_size * 6]),
                update_position(blockphoto[26], [70, ground_level - block_size * 9]),
                update_position(blockphoto[27], [90, ground_level - block_size * 9]),
                update_position(blockphoto[28], [110, ground_level - block_size * 9]),
                update_position(blockphoto[270], [130, ground_level - block_size * 9]),
                update_position(blockphoto[151], [150, ground_level - block_size * 9]),
                update_position(blockphoto[152], [170, ground_level - block_size * 9]),
                update_position(blockphoto[153], [190, ground_level - block_size * 9]),
                update_position(blockphoto[154], [210, ground_level - block_size * 9]),
                update_position(blockphoto[272], [210, ground_level - block_size * 10]),
                update_position(blockphoto[273], [210, ground_level - block_size * 11]),
                update_position(blockphoto[32], [230, ground_level - block_size * 11]),
                update_position(blockphoto[33], [250, ground_level - block_size * 11]),
                update_position(blockphoto[34], [250, ground_level - block_size * 12]),
                update_position(blockphoto[35], [250, ground_level - block_size * 13]),
                update_position(blockphoto[36], [250, ground_level - block_size * 14]),
                update_position(blockphoto[37], [250, ground_level - block_size * 15]),
                update_position(blockphoto[38], [230, ground_level - block_size * 15]),
                update_position(blockphoto[155], [210, ground_level - block_size * 15]),
                update_position(blockphoto[39], [190, ground_level - block_size * 15]),
                update_position(blockphoto[40], [170, ground_level - block_size * 15]),
                update_position(blockphoto[41], [150, ground_level - block_size * 15]),
                update_position(blockphoto[42], [130, ground_level - block_size * 15]),
                update_position(blockphoto[43], [110, ground_level - block_size * 15]),
                update_position(blockphoto[44], [90, ground_level - block_size * 15]),
                update_position(blockphoto[45], [70, ground_level - block_size * 15]),
                update_position(blockphoto[46], [50, ground_level - block_size * 15]),
                update_position(blockphoto[47], [30, ground_level - block_size * 15]),
                update_position(blockphoto[48], [10, ground_level - block_size * 15]),
                update_position(blockphoto[49], [250, ground_level - block_size * 16]),
                update_position(blockphoto[50], [250, ground_level - block_size * 17]),
                update_position(blockphoto[51], [250, ground_level - block_size * 18]),
                update_position(blockphoto[52], [250, ground_level - block_size * 19]),
                update_position(blockphoto[53], [250, ground_level - block_size * 20]),
                update_position(blockphoto[54], [250, ground_level - block_size * 21]),
                update_position(blockphoto[55], [250, ground_level - block_size * 22]),
                update_position(blockphoto[56], [250, ground_level - block_size * 23]),
                update_position(blockphoto[57], [250, ground_level - block_size * 24]),
                update_position(blockphoto[58], [250, ground_level - block_size * 25]),
                update_position(blockphoto[59], [250, ground_level - block_size * 26]),
                update_position(blockphoto[60], [250, ground_level - block_size * 27]),
                // update_position(blockphoto[61], [130, ground_level - block_size * 18]),
                update_position(blockphoto[62], [110, ground_level - block_size * 18]),
                update_position(blockphoto[63], [90, ground_level - block_size * 21]),
                update_position(blockphoto[64], [70, ground_level - block_size * 21]),
                update_position(blockphoto[65], [50, ground_level - block_size * 24]),
                update_position(blockphoto[66], [30, ground_level - block_size * 24]),
                update_position(blockphoto[67], [90, ground_level - block_size * 18]),
                update_position(blockphoto[68], [70, ground_level - block_size * 18]),
                update_position(blockphoto[69], [50, ground_level - block_size * 18]),
                update_position(blockphoto[70], [30, ground_level - block_size * 18]),
                update_position(blockphoto[71], [10, ground_level - block_size * 18]),
                update_position(blockphoto[74], [-10, ground_level - block_size * 1]),
                update_position(blockphoto[75], [-10, ground_level - block_size * 2]),
                update_position(blockphoto[76], [-10, ground_level - block_size * 3]),
                update_position(blockphoto[77], [-10, ground_level - block_size * 4]),
                update_position(blockphoto[78], [-10, ground_level - block_size * 5]),
                update_position(blockphoto[79], [-10, ground_level - block_size * 6]),
                update_position(blockphoto[80], [-10, ground_level - block_size * 7]),
                update_position(blockphoto[81], [-10, ground_level - block_size * 8]),
                update_position(blockphoto[82], [-10, ground_level - block_size * 9]),
                update_position(blockphoto[83], [-10, ground_level - block_size * 10]),
                update_position(blockphoto[84], [-10, ground_level - block_size * 11]),
                update_position(blockphoto[85], [-10, ground_level - block_size * 12]),
                update_position(blockphoto[86], [-10, ground_level - block_size * 13]),
                update_position(blockphoto[87], [-10, ground_level - block_size * 14]),
                update_position(blockphoto[88], [-10, ground_level - block_size * 15]),
                update_position(blockphoto[89], [-10, ground_level - block_size * 16]),
                update_position(blockphoto[91], [-10, ground_level - block_size * 17]),
                update_position(blockphoto[92], [-10, ground_level - block_size * 18]),
                update_position(blockphoto[93], [-10, ground_level - block_size * 19]),
                update_position(blockphoto[94], [-10, ground_level - block_size * 20]),
                update_position(blockphoto[95], [-10, ground_level - block_size * 21]),
                update_position(blockphoto[96], [-10, ground_level - block_size * 22]),
                update_position(blockphoto[97], [-10, ground_level - block_size * 23]),
                update_position(blockphoto[98], [-10, ground_level - block_size * 24]),
                update_position(blockphoto[99], [-10, ground_level - block_size * 25]),
                update_position(blockphoto[100], [-10, ground_level - block_size * 26]),
                update_position(blockphoto[101], [-10, ground_level - block_size * 27]),
                update_position(blockphoto[102], [-10, ground_level - block_size * 28]),
                update_position(blockphoto[103], [10, ground_level - block_size * 28]),
                update_position(blockphoto[104], [30, ground_level - block_size * 28]),
                update_position(blockphoto[105], [50, ground_level - block_size * 28]),
                update_position(blockphoto[106], [70, ground_level - block_size * 28]),
                update_position(blockphoto[107], [90, ground_level - block_size * 28]),
                update_position(blockphoto[108], [110, ground_level - block_size * 28]),
                update_position(blockphoto[109], [130, ground_level - block_size * 28]),
                update_position(blockphoto[110], [150, ground_level - block_size * 28]),
                update_position(blockphoto[111], [170, ground_level - block_size * 28]),
                update_position(blockphoto[112], [190, ground_level - block_size * 28]),
                update_position(blockphoto[113], [210, ground_level - block_size * 28]),
                update_position(blockphoto[114], [230, ground_level - block_size * 28]),
                update_position(blockphoto[115], [250, ground_level - block_size * 28]),
                update_position(blockphoto[116], [270, ground_level - block_size * 28]),
                update_position(blockphoto[117], [290, ground_level - block_size * 28]),
                update_position(blockphoto[118], [310, ground_level - block_size * 28]),
                update_position(blockphoto[119], [330, ground_level - block_size * 28]),
                update_position(blockphoto[120], [350, ground_level - block_size * 28]),
                update_position(blockphoto[121], [370, ground_level - block_size * 28]),
                update_position(blockphoto[122], [390, ground_level - block_size * 28]),
                update_position(blockphoto[123], [410, ground_level - block_size * 28]),
                update_position(blockphoto[124], [370, ground_level - block_size * 27]),
                update_position(blockphoto[125], [370, ground_level - block_size * 26]),
                update_position(blockphoto[126], [370, ground_level - block_size * 25]),
                update_position(blockphoto[127], [370, ground_level - block_size * 24]),
                update_position(blockphoto[128], [370, ground_level - block_size * 23]),
                update_position(blockphoto[129], [370, ground_level - block_size * 22]),
                update_position(blockphoto[133], [370, ground_level - block_size * 18]),
                update_position(blockphoto[134], [370, ground_level - block_size * 17]),
                update_position(blockphoto[135], [370, ground_level - block_size * 16]),
                update_position(blockphoto[136], [370, ground_level - block_size * 15]),
                update_position(blockphoto[137], [370, ground_level - block_size * 14]),
                update_position(blockphoto[138], [370, ground_level - block_size * 13]),
                update_position(blockphoto[139], [370, ground_level - block_size * 12]),
                update_position(blockphoto[140], [370, ground_level - block_size * 11]),
                update_position(blockphoto[141], [370, ground_level - block_size * 10]),
                update_position(blockphoto[142], [370, ground_level - block_size * 9]),
                update_position(blockphoto[143], [370, ground_level - block_size * 8]),
                update_position(blockphoto[144], [370, ground_level - block_size * 7]),
                update_position(blockphoto[145], [370, ground_level - block_size * 6]),
                update_position(blockphoto[146], [370, ground_level - block_size * 5]),
                update_position(blockphoto[147], [370, ground_level - block_size * 4]),
                update_position(blockphoto[148], [370, ground_level - block_size * 3]),
                update_position(blockphoto[149], [370, ground_level - block_size * 2]),
                update_position(blockphoto[150], [370, ground_level - block_size * 1]),
                update_position(blockphoto[156], [430, ground_level - block_size * 28]),
                update_position(blockphoto[157], [450, ground_level - block_size * 28]),
                update_position(blockphoto[158], [470, ground_level - block_size * 28]),
                update_position(blockphoto[159], [490, ground_level - block_size * 28]),
                update_position(blockphoto[160], [510, ground_level - block_size * 28]),
                update_position(blockphoto[161], [530, ground_level - block_size * 28]),
                update_position(blockphoto[162], [550, ground_level - block_size * 28]),
                update_position(blockphoto[163], [570, ground_level - block_size * 28]),
                update_position(blockphoto[164], [590, ground_level - block_size * 28]),
                update_position(blockphoto[165], [610, ground_level - block_size * 28]),
                update_position(blockphoto[166], [610, ground_level - block_size * 27]),
                update_position(blockphoto[167], [610, ground_level - block_size * 26]),
                update_position(blockphoto[168], [610, ground_level - block_size * 25]),
                update_position(blockphoto[169], [610, ground_level - block_size * 24]),
                update_position(blockphoto[170], [610, ground_level - block_size * 23]),
                update_position(blockphoto[171], [610, ground_level - block_size * 22]),
                update_position(blockphoto[172], [610, ground_level - block_size * 21]),
                update_position(blockphoto[173], [610, ground_level - block_size * 20]),
                update_position(blockphoto[174], [610, ground_level - block_size * 19]),
                update_position(blockphoto[175], [610, ground_level - block_size * 18]),
                update_position(blockphoto[176], [610, ground_level - block_size * 17]),
                update_position(blockphoto[177], [610, ground_level - block_size * 16]),
                update_position(blockphoto[178], [610, ground_level - block_size * 15]),
                update_position(blockphoto[179], [610, ground_level - block_size * 14]),
                update_position(blockphoto[180], [610, ground_level - block_size * 13]),
                update_position(blockphoto[181], [610, ground_level - block_size * 12]),
                update_position(blockphoto[182], [610, ground_level - block_size * 11]),
                update_position(blockphoto[183], [610, ground_level - block_size * 10]),
                update_position(blockphoto[184], [610, ground_level - block_size * 9]),
                update_position(blockphoto[185], [610, ground_level - block_size * 8]),
                update_position(blockphoto[186], [610, ground_level - block_size * 7]),
                update_position(blockphoto[187], [610, ground_level - block_size * 6]),
                update_position(blockphoto[188], [610, ground_level - block_size * 5]),
                update_position(blockphoto[189], [610, ground_level - block_size * 4]),
                update_position(blockphoto[190], [610, ground_level - block_size * 3]),
                update_position(blockphoto[191], [610, ground_level - block_size * 2]),
                update_position(blockphoto[192], [610, ground_level - block_size * 1]),
                update_position(blockphoto[193], [590, ground_level - block_size * 6]),
                update_position(blockphoto[194], [570, ground_level - block_size * 6]),
                update_position(blockphoto[195], [550, ground_level - block_size * 6]),
                update_position(blockphoto[196], [530, ground_level - block_size * 6]),
                update_position(blockphoto[197], [510, ground_level - block_size * 6]),
                update_position(blockphoto[198], [490, ground_level - block_size * 6]),
                update_position(blockphoto[199], [470, ground_level - block_size * 6]),
                update_position(blockphoto[200], [450, ground_level - block_size * 6]),
                update_position(blockphoto[201], [530, ground_level - block_size * 17]),
                update_position(blockphoto[202], [550, ground_level - block_size * 17]),
                update_position(blockphoto[203], [530, ground_level - block_size * 11]),
                update_position(blockphoto[204], [510, ground_level - block_size * 12]),
                update_position(blockphoto[205], [490, ground_level - block_size * 13]),
                update_position(blockphoto[206], [470, ground_level - block_size * 14]),
                update_position(blockphoto[207], [450, ground_level - block_size * 15]),
                update_position(blockphoto[208], [430, ground_level - block_size * 16]),
                update_position(blockphoto[209], [410, ground_level - block_size * 17]),
                update_position(blockphoto[210], [390, ground_level - block_size * 18]),
                /*update_position(blockphoto[211], [590, ground_level - block_size * 27]),*/
                update_position(blockphoto[212], [530, ground_level - block_size * 21]),
                update_position(blockphoto[213], [550, ground_level - block_size * 21]),
                update_position(blockphoto[214], [310, ground_level - block_size * 3]),
                update_position(blockphoto[215], [330, ground_level - block_size * 3]),
                update_position(blockphoto[216], [10, ground_level - block_size * 14])
            ];

            update_position(xue, [-100, -100]);
            // blocks that can not be seen
            update_position(update_color(blockphoto[130], [255, 255, 255, 180]), [370, ground_level - block_size * 21]);
            update_position(update_color(blockphoto[131], [255, 255, 255, 180]), [370, ground_level - block_size * 20]);
            update_position(update_color(blockphoto[132], [255, 255, 255, 180]), [370, ground_level - block_size * 19]);

            update_position(coin5, [150, ground_level - block_size * 4]);
            update_position(coin6, [130, ground_level - block_size * 10]);
            update_position(coin7, [40, ground_level - block_size * 25]);
            update_position(coin8, [400, ground_level - block_size * 20]);
            update_position(coin9, [470, ground_level - block_size * 3]);
            update_position(triangle14, [210, ground_level - block_size * 8]);
            update_position(triangle15, [10, ground_level - block_size * 9]);
            update_position(triangle16, [10, ground_level - block_size * 10]);
            update_position(triangle17, [10, ground_level - block_size * 11]);
            update_position(triangle18, [10, ground_level - block_size * 12]);
            update_position(triangle19, [190, ground_level - block_size * 14]);
            update_position(triangle20, [210, ground_level - block_size * 14]);
            update_position(triangle21, [230, ground_level - block_size * 14]);
            //update_position(triangle22, [70, ground_level - block_size * 17]);
            update_position(triangle23, [190, ground_level - block_size * 16]);
            update_position(triangle24, [210, ground_level - block_size * 16]);
            update_position(triangle25, [230, ground_level - block_size * 16]);
            update_position(triangle26, [450, ground_level - block_size]);
            update_position(triangle27, [470, ground_level - block_size]);
            update_position(triangle28, [490, ground_level - block_size]);
            update_position(triangle29, [570, ground_level - block_size * 7]);
            update_position(triangle30, [590, ground_level - block_size * 7]);

            update_position(button2, [355, ground_level - block_size * 8]);

            update_position(all_monster, [310, ground_level - block_size * 26]);
            nw = 0;
            w = 0;



            update_position(triangle1, [-100, -100]);
            update_position(triangle2, [-100, -100]);
            update_position(triangle3, [-100, -100]);
            update_position(triangle4, [-100, -100]);
            update_position(triangle5, [-100, -100]);
            update_position(triangle7, [-100, -100]);
            update_position(triangle8, [-100, -100]);
            update_position(triangle9, [-100, -100]);
            update_position(triangle10, [-100, -100]);
            update_position(triangle11, [-100, -100]);
            update_position(triangle12, [-100, -100]);
            update_position(triangle13, [-100, -100]);

            update_position(coin, [-100, -100]);
            update_position(coin2, [-100, -100]);
            update_position(coin3, [-100, -100]);
            update_position(coin4, [-100, -100]);

            update_position(chuansong4, [230, ground_level - block_size * 12.5]);
            update_position(chuansong1, [590, ground_level - block_size * 26.5]);
            update_position(chuansong3, [10, ground_level - block_size * 16.5]);
            update_position(chuansong2, [10, ground_level - block_size * 4.5]);

            update_position(button, [-100, -100]);

            update_position(door, [550, ground_level - block_size * 1.5]);

            update_position(player, [-110, ground_level - block_size]);
            //update_position(player22,[10,ground_level-40]);

        }


    } else if (level === 2) {
        handle_input2();

        update_position(fire_text, [140, 525]);

        update_position(player0[0], [-100, -100]);
        update_position(player0[1], [-100, -100]);
        update_position(player0[2], [-100, -100]);
        update_position(player0[3], [-100, -100]);
        update_position(fullpath, [-100, -100]);


        if (check_collision3(player22, blockphoto[214])) {
            move_monster = 1;

        }

        if (move_monster === 1) {
            if (move < 380) {
                move = move + 0.8;
            } else if (move < 450) {
                move = move + 1;
            }
            update_position(all_monster, [310, ground_level - block_size * 26 + move]);
        }


        // move pig
        if (movep === 1) {
            if (move_pig < 380) {
                move_pig = move_pig + 0.5;
            }
            update_position(pig, [590 - move_pig, ground_level - block_size * 20]);
        }
        if (check_collision3(pig, coin8)) {
            update_position(coin8, [-100, -100]);
            update_position(pig, [-100, -100]);
            movep = 0;
        } else if (equal(query_position(pig), [400, ground_level - block_size * 20])) {
            update_position(pig, [-100, -100]);
        }

        if (check_collision3(fireball, pig)) {
            update_position(pig, [-100, -100]);
            movep = 0;
        }

        if (direction === 1) {
            if (walk < 2) {
                player22 = update_position(player3[1], query_position(player22));
                walk = walk + 0.1;
                update_position(player3[0], [-100, -100]);
                //update_position(player1[1],[-100,-100] );
                update_position(player3[2], [-100, -100]);
                update_position(player3[3], [-100, -100]);
                update_position(player2[0], [-100, -100]);
                update_position(player2[1], [-100, -100]);
                update_position(player2[2], [-100, -100]);
                update_position(player2[3], [-100, -100]);
            } else if (walk < 3) {
                player22 = update_position(player3[2], query_position(player22));
                walk = walk + 0.1;
                update_position(player3[0], [-100, -100]);
                update_position(player3[1], [-100, -100]);
                //update_position(player1[2],[-100,-100] );
                update_position(player3[3], [-100, -100]);
                update_position(player2[0], [-100, -100]);
                update_position(player2[1], [-100, -100]);
                update_position(player2[2], [-100, -100]);
                update_position(player2[3], [-100, -100]);
            } else if (walk < 4) {
                player22 = update_position(player3[3], query_position(player22));
                walk = walk + 0.1;
                update_position(player3[0], [-100, -100]);
                update_position(player3[1], [-100, -100]);
                update_position(player3[2], [-100, -100]);
                //update_position(player1[3],[-100,-100] );
                update_position(player2[0], [-100, -100]);
                update_position(player2[1], [-100, -100]);
                update_position(player2[2], [-100, -100]);
                update_position(player2[3], [-100, -100]);
            } else if (walk > 4) {
                walk = 1;
                update_position(playerfire3, [-100, -100]);
            }
        }
        else {
            if (walk < 2) {
                player22 = update_position(player2[1], query_position(player22));
                walk = walk + 0.1;
                update_position(player3[0], [-100, -100]);
                update_position(player3[1], [-100, -100]);
                update_position(player3[2], [-100, -100]);
                update_position(player3[3], [-100, -100]);
                update_position(player2[0], [-100, -100]);
                //update_position(player0[1],[-100,-100] );
                update_position(player2[2], [-100, -100]);
                update_position(player2[3], [-100, -100]);
            } else if (walk < 3) {
                player22 = update_position(player2[2], query_position(player22));
                walk = walk + 0.1;
                update_position(player3[0], [-100, -100]);
                update_position(player3[1], [-100, -100]);
                update_position(player3[2], [-100, -100]);
                update_position(player3[3], [-100, -100]);
                update_position(player2[0], [-100, -100]);
                update_position(player2[1], [-100, -100]);
                //update_position(player0[2],[-100,-100] );
                update_position(player2[3], [-100, -100]);
            } else if (walk < 4) {
                player22 = update_position(player2[3], query_position(player22));
                walk = walk + 0.1;
                update_position(player3[0], [-100, -100]);
                update_position(player3[1], [-100, -100]);
                update_position(player3[2], [-100, -100]);
                update_position(player3[3], [-100, -100]);
                update_position(player2[0], [-100, -100]);
                update_position(player2[1], [-100, -100]);
                update_position(player2[2], [-100, -100]);
                //update_position(player0[3],[-100,-100] );
            } else if (walk > 4) {
                walk = 1;
                update_position(playerfire2, [-100, -100]);
            }
        }

        if (walk2 < 2) {
            all_monster = update_position(monster[0], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[1], [-100, -100]);
            update_position(monster[2], [-100, -100]);
            update_position(monster[3], [-100, -100]);
            update_position(monster[4], [-100, -100]);
        } else if (walk2 < 3) {
            all_monster = update_position(monster[1], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[0], [-100, -100]);
            update_position(monster[2], [-100, -100]);
            update_position(monster[3], [-100, -100]);
            update_position(monster[4], [-100, -100]);
        } else if (walk2 < 4) {
            all_monster = update_position(monster[2], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[0], [-100, -100]);
            update_position(monster[1], [-100, -100]);
            update_position(monster[3], [-100, -100]);
            update_position(monster[4], [-100, -100]);
        } else if (walk2 < 5) {
            all_monster = update_position(monster[1], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[0], [-100, -100]);
            update_position(monster[2], [-100, -100]);
            update_position(monster[3], [-100, -100]);
            update_position(monster[4], [-100, -100]);
        } else if (walk2 < 6) {
            all_monster = update_position(monster[0], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[1], [-100, -100]);
            update_position(monster[2], [-100, -100]);
            update_position(monster[3], [-100, -100]);
            update_position(monster[4], [-100, -100]);
        } else if (walk2 < 7) {
            all_monster = update_position(monster[3], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[0], [-100, -100]);
            update_position(monster[1], [-100, -100]);
            update_position(monster[2], [-100, -100]);
            update_position(monster[4], [-100, -100]);
        } else if (walk2 < 8) {
            all_monster = update_position(monster[4], query_position(all_monster));
            walk2 = walk2 + 0.1;
            update_position(monster[0], [-100, -100]);
            update_position(monster[1], [-100, -100]);
            update_position(monster[2], [-100, -100]);
            update_position(monster[3], [-100, -100]);
        } else if (walk2 >= 8) {
            walk2 = 1;
        }

        if (check_collision4(all_monster, blockphoto[214]) || check_collision4(all_monster, blockphoto[215])) {
            update_position(all_monster, [-50, -50]);
        }


        // Apply gravity
        if (!on_ground) { velocity[1] = velocity[1] + gravity; }
        // debug_log("VELOCITY:");
        //debug_log(velocity);

        // Update position
        const position = query_position(player22);
        const position1 = query_position(fireball);
        let new_position = [position[0] + velocity[0], position[1] + velocity[1]];
        let fire_position = [position1[0], position1[1]];
        if (fire_position[0] > 600 || fire_position[0] < 0) {
            fire_position = [-100, -100];
            canfire = 1;
        } else {
            fire_position = [position1[0] + firespeed, position1[1]];
        }

        if (nw === 1) {
            if (w < 380) {
                w = w + 1.4;
            } else if (w < 750) {
                w = w + 2;
            }
            update_position(update_rotation(triangle8, math_PI / 2), [-100 + w, ground_level - block_size * 25]);
            update_position(update_rotation(triangle9, math_PI / 2), [-100 + w, ground_level - block_size * 26]);
            update_position(update_rotation(triangle10, math_PI / 2), [-100 + w, ground_level - block_size * 19]);
            update_position(update_rotation(triangle11, math_PI / 2), [-100 + w, ground_level - block_size * 17]);
            update_position(update_rotation(triangle12, math_PI / 2), [-100 + w, ground_level - block_size * 16]);
        }

        if (jumpn === 1) {
            jump_strength = 25;
        } else if (jumpn === 0) {
            //jump_strength=7.2;
            jumpn = 0.5;
        }
        //检查是否踩到尖刺
        function check_gameover(rect1, rect2) {
            if (check_collision1(rect1, rect2)) {
                timexue = 0;
                xuen = 1;
                update_position(xue, query_position(player22));
                new_position = [20, ground_level - 20];
                nh = 0;
                h1 = 0;
                score = 0;
                n7 = 0;
                nw = 0;
                w = 0;
                move_monster = 0;
                move = 0;
                update_position(coin5, [150, ground_level - block_size * 4]);
                update_position(coin6, [130, ground_level - block_size * 10]);
                update_position(coin7, [40, ground_level - block_size * 25]);
                update_position(coin8, [400, ground_level - block_size * 20]);
                update_position(coin9, [470, ground_level - block_size * 3]);

                update_position(triangle14, [210, ground_level - block_size * 8]);
                update_position(triangle15, [10, ground_level - block_size * 9]);
                update_position(triangle16, [10, ground_level - block_size * 10]);
                update_position(triangle17, [10, ground_level - block_size * 11]);
                update_position(triangle18, [10, ground_level - block_size * 12]);
                update_position(triangle19, [190, ground_level - block_size * 14]);
                update_position(triangle20, [210, ground_level - block_size * 14]);
                update_position(triangle21, [230, ground_level - block_size * 14]);
                //update_position(triangle22, [70, ground_level - block_size * 17]);
                update_position(triangle23, [190, ground_level - block_size * 16]);
                update_position(triangle24, [210, ground_level - block_size * 16]);
                update_position(triangle25, [230, ground_level - block_size * 16]);
                update_position(triangle26, [450, ground_level - block_size]);
                update_position(triangle27, [470, ground_level - block_size]);
                update_position(triangle28, [490, ground_level - block_size]);
                update_position(triangle29, [570, ground_level - block_size * 7]);
                update_position(triangle30, [590, ground_level - block_size * 7]);

                update_position(update_rotation(triangle8, math_PI / 2), [-100, -100]);
                update_position(update_rotation(triangle9, math_PI / 2), [-100, -100]);
                update_position(update_rotation(triangle10, math_PI / 2), [-100, -100]);
                update_position(update_rotation(triangle11, math_PI / 2), [-100, -100]);
                update_position(update_rotation(triangle12, math_PI / 2), [-100, -100]);

                update_position(pig, [590, ground_level - block_size * 20]);
                movep = 0;
                move_pig = 0;
                dmove = 1;

                update_position(all_monster, [310, ground_level - block_size * 26]);
                play_audio(lose);
                // debug_log(new_position);
                update_position(player22, new_position);
            }
        }

        if (xuen === 1) {
            if (timexue < 255) {
                timexue = timexue + 1;
                update_color(xue, [255, 120, 120, 255 - timexue]);
            } else {
                xuen = 0;
            }
        }


        check_gameover(player22, triangle12);
        check_gameover(player22, triangle8);
        check_gameover(player22, triangle9);
        check_gameover(player22, triangle10);
        check_gameover(player22, triangle11);
        check_gameover(player22, triangle12);
        check_gameover(player22, triangle14);
        check_gameover(player22, triangle15);
        check_gameover(player22, triangle16);
        check_gameover(player22, triangle17);
        check_gameover(player22, triangle18);
        check_gameover(player22, triangle19);
        check_gameover(player22, triangle20);
        check_gameover(player22, triangle21);
        //check_gameover(player22,triangle22);
        check_gameover(player22, triangle23);
        check_gameover(player22, triangle24);
        check_gameover(player22, triangle25);
        check_gameover(player22, triangle26);
        check_gameover(player22, triangle27);
        check_gameover(player22, triangle29);
        check_gameover(player22, triangle30);
        check_gameover(player22, all_monster);
        update_position(player22, new_position);
        check_gameover(player22, pig);


        if (check_collision1(coin5, player22)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin5, [-100, -100]);
        }
        if (check_collision1(coin6, player22)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin6, [-100, -100]);
        }
        if (check_collision1(coin7, player22)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin7, [-100, -100]);
        }
        if (check_collision1(coin8, player22)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin8, [-100, -100]);
        }
        if (check_collision1(coin9, player22)) {
            score = score + 1;
            play_audio(eat);
            update_position(coin9, [-100, -100]);
        }
        if (check_collision5(button2, player22)) {
            update_position(button2, [360, ground_level - block_size * 8]);
            update_position(triangle14, [-10, -10]);
        }


        if (check_collision1(coin, player22)) {
            score = score + 1;
            play_audio(eat);
            nw = 1;
            update_position(coin, [-100, -100]);
        }

        if (new_position[1] >= ground_level - 20) {
            new_position[1] = ground_level - 20;
            velocity[1] = 0;
            on_ground = true;
        } else {
            on_ground = false;
        }
        //debug_log(blocks2);
        //debug_log(new_position);  
        // Check block collision
        if (setpossitionn !== 1) {
            for (let i = 0; i < array_length(blocks2); i = i + 1) {
                const block = blocks2[i];

                if (gameobjects_overlap(player22, block)) {
                    const block_pos = query_position(block);

                    // Determine the direction of collision
                    const dx = position[0] - block_pos[0];
                    const dy = position[1] - block_pos[1];

                    if (math_abs(dx) > math_abs(dy)) {
                        // Horizontal collision
                        if (dx > 0) {
                            velocity[0] = 0;
                            new_position[0] = block_pos[0] + block_size / 2 + ehun_width1 / 2 + 4.1;
                        } else {
                            velocity[0] = 0;
                            new_position[0] = block_pos[0] - block_size / 2 - ehun_width1 / 2 - 4.1;
                        }
                        velocity[0] = 0;
                    } else {
                        // Vertical collision
                        if (dy > 0) { // Falling down
                            new_position[1] = block_pos[1] + block_size / 2 + 20.01;
                            velocity[1] = 0;
                            //on_ground = true;
                        } else { // Jumping up
                            if (!input_key_down("w")) { new_position[1] = block_pos[1] - block_size / 2 - 20; }
                            velocity[1] = 0;
                            on_ground = true;
                        }
                    }
                }
            }
        }

        if (check_collision(player22, door)) {
            if (score >= 5) {
                update_position(win_text, [300, 300]);
            } else {
                update_position(coin_text, [500, 480]);
            }
        }

        if (check_collision4(player22, chuansong1)) {
            new_position = [60, ground_level - block_size * 4.5];
        }
        if (check_collision4(player22, chuansong2)) {
            new_position = [550, ground_level - block_size * 25.5];
        }
        if (check_collision4(player22, chuansong3)) {
            new_position = [200, ground_level - block_size * 12.5];
        }
        if (check_collision4(player22, chuansong4)) {
            new_position = [60, ground_level - block_size * 16.5];
            nw = 1;
        }

        if (setpossitionn === 1) {
            update_position(player22, [20, 550]);
            setpossitionn = 0;
            new_position = query_position(player22);
        }

        update_position(player22, new_position);
        update_position(fireball, fire_position);


    }

    // Update score

    update_text(score_text, "Score: " + list_to_string(score)
    );
    /*update_text(test_text, 
                            "\nOnGround:"+list_to_string(on_ground)+
                            "\nVelocity:"+list_to_string(velocity)
                            );*/
});

build_game();