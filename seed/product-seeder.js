var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser:true});

var products = [
    /*new Product({
        imgPath: "http://mblogthumb1.phinf.naver.net/MjAxNzExMjlfMTc5/MDAxNTExOTQyNTc2Mzcz.Qs8xAlB4wJSIQ-RwVkGq19u1TQBWS-8v0_udSOc-NHIg.A8LrOWH-8ERjDzrGqymr0C4dtx4PdxgMZniTjWme37kg.JPEG.unilooks09/KakaoTalk_20171129_164526900.jpg?type=w800",
        title: 'HUFS 롱패딩',
        description: '겨울용 롱패딩',
        price: 65000,
        category: 1,
        qty: 50
    }),
    new Product({
        imgPath: "https://usercontents-c.styleshare.kr/images/22355880/640x-",
        title: 'HUFS 에코백',
        description: '환경지킴이 에코백',
        price: 3000,
        category: 1,
        qty: 50
    }),
    new Product({
        imgPath: "https://scontent-sea1-1.cdninstagram.com/vp/9c9caf160d6404ef9a841fd271e863d6/5C0AF3F7/t51.2885-15/e35/s480x480/21568627_336514663440547_1071859275409653760_n.jpg",
        title: 'BOO 인형',
        description: 'HUFS 마스코트 BOO 인형',
        price: 8000,
        category: 1,
        qty: 50
    }),
    new Product({
        imgPath: "data:image/jpeg;base64,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",
        title: 'HUFS 머그컵',
        description: '아메리카노',
        price: 5000,
        category: 1,
        qty: 50
    }),*/
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '자개 손거울',
        description: '자개 무늬 손거울',
        price: 11000,
        category: 1,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '자개 자동 명함집',
        description: '자개 무늬 명함집',
        price: 12000,
        category: 1,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '자동 명함함',
        description: '자동 열림 명함함',
        price: 11000,
        category: 1,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '원형 벽시계',
        description: '원형 모양 벽시계',
        price: 17000,
        category: 2,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '글로벌 탁상시계',
        description: '지구본 모양 탁상시계',
        price: 39000,
        category: 2,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '지구본 시계',
        description: '지구본 시계',
        price: 23000,
        category: 2,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '로지텍 무선 마우스',
        description: '로지텍사의 무선 마우스',
        price: 16000,
        category: 3,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '마블 볼펜',
        description: '마블링이 돋보이는 볼펜',
        price: 7000,
        category: 3,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '외대필통',
        description: '깔끔한 학교 로고가 돋보이는 필통',
        price: 4000,
        category: 3,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '3단 완전 자동우산',
        description: '잭니클라우스 3단',
        price: 15000,
        category: 4,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '커피잔 세트',
        description: '행남 본차이나',
        price: 56000,
        category: 4,
        qty: 50
    }),
    new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: '골프공 6구 세트',
        description: 'Titleist Pro V1',
        price: 56000,
        category: 4,
        qty: 50
    }),
    /*new Product({
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljNOlvqpcCv8kNP5kwAxqPYIn9tBW5BMod6UyKbeNEQP3GMq8",
        title: 'HUFS 꼬냑',
        description: 'HUFS 기념주',
        price: 50000,
        category: 1,
        qty: 50
    })*/
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
