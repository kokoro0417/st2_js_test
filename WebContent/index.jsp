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
<%-- <script type="text/javascript" src="JScript.js"></script> --%>
<s:if test="messege!=''">
	<s:property value="messege"/>
</s:if>

<form action="LoginAction">
<input type="text" name ="buy_seat" value="A1,A2">
<input type="submit" value="送信">
</form>
<br><br>
<br><br>

</body>
</html>