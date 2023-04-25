//----エンティティに関する関数

//全エンティティ共通
function updatePosition(entity){
  entity.x += entity.vx;
  entity.y += entity.vy;
}

//プレイヤーエンティティ
function createPlayer() {
  return {
    x:200,
    y:300,
    vx:0,
    vy:0
  };
}

function applyGravity(entity){
  entity.vy += 0.15;
}

function applyJump(entity){
  entity.vy = -5
}

function drawPlayer(entity){
  square(entity.x, entity.y, 40);
}

//ブロックエンティティ


//----ゲーム全体

/** プレイヤーエンティティ */
let player;

/** ブロックエンティティ */

//----setup/draw関数

function setup() {
  createCanvas(800, 600); // 800 x 600 ピクセル。今回このサイズでやっていきます
  rectMode(CENTER);

  //プレイヤーを作成
  player = createPlayer();
}

function draw() {
  //データの処理
  //プレイヤーの位置を更新
  updatePosition(player);

  //プレイヤーに重力を適用
  applyGravity(player);
 
 
  background(0); // 黒背景。後で自由に変えていただきます
  //描画処理
  drawPlayer(player);

  console.log(player.y);
}

function mousePressed(){
  //マウス（左）ボタンを押したときの処理
  applyJump(player);
}