const express = require('express');
const router = express.Router();

// 사용자 정보를 담을 배열
const users = [];

// 회원가입
router.post('/register', (req, res) => {
  const { id, password, name } = req.body;
  // id, password, name이 있는지 체크한다.
  if (!id || !password || !name) {
    res.status(400).send({ message: 'id, password, name은 필수입력 사항입니다.' });
    return;
  }
  
  // id는 중복되지 않도록한다.
  const user = users.find((user) => user.id === id);
  if (user) {
    res.status(400).send({ message: '이미 존재하는 아이디입니다.' });
    return;
  }

  // 사용자를 추가한다.
  users.push(req.body);
  res.send({ message: '사용자를 등록했습니다.' });
});

module.exports = router;