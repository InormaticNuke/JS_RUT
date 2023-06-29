<!DOCTYPE html>
<html>
<head>
  <title>RUT Validation</title>
  <script src="scriptRUT.js"></script>
</head>
<body>
  <h1>RUT Validation</h1>
  
  <form>
    <label for="rut">Enter RUT:</label>
    <input type="text" id="rut" name="rut">
    <button type="button" onclick="validateRut()">Validate</button>
  </form>
  
  <div id="result"></div>
</body>
</html>
