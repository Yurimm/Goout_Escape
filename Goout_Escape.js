// 늦잠 자서 약속 시간에 늦을 것 같다! 어서 준비를 하고 나가야 하는데...

room = game.createRoom("room", "배경-1.png")
room2 = game.createRoom("room2","배경-1.png")
room3 = game.createRoom("room3","배경-1.png")
room4 = game.createRoom("room4","배경-1.png")
room5 = game.createRoom("room5","배경-2.png")
room6 = game.createRoom("room6","배경-3.png")
room7 = game.createRoom("room7","배경-3.png")
game.start(room)
printMessage("늦었다! 10분 안에 외출 준비를 하고 나가자")

//room1 시작

//방 이동 화살표
room.prev = room.createObject("prev", "prev.png")
room.prev.setWidth(80)
room.locateObject(room.prev, 50, 340)
room.prev.onClick = function() { 
	game.move(room2)
}

room.next = room.createObject("next", "next.png")
room.next.setWidth(80)
room.locateObject(room.next, 1230, 340)
room.next.lock()
room.next.onClick = function() { 
	if(room.next.isClosed()){
		game.move(room4)
	} else if (room.next.isLocked()){
		printMessage("먼저 씻고 싶다...")
	} else {

	}
}


//소파
room.sofa = room.createObject("sofa", "sofa-1.png")
room.sofa.setWidth(450)
room.locateObject(room.sofa, 640, 440)

//쿠션, 열쇠
room.cushion = room.createObject("cushion", "cushion.png")
room.cushion.setWidth(150)
room.locateObject(room.cushion, 550, 388)

room.bone = room.createObject("bone", "bone.png")
room.bone.setWidth(60)
room.locateObject(room.bone, 520, 400)
room.bone.hide()
room.cushion.close()
room.cushion.onClick = function() { // 클릭했을 때
	if(room.cushion.isOpened()) { // Opened 상태인 경우
		room.cushion.close() // close
		room.cushion.moveX(150)
		room.bone.hide()
	} else if(room.cushion.isClosed()) { // Closed 상태인 경우
		room.cushion.open() // open
		room.cushion.moveX(-150)
        room.bone.show()
        
	} else { 
		// do nothing
	}
}

//개껌
room.bone.onClick = function(){
	room.bone.pick()
}

//창문
room.window = room.createObject("window", "window.png")
room.window.setWidth(290)
room.locateObject(room.window, 640, 160)
room.window.onClick = function() { // 클릭했을 때
	printMessage("놀러 나가기 딱 좋은 날씨다!")
}

//테이블
room.table = room.createObject("table", "table.png")
room.table.setWidth(150)
room.locateObject(room.table, 1000, 470)

//화분
room.cactus = room.createObject("cactus", "cactus.png")
room.cactus.setWidth(55)
room.locateObject(room.cactus, 1000, 373)
room.cactus.onClick = function() { // 클릭했을 때
	printMessage("만지지 않는게 좋을 것 같다...")
}

//스탠드

room.stand = room.createObject("stand", "스탠드.png")
room.stand.setWidth(100)
room.locateObject(room.stand, 300, 370)


//room1 끝

//room2 시작

//방 이동 화살표
room2.prev = room2.createObject("prev", "prev.png")
room2.prev.setWidth(80)
room2.locateObject(room2.prev, 50, 340)
room2.prev.lock()
room2.prev.onClick = function() { 
	if(room2.prev.isClosed()){
		game.move(room3)
	} else if (room2.prev.isLocked()){
		printMessage("먼저 씻고 싶다...")
	} else {

	}
}

room2.next = room2.createObject("next", "next.png")
room2.next.setWidth(80)
room2.locateObject(room2.next, 1230, 340)
room2.next.onClick = function() { 
	game.move(room)
}

//문1, 키패드1
room2.door = room2.createObject("door", "closed_door.png")
room2.door.setWidth(230)
room2.locateObject(room2.door, 640, 270)
room2.door.lock()

room2.door.onClick = function() { 
	if(room2.door.isClosed()){ // door가 closed 상태이면
		room2.door.setSprite("opened_door.png") // 열린 문으로 변경
		room2.locateObject(room2.door, 640, 288)
		room2.door.open()
	} else if (room2.door.isOpened()){ // door가 opened 상태이면
		game.move(room5)
	} else if (room2.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다.") // 메시지 출력
	} else {
		// 아무것도 하지 않는다
	}
}

room2.keypad = room2.createObject("keypad", "key-1.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 490, 250) // 위치 변경

room2.keypad.onClick = function() {
	printMessage("파 분 빨 노")
	showKeypad("number", "4244" , function(){ // 키패드 1 - 숫자4자리
		room2.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

//화장실 팻말

room2.sign = room2.createObject("sign", "bathroom.png")
room2.sign.setWidth(70)
room2.locateObject(room2.sign, 490, 190)

//화분

room2.flower = room2.createObject("flower", "flower.png")
room2.flower.setWidth(240)
room2.locateObject(room2.flower, 950, 380)

//러그

room2.rug = room2.createObject("rug", "rug.png")
room2.rug.setWidth(500)
room2.locateObject(room2.rug, 640, 600)
room2.rug.onClick = function() { // 클릭했을 때
	printMessage("카펫 아래에는 아무 것도 없다.")
}

//room2 끝

//room3 시작

//방 이동 화살표
room3.prev = room3.createObject("prev", "prev.png")
room3.prev.setWidth(80)
room3.locateObject(room3.prev, 50, 340)
room3.prev.lock()
room3.prev.onClick = function() { 
	if (room3.prev.isClosed){
		game.move(room4)
	} else {
	}
}

room3.next = room3.createObject("next", "next.png")
room3.next.setWidth(80)
room3.locateObject(room3.next, 1230, 340)
room3.next.onClick = function() { 
	game.move(room2)
}

//옷장
room3.closet = room3.createObject("closet", "closet.png")
room3.closet.setWidth(500)
room3.locateObject(room3.closet, 660, 220)
room3.closet.onClick = function() { 
	if (room3.closet.isClosed()){
		printMessage("옷을 입었다.")
		room3.closet.open()

	} else if (room3.closet.isOpened()){
		printMessage("준비 완료! 서두르자")
	} else {

	}
}

//강아지
room3.dog = room3.createObject("dog", "dog.png")
room3.dog.setWidth(220)
room3.locateObject(room3.dog, 1000, 550)
room3.dog.onClick = function() { // 클릭했을 때
	if(game.getHandItem() == room.bone){
		showImageViewer("doggy.png", "");
	} else {
		printMessage("어딘가에 강아지 간식을 뒀는데...")
	}

}


//러그
room3.rug = room3.createObject("rug", "rug-2.png")
room3.rug.setWidth(500)
room3.locateObject(room3.rug, 400, 580)

//room3 끝


//room4 시작

room4.prev = room4.createObject("prev", "prev.png")
room4.prev.setWidth(80)
room4.locateObject(room4.prev, 50, 340)
room4.prev.onClick = function() { 
	game.move(room)
}


room4.next = room4.createObject("next", "next.png")
room4.next.setWidth(80)
room4.locateObject(room4.next, 1230, 340)
room4.next.onClick = function() { 
	game.move(room3)
}


//문2, 키패드2
room4.door = room4.createObject("door", "closed_door.png")
room4.door.setWidth(230)
room4.locateObject(room4.door, 640, 270)
room4.door.lock()

room4.door.onClick = function() { 
	if(room4.door.isClosed()){ // door가 closed 상태이면
		room4.door.setSprite("opened_door.png") // 열린 문으로 변경
		room4.locateObject(room4.door, 640, 288)
		room4.door.open()
	} else if (room4.door.isOpened()){ // door가 opened 상태이면
		game.move(room6)
	} else if (room4.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다.") // 메시지 출력
	} else {
		// 아무것도 하지 않는다
	}
}

room4.keypad = room4.createObject("keypad", "key-1.png") // 오브젝트 생성
room4.keypad.setWidth(50) // 크기 조절
room4.locateObject(room4.keypad, 490, 250) // 위치 변경

room4.keypad.onClick = function() {
	printMessage("우리집 귀염둥이 이름은?")
	showKeypad("alphabet", "DOGGY" , function(){ // 키패드 1 - 숫자4자리
		room4.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

// 시계
room4.clock = room4.createObject("clock", "clock.png")
room4.clock.setWidth(430)
room4.locateObject(room4.clock, 1000, 150)
room4.clock.onClick = function() { // 클릭했을 때
	printMessage("어서 준비하고 나가자..!!")
}

//room4 끝

//room5 시작
//문2

room5.door = room5.createObject("door", "closed_door.png")
room5.door.setWidth(230)
room5.locateObject(room5.door, 640, 270)
room5.door.lock()

room5.door.onClick = function() { 
	if(room5.door.isClosed()){ // door가 closed 상태이면
		room5.door.setSprite("opened_door.png") // 열린 문으로 변경
		room5.locateObject(room5.door, 640, 288)
		room5.door.open()
	} else if (room5.door.isOpened()){ // door가 opened 상태이면
		game.move(room2)
	} else if (room5.door.isLocked()){ // door가 locked 상태이면
		printMessage("어서 씻고 나가자.") // 메시지 출력
	} else {
		// 아무것도 하지 않는다
	}
}

//메모
room5.note = room5.createObject("note", "note.png")
room5.note.setWidth(50)
room5.locateObject(room5.note, 490, 220)

room5.note.onClick = function() {
	showImageViewer("note-2.png", ""); // 이미지 출력
}

//변기
room5.toilet = room5.createObject("toilet", "toilet.png")
room5.toilet.setWidth(300)
room5.locateObject(room5.toilet, 1150, 400)
room5.toilet.onClick = function() { 
	if(room5.toilet.isClosed()){ 
		printMessage("볼일을 봤다.")
		room5.toilet.open()
	} else {
		
	}
}

//세면대
room5.sink = room5.createObject("sink", "sink.png")
room5.sink.setWidth(290)
room5.locateObject(room5.sink, 900, 410)
room5.sink.onClick = function() { 
	if (room5.toilet.isClosed()){
		printMessage("볼일을 먼저 보자")
	} else if (room5.toilet.isOpened()){
		printMessage("손을 씻었다.")
		room5.sink.open()
	} else {

	}
}

//욕조
room5.tub = room5.createObject("tub", "tub.png")
room5.tub.setWidth(400)
room5.locateObject(room5.tub, 250, 500)
room5.tub.onClick = function() { 
	if (room5.sink.isClosed()){
		printMessage("손을 먼저 씻자")
	} else if (room5.sink.isOpened()){
		printMessage("샤워를 했다.")
		room5.tub.open()
	} else {
		
	}
}

//거울
room5.mirror = room5.createObject("mirror", "mirror.png")
room5.mirror.setWidth(200)
room5.locateObject(room5.mirror, 900, 220)
room5.mirror.onClick = function() { 
	if (room5.tub.isClosed()){
		printMessage("샤워를 먼저 하자.")
	} else if (room5.tub.isOpened()){
		printMessage("거울을 보고 머리를 말렸다. 이제 나가자!")
		room5.door.unlock()
		room.next.unlock()
		room2.prev.unlock()
	} else {
		
	}
}

//찬장
room5.bath_cupboard = room5.createObject("bath_cupboard", "bath_cupboard.png")
room5.bath_cupboard.setWidth(280)
room5.locateObject(room5.bath_cupboard, 250, 200)
//room5 끝

//room6 시작

//방 이동 화살표
room6.prev = room6.createObject("prev", "prev.png")
room6.prev.setWidth(80)
room6.locateObject(room6.prev, 50, 340)
room6.prev.onClick = function() { 
	game.move(room7)
}


//주방
room6.kitchen = room6.createObject("kitchen", "kitchen.png")
room6.kitchen.setWidth(860)
room6.locateObject(room6.kitchen, 847, 270)

//식탁
room6.dining = room6.createObject("dining", "dining_table.png")
room6.dining.setWidth(600)
room6.locateObject(room6.dining, 430, 460)

//액자
room6.frame = room6.createObject("frame", "frame.png")
room6.frame.setWidth(230)
room6.locateObject(room6.frame, 210, 200)

//메모
room6.note = room6.createObject("note", "note.png")
room6.note.setWidth(60)
room6.locateObject(room5.note, 430, 380)

room6.note.onClick = function() {
	showImageViewer("note-3.png", ""); // 이미지 출력
}

//room6 끝

//room7 시작

//방 이동 화살표

room7.next = room7.createObject("next", "next.png")
room7.next.setWidth(80)
room7.locateObject(room7.next, 1230, 340)
room7.next.onClick = function() { 
	game.move(room6)
}

//문3, 키패드3
room7.door = room7.createObject("door", "closed_door.png")
room7.door.setWidth(230)
room7.locateObject(room7.door, 640, 300)
room7.door.lock()

room7.door.onClick = function() { 
	if(room7.door.isClosed()){ // door가 closed 상태이면
		room7.door.setSprite("opened_door.png") // 열린 문으로 변경
		room7.locateObject(room7.door, 640, 318)
		room7.door.open()
	} else if (room7.door.isOpened()){ // door가 opened 상태이면
		game.clear()
	} else if (room7.door.isLocked()){ // door가 locked 상태이면
		printMessage("빨리 나가야 하는데...!") // 메시지 출력
	} else {
		// 아무것도 하지 않는다
	}
}

room7.keypad = room7.createObject("keypad", "key-1.png") // 오브젝트 생성
room7.keypad.setWidth(50) // 크기 조절
room7.locateObject(room7.keypad, 490, 250) // 위치 변경

room7.keypad.onClick = function() {
	printMessage("엄마가 또 장난을 치셨는지 비밀번호가 바뀌었다.")
	showKeypad("alphabet", "GOOUT" , function(){ // 키패드 1 - 숫자4자리
		room7.door.unlock() // door의 잠금을 연다
		printMessage("풀었다! 얼른 나가자!")
	 })
}

//러그
room7.rug = room7.createObject("rug", "rug-3.png")
room7.rug.setWidth(500)
room7.locateObject(room7.rug, 645, 600)

//테이블
room7.table = room7.createObject("table", "table-2.png")
room7.table.setWidth(340)
room7.locateObject(room7.table, 260, 440)

//책장
room7.book = room7.createObject("book", "books.png")
room7.book.setWidth(200)
room7.locateObject(room7.book, 900, 230)

room7.book2 = room7.createObject("book2", "books.png")
room7.book2.setWidth(200)
room7.locateObject(room7.book2, 1030, 230)

//포도
room7.grape = room7.createObject("grape", "grape.png")
room7.grape.setWidth(50)
room7.locateObject(room7.grape, 150, 320)

//오렌지
room7.orange = room7.createObject("orange", "orange.png")
room7.orange.setWidth(50)
room7.locateObject(room7.orange, 200, 320)

//오렌지
room7.orange2 = room7.createObject("orange2", "orange.png")
room7.orange2.setWidth(50)
room7.locateObject(room7.orange2, 250, 320)

//블루베리
room7.blueberry = room7.createObject("blueberry", "blueberry.png")
room7.blueberry.setWidth(50)
room7.locateObject(room7.blueberry, 300, 320)

//딸기
room7.strawberry = room7.createObject("strawberry", "strawberry.png")
room7.strawberry.setWidth(50)
room7.locateObject(room7.strawberry, 350, 320)

game.setClearMessage("무사히 늦지않게 약속장소에 도착할 것 같다!")
game.setGameoverMessage("결국 약속에 늦어버렸다...")
game.setTimer(600, 1, "초")