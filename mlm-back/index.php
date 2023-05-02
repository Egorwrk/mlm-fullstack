<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=UTF-8');
$answerArray = ['message' => '12313'];
print(json_encode($answerArray));

//header("HTTP/1.1 200 OK");

//phpinfo();
//$connection = mysqli_connect('mysql', 'root', 'root');
//echo "<pre/>";
//var_dump($connection);

//$connection -> query('CREATE DATABASE `test2`');
//function getData($method)
//{
//    $data = new stdClass();
//    if ($method != "GET") {
//        $data->body = json_decode(file_get_contents('php://input'));
//    }
//    $data->parameters = [];
//    $dataGet = $_GET;
//    foreach ($dataGet as $key => $value) {
//        if ($key != "q") {
//            $data->parameters[$key] = $value;
//        }
//    }
//    return $data;
//}
//
//function getMethod() {
//    return $_SERVER["REQUEST_METHOD"];
//}
//
//header("Content-type: application/json");
//$link = mysqli_connect("127.0.0.1", "username", "password", "database");
//
//if (!$link) {
//    echo "Error: can't to connect MySQL" . PHP_EOL;
//    echo "Error number" . mysqli_connect_errno() . PHP_EOL;
//    echo "Error text" . mysqli_connect_error() . PHP_EOL;
//    exit();
//}
//
//$message = [];
//$message["user"] = [];
//$res = $link -> query("SELECT id, name, login FROM users ORDER BY id ASC");
// if (!$res) {  //SQL
//     echo "Failed to complete the request: ("; // . $mysqli -> errno . ") " . $mysqli -> error;
// } else {
//     while ($row = $res -> fetch_assoc()) {
//         $message["users"][] = [
//             "id" => $row["id"],
//             "login" => $row["login"],
//             "name" => $row["name"]
//         ];
//     }
// }
//
// $url = isset($_GET["q"]) ? $_GET["q"] : "";
// $url = rtrim($url, "/");
// $urlList = explode("/", $url);
//
// $router = $urlList[0];
// $requestData = getData(getMethod());
//
// if (file_exists(realpath(dirname(__FILE__)) . "/routers" . $router . ".php")){
//    include_once "/routers" . $router . ".php";
//    route($method, $urlList, $requestData);
//} else {
//     echo "404";
// }
//
