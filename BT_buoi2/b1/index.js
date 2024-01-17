function Diem () {
	var name = document.getElementById('name').value 
	var number = document.getElementById('number').value 
	if (number >= 0 && number <= 100) {
		var grade
		if(number > 90) {
			grade = 'Xuất sắc';
		}else if (number > 80) {
			grade = 'Tốt';
		}else if (number > 70) {
			grade = 'Khá';
		}else if (number > 60) {
			grade = 'Trung bình';
		}else {
			grade = 'Yếu'
		}
	}else {
		grade = 'Nhập điểm từ 0 đến 100';
	}
	document.getElementById('Grade').innerHTML = name + " Số điểm là <b>"+grade+'</b>';
}