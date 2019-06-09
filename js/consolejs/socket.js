// <!-- 作者：周尚纯 & 陈麒先 -->
// <!-- 编写时间：2019.5.23 -->
// <!-- 发布时间：2019.5.28 -->
// <!-- 最终更新时间：2019.6.9 -->
var socket = new WebSocket("ws://127.0.0.1:8000");

// begin Chris.Chen //
let cnt = 1; // 任务ID计数器
// 功能：解析服务器发送的机器人状态数据并显示与任务列表
function addNewLine(data){

    let tbody = document.getElementsByTagName('tbody')[0];
    let row = document.createElement('tr');
    let curNode = document.createElement('td');
    let taskStatus = document.createElement('td');
    let startTime = document.createElement('td');
    let taskID = document.createElement('td');

    let statusLabel = document.createElement('label');
    
    curNode.innerHTML = data;

    statusLabel.classList.add('badge');
    statusLabel.classList.add('badge-gradient-success');
    statusLabel.innerHTML = '完成';
    taskStatus.appendChild(statusLabel);
    
    startTime.innerHTML = 'June 1st,2019';
    taskID.innerHTML = 'KL-' + cnt;
    cnt ++;

    row.appendChild(curNode);
    row.appendChild(taskStatus);
    row.appendChild(startTime);
    row.appendChild(taskID);
    tbody.appendChild(row);
}
// end Chris.Chen //

socket.onopen = function () {
    /* 与服务器端连接成功后，自动执行 */

    // var newTag = document.createElement('div');
    // newTag.innerHTML = "【连接成功】";
    // document.getElementById('content').appendChild(newTag);
    let conSuccess = document.getElementsByClassName('connection-success')[0];
    let conFail = document.getElementsByClassName('connection-fail')[0];
    let conWait = document.getElementsByClassName('connection-wait')[0];
    console.log(conSuccess);
    conSuccess.style.display = "block";
    conFail.style.display = "none";
    conWait.style.display = "none";
    console.log("connect succeed!");
};

socket.onmessage = function (event) {
    /* 服务器端向客户端发送数据时，自动执行 */
    var response = event.data;
    // let status = document.getElementById('status');
    // status.innerHTML = response;
    addNewLine(response);
    // newTag.innerHTML = response;
    // document.getElementById('content').appendChild(newTag);
    console.log(response);
};

socket.onclose = function (event) {
    /* 服务器端主动断开连接时，自动执行 */
    // var newTag = document.createElement('div');
    // newTag.innerHTML = "【关闭连接】";
    // document.getElementById('content').appendChild(newTag);
    let conSuccess = document.getElementsByClassName('connection-success')[0];
    let conFail = document.getElementsByClassName('connection-fail')[0];
    let conWait = document.getElementsByClassName('connection-wait')[0];
    console.log(conSuccess);
    conSuccess.style.display = "none";
    conFail.style.display = "block";
    conWait.style.display = "none";
    console.log("on close!");
};

function startMsg() {
    // var txt = document.getElementById('txt');
    socket.send("start");
    // txt.value = ""; 
    console.log("startMsg()start");
}

function stopMsg(){
    socket.send("stop");
    console.log("stopMsg()start");
}

function resumeMsg(){
    socket.send("resume");
    console.log("resumeMsg()start");
}

function closeConn() {
    socket.close();
    // var newTag = document.createElement('div');
    // newTag.innerHTML = "【关闭连接】";
    // document.getElementById('content').appendChild(newTag);
    console.log("close connection!");
}
function cleanScreen() {
    var f = document.getElementById("content");
    var childs = f.childNodes;
    for (var i = childs.length - 1; i >= 0; i--) {
        //alert(childs[i].nodeName); 
        f.removeChild(childs[i]);
    }
}
