<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <title>JSP - Hello World</title>
</head>
<body>
<h1><%= "Hello World!" %></h1>
<br/>
<a href="hello-servlet">Hello Servlet</a>

<form action="login" method="post">
  <label for="nombre"></label>
  <input type="text" id="nombre" name="nombre">
  <label for="contra">contraseña</label>
  <input type="password" name="contra" id="contra">
  <button type="submit">enviar</button>
 </form>
</body>
</html>