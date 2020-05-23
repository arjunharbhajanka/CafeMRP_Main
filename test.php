<?php
   $fn  = $_POST['fn'];
   $str = $_POST['str'];
   <script>
       console.log(<?= json_encode("abc"); ?>);
   </script>
   $file = fopen("file.txt".$fn.".record","w");
   echo fwrite($fn,$str);
   fclose($file);
?>