<?php
	// api.php?url = http://news-at.zhihu.com/api/4/themes
	error_reporting(0);
	$url = $_GET['url'];
	$data = file_get_contents($url);
	echo $data;