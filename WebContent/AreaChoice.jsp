<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   <%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="Style.css" />
</head>
<body>
<script type="text/javascript" src="JScript.js"></script>

<form action="SelectAction">


<input class="buy_seat" type="hidden" name="buy_seat" value="<s:property value='buy_seat'/>">

<div class="TextArea">
選択エリア<br>
<div class="ChengeText_disp"></div>
<input class="ChengeText" type="hidden" value="" name="AreaChoice"><!--   disabled="disabled"> -->
</div>
<input class="submit_b" type="submit" value="送信">


<div class="Reset">リセットボタン</div>
<table>
<tr><td class="A1">A1</td><td class="A2">A2</td><td class="A3">A3</td><td class="A4">A4</td><td class="A5">A5</td></tr>
<tr><td class="B1">B1</td><td class="B2">B2</td><td class="B3">B3</td><td class="B4">B4</td><td class="B5">B5</td></tr>
<tr><td class="C1">C1</td><td class="C2">C2</td><td class="C3">C3</td><td class="C4">C4</td><td class="C5">C5</td></tr>
<tr><td class="D1">D1</td><td class="D2">D2</td><td class="D3">D3</td><td class="D4">D4</td><td class="D5">D5</td></tr>
<tr><td class="E1">E1</td><td class="E2">E2</td><td class="E3">E3</td><td class="E4">E4</td><td class="E5">E5</td></tr>
</table>

</form>
<br><br>
<br><br>

   <div class="filde">
        <div class="yoko">
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
        </div>
        <div class="yoko">
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
        </div>
        <div class="yoko">
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
        </div>
        <div class="yoko">
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
            <div class="hako"></div>
        </div>

    </div>


</body>
</html>